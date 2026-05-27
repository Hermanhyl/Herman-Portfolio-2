/* eslint-disable no-console */
// One-off script. Drives Chrome via the existing chrome.exe (no
// Puppeteer needed) and writes section screenshots to /public/Halcyon/.
//
// IMPORTANT: the Halcyon site uses Framer Motion's useInView scroll
// triggers. After scrolling we must let the reveals complete BEFORE
// capturing or screenshots show half-animated state. The strategy:
//
//   1. Scroll into the section (smooth)
//   2. Wait for the smooth-scroll to finish (~800ms)
//   3. "Nudge" — scroll 100px down then back. This guarantees useInView
//      fires for any element that was already on-screen.
//   4. Wait for Framer Motion to finish (most reveals are 0.8-1.5s)
//   5. Wait once more for animations to settle (long ambient motion
//      can confuse the still-frame moment too — the longer pause helps)
//   6. Use page.evaluate to verify any inline opacity:0 elements have
//      finished animating in (opacity > 0.95) before capturing.

import { spawn } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';
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

await send('Page.enable');
await send('Runtime.enable');
await send('Emulation.setDeviceMetricsOverride', {
  width: VIEWPORT.width,
  height: VIEWPORT.height,
  deviceScaleFactor: 2,
  mobile: false,
});

// Generous initial settle — page font loads, hero entrance animations,
// marquee starts, etc.
await sleep(6000);

async function evalInPage(expression) {
  const { result } = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  });
  return result.value;
}

// Wait until no on-screen element has its in-flight opacity below 0.95.
// Captures the "did all reveals finish" moment. Returns the actual count
// of un-revealed elements observed so we can log progress.
async function waitForRevealsToSettle({ maxMs = 6000, intervalMs = 250 } = {}) {
  const deadline = Date.now() + maxMs;
  let lastCount = -1;
  while (Date.now() < deadline) {
    const count = await evalInPage(`(() => {
      const els = document.querySelectorAll('main *, section *');
      let n = 0;
      for (const el of els) {
        if (!(el instanceof Element)) continue;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) continue;
        const cs = window.getComputedStyle(el);
        const op = parseFloat(cs.opacity);
        if (!isNaN(op) && op < 0.95 && cs.visibility !== 'hidden') {
          // Skip ambient pulses / marquees that legitimately oscillate.
          // We look for elements with transform translateY that's mid-animation.
          const transform = cs.transform;
          if (transform && transform !== 'none') n++;
        }
      }
      return n;
    })()`);
    if (count !== lastCount) {
      console.log(`  in-flight elements: ${count}`);
      lastCount = count;
    }
    if (count === 0) return;
    await sleep(intervalMs);
  }
  console.log('  (settle timeout reached, capturing anyway)');
}

async function captureSection({ name, scrollScript }) {
  console.log(`\n→ ${name}`);
  // 1. Scroll the section into view
  await evalInPage(scrollScript);
  // 2. Let smooth scroll finish
  await sleep(1200);
  // 3. Nudge to force any laggy useInView to fire
  await evalInPage('window.scrollBy({ top: 80, behavior: "instant" })');
  await sleep(250);
  await evalInPage('window.scrollBy({ top: -80, behavior: "instant" })');
  // 4. Generous fixed wait for the long Framer reveals
  await sleep(2500);
  // 5. Adaptive wait — verify no element is still animating in
  await waitForRevealsToSettle();
  // 6. Capture
  const { data } = await send('Page.captureScreenshot', {
    format: 'png',
    captureBeyondViewport: false,
  });
  const path = join(OUT_DIR, `${name}.png`);
  writeFileSync(path, Buffer.from(data, 'base64'));
  console.log(`  saved ${path}`);
}

