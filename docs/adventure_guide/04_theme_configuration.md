# Theme and Configuration Guide

**Phase 4 of Adventure Creation**

This guide covers everything you need to configure your adventure's visual and audio theme, including color palettes, typography, music, and integration into your adventure.

---

## Table of Contents

1. [Overview](#overview)
2. [Choosing Your Color Palette](#choosing-your-color-palette)
3. [Font Selection](#font-selection)
4. [Creating the theme.ts File](#creating-the-themets-file)
5. [Music Playlist Configuration](#music-playlist-configuration)
6. [Integrating Theme into index.ts](#integrating-theme-into-indexts)
7. [Complete Working Examples](#complete-working-examples)
8. [Testing Your Theme](#testing-your-theme)

---

## Overview

The theme configuration defines your adventure's visual identity and audio atmosphere. A well-chosen theme:

- Reinforces the historical/cultural period
- Creates emotional resonance with the content
- Maintains consistency across all chapters
- Enhances immersion and engagement

**Key Components:**
- Primary color (buttons, accents, headers)
- Secondary color (highlights, links, secondary UI)
- Font family (all text rendering)
- Background music (ambient atmosphere)
- Music playlist (track rotation)

---

## Choosing Your Color Palette

### Color Psychology for Educational Adventures

Select colors that match your adventure's tone and period:

| Primary Color | Hex Code | Mood/Association | Good For |
|--------------|----------|------------------|----------|
| Deep Purple-Blue | `#1a0f2e` | Mystical, nocturnal, mysterious | Night-themed, mystical content |
| Dark Red-Brown | `#3d1a1a` | Serious, historical, dramatic | Tragedies, historical epics |
| Forest Green | `#1a3d1a` | Natural, growth, classic | Nature myths, pastoral tales |
| Royal Blue | `#1a2e4a` | Noble, trustworthy, calm | Epic journeys, exploration |
| Charcoal | `#2a2a2a` | Sophisticated, neutral | Modern lit, philosophy |

### Color Selection Workflow

1. **Identify Your Adventure's Mood**
   - Arabian Nights: Mystical, enchanting, nocturnal
   - Dante's Inferno: Dark, serious, dramatic
   - Greek Mythology: Classical, noble, timeless

2. **Choose Primary Color**
   - Used for: Main buttons, headers, progress indicators
   - Should be: Dark enough for white text, distinctive
   - Example: `#1a0f2e` (deep purple-blue)

3. **Choose Secondary Color**
   - Used for: Highlights, hover states, accents
   - Should be: Complementary to primary, lighter
   - Example: `#d4af37` (gold)

4. **Test Color Contrast**
   - Ensure text readability (WCAG AA compliance)
   - Test on light and dark backgrounds
   - Verify button text is legible

### Palette Generation Tools

**Recommended Tools:**
- [Coolors.co](https://coolors.co/) - Generate and test palettes interactively
- [Adobe Color](https://color.adobe.com/) - Extract colors from images
- [Paletton](https://paletton.com/) - Create harmonious color schemes
- [Contrast Checker](https://webaim.org/resources/contrastchecker/) - Verify accessibility

**Workflow Example:**
1. Upload a reference image (historical art, period artwork)
2. Extract 2-3 dominant colors
3. Adjust saturation/lightness for UI use
4. Test combinations for contrast and harmony

---

## Font Selection

### Recommended Font Pairings

Choose fonts that reflect your adventure's historical period and literary style:

| Adventure Style | Font Recommendation | Google Fonts Link | Why |
|----------------|--------------------|--------------------|-----|
| Classical Literature | `'Crimson Text', serif` | [Link](https://fonts.google.com/specimen/Crimson+Text) | Elegant, traditional, highly readable |
| Medieval/Fantasy | `'Cinzel', serif` | [Link](https://fonts.google.com/specimen/Cinzel) | Formal, historical feel, manuscript-inspired |
| Modern Literature | `'Lora', serif` | [Link](https://fonts.google.com/specimen/Lora) | Contemporary but literary |
| Mythology | `'Cormorant Garamond', serif` | [Link](https://fonts.google.com/specimen/Cormorant+Garamond) | Graceful, mythic quality |
| Eastern Literature | `'Noto Serif', serif` | [Link](https://fonts.google.com/specimen/Noto+Serif) | Multi-script support, clean |

### Font Selection Guidelines

**Readability First:**
- Choose serif fonts for long-form reading
- Ensure good x-height (lowercase letter height)
- Test at multiple sizes (14px, 16px, 18px)

**Historical Authenticity:**
- Match font style to time period
- Avoid anachronistic choices (e.g., modern sans-serif for medieval content)

**Technical Considerations:**
- Use Google Fonts for easy loading
- Include fallback fonts (`serif` or `sans-serif`)
- Specify weights (typically 400 and 700)

### Adding Google Fonts

**Method 1: CDN Link (Recommended)**

Add to your `index.html`:

```html
<head>
  <!-- Other head content -->
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap" rel="stylesheet">
</head>
```

**Method 2: CSS @import**

Add to your main CSS file:

```css
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;700&display=swap');
```

**Multiple Weights Example:**

```html
<link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet">
```

---

## Creating the theme.ts File

### File Location

```
src/adventures/[your-adventure-name]/theme.ts
```

### Basic Template

```typescript
import type { AdventureTheme } from '../../types';

export const yourAdventureTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // Main color for UI elements
  secondaryColor: '#d4af37',    // Accent color for highlights
  fontFamily: '"Crimson Text", serif',  // Font with fallback
  backgroundMusic: '/assets/your-adventure/music/theme.mp3',
};

export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
  // Add more tracks as needed
];
```

### Field Descriptions

**`primaryColor`** (required)
- **Type:** String (hex color code)
- **Usage:** Main buttons, headers, progress bars, active states
- **Requirements:**
  - Must provide sufficient contrast with white text
  - Should be dark/saturated enough to stand out
- **Example:** `'#1a0f2e'` (deep purple-blue)

**`secondaryColor`** (required)
- **Type:** String (hex color code)
- **Usage:** Hover states, highlights, secondary buttons, links
- **Requirements:**
  - Should complement primary color
  - Often lighter or more saturated than primary
- **Example:** `'#d4af37'` (gold)

**`fontFamily`** (required)
- **Type:** String (CSS font-family value)
- **Usage:** All text rendering in the adventure
- **Requirements:**
  - Must include quotes around font name
  - Should include fallback font family
  - Font must be loaded via Google Fonts or available system-wide
- **Example:** `'"Crimson Text", serif'`

**`backgroundMusic`** (optional)
- **Type:** String (path to audio file)
- **Usage:** Default background music when adventure loads
- **Requirements:**
  - Path relative to `public/` folder
  - MP3 format recommended
  - 3-5 minutes, loopable
- **Example:** `'/assets/your-adventure/music/theme.mp3'`

### Advanced Template with Comments

```typescript
import type { AdventureTheme } from '../../types';

/**
 * [Your Adventure] Theme
 *
 * Color palette inspired by [describe inspiration]
 * Font selection reflects [historical period/literary style]
 */
export const yourAdventureTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // Deep purple-blue (mystical night)
  secondaryColor: '#d4af37',    // Gold (magical elements)
  fontFamily: '"Crimson Text", serif',
  backgroundMusic: '/assets/your-adventure/music/theme.mp3',
};

/**
 * Music Playlist
 *
 * [Describe musical style and mood]
 *
 * Track Assignment (optional):
 * - Theme: General ambient music
 * - Theme-2: Variant for variety
 * - Chapter-specific: If needed for particular chapters
 */
export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
  '/assets/your-adventure/music/theme-variation.mp3',
];
```

---

## Music Playlist Configuration

### Playlist Structure

The `musicPlaylist` array defines all music tracks that can play during your adventure. The music player will rotate through these tracks automatically.

**Basic Playlist:**

```typescript
export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
];
```

**Multi-Track Playlist:**

```typescript
export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
  '/assets/your-adventure/music/theme-variation.mp3',
  '/assets/your-adventure/music/ambient.mp3',
];
```

### Music Track Guidelines

**File Format:**
- **Preferred:** MP3 (universal compatibility)
- **Alternative:** OGG, M4A
- **Avoid:** WAV, FLAC (too large)

**Track Length:**
- **Ideal:** 3-5 minutes
- **Minimum:** 2 minutes
- **Maximum:** 8 minutes

**File Size:**
- **Target:** 2-5 MB per track
- **Maximum:** 10 MB per track
- **Bitrate:** 128-192 kbps (good quality/size balance)

**Looping:**
- Ensure seamless loop points (start/end match)
- Fade in/out at ends (0.5-1 second)
- Test loop in audio editor before export

### Playlist Strategies

**Strategy 1: Single Theme**
Use one track that loops continuously.

```typescript
export const musicPlaylist = [
  '/assets/your-adventure/music/main-theme.mp3',
];
```

**Pros:** Simple, consistent atmosphere
**Cons:** Can become repetitive

---

**Strategy 2: Theme with Variations**
Multiple versions of the same musical theme.

```typescript
export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
  '/assets/your-adventure/music/theme-variation-1.mp3',
  '/assets/your-adventure/music/theme-variation-2.mp3',
];
```

**Pros:** Variety while maintaining consistency
**Cons:** Requires more asset creation

---

**Strategy 3: Chapter-Specific Tracks**
Different tracks for different chapters or moods.

```typescript
export const musicPlaylist = [
  '/assets/your-adventure/music/prologue.mp3',      // Chapters 1-2
  '/assets/your-adventure/music/journey.mp3',       // Chapters 3-4
  '/assets/your-adventure/music/climax.mp3',        // Chapter 5
];
```

**Pros:** Dynamic emotional arc
**Cons:** More complex asset management

---

**Strategy 4: Hybrid (Recommended)**
Combine strategies for optimal experience.

```typescript
export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',         // Main theme
  '/assets/your-adventure/music/theme-alt.mp3',     // Main theme variation
  '/assets/your-adventure/music/dramatic.mp3',      // Intense moments
  '/assets/your-adventure/music/peaceful.mp3',      // Reflective scenes
];
```

**Pros:** Flexibility and variety
**Cons:** Requires careful curation

### Path Structure for Music Files

**Recommended Folder Structure:**

```
public/assets/[adventure-name]/
└── music/
    ├── theme.mp3                    # Primary track
    ├── theme-variation.mp3          # Alternative version
    ├── chapter-1-intro.mp3          # Chapter-specific (optional)
    └── dramatic.mp3                 # Mood-specific (optional)
```

**Path Format:**

```typescript
// Correct (relative to public/ folder)
'/assets/your-adventure/music/theme.mp3'

// Incorrect (missing leading slash)
'assets/your-adventure/music/theme.mp3'

// Incorrect (includes 'public')
'/public/assets/your-adventure/music/theme.mp3'
```

---

## Integrating Theme into index.ts

### File Location

```
src/adventures/[your-adventure-name]/index.ts
```

### Complete Template

```typescript
import type { Adventure } from '../../types';
import { yourAdventureTheme, musicPlaylist } from './theme';

// Import chapters
import { chapter1 } from './chapters/chapter-1-name';
import { chapter2 } from './chapters/chapter-2-name';
// ... import more chapters

// Import final quiz (if ready)
import { finalQuiz } from './quizzes/final-quiz';

export const yourAdventure: Adventure = {
  id: 'your-adventure-id',                    // Unique ID (kebab-case)
  title: 'Your Adventure Title',               // Display name
  description: 'Brief 1-2 sentence description of the adventure.',
  estimatedTime: 180,                          // Minutes (3 hours)
  coverArt: '/assets/your-adventure/cover.png',

  theme: yourAdventureTheme,                   // ← Theme configuration
  musicPlaylist,                               // ← Music playlist

  chapters: [
    chapter1,
    chapter2,
    // ... add more chapters
  ],

  finalQuiz: finalQuiz,  // Or undefined if not yet created
};
```

### Integration Steps

**Step 1: Import Theme**

```typescript
import { yourAdventureTheme, musicPlaylist } from './theme';
```

**Step 2: Add to Adventure Object**

```typescript
export const yourAdventure: Adventure = {
  // ... other fields

  theme: yourAdventureTheme,    // Applies visual styling
  musicPlaylist,                // Provides audio tracks

  // ... chapters, etc.
};
```

**Step 3: Verify Exports**

Ensure your theme.ts exports both:

```typescript
export const yourAdventureTheme = { /* ... */ };
export const musicPlaylist = [ /* ... */ ];
```

---

## Complete Working Examples

### Example 1: Arabian Nights

**File: `src/adventures/arabian-nights/theme.ts`**

```typescript
import type { AdventureTheme } from '../../types';

export const arabianNightsTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // Deep purple-blue (mystical night)
  secondaryColor: '#d4af37',    // Gold (Arabian riches)
  fontFamily: '"Crimson Text", serif',
  backgroundMusic: '/assets/arabian-nights/music/Arabian%20Nights.mp3',
};

export const musicPlaylist = [
  '/assets/arabian-nights/music/Arabian%20Nights.mp3',
  '/assets/arabian-nights/music/Arabian%20Nights-2.mp3',
  '/assets/arabian-nights/music/Arabian%20Nights-3.mp3',
  '/assets/arabian-nights/music/Arabian%20Nights-4.mp3',
];
```

**Color Rationale:**
- Primary: Dark purple-blue evokes nighttime storytelling
- Secondary: Gold represents wealth and magic

**Font Rationale:**
- Crimson Text: Classical serif, excellent readability

**Music Strategy:**
- Theme with variations for variety
- Middle Eastern instrumentation (oud, ney, qanun)

---

### Example 2: Dante's Inferno

**File: `src/adventures/dantes-inferno/theme.ts`**

```typescript
import type { AdventureTheme } from '../../types';

/**
 * Dante's Inferno Adventure Theme
 *
 * Color palette inspired by medieval manuscript illuminations
 * and the descent through the circles of hell - dark, rich, dramatic
 */
export const dantesInfernoTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // Deep purple-black (hell's darkness)
  secondaryColor: '#d4af37',    // Gold (divine light/guidance)
  fontFamily: '"Cinzel", "Trajan Pro", serif',
  backgroundMusic: "/assets/dantes-inferno/music/Dante's%20Inferno_%20Descent.mp3",
};

/**
 * Music Playlist
 *
 * Medieval-inspired orchestral and choral music
 * to evoke the epic, spiritual journey through the afterlife
 *
 * Track Assignment:
 * - Descent Theme: Prologue & Chapter 1 (Limbo)
 * - Journey: Chapters 2-3 (Incontinence & City of Dis)
 * - Malebolge: Chapter 4 (Fraud/Malebolge)
 * - Treachery: Chapter 5 (Cocytus & Satan)
 */
export const musicPlaylist = [
  "/assets/dantes-inferno/music/Dante's%20Inferno_%20Descent.mp3",
  "/assets/dantes-inferno/music/Dante's%20Inferno_%20Descent-2.mp3",
  "/assets/dantes-inferno/music/Dante's%20Inferno_%20Journey.mp3",
  "/assets/dantes-inferno/music/Dante's%20Inferno_%20Malebolge.mp3",
  "/assets/dantes-inferno/music/Dante's%20Inferno_%20Treachery.mp3",
  "/assets/dantes-inferno/music/Dante's%20Inferno_%20Treachery-2.mp3",
];
```

**Color Rationale:**
- Primary: Same dark purple-black represents Hell's darkness
- Secondary: Gold represents divine guidance (Virgil, Beatrice)

**Font Rationale:**
- Cinzel: Formal, classical, inspired by Roman inscriptions
- Perfect for epic medieval literature

**Music Strategy:**
- Chapter-specific tracks mapping to Inferno's progression
- Variations provide alternatives for longer chapters

---

### Example 3: Generic Template (Tristan & Isolde Style)

**File: `src/adventures/tristan-isolde/theme.ts`**

```typescript
import type { AdventureTheme } from '../../types';

/**
 * Tristan and Isolde Adventure Theme
 *
 * Medieval romance with Celtic influences
 * Colors evoke courtly love, tragedy, and Celtic mysticism
 */
export const tristanTheme: AdventureTheme = {
  primaryColor: '#2c1810',      // Deep brown (medieval wood/earth)
  secondaryColor: '#c9a961',    // Antique gold (courtly riches)
  fontFamily: '"Cinzel", serif',
  backgroundMusic: '/assets/tristan-isolde/music/celtic-theme.mp3',
};

export const musicPlaylist = [
  '/assets/tristan-isolde/music/celtic-theme.mp3',
  '/assets/tristan-isolde/music/court-life.mp3',
  '/assets/tristan-isolde/music/tragic-theme.mp3',
];
```

**Color Rationale:**
- Primary: Earthy brown reflects medieval setting
- Secondary: Antique gold represents courtly nobility

**Font Rationale:**
- Cinzel: Medieval manuscript aesthetic

**Music Strategy:**
- Celtic-inspired for cultural authenticity
- Tragic theme for emotional climax

---

## Testing Your Theme

### Visual Testing Checklist

- [ ] **Color Contrast**
  - Primary color readable with white text
  - Secondary color readable with white text
  - Test in light and dark modes (if supported)

- [ ] **Font Display**
  - Font loads correctly on all browsers
  - Text is readable at various sizes (14px, 16px, 18px)
  - Fallback font displays correctly if Google Font fails

- [ ] **UI Elements**
  - Buttons display with correct primary color
  - Hover states use secondary color
  - Progress indicators show theme colors

- [ ] **Consistency**
  - Theme applies across all chapters
  - Theme persists after refresh
  - Theme doesn't conflict with scene-specific styling

### Audio Testing Checklist

- [ ] **Music Loading**
  - Background music starts automatically (if user allows)
  - Music doesn't cause lag or delay on page load
  - Files load correctly (check network tab for 404s)

- [ ] **Playback Quality**
  - Audio quality is clear and appropriate
  - No clipping, distortion, or artifacts
  - Volume level is appropriate (not too loud)

- [ ] **Looping**
  - Tracks loop seamlessly without gaps
  - Transitions between tracks are smooth
  - Playlist cycles through all tracks

- [ ] **User Controls**
  - Music player controls work (play/pause)
  - Volume control functions correctly
  - Mute/unmute toggles properly

### Browser Testing

Test your theme in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Common Issues and Fixes

| Issue | Cause | Fix |
|-------|-------|-----|
| Font not loading | Google Fonts not linked | Add font link to index.html |
| Colors not applying | Theme not imported in index.ts | Import and add theme to adventure object |
| Music not playing | Wrong file path | Check path is relative to public/ folder |
| Music 404 error | File doesn't exist or wrong name | Verify file exists and path matches exactly |
| Colors too similar | Low contrast | Adjust lightness/saturation for distinction |
| Font fallback shows | Font name misspelled | Check font name matches Google Fonts exactly |

---

## Quick Reference

### Minimal Theme Configuration

```typescript
// theme.ts
import type { AdventureTheme } from '../../types';

export const yourAdventureTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',
  secondaryColor: '#d4af37',
  fontFamily: '"Crimson Text", serif',
  backgroundMusic: '/assets/your-adventure/music/theme.mp3',
};

export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
];
```

### Integration into index.ts

```typescript
// index.ts
import type { Adventure } from '../../types';
import { yourAdventureTheme, musicPlaylist } from './theme';

export const yourAdventure: Adventure = {
  id: 'your-adventure',
  title: 'Your Adventure',
  description: 'Description here',
  estimatedTime: 180,
  coverArt: '/assets/your-adventure/cover.png',
  theme: yourAdventureTheme,
  musicPlaylist,
  chapters: [],
  finalQuiz: undefined,
};
```

### File Paths Reference

```
src/adventures/your-adventure/
├── theme.ts                          ← Theme configuration
└── index.ts                          ← Adventure definition (imports theme)

public/assets/your-adventure/
├── cover.png                         ← Cover art
└── music/
    ├── theme.mp3                     ← Referenced in theme.ts
    └── theme-variation.mp3           ← Referenced in musicPlaylist
```

---

## Next Steps

After configuring your theme:

1. **Test in browser** - Verify visual and audio elements work
2. **Create first chapter** - Start implementing content with themed styling
3. **Iterate on colors** - Adjust based on how they look with actual content
4. **Add music tracks** - Expand playlist as you develop more chapters

**See Also:**
- Phase 5: Chapter Development
- Asset Planning Guide (Phase 2)
- Complete examples in `src/adventures/`

---

**Last Updated:** October 2025
**Version:** 1.0
