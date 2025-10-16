# File Structure Setup

**Version:** 1.0
**Last Updated:** October 2025

This guide walks you through creating the initial file and directory structure for a new Imsie adventure.

---

## Purpose

Before writing any content, you need to establish a consistent file structure that:
- Organizes chapters, quizzes, and configuration files
- Follows Imsie conventions for easy maintenance
- Enables proper TypeScript imports and exports
- Separates concerns (content, theme, assets)

---

## Directory Structure

Create the following structure in `src/adventures/`:

```
src/adventures/your-adventure-name/
├── index.ts                          # Main adventure export
├── theme.ts                          # Theme configuration
├── chapters/                         # Chapter definitions
│   ├── chapter-1-name.ts
│   ├── chapter-2-name.ts
│   └── ...
├── quizzes/                         # Quiz definitions
│   ├── chapter-1-quiz.ts
│   ├── chapter-2-quiz.ts
│   └── final-quiz.ts
├── your-adventure-name_assets.md    # Asset documentation
└── ADVENTURE_OUTLINE.md             # Planning document
```

---

## Step-by-Step Setup

### Step 1: Create Adventure Directory

```bash
cd src/adventures/
mkdir your-adventure-name
cd your-adventure-name
```

Replace `your-adventure-name` with your adventure's actual name (e.g., `arabian-nights`, `greek-mythology`, `beowulf`).

**Naming conventions:**
- Use lowercase
- Use hyphens to separate words
- Keep it concise (2-3 words max)
- Make it descriptive

### Step 2: Create Subdirectories

```bash
mkdir chapters
mkdir quizzes
```

### Step 3: Create Placeholder Files

Create the following files with the templates below:

---

## File Templates

### `theme.ts`

```typescript
import type { AdventureTheme } from '../../types';

export const yourAdventureTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // TODO: Update these colors
  secondaryColor: '#d4af37',
  fontFamily: '"Crimson Text", serif',
  backgroundMusic: '/assets/your-adventure/music/theme.mp3',
};

export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
  // Add more tracks as needed
];
```

**Customization:**
- **primaryColor:** Main theme color (dark backgrounds, headers)
- **secondaryColor:** Accent color (highlights, buttons)
- **fontFamily:** Google Font for text display
- **backgroundMusic:** Path to main theme music file

See Phase 4 of the full authoring guide for color palette and font selection guidance.

---

### `index.ts`

```typescript
import type { Adventure } from '../../types';
import { yourAdventureTheme, musicPlaylist } from './theme';

export const yourAdventure: Adventure = {
  id: 'your-adventure-id',
  title: 'Your Adventure Title',
  description: 'Brief description of your adventure (1-2 sentences)',
  estimatedTime: 180,  // minutes (3 hours)
  coverArt: '/assets/your-adventure/cover.png',

  theme: yourAdventureTheme,
  musicPlaylist,

  chapters: [
    // Will add chapters here as you create them
  ],

  finalQuiz: undefined,  // Will add after all chapters are complete
};
```

**Customization:**
- **id:** Unique identifier (use same as folder name)
- **title:** Display title shown to users
- **description:** 1-2 sentence summary for adventure selection screen
- **estimatedTime:** Total estimated completion time in minutes
- **coverArt:** Path to cover image (800x1200px)

---

### `ADVENTURE_OUTLINE.md`

```markdown
# [Adventure Title] - Detailed Outline

## Adventure Overview
- **Title:** [Full title]
- **Estimated Duration:** [X hours]
- **Educational Level:** [Grade/age range]
- **Primary Subjects:** [Literature, History, etc.]

## Learning Objectives
1. [Adventure-wide objective 1]
2. [Adventure-wide objective 2]
3. [Adventure-wide objective 3]
4. [Adventure-wide objective 4]
5. [Adventure-wide objective 5]

## Chapter Breakdown

### Chapter 1: [Title]
**Learning Objectives:**
- [Chapter-specific objective 1]
- [Chapter-specific objective 2]
- [Chapter-specific objective 3]

**Scene Flow:** (8-15 scenes)
1. [Scene 1 type] - [Brief description]
2. [Scene 2 type] - [Brief description]
3. [Scene 3 type] - [Brief description]
...

**Key Themes:** [Themes covered in this chapter]
**Quiz Topics:** [What will be tested]

### Chapter 2: [Title]
...

[Continue for all chapters]

## Asset Requirements Summary
- Cover art: 1
- Background images: [X]
- Scene illustrations: [X]
- Character portraits: [X]
- Maps: [X]
- Music tracks: [X]

## Production Timeline
- Planning: [dates]
- Asset creation: [dates]
- Content writing: [dates]
- Testing: [dates]
- Launch: [date]
```

This file serves as your planning document and roadmap throughout development.

---

### `your-adventure-name_assets.md`

