# 09 - Asset Integration Guide

## Purpose

This guide covers the process of updating Imsie adventure code with actual asset URLs and file paths after the user has generated and uploaded their media files. This is the final technical step that transforms placeholder asset references into functional, production-ready content.

---

## Prerequisites

Before beginning asset integration:

- [ ] User has completed asset generation (images, videos, audio)
- [ ] All asset files have been uploaded to their final locations
- [ ] The `[adventure-name]_assets.md` file has been updated with actual URLs/paths
- [ ] Asset files follow the naming conventions specified in the asset requirements document

---

## Asset Folder Structure

Assets should be organized in the public directory following this structure:

```
public/assets/[adventure-name]/
├── backgrounds/
│   ├── chapter-1-background.jpg
│   ├── chapter-2-background.jpg
│   └── ...
├── scenes/
│   ├── chapter-1-scene-1.jpg
│   ├── chapter-1-scene-2.jpg
│   └── ...
├── characters/
│   ├── character-name-portrait.jpg
│   ├── character-name-2-portrait.jpg
│   └── ...
├── maps/
│   ├── chapter-x-map.jpg
│   └── ...
├── primary-sources/
│   ├── document-1.jpg
│   ├── artifact-2.jpg
│   └── ...
├── videos/ (optional)
│   ├── background-video-1.mp4
│   ├── scene-video-2.mp4
│   └── ...
├── audio/
│   ├── background-music.mp3
│   ├── ambient-sound.mp3
│   └── ...
└── cover/
    └── adventure-cover.jpg
```

**Path Format:**
- In code, reference as: `/assets/[adventure-name]/[category]/[filename]`
- Example: `/assets/arabian-nights/backgrounds/scheherazade-palace.jpg`

---

## Step 1: Review Updated Asset Documentation

Before updating code, thoroughly review the `[adventure-name]_assets.md` file:

1. **Open the asset documentation:**
   ```
   src/adventures/[adventure-name]/[adventure-name]_assets.md
   ```

2. **Verify completeness:**
   - All required assets have URLs/paths listed
   - File names match the uploaded files exactly
   - Dimensions and formats are documented
   - Video assets (if any) are noted with specifications

3. **Check for placeholders:**
   - Look for any remaining `TBD` or placeholder entries
   - Confirm all critical assets are ready (backgrounds, cover art)
   - Note any optional assets that are still pending

**Example Asset Entry:**
```markdown
### Background Image
- **File:** palace-night.jpg
- **Path:** `/assets/arabian-nights/backgrounds/palace-night.jpg`
- **Dimensions:** 1920x1080px
- **Format:** JPEG
- **Status:** ✅ Uploaded
```

---

## Step 2: Update Chapter Files

Work through each chapter file systematically to update asset references.

### Background Images

**Location:** Chapter definition object → `background` field

```typescript
// BEFORE (placeholder)
export const chapter1: Chapter = {
  id: 'arabian-nights-chapter-1',
  title: 'Scheherazade',
  background: undefined, // or placeholder path

  // ...
};

// AFTER (actual asset)
export const chapter1: Chapter = {
  id: 'arabian-nights-chapter-1',
  title: 'Scheherazade',
  background: '/assets/arabian-nights/backgrounds/scheherazade-palace.jpg',

  // ...
};
```

### Scene Images

**Location:** Individual scene objects → `image` field

```typescript
// BEFORE
{
  id: 'scene-1',
  type: 'narrative' as const,
  title: 'The Palace at Night',
  image: undefined, // or placeholder
  content: `...`,
  // ...
}

// AFTER
{
  id: 'scene-1',
  type: 'narrative' as const,
  title: 'The Palace at Night',
  image: '/assets/arabian-nights/scenes/palace-night-view.jpg',
  content: `...`,
  // ...
}
```

### Character Portraits

**Location:** Dialogue scenes → `characterPortrait` field

```typescript
// BEFORE
{
  id: 'scene-dialogue',
  type: 'dialogue' as const,
  title: 'Speaking with Scheherazade',
  characterName: 'Scheherazade',
  characterPortrait: undefined,
  // ...
}

// AFTER
{
  id: 'scene-dialogue',
  type: 'dialogue' as const,
  title: 'Speaking with Scheherazade',
  characterName: 'Scheherazade',
  characterPortrait: '/assets/arabian-nights/characters/scheherazade-portrait.jpg',
  // ...
}
```

### Background Videos (Optional)

**Location:** Scene objects → `backgroundVideo` field

```typescript
{
  id: 'scene-animated',
  type: 'narrative' as const,
  title: 'The Storm',
  background: '/assets/arabian-nights/backgrounds/ocean-static.jpg', // fallback
  backgroundVideo: '/assets/arabian-nights/videos/ocean-storm-loop.mp4',
  content: `...`,
  // ...
}
```

