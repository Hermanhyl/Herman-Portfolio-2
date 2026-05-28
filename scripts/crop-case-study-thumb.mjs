// Crop a case-study hero.jpg to a 4:3 thumbnail for the Work index card.
//
//   node scripts/crop-case-study-thumb.mjs Halcyon
//   node scripts/crop-case-study-thumb.mjs SoderqvistReuther
//
// Source: /public/<folder>/hero.jpg (1.60:1)
// Output: /public/<folder>/card-thumb.jpg (4:3 = 1.33:1)
//
// Strategy: take the existing hero, crop to 4:3 from the centre so the
// hero composition (logo + headline + atmosphere) stays anchored, then
// re-encode at mozjpeg q82. Smaller than the hero, sized exactly for
// the WorkCard aspect-[4/3] frame at retina.
import sharp from 'sharp';
import { join } from 'node:path';
import { existsSync, statSync } from 'node:fs';

const folder = process.argv[2];
if (!folder) {
  console.error('Usage: node scripts/crop-case-study-thumb.mjs <FolderName>');
  process.exit(1);
}

const src = join(process.cwd(), 'public', folder, 'hero.jpg');
const out = join(process.cwd(), 'public', folder, 'card-thumb.jpg');

if (!existsSync(src)) {
  console.error(`Source missing: ${src}`);
  process.exit(1);
}

const meta = await sharp(src).metadata();
console.log(`Source: ${meta.width} x ${meta.height} (ratio ${(meta.width / meta.height).toFixed(2)})`);

// Target 4:3 aspect = 1.3333. From a 1.6:1 source, crop width.
const targetW = Math.round(meta.height * (4 / 3));
const cropX = Math.round((meta.width - targetW) / 2);

await sharp(src)
  .extract({ left: cropX, top: 0, width: targetW, height: meta.height })
  .resize({ width: 1200, withoutEnlargement: true })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out);

const before = statSync(src).size;
const after = statSync(out).size;
console.log(
  `Cropped to ${targetW} x ${meta.height} (4:3), resized to 1200w.\n` +
    `${(before / 1024).toFixed(0)}KB hero → ${(after / 1024).toFixed(0)}KB thumb.\n` +
    `Saved ${out}`
);
