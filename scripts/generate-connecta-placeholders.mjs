// Generate labeled placeholder images for the Connecta case study so
// the page builds and lays out correctly before Herman drops in the
// real before/after screenshots. Each placeholder is stamped with its
// intended purpose and target dimensions so it's obvious what to
// replace it with.
//
//   node scripts/generate-connecta-placeholders.mjs
//
// Replace each file in public/Connecta/ with the real asset at the
// same dimensions. The before/after pair MUST share the exact same
// crop/framing or the slider looks broken.
import sharp from 'sharp';
import { join } from 'node:path';
import { mkdirSync } from 'node:fs';

const outDir = join(process.cwd(), 'public', 'Connecta');
mkdirSync(outDir, { recursive: true });

// Warm-ink palette so placeholders don't clash with the site.
const INK = '#1a1612';
const INK2 = '#25201a';
const BONE = '#f5efe6';
const ACCENT = '#ff5c2c';

function placeholderSVG(w, h, title, sub) {
  return Buffer.from(`
    <svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${INK}"/>
          <stop offset="100%" stop-color="${INK2}"/>
        </linearGradient>
      </defs>
      <rect width="${w}" height="${h}" fill="url(#g)"/>
      <rect x="12" y="12" width="${w - 24}" height="${h - 24}" fill="none"
            stroke="${ACCENT}" stroke-width="3" stroke-dasharray="14 10" opacity="0.6"/>
      <text x="50%" y="46%" fill="${BONE}" font-family="Georgia, serif"
            font-size="${Math.round(w / 16)}" font-style="italic"
            text-anchor="middle" dominant-baseline="middle">${title}</text>
      <text x="50%" y="60%" fill="${ACCENT}" font-family="monospace"
            font-size="${Math.round(w / 34)}" text-anchor="middle"
            dominant-baseline="middle" letter-spacing="2">${sub}</text>
      <text x="50%" y="${h - 28}" fill="${BONE}" opacity="0.5" font-family="monospace"
            font-size="${Math.round(w / 44)}" text-anchor="middle">${w} x ${h} · PLACEHOLDER</text>
    </svg>`);
}

const targets = [
  { file: 'card-thumb.jpg', w: 1200, h: 900, title: 'Connecta', sub: 'WORK CARD THUMB (4:3)' },
  { file: 'hero.jpg', w: 1600, h: 1000, title: 'Connecta', sub: 'CASE STUDY HERO' },
  { file: 'before.jpg', w: 1440, h: 1080, title: 'Forsiden FØR', sub: 'BEFORE — SAME CROP AS AFTER' },
  { file: 'after.jpg', w: 1440, h: 1080, title: 'Forsiden ETTER', sub: 'AFTER — SAME CROP AS BEFORE' },
  { file: 'approach.jpg', w: 1400, h: 900, title: 'Tjenester / FAQ', sub: 'APPROACH SECTION IMAGE' },
];

for (const { file, w, h, title, sub } of targets) {
  const out = join(outDir, file);
  await sharp(placeholderSVG(w, h, title, sub))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(out);
  console.log(`wrote Connecta/${file} (${w}x${h})`);
}