### Map Exploration Assets

**Location:** Map exploration scenes → `map` and `locations[].image` fields

```typescript
{
  id: 'scene-map',
  type: 'map-exploration' as const,
  title: 'Explore Baghdad',
  map: '/assets/arabian-nights/maps/baghdad-map.jpg',
  locations: [
    {
      id: 'marketplace',
      name: 'The Marketplace',
      x: 35,
      y: 50,
      image: '/assets/arabian-nights/scenes/marketplace-detail.jpg',
      description: `...`,
      // ...
    },
    // ...
  ],
  // ...
}
```

### Primary Source Assets

**Location:** Primary source scenes → `documentImage` or `documentVideo` fields

```typescript
{
  id: 'scene-manuscript',
  type: 'primary-source' as const,
  title: 'Ancient Manuscript',
  documentImage: '/assets/arabian-nights/primary-sources/manuscript-page.jpg',
  documentTitle: 'Original Tale Fragment',
  // ...
}
```

### Anachronism Scene Assets

**Location:** Anachronism scenes → `sceneImage` and `items[].image` fields

```typescript
{
  id: 'scene-anachronism',
  type: 'anachronism' as const,
  title: 'Find the Anachronisms',
  sceneImage: '/assets/arabian-nights/scenes/marketplace-anachronisms.jpg',
  items: [
    {
      id: 'wristwatch',
      name: 'Wristwatch',
      image: '/assets/arabian-nights/scenes/wristwatch-closeup.jpg',
      // ...
    },
    // ...
  ],
  // ...
}
```

---

## Step 3: Update Theme Configuration

Update the adventure's theme file with music and audio assets.

**Location:** `src/adventures/[adventure-name]/theme.ts`

```typescript
// BEFORE
export const arabianNightsTheme: AdventureTheme = {
  colors: {
    primary: '#8B4513',
    // ...
  },
  fonts: {
    heading: 'Cinzel, serif',
    // ...
  },
  music: undefined, // or placeholder
};

// AFTER
export const arabianNightsTheme: AdventureTheme = {
  colors: {
    primary: '#8B4513',
    // ...
  },
  fonts: {
    heading: 'Cinzel, serif',
    // ...
  },
  music: {
    background: '/assets/arabian-nights/audio/arabian-nights-theme.mp3',
    volume: 0.3,
    loop: true,
  },
};
```

**Multiple Music Tracks (Optional):**
```typescript
music: [
  {
    id: 'main-theme',
    path: '/assets/arabian-nights/audio/main-theme.mp3',
    volume: 0.3,
    loop: true,
  },
  {
    id: 'tense-moment',
    path: '/assets/arabian-nights/audio/tense-music.mp3',
    volume: 0.4,
    loop: true,
  },
],
```

---

## Step 4: Update Adventure Index

Update the main adventure file with cover art and metadata images.

**Location:** `src/adventures/[adventure-name]/index.ts`

```typescript
// BEFORE
export const arabianNightsAdventure: Adventure = {
  id: 'arabian-nights',
  title: 'Tales from the Arabian Nights',
  description: '...',
  coverImage: undefined, // or placeholder
  // ...
};

// AFTER
export const arabianNightsAdventure: Adventure = {
  id: 'arabian-nights',
  title: 'Tales from the Arabian Nights',
  description: '...',
  coverImage: '/assets/arabian-nights/cover/arabian-nights-cover.jpg',
  // ...
};
```

---

## Step 5: Verification Process

### 5.1 Path Verification

**Check all paths are correct:**

1. **Search for asset references:**
   ```bash
   grep -r "assets/[adventure-name]" src/adventures/[adventure-name]/
   ```

2. **Verify files exist:**
   ```bash
   # Check each path exists in public directory
   ls public/assets/[adventure-name]/backgrounds/
   ls public/assets/[adventure-name]/scenes/
   ls public/assets/[adventure-name]/characters/
   # etc.
   ```

3. **Check for common path errors:**
   - Missing leading slash: `assets/...` should be `/assets/...`
   - Double slashes: `/assets//adventure/...`
   - Wrong extension: `.png` vs `.jpg`
   - Case sensitivity: `File.jpg` vs `file.jpg`

### 5.2 Reference Audit

**Ensure no broken references remain:**

1. **Search for undefined assets:**
   ```bash
   grep -r "image: undefined" src/adventures/[adventure-name]/chapters/
   grep -r "background: undefined" src/adventures/[adventure-name]/chapters/
   grep -r "characterPortrait: undefined" src/adventures/[adventure-name]/chapters/
   ```

