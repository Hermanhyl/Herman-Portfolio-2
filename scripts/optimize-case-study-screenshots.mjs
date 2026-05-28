// Downscale + compress PNG screenshots in a /public/<folder>/ directory
// to JPEG. Used by the case-study capture pipelines.
//
//   node scripts/optimize-case-study-screenshots.mjs Halcyon
//   node scripts/optimize-case-study-screenshots.mjs SoderqvistReuther
//
// Inputs: 2880x1800 PNGs (~5MB each from DPR 2 capture).
// Outputs: max 1600w mozjpeg q82 — ~100x smaller, visually
// indistinguishable. Source PNGs are deleted after the JPG is written.
import sharp from 'sharp';
import { readdirSync, statSync, unlinkSync } from 'node:fs';
import { join } from 'node:path';

const folder = process.argv[2];
if (!folder) {
  console.error('Usage: node scripts/optimize-case-study-screenshots.mjs <FolderName>');
  process.exit(1);
}

const DIR = join(process.cwd(), 'public', folder);
const files = readdirSync(DIR).filter((f) => f.endsWith('.png'));

if (files.length === 0) {
  console.log(`No .png files in public/${folder}/ to optimise.`);
  process.exit(0);
}

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
