/**
 * Script to generate placeholder SVG images for Arabian Nights adventure
 * Run with: npx tsx scripts/generatePlaceholders.ts
 */

import * as fs from 'fs';
import * as path from 'path';

const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets', 'arabian-nights');

// Ensure directories exist
function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

// Generate SVG placeholder
function generateSVG(
  width: number,
  height: number,
  text: string,
  bgColor: string = '#2a1a4a',
  textColor: string = '#d4af37'
): string {
  const lines = text.split('\n');
  const lineHeight = 30;
  const startY = height / 2 - ((lines.length - 1) * lineHeight) / 2;

  const textElements = lines
    .map(
      (line, i) =>
        `<text x="50%" y="${startY + i * lineHeight}" text-anchor="middle" fill="${textColor}" font-size="24" font-family="Arial, sans-serif" font-weight="bold">${line}</text>`
    )
    .join('\n    ');

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="${bgColor}"/>
  <text x="50%" y="30" text-anchor="middle" fill="${textColor}" font-size="14" font-family="Arial, sans-serif" opacity="0.5">PLACEHOLDER</text>
  ${textElements}
  <rect x="10" y="10" width="${width - 20}" height="${height - 20}" fill="none" stroke="${textColor}" stroke-width="3" stroke-dasharray="10,5" opacity="0.3"/>
</svg>`;
}

// Asset definitions
const assets = {
  // Cover and main images
  'cover.png': { width: 800, height: 1200, text: 'Arabian Nights\nCover Art' },

  // Backgrounds
  'backgrounds/palace-exterior.jpg': { width: 1920, height: 1080, text: 'Palace Exterior\nBackground' },
  'backgrounds/throne-room.jpg': { width: 1920, height: 1080, text: 'Throne Room\nBackground' },
  'backgrounds/city-marketplace.jpg': { width: 1920, height: 1080, text: 'City Marketplace\nBackground' },
  'backgrounds/library.jpg': { width: 1920, height: 1080, text: 'Library\nBackground' },
  'backgrounds/chamber.jpg': { width: 1920, height: 1080, text: 'Chamber\nBackground' },
  'backgrounds/bedchamber.jpg': { width: 1920, height: 1080, text: 'Bedchamber\nBackground' },
  'backgrounds/palace-garden.jpg': { width: 1920, height: 1080, text: 'Palace Garden\nBackground' },
  'backgrounds/starry-night.jpg': { width: 1920, height: 1080, text: 'Starry Night\nBackground' },

  // Scene images
  'scenes/ancient-book.png': { width: 600, height: 400, text: 'Ancient Book' },
  'scenes/sultan-shahryar.png': { width: 600, height: 400, text: 'Sultan Shahryar' },
  'scenes/grieving-families.png': { width: 600, height: 400, text: 'Grieving Families' },
  'scenes/scheherazade.png': { width: 600, height: 400, text: 'Scheherazade' },
  'scenes/scheherazade-dinarzad.png': { width: 600, height: 400, text: 'Scheherazade &\nDinarzad' },
  'scenes/first-story.png': { width: 600, height: 400, text: 'First Story' },
  'scenes/sultan-thinking.png': { width: 600, height: 400, text: 'Sultan Thinking' },
  'scenes/sultan-redeemed.png': { width: 600, height: 400, text: 'Sultan Redeemed' },
  'scenes/book-legacy.png': { width: 600, height: 400, text: 'Book Legacy' },
};

// Generate all placeholders
console.log('Generating placeholder assets for Arabian Nights...\n');

Object.entries(assets).forEach(([filename, { width, height, text }]) => {
  const filepath = path.join(ASSETS_DIR, filename);
  const dir = path.dirname(filepath);

  ensureDir(dir);

  const svgContent = generateSVG(width, height, text);
  const svgFilepath = filepath.replace(/\.(png|jpg|jpeg)$/, '.svg');

  fs.writeFileSync(svgFilepath, svgContent);
  console.log(`✓ Created: ${path.relative(process.cwd(), svgFilepath)}`);
});

console.log('\n✅ All placeholder assets generated successfully!');
console.log('\n📝 Remember to update the adventure file to use .svg extensions instead of .png/.jpg');
console.log('   or replace these placeholders with actual artwork later.\n');
