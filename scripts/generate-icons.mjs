// One-off: upscale public/Favicon.png to the icon sizes a modern
// site needs for PWA + iOS bookmark behaviour. Source is 31x31
// (low-res), upscaled with nearest-neighbour to keep edges crisp
// rather than blurry. Run with `node scripts/generate-icons.mjs`.
//
// Outputs:
//   public/apple-touch-icon.png   180x180 (iOS bookmark)
//   public/icon-192.png           192x192 (PWA manifest)
//   public/icon-512.png           512x512 (PWA manifest)
//
// When a higher-res source becomes available, replace
// public/Favicon.png with it (ideally 512x512+) and re-run.
import sharp from 'sharp';
import { join } from 'node:path';

const src = join(process.cwd(), 'public', 'Favicon.png');
const targets = [
  { out: 'apple-touch-icon.png', size: 180 },
  { out: 'icon-192.png', size: 192 },
  { out: 'icon-512.png', size: 512 },
];

for (const { out, size } of targets) {
  const dest = join(process.cwd(), 'public', out);
  await sharp(src)
    .resize(size, size, { kernel: sharp.kernel.nearest, fit: 'cover' })
    .png({ compressionLevel: 9 })
    .toFile(dest);
  console.log(`wrote ${out} (${size}x${size})`);
}