2. **Search for placeholder text:**
   ```bash
   grep -ri "placeholder" src/adventures/[adventure-name]/
   grep -ri "TBD" src/adventures/[adventure-name]/
   grep -ri "TODO" src/adventures/[adventure-name]/
   ```

3. **Check asset documentation matches code:**
   - Cross-reference `_assets.md` entries with actual code
   - Verify all documented assets are used
   - Note any documented assets not yet integrated

### 5.3 TypeScript Validation

**Ensure code compiles without errors:**

```bash
npm run type-check
# or
npx tsc --noEmit
```

**Common TypeScript issues after asset integration:**
- Missing `as const` for scene types
- Incorrect field names for asset properties
- Type mismatches (string vs undefined)

### 5.4 Build Verification

**Test the production build:**

```bash
npm run build
```

**If build fails:**
- Check error messages for specific file paths
- Verify all imports are correct
- Ensure no circular dependencies were introduced
- Check for missing exports

### 5.5 Runtime Testing

**Test in development environment:**

```bash
npm run dev
```

**Manual testing checklist:**
- [ ] Adventure appears on home screen with cover image
- [ ] Chapter backgrounds load correctly
- [ ] Scene images display properly
- [ ] Character portraits show in dialogue scenes
- [ ] Map exploration displays map image
- [ ] Primary source documents render
- [ ] Background music plays (if implemented)
- [ ] Videos play and loop correctly (if used)
- [ ] No console errors related to asset loading
- [ ] All interactive scenes function with their images

---

## Common Issues and Fixes

### Issue 1: Assets Not Loading (404 Errors)

**Symptoms:**
- Broken image icons in UI
- Console errors: `GET /assets/... 404 (Not Found)`

**Fixes:**
1. Verify file exists in `public/` directory
2. Check path starts with `/assets/` (leading slash)
3. Verify exact filename match (case-sensitive)
4. Clear browser cache and hard refresh (Cmd/Ctrl + Shift + R)
5. Restart development server

### Issue 2: Wrong File Extension

**Symptoms:**
- Asset not displaying despite correct path

**Fixes:**
1. Check actual file extension in filesystem
2. Update code to match: `.jpg` vs `.jpeg` vs `.png`
3. Standardize extensions across project if needed

### Issue 3: Path Case Sensitivity

**Symptoms:**
- Works on Windows/Mac but fails on Linux/production

**Fixes:**
1. Ensure all paths use lowercase filenames
2. Update actual files to match code exactly
3. Use consistent naming convention:
   ```
   chapter-1-background.jpg (good)
   Chapter-1-Background.jpg (avoid)
   ```

### Issue 4: Large File Sizes

**Symptoms:**
- Slow page loads
- Build warnings about asset size

**Fixes:**
1. Compress images using tools like ImageOptim, TinyPNG
2. Target sizes:
   - Backgrounds: < 500KB
   - Scene images: < 200KB
   - Character portraits: < 150KB
   - Videos: < 5MB
3. Consider using WebP format for better compression
4. Implement lazy loading for non-critical assets

### Issue 5: Missing Fallback Images

**Symptoms:**
- Blank spaces when optional video assets fail to load

**Fixes:**
1. Always provide `background` image when using `backgroundVideo`
2. Add error handling for optional assets:
   ```typescript
   background: '/assets/adventure/backgrounds/fallback.jpg',
   backgroundVideo: '/assets/adventure/videos/animation.mp4', // optional
   ```

### Issue 6: Incorrect Aspect Ratios

**Symptoms:**
- Images appear stretched or cropped incorrectly

**Fixes:**
1. Verify asset dimensions match requirements:
   - Backgrounds: 1920x1080px (16:9)
   - Scene images: 600x400px (3:2)
   - Character portraits: 600x600px (1:1)
   - Maps: 1920x1080px (16:9)
2. Regenerate assets with correct dimensions
3. Use CSS object-fit if minor adjustments needed

### Issue 7: Video Not Playing

**Symptoms:**
- Video asset shows as image or doesn't display

**Fixes:**
1. Verify video format: MP4 with H.264 codec
2. Check video file size (< 5MB recommended)
3. Ensure video has no audio track (causes issues with background music)
4. Test video plays in browser directly
5. Add proper attributes in code:
   ```typescript
   backgroundVideo: '/assets/adventure/videos/loop.mp4',
   videoOptions: {
     loop: true,
     muted: true,
     autoplay: true,
   }
   ```

### Issue 8: Asset Documentation Out of Sync

**Symptoms:**
- Code references assets not in documentation
- Documentation lists unused assets

**Fixes:**
1. Update `_assets.md` to match actual usage
2. Add status indicators:
   - ✅ Implemented and working
   - 🚧 In progress
   - 📋 Planned but not yet added
3. Remove references to deprecated assets
4. Document any placeholder assets still needed

---

## Integration Checklist

