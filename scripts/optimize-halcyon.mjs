// Downscale + compress the captured Halcyon screenshots.
// Inputs are 2880x1800 PNGs (~5MB each). Output JPEG, max 1600w,
// quality 82 — visually indistinguishable but ~10x smaller.
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const DIR = join(process.cwd(), 'public', 'Halcyon');
const files = readdirSync(DIR).filter((f) => f.endsWith('.png'));

for (const file of files) {
  const inPath = join(DIR, file);
  const outPath = inPath.replace(/\.png$/, '.jpg');
  await sharp(inPath)
    .resize({ width: 1600, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outPath);
  const before = statSync(inPath).size;
  const after = statSync(outPath).size;
  unlinkSync(inPath);
  console.log(`${file}: ${(before / 1024).toFixed(0)}KB → ${(after / 1024).toFixed(0)}KB`);
}