// Inspect the page once so we know the real layout heights, then scroll
// to absolute Y offsets — far more reliable than nav clicks for a SPA
// whose scroll behavior we can't predict.
const layout = await evalInPage(`(() => {
  const doc = document.documentElement;
  const sections = Array.from(document.querySelectorAll('section, [data-section]'));
  return {
    pageHeight: doc.scrollHeight,
    viewportHeight: window.innerHeight,
    sectionOffsets: sections.map(s => ({
      top: s.getBoundingClientRect().top + window.scrollY,
      label: (s.getAttribute('aria-label') || s.getAttribute('data-section') || s.id || s.textContent.slice(0, 40)).trim(),
    })),
  };
})()`);
console.log('Page layout:', JSON.stringify(layout.sectionOffsets, null, 2));
console.log(`Page height: ${layout.pageHeight}px, viewport: ${layout.viewportHeight}px`);

// Capture: ABOVE-THE-FOLD HERO (folio cover)
await captureSection({
  name: 'hero',
  scrollScript: 'window.scrollTo({ top: 0, behavior: "instant" })',
});

// Capture: section-hero — alias of hero, used in the tour's section I
await captureSection({
  name: 'section-hero',
  scrollScript: 'window.scrollTo({ top: 0, behavior: "instant" })',
});

// Find each section by inspecting its visible text content. Halcyon's
// sections are h2-driven with characteristic copy.
async function scrollToTextOffset(matchSubstring, fallbackOffset) {
  const found = await evalInPage(`(() => {
    const all = Array.from(document.querySelectorAll('h1, h2, h3, h4, p'));
    const target = all.find(el => el.textContent.toLowerCase().includes(${JSON.stringify(matchSubstring.toLowerCase())}));
    if (!target) return null;
    const rect = target.getBoundingClientRect();
    // Scroll so the heading sits ~20% from top of viewport
    return Math.max(0, rect.top + window.scrollY - window.innerHeight * 0.2);
  })()`);
  const y = found != null ? found : fallbackOffset;
  await evalInPage(`window.scrollTo({ top: ${y}, behavior: "instant" })`);
}

// section-about → "We design slowly, by hand"
await captureSection({
  name: 'section-about',
  scrollScript: `(async () => {
    const all = Array.from(document.querySelectorAll('h1, h2, h3, h4, p'));
    const target = all.find(el => el.textContent.toLowerCase().includes('we design') || el.textContent.toLowerCase().includes('slowly'));
    const y = target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.25) : window.innerHeight;
    window.scrollTo({ top: y, behavior: 'instant' });
    return true;
  })()`,
});

// section-work → "A small catalogue of recent works"
await captureSection({
  name: 'section-work',
  scrollScript: `(async () => {
    const all = Array.from(document.querySelectorAll('h1, h2, h3'));
    const target = all.find(el => el.textContent.toLowerCase().includes('catalogue') || el.textContent.toLowerCase().includes('selected work'));
    const y = target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.2) : window.innerHeight * 2;
    window.scrollTo({ top: y, behavior: 'instant' });
    return true;
  })()`,
});

// section-practice → "Five disciplines, held in tension"
await captureSection({
  name: 'section-practice',
  scrollScript: `(async () => {
    const all = Array.from(document.querySelectorAll('h1, h2, h3'));
    const target = all.find(el => el.textContent.toLowerCase().includes('five disciplines') || el.textContent.toLowerCase().includes('practice'));
    const y = target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.2) : window.innerHeight * 4;
    window.scrollTo({ top: y, behavior: 'instant' });
    return true;
  })()`,
});

// section-contact → "Let us correspond"
await captureSection({
  name: 'section-contact',
  scrollScript: `(async () => {
    const all = Array.from(document.querySelectorAll('h1, h2, h3'));
    const target = all.find(el => el.textContent.toLowerCase().includes('correspond') || el.textContent.toLowerCase().includes('let us'));
    const y = target ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - window.innerHeight * 0.2) : document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({ top: y, behavior: 'instant' });
    return true;
  })()`,
});

ws.close();
chrome.kill();
console.log('\nDone.');
