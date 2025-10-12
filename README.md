# Imsie

Interactive Adventures in History and Literature - An educational platform that takes students through immersive story-driven learning experiences.

## Overview

Imsie is a web-based educational platform where students explore history and literature through interactive adventures. Each adventure is a self-contained learning experience with:

- **Narrative-driven content**: Learn through engaging stories
- **Interactive mini-games**: Timeline ordering, primary source analysis, character dialogues, and more
- **Integrated quizzes**: Test knowledge at chapter ends and adventure completion
- **Progress tracking**: Save progress locally with export/import capability
- **Optimized performance**: Asset preloading and caching for smooth gameplay

## Current Adventures

### Arabian Nights
Journey through the tale of Scheherazade and learn about:
- The framing story of One Thousand and One Nights
- Literary techniques like framing devices and cliffhangers
- The power of storytelling as a tool for transformation
- Cultural and historical context of Middle Eastern folklore

**Status**: Chapter 1 complete (30-35 minutes)

### Coming Soon
- Dante's Inferno

## Technology Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Storage**: IndexedDB (via idb library)
- **Hosting**: GitHub Pages

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Imsie.git
cd Imsie
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Open your browser to `http://localhost:5173`

## Project Structure

```
Imsie/
├── src/
│   ├── adventures/           # Adventure content
│   │   ├── arabian-nights/
│   │   │   ├── index.ts      # Adventure definition
│   │   │   ├── *_assets.md   # Asset requirements
│   │   │   └── *_lyrics.md   # Music lyrics (if needed)
│   │   └── adventure-registry.ts
│   ├── components/
│   │   ├── adventure-engine/ # Core gameplay components
│   │   ├── mini-games/       # Scene type components
│   │   ├── quiz-system/      # Quiz components
│   │   └── ui/               # UI components
│   ├── services/             # Core services
│   │   ├── progressManager.ts
│   │   └── assetLoader.ts
│   └── types/                # TypeScript definitions
├── public/
│   └── assets/              # Images, audio, etc.
└── scripts/                 # Utility scripts
```

## Creating New Adventures

1. Create a new directory in `src/adventures/`
2. Define your adventure using the TypeScript types
3. Add to the adventure registry
4. Create placeholder assets using the generation script
5. Document required assets in `[adventure]_assets.md`

See `src/adventures/arabian-nights/index.ts` for a complete example.

## Asset Management

### Generating Placeholder Assets

```bash
npx tsx scripts/generatePlaceholders.ts
```

This creates SVG placeholders for all required images. Replace these with actual artwork later.

### Asset Requirements

Each adventure should have an `*_assets.md` file documenting:
- Required images (dimensions, descriptions, style notes)
- Music requirements (style, instruments, mood)
- Color palettes
- Font specifications

## Building and Deployment

### Local Build

```bash
npm run build
```

The built files will be in the `dist/` directory.

### GitHub Pages Deployment

The project is configured to auto-deploy to GitHub Pages on push to the `main` branch.

#### Setup Steps:

1. Push your code to GitHub
2. Go to Settings → Pages
3. Under "Build and deployment", select "GitHub Actions"
4. The workflow will automatically build and deploy your site

Your site will be available at: `https://yourusername.github.io/Imsie/`

## Progress Management

### Student Features

- **Auto-save**: Progress is automatically saved to browser storage
- **Export Progress**: Download progress as JSON file
- **Import Progress**: Upload progress JSON to continue on another device

### For Developers

Progress data includes:
- Completed scenes and chapters
- Quiz scores and answers
- Learning points encountered
- Play time statistics
- Player choices

## Browser Compatibility

Imsie works in modern browsers that support:
- ES6+ JavaScript
- IndexedDB
- CSS Grid and Flexbox

Tested on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Development

### Adding New Scene Types

1. Define the scene type in `src/types/adventure.ts`
2. Create a component in `src/components/mini-games/`
3. Add to the SceneRenderer switch statement
4. Update documentation

### Adding New Adventures

See the Arabian Nights adventure as a template. Each adventure should:
- Have clear learning objectives
- Include learning points throughout
- End chapters and adventures with quizzes
- Target the 16-20 age range
- Be 30-45 minutes per chapter

## Known Issues

- Scene type implementations incomplete (only Narrative scenes fully implemented)
- Quiz matching question type not yet implemented
- No audio playback controls yet

## Roadmap

- [ ] Complete all scene type implementations
- [ ] Add audio playback controls
- [ ] Implement achievement system
- [ ] Add accessibility features (screen reader support, keyboard navigation)
- [ ] Create teacher dashboard for progress tracking
- [ ] Add more adventures (Dante's Inferno, Ancient Rome, Shakespeare, etc.)

## License

[Add your license here]

## Acknowledgments

- Arabian Nights content based on public domain translations
- Designed for educational use