```markdown
# [Adventure Title] - Asset Requirements

## Overview

**Visual Style:** [Describe your artistic direction]
- Art style reference: [e.g., "Medieval manuscript illumination"]
- Inspiration: [Artists, periods, or works]
- Tone: [Mystical, dramatic, historical, etc.]

**Color Palette:**
- Primary: #hexcode ([color name])
- Secondary: #hexcode ([color name])
- Accents: #hexcode, #hexcode

**Prompt Format:**
All image generation prompts follow this structure:
- **Tone prefix:** "[Style/era description]:"
- **Content description:** [Subject, composition, mood]
- **Style suffix:** [Consistent ending for all prompts]

## Cover Art

### Main Cover Image
- **File:** `public/assets/[adventure-name]/cover.png`
- **Dimensions:** 800x1200px
- **Format:** PNG
- **Description:** [What the cover depicts]
- **Prompt:**
```
[Your prompt here] --ar 2:3
```
- **URL/Status:** [Link or generation status]

[Add sections for backgrounds, scene illustrations, portraits, maps, music]

## Asset Checklist

- [ ] Cover art created
- [ ] All backgrounds generated (X/X)
- [ ] All scene illustrations created (X/X)
- [ ] All character portraits created (X/X)
- [ ] Maps created (X/X)
- [ ] Music composed/selected
- [ ] All assets optimized for web
- [ ] All assets uploaded to correct paths
```

See Phase 2 of the full authoring guide for complete asset documentation structure.

---

## Verification Checklist

After creating your file structure, verify:

### Directory Structure
- [ ] Main adventure folder created in `src/adventures/`
- [ ] `chapters/` subdirectory exists
- [ ] `quizzes/` subdirectory exists

### Files Created
- [ ] `index.ts` exists with placeholder Adventure object
- [ ] `theme.ts` exists with placeholder theme
- [ ] `ADVENTURE_OUTLINE.md` exists for planning
- [ ] `[adventure-name]_assets.md` exists for asset documentation

### Customization
- [ ] Adventure ID matches folder name
- [ ] Title and description are descriptive
- [ ] Asset paths reference correct adventure folder name
- [ ] Color scheme placeholder values present
- [ ] Font family specified

### TypeScript
- [ ] No import errors when opening files in IDE
- [ ] Adventure type matches `Adventure` interface
- [ ] Theme type matches `AdventureTheme` interface

---

## Next Steps

Once your file structure is set up:

1. **Complete the outline** - Fill in `ADVENTURE_OUTLINE.md` with your chapter plans
2. **Plan assets** - Complete `[adventure-name]_assets.md` with asset requirements
3. **Configure theme** - Update colors and fonts in `theme.ts`
4. **Start Chapter 1** - Create `chapters/chapter-1-[name].ts`

**See:**
- Phase 1 (Planning) in full authoring guide for outline creation
- Phase 2 (Asset Planning) for asset documentation
- Phase 4 (Theme Configuration) for theme customization
- Phase 5 (Chapter Development) for content creation

---

## Example: Creating "Greek Mythology" Adventure

```bash
# Navigate to adventures directory
cd src/adventures/

# Create adventure folder
mkdir greek-mythology
cd greek-mythology

# Create subdirectories
mkdir chapters quizzes

# Create files (then populate with templates above)
touch index.ts
touch theme.ts
touch ADVENTURE_OUTLINE.md
touch greek-mythology_assets.md
```

Then edit each file:
- `index.ts`: Set id to `'greek-mythology'`, title to `'Greek Mythology'`
- `theme.ts`: Choose colors (e.g., deep blue for sky, gold for divine)
- Asset paths: Update to `/assets/greek-mythology/...`

---

## Common Mistakes to Avoid

❌ **Don't:**
- Use spaces in folder names (use hyphens instead)
- Forget to create both `chapters/` and `quizzes/` subdirectories
- Mix up adventure name in different files (be consistent)
- Use absolute paths for imports (use relative paths: `../../types`)

✅ **Do:**
- Keep folder names lowercase with hyphens
- Ensure all IDs are unique and consistent
- Match asset paths to actual folder structure
- Follow naming conventions from existing adventures

---

## Troubleshooting

**Import errors in `index.ts`?**
- Check that `../../types` path is correct relative to your file location
- Verify `src/types/adventure.ts` exists

**TypeScript errors on Adventure object?**
- Ensure all required fields are present (id, title, description, etc.)
- Check that theme import matches exported name in `theme.ts`

**Asset paths not resolving?**
- Verify paths start with `/assets/` (not `./assets/` or `assets/`)
- Ensure adventure folder name in path matches actual folder

---

**Related Documentation:**
- Full authoring guide: `ADVENTURE_AUTHORING_GUIDE_ORIGINAL.md`
- Type definitions: `src/types/adventure.ts`
- Asset requirements: See Phase 2 of authoring guide
- Theme configuration: See Phase 4 of authoring guide

---

**Version:** 1.0
**Last Updated:** October 2025
