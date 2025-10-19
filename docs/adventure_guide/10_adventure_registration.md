# 10 - Adventure Registration Guide

**Version:** 1.0
**Last Updated:** October 2025

## Purpose

This guide covers the final step: registering your completed adventure in the main application so it appears in the adventure selection screen.

---

## Prerequisites

Before registering:
- [ ] All chapters complete and working
- [ ] All quizzes created and linked
- [ ] Assets integrated
- [ ] Type checking passes (`npx tsc --noEmit`)
- [ ] Build succeeds (`npm run build`)

---

## Registration Process

### Step 1: Verify Adventure Export

Ensure your adventure's `index.ts` exports the adventure object:

```typescript
// src/adventures/[adventure-name]/index.ts
export const yourAdventure: Adventure = {
  id: 'adventure-name',
  title: 'Adventure Title',
  description: '...',
  // ... rest of adventure config
};
```

### Step 2: Register in Adventure Registry

Open `src/adventures/adventure-registry.ts` and:

1. **Import your adventure:**
```typescript
import { yourAdventure } from './your-adventure-name';
```

2. **Add to adventures array:**
```typescript
export const adventures: Adventure[] = [
  arabianNights,
  dantesInferno,
  tristanIsolde,
  yourAdventure,  // Add here
];
```

**Example:**
```typescript
// src/adventures/adventure-registry.ts
import type { Adventure } from '../types';
import { arabianNights } from './arabian-nights';
import { dantesInferno } from './dantes-inferno';
import { tristanIsolde } from './tristan-isolde';
import { donQuixote } from './don-quixote';  // ← Added

export const adventures: Adventure[] = [
  arabianNights,
  dantesInferno,
  tristanIsolde,
  donQuixote,  // ← Added
];
```

### Step 3: Verify Registration

Run type checking and build:

```bash
npx tsc --noEmit  # Should pass with no errors
npm run build      # Should build successfully
```

### Step 4: Test in Development

Start the development server:

```bash
npm run dev
```

**Verify:**
- [ ] Adventure appears on home screen
- [ ] Cover image displays correctly
- [ ] Adventure title and description show properly
- [ ] Clicking adventure loads first chapter
- [ ] No console errors

---

## Troubleshooting

### Adventure Not Appearing

**Check:**
1. Export name matches import in registry
2. Adventure ID is unique (not duplicating existing adventure)
3. No TypeScript errors in adventure files
4. Development server was restarted after changes

### TypeScript Errors After Registration

**Common issues:**
- Incorrect import path (check folder name matches)
- Missing export in adventure `index.ts`
- Adventure object doesn't match `Adventure` type

**Fix:**
```bash
npx tsc --noEmit  # See specific error
```

### Cover Image Not Displaying

**Check:**
- `coverArt` field uses correct path or URL
- For local files: path starts with `/assets/`
- For CDN: full URL is provided
- File exists at specified location

---

## Completion Checklist

- [ ] Adventure imported in `adventure-registry.ts`
- [ ] Adventure added to `adventures` array
- [ ] TypeScript compiles without errors
- [ ] Build succeeds
- [ ] Adventure appears on home screen in dev mode
- [ ] Cover image displays
- [ ] Adventure loads and plays correctly
- [ ] All chapters accessible
- [ ] All quizzes functional

---

## Next Steps

**Your adventure is now live!**

The user should:
1. **Play test thoroughly** - Go through every chapter, scene, and quiz
2. **Test on different devices** - Desktop, tablet, mobile
3. **Check performance** - Load times, asset loading
4. **Report issues** - Document any bugs or improvements needed

---

## Related Documentation

- **Previous Phase:** [09 - Asset Integration](09_asset_integration.md)
- **Adventure Registry:** `src/adventures/adventure-registry.ts`
- **Type Definitions:** `src/types/adventure.ts`

---

**Version:** 1.0
**Last Updated:** October 2025
**Part of:** Adventure Authoring Guide Series