Use this checklist to ensure complete asset integration:

### Pre-Integration
- [ ] All required assets generated and uploaded
- [ ] Asset documentation (`_assets.md`) updated with paths
- [ ] File naming follows conventions
- [ ] Assets organized in correct folder structure

### Code Updates
- [ ] Chapter background images updated
- [ ] Scene images updated (all narrative scenes)
- [ ] Character portraits updated (all dialogue scenes)
- [ ] Map images updated (map-exploration scenes)
- [ ] Primary source images updated
- [ ] Anachronism scene images updated
- [ ] Video assets integrated (if applicable)
- [ ] Theme music paths updated
- [ ] Adventure cover image updated

### Verification
- [ ] TypeScript compiles without errors
- [ ] Build succeeds (`npm run build`)
- [ ] No 404 errors in browser console
- [ ] All images display correctly in UI
- [ ] Videos play and loop properly
- [ ] Music plays without errors
- [ ] Asset documentation matches code
- [ ] No placeholder references remain

### Testing
- [ ] Played through at least one complete chapter
- [ ] Tested all scene types with assets
- [ ] Verified responsive display on different screen sizes
- [ ] Checked performance (load times acceptable)
- [ ] Tested on multiple browsers
- [ ] Verified production build works

### Documentation
- [ ] Updated `_assets.md` with final status
- [ ] Documented any custom implementation notes
- [ ] Noted any deviations from standard structure
- [ ] Added attribution/licensing info if required

---

## Best Practices

### During Integration

1. **Work incrementally:**
   - Update one chapter at a time
   - Test after each chapter is complete
   - Commit changes frequently with descriptive messages

2. **Maintain consistency:**
   - Use same naming patterns across all assets
   - Keep folder structure organized
   - Follow established conventions

3. **Document as you go:**
   - Update `_assets.md` immediately when adding assets
   - Note any issues or special requirements
   - Keep track of assets that need regeneration

4. **Test thoroughly:**
   - Don't assume assets work without visual verification
   - Check on different devices/browsers
   - Test both development and production builds

### After Integration

1. **Clean up unused assets:**
   - Remove old placeholder files
   - Delete unused asset variations
   - Keep only production-ready files

2. **Optimize performance:**
   - Compress images without quality loss
   - Use appropriate formats (WebP when possible)
   - Implement lazy loading for large assets

3. **Maintain documentation:**
   - Keep `_assets.md` as single source of truth
   - Update when assets are revised
   - Document any asset dependencies

4. **Version control:**
   - Commit asset files (if small enough)
   - Use Git LFS for large files
   - Document external asset hosting if used

---

## Example: Complete Integration Workflow

### Scenario
Integrating assets for "Arabian Nights" Chapter 1 (Scheherazade).

### Step-by-Step

1. **Review documentation:**
   ```
   src/adventures/arabian-nights/arabian-nights_assets.md
   ```
   Confirmed all Chapter 1 assets uploaded with paths documented.

2. **Update chapter file:**
   ```
   src/adventures/arabian-nights/chapters/chapter-1-scheherazade.ts
   ```
   - Updated chapter background
   - Added scene images to 6 narrative scenes
   - Added Scheherazade portrait to dialogue scene
   - Added map image to map-exploration scene

3. **Update theme:**
   ```
   src/adventures/arabian-nights/theme.ts
   ```
   - Added background music path
   - Set volume to 0.3, loop enabled

4. **Update adventure index:**
   ```
   src/adventures/arabian-nights/index.ts
   ```
   - Added cover image path

5. **Verify:**
   ```bash
   npm run type-check    # ✅ No errors
   npm run build         # ✅ Build succeeded
   npm run dev           # ✅ Started dev server
   ```

6. **Test in browser:**
   - Navigated to Arabian Nights adventure
   - Played through Chapter 1 completely
   - Verified all images loaded
   - Checked music playback
   - No console errors

7. **Document:**
   - Updated `_assets.md` with ✅ status for all Chapter 1 assets
   - Noted background music implementation details
   - Committed changes with descriptive message

---

## Related Documentation

- **Asset Requirements:** `docs/adventure_guide/07_asset_requirements.md`
- **Asset Generation:** `docs/adventure_guide/08_asset_generation.md`
- **Scene Types Reference:** `docs/SCENE_TYPES_REFERENCE.md`
- **Chapter Authoring Guide:** `docs/CHAPTER_AUTHORING_GUIDE.md`

---

## Troubleshooting Resources

If you encounter issues not covered in this guide:

1. Check browser console for specific error messages
2. Verify asset requirements in documentation
3. Review existing working chapters for reference
4. Test with minimal example (single scene)
5. Check network tab for failed asset requests

---

*Last Updated: October 2025*
*Version: 1.0*
