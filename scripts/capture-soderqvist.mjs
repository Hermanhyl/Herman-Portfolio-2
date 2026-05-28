/* eslint-disable no-console */
// Captures section screenshots from the live Söderqvist & Reuther site.
// Reuses the same headless-Chrome-via-CDP approach as capture-halcyon.mjs
// but walks six React Router routes — each navigation triggers an
// AnimatePresence cross-fade transition that we need to wait through
// before each capture.

import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { setTimeout as sleep } from 'node:timers/promises';
import WebSocket from 'ws';
import { request as httpRequest } from 'node:http';

const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const BASE = 'https://adorable-llama-48b630.netlify.app';
const OUT_DIR = join(process.cwd(), 'public', 'SoderqvistReuther');
const USER_DATA = join(process.cwd(), '.tmp-chrome-profile');
const PORT = 9222;
const VIEWPORT = { width: 1440, height: 900 };

mkdirSync(OUT_DIR, { recursive: true });
mkdirSync(USER_DATA, { recursive: true });

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
  `${BASE}/`,
];
const chrome = spawn(CHROME, args, { stdio: 'ignore' });
console.log('Spawned Chrome PID', chrome.pid);

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
      /* not ready */
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

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: VIEWPORT.width,
  height: VIEWPORT.height,
  deviceScaleFactor: 2,
  mobile: false,
});

async function evalInPage(expression) {
  const { result } = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  return result.value;
}

// Wait for fonts + initial hero entrance + AnimatePresence settle
await sleep(5500);

async function capture(name) {
  // Nudge to fire any laggy useInView, then settle
  await evalInPage('window.scrollBy({ top: 60, behavior: "instant" })');
  await sleep(200);
  await evalInPage('window.scrollBy({ top: -60, behavior: "instant" })');
  await sleep(1800);
  const { data } = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });
  const path = join(OUT_DIR, `${name}.png`);
  writeFileSync(path, Buffer.from(data, 'base64'));
  console.log('  saved', path);
}

async function navigateRoute(route) {
  console.log(`\n→ ${route}`);
  // Use React Router's history pushState — fires the page transition
  // animation just like a user click would. Then wait through the
  // AnimatePresence cross-fade.
  await evalInPage(`(() => {
    const links = Array.from(document.querySelectorAll('a[href]'));
    const link = links.find(a => a.getAttribute('href') === ${JSON.stringify(route)});
    if (link) {
      link.click();
    } else {
      history.pushState({}, '', ${JSON.stringify(route)});
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
    return true;
  })()`);
  // AnimatePresence cross-fade + content scroll-reveal settle
  await sleep(2500);
  await evalInPage('window.scrollTo({ top: 0, behavior: "instant" })');
  await sleep(600);
}

// Home / hero — already on the page from initial load
await capture('hero');
await capture('section-home');

await navigateRoute('/firm');
await capture('section-firm');

await navigateRoute('/practice');
await capture('section-practice');

await navigateRoute('/people');
await capture('section-people');

await navigateRoute('/insights');
await capture('section-insights');

await navigateRoute('/contact');
await capture('section-contact');

ws.close();
chrome.kill();
console.log('\nDone.');
