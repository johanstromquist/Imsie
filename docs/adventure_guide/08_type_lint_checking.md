# Type and Lint Checking Guide

**Version:** 1.0
**Last Updated:** October 2025

This guide covers automated error checking to catch issues before user testing. Run these checks frequently as you develop, not just at the end.

---

## Purpose

Automated checking catches:
- Type errors (incorrect data structures)
- Missing required fields
- Duplicate IDs
- Code quality issues
- Build failures

**Catch errors early:** Run these checks after completing each chapter, not after finishing the entire adventure.

---

## Three Essential Checks

### 1. TypeScript Type Checker

**What it does:** Verifies your code matches the type definitions in `src/types/adventure.ts`

**Command:**
```bash
npx tsc -b --force
```

**Expected output when successful:**
```
(No output - silence means success)
```

**When to run:**
- After completing each chapter
- After writing/modifying quizzes
- Before committing code
- Before user testing

---

### 2. ESLint (Linter)

**What it does:** Checks code quality, style, and potential bugs

**Command:**
```bash
npm run lint
```

**Expected output when successful:**
```
(No errors - warnings are acceptable)
```

**When to run:**
- After major content changes
- Before committing code
- Before building for production

---

### 3. Build Process

**What it does:** Compiles TypeScript and bundles the application for production

**Command:**
```bash
npm run build
```

**Expected output when successful:**
```
vite v[version] building for production...
✓ [number] modules transformed.
dist/index.html  [size]
dist/assets/[files]
✓ built in [time]
```

**When to run:**
- After all TypeScript errors are fixed
- Before deployment
- To verify production readiness

---

## Common TypeScript Errors

### Error 1: Missing `relatedLearningPoints`

**Error message:**
```
Property 'relatedLearningPoints' is missing in type '{ id: string; question: string; ... }'
```

**Cause:** Quiz questions REQUIRE the `relatedLearningPoints` field

**Fix:**
```typescript
// ❌ WRONG
{
  id: 'q1',
  question: 'What happened?',
  type: 'multiple-choice',
  points: 10,
  options: [...],
  correctAnswer: '...',
  explanation: '...',
  // Missing relatedLearningPoints!
}

// ✅ CORRECT
{
  id: 'q1',
  question: 'What happened?',
  type: 'multiple-choice',
  points: 10,
  options: [...],
  correctAnswer: '...',
  explanation: '...',
  relatedLearningPoints: ['lp-ch1-scene-3'], // Required field
}

// ✅ ALSO CORRECT (if no direct learning points)
{
  id: 'q1',
  question: 'General question...',
  type: 'multiple-choice',
  points: 10,
  options: [...],
  correctAnswer: '...',
  explanation: '...',
  relatedLearningPoints: [], // Empty array is valid
}
```

**See:** `common_type_errors.md` - Error 1 for detailed explanation

---

### Error 2: Incorrect Dialogue Response Structure

**Error message:**
```
Type 'null' is not assignable to type 'string | undefined'
```

**Cause:** Terminal dialogue responses should NOT include `nextNodeId` at all

**Fix:**
```typescript
// ❌ WRONG
{
  id: 'response-end',
  text: 'Goodbye',
  nextNodeId: null, // Don't do this
}

// ❌ ALSO WRONG
{
  id: 'response-end',
  text: 'Goodbye',
  nextNodeId: undefined, // Don't do this either
}

// ✅ CORRECT
{
  id: 'response-end',
  text: 'Goodbye',
  // Omit nextNodeId field entirely - signals end of dialogue
}

// ✅ CORRECT (when dialogue continues)
{
  id: 'response-continue',
  text: 'Tell me more',
  nextNodeId: 'node-continue', // Only include when dialogue continues
}
```

**See:** `common_type_errors.md` - Error 2 for detailed explanation

---

### Error 3: Duplicate IDs

**Error message:**
```
(May not show as TypeScript error - found during runtime or build)
```

**Cause:** Scene IDs, learning point IDs, or quiz question IDs are duplicated

**Fix:**
```typescript
// ❌ WRONG - Generic IDs likely to conflict
scenes: [
  {
    id: 'scene-1', // Too generic
    // ...
  },
  {
    id: 'scene-1', // DUPLICATE!
    // ...
  }
]

// ✅ CORRECT - Namespaced, unique IDs
scenes: [
  {
    id: 'scene-ch1-1-opening', // Unique, descriptive
    // ...
  },
  {
    id: 'scene-ch1-2-decision', // Unique, descriptive
    // ...
  }
]
```

**ID Naming Conventions:**
- Scenes: `scene-ch[X]-[number]-[description]`
- Learning Points: `lp-ch[X]-[number]-[description]`
- Quizzes: `quiz-chapter-[X]-[adventure-name]`
- Questions: `q[number]` (within quiz scope)
- Chapters: `chapter-[X]-[adventure-name]`

**See:** `common_type_errors.md` - Error 4 for detailed explanation

---

### Error 4: Incorrect Question Types

**Error message:**
```
Type '"short-answer"' is not compatible with expected question structure
```

**Cause:** Using `short-answer` for questions that require reasoning/analysis

