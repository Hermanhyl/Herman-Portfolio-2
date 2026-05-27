/* eslint-disable no-console */
// One-off script. Drives Chrome via the existing chrome.exe (no
// Puppeteer needed) and writes section screenshots to /public/Halcyon/.
// We open headless Chrome with remote debugging, attach via the
// DevTools Protocol over plain WebSocket, navigate, scroll, and
// capture each section as PNG.

import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import WebSocket from 'ws';
import { request as httpRequest } from 'node:http';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const URL = 'https://halcyonateliershowcase.netlify.app/';
const OUT_DIR = join(process.cwd(), 'public', 'Halcyon');
const USER_DATA = join(process.cwd(), '.tmp-chrome-profile');
const PORT = 9222;
const VIEWPORT = { width: 1440, height: 900 };

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(USER_DATA, { recursive: true });

// Launch headless Chrome
const args = [
  '--headless=new',
  `--remote-debugging-port=${PORT}`,
  `--user-data-dir=${USER_DATA}`,
  `--window-size=${VIEWPORT.width},${VIEWPORT.height}`,
  '--hide-scrollbars',
  '--no-first-run',
  '--no-default-browser-check',
  '--disable-default-apps',
  '--disable-gpu',
  URL,
];
const chrome = spawn(CHROME, args, { stdio: 'ignore' });
console.log('Spawned Chrome PID', chrome.pid);

// Discover the page WebSocket
async function findTarget() {
  for (let i = 0; i < 30; i++) {
    try {
      const json = await new Promise((resolve, reject) => {
        const req = httpRequest({ host: '127.0.0.1', port: PORT, path: '/json' }, (res) => {
          let body = '';
          res.on('data', (c) => (body += c));
          res.on('end', () => resolve(JSON.parse(body)));
        });
        req.on('error', reject);
        req.end();
      });
      const target = json.find((t) => t.type === 'page' && t.webSocketDebuggerUrl);
      if (target) return target.webSocketDebuggerUrl;
    } catch {
      /* not ready yet */
    }
    await sleep(500);
  }
  throw new Error('Chrome did not expose a debugging target in time');
}

const wsUrl = await findTarget();
console.log('Connected DevTools target');

const ws = new WebSocket(wsUrl);
await new Promise((r) => ws.once('open', r));

let nextId = 1;
const pending = new Map();
ws.on('message', (data) => {
  const msg = JSON.parse(data);
  if (msg.id && pending.has(msg.id)) {
    const { resolve, reject } = pending.get(msg.id);
    pending.delete(msg.id);
    if (msg.error) reject(new Error(msg.error.message));
    else resolve(msg.result);
  }
});

function send(method, params = {}) {
  return new Promise((resolve, reject) => {
    const id = nextId++;
    pending.set(id, { resolve, reject });
    ws.send(JSON.stringify({ id, method, params }));
  });
}

// Wait for the page to settle
await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: VIEWPORT.width,
  height: VIEWPORT.height,
  deviceScaleFactor: 2,
  mobile: false,
});

// Let load complete + initial animations settle
await sleep(4000);

async function evalInPage(expression) {
  const { result } = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  return result.value;
}

async function captureSection({ name, beforeScript }) {
  if (beforeScript) {
    await evalInPage(beforeScript);
    await sleep(800);
  }
  const { data } = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });
  const path = join(OUT_DIR, `${name}.png`);
  writeFileSync(path, Buffer.from(data, 'base64'));
  console.log('Saved', path);
}

// Heuristics:
// - hero = no scroll
// - section-hero (folio cover) = same as hero, just first 100vh
// - section-about = scroll to where 'About' anchor would be (or visual cue: signature)
// - section-work = WORK anchor
// - section-practice = PRACTICE anchor
// - section-contact = CONTACT anchor (bottom of page)
//
// We use the nav links since they're the actual scroll targets defined
// by the Halcyon site.

await captureSection({ name: 'hero', beforeScript: 'window.scrollTo(0, 0)' });

// Click each nav link by its visible text, wait for the smooth scroll
await captureSection({
  name: 'section-about',
  beforeScript: `(async () => {
    const links = Array.from(document.querySelectorAll('a, button'));
    const aboutHeading = Array.from(document.querySelectorAll('h2,h3'))
      .find(el => el.textContent.toLowerCase().includes('about') || el.textContent.toLowerCase().includes('atelier'));
    if (aboutHeading) aboutHeading.scrollIntoView({ behavior: 'instant', block: 'start' });
    else window.scrollTo(0, ${VIEWPORT.height});
    return true;
  })()`,
});

await captureSection({
  name: 'section-work',
  beforeScript: `(async () => {
    const workLink = Array.from(document.querySelectorAll('a, button')).find(el => el.textContent.trim().toLowerCase() === 'work');
    if (workLink) workLink.click();
    else window.scrollTo(0, ${VIEWPORT.height * 2});
    return true;
  })()`,
});

await captureSection({
  name: 'section-practice',
  beforeScript: `(async () => {
    const link = Array.from(document.querySelectorAll('a, button')).find(el => el.textContent.trim().toLowerCase() === 'practice');
    if (link) link.click();
    else window.scrollTo(0, ${VIEWPORT.height * 4});
    return true;
  })()`,
});

await captureSection({
  name: 'section-contact',
  beforeScript: `(async () => {
    const link = Array.from(document.querySelectorAll('a, button')).find(el => el.textContent.trim().toLowerCase() === 'contact');
    if (link) link.click();
    else window.scrollTo(0, document.documentElement.scrollHeight - ${VIEWPORT.height});
    return true;
  })()`,
});

// Also capture section-hero as alias of hero so the case-study page's
// first tour entry has its own asset.
await captureSection({ name: 'section-hero', beforeScript: 'window.scrollTo(0, 0)' });

ws.close();
chrome.kill();
console.log('Done.');
