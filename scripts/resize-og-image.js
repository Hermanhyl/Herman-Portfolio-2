import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const inputPath = join(__dirname, '../public/heroSection.png');
const outputPath = join(__dirname, '../public/og-image.jpg');

sharp(inputPath)
  .resize(1200, 630, {
    fit: 'cover',
    position: 'center'
  })
  .flatten({ background: { r: 0, g: 0, b: 0 } }) // Ensure no transparency
  .jpeg({
    quality: 85,
    progressive: true,  // Better for web
    mozjpeg: true       // Better compression
  })
  .toFile(outputPath)
  .then(() => {
    console.log('OG image created successfully: public/og-image.jpg (1200x630)');
  })
  .catch(err => {
    console.error('Error resizing image:', err);
  });