**Fix:**
```typescript
// ❌ WRONG - Short answer for reasoning
{
  question: 'Why did Scheherazade volunteer?',
  type: 'short-answer', // Can't evaluate reasoning
  correctAnswer: 'To save her people', // Many valid phrasings won't match
}

// ✅ CORRECT - Use multiple-choice for specific answers
{
  question: 'Why did Scheherazade volunteer to marry the Sultan?',
  type: 'multiple-choice',
  options: [
    'To save other women from execution',
    'To become queen',
    'To seek revenge',
    'To escape her father'
  ],
  correctAnswer: 'To save other women from execution',
  relatedLearningPoints: ['lp-motivation'],
}

// ✅ CORRECT - Use self-assessment for analysis
{
  question: 'Analyze how Scheherazade\'s storytelling transforms the Sultan.',
  type: 'self-assessment',
  points: 20,
  modelAnswer: 'Detailed model answer...',
  assessmentCriteria: [
    {
      id: 'crit1',
      text: 'Discussed the Sultan\'s transformation',
      points: 7,
    },
    // ... more criteria
  ],
  relatedLearningPoints: ['lp-transformation'],
}

// ✅ CORRECT - Short-answer for exact terms only
{
  question: 'What was the name of the vizier\'s daughter?',
  type: 'short-answer',
  correctAnswer: 'Scheherazade', // Only one correct spelling
  relatedLearningPoints: ['lp-characters'],
}
```

**See:** `common_type_errors.md` - Error 3 for detailed explanation

---

## Fixing Build Errors

### Build Process Overview

The `npm run build` command runs two steps:
1. `tsc -b` - TypeScript compilation
2. `vite build` - Bundle for production

**If build fails:**

#### Step 1: Check TypeScript Errors
```bash
npx tsc -b --force
```

Fix all TypeScript errors first. The build cannot proceed with type errors.

#### Step 2: Check for Missing Assets
```
Error: Could not load /assets/your-adventure/missing-image.png
```

**Solution:** Verify all asset paths in your code match actual files in `public/assets/`

#### Step 3: Check for Import Errors
```
Error: Cannot find module '../quizzes/chapter-1-quiz'
```

**Solution:** Verify all import paths are correct and files exist

#### Step 4: Re-run Build
```bash
npm run build
```

---

## Pre-Commit Checklist

Before committing your work, verify:

### Automated Checks
```bash
# 1. Type check (must pass with no errors)
npx tsc -b --force

# 2. Lint check (no errors, warnings acceptable)
npm run lint

# 3. Build check (must complete successfully)
npm run build
```

### Manual Verification

- [ ] All quiz questions have `relatedLearningPoints` field
- [ ] Terminal dialogue responses omit `nextNodeId` field
- [ ] No `short-answer` questions used for reasoning/analysis
- [ ] All IDs are unique and follow naming conventions
- [ ] All asset paths are correct and files exist
- [ ] All learning point IDs referenced in quizzes actually exist in scenes

---

## When You Get an Error

### TypeScript Error Workflow

1. **Read the error message carefully** - TypeScript errors are descriptive
   ```
   src/adventures/your-adventure/chapters/chapter-1.ts:45:7 - error TS2741:
   Property 'relatedLearningPoints' is missing in type...
   ```

2. **Identify the location** - File path and line number are shown
   ```
   chapter-1.ts:45:7
   ^^^^^^^^^^^^^^^^
   File: chapter-1.ts, Line: 45, Column: 7
   ```

3. **Check this guide** for common error patterns

4. **Check `common_type_errors.md`** for detailed explanations

5. **Look at existing adventures** - Arabian Nights and Dante's Inferno for correct examples

6. **Verify the type definition** in `src/types/adventure.ts` if still unclear

---

## Incremental Checking Strategy

**Don't wait until the end!** Check frequently:

### After Each Scene
```bash
# Quick type check
npx tsc -b --force
```

### After Each Chapter
```bash
# Full check
npx tsc -b --force
npm run lint
```

### Before Committing
```bash
# Complete verification
npx tsc -b --force
npm run lint
npm run build
```

### Before User Testing
```bash
# Production-ready check
npm run build
npm run preview  # Test the production build locally
```

---

## Type Definition References

If unsure about a type structure:

1. **`src/types/adventure.ts`** - Source of truth for all types
2. **`docs/SCENE_TYPES_REFERENCE.md`** - Detailed scene type documentation
3. **`docs/QUIZ_SYSTEM_REFERENCE.md`** - Detailed quiz type documentation
4. **`common_type_errors.md`** - Common errors and solutions

---

## Quick Reference Commands

```bash
# Type check
npx tsc -b --force

# Lint check
npm run lint

# Build for production
npm run build

# Preview production build
npm run preview

# Development server
npm run dev
```

---

## Remember

- TypeScript catches errors before they reach users
- Errors are easier to fix when caught early
- Run checks after each major change, not just at the end
- Build errors must be fixed before deployment
- All three checks (type, lint, build) should pass before user testing

---

**Next Step:** Once all automated checks pass, proceed to user testing (not covered in this guide).

---

**Version:** 1.0
**Last Updated:** October 2025
