# Claude Guide for Imsie Development

This guide provides essential information for AI assistants working on the Imsie educational adventure platform.

## Project Overview

**Imsie** is an interactive educational platform that teaches literature and history through narrative adventures. Each adventure contains chapters with multiple scene types, quizzes, and learning points.

**Current State:** Core platform complete with 10 scene types fully implemented. Arabian Nights adventure has 5 chapters (3 complete, 2 in progress).

---

## Quick Start for Chapter Creation

### File Structure
```
src/adventures/[adventure-name]/
├── chapters/
│   └── chapter-X-name.ts          # Chapter definition
├── quizzes/
│   └── chapter-X-quiz.ts          # Quiz questions
├── [adventure-name]_assets.md     # Asset documentation
└── ADVENTURE_OUTLINE.md           # Planning/roadmap
```

### Chapter Template
```typescript
import type { Chapter } from '../../../types';
import { chapterXQuiz } from '../quizzes/chapter-X-quiz';

export const chapterX: Chapter = {
  id: 'chapter-x-unique-id',
  title: 'Chapter Title',
  description: 'Brief 1-2 sentence summary',

  learningObjectives: [
    'Understand [concept]',
    'Analyze [theme]',
    'Recognize [technique]',
  ],

  scenes: [
    // 8-15 scenes (see Scene Types below)
  ],

  endQuiz: chapterXQuiz,
};
```

---

## Scene Types (All 10 Implemented ✅)

Quick reference - **see `docs/SCENE_TYPES_REFERENCE.md` for complete documentation**

### Story/Narrative Types
1. **`narrative`** - Text exposition with optional images/video/annotations
2. **`decision`** - Player choices with consequences (2-4 options)
3. **`dialogue`** - Branching conversations with characters

### Interactive/Game Types
4. **`map-exploration`** - Clickable map with locations to discover
5. **`quote-attribution`** - Identify who said famous quotes
6. **`timeline-game`** - Order events chronologically
7. **`cause-effect`** - Match causes with their effects
8. **`primary-source`** - Analyze historical documents/media
9. **`anachronism`** - Find items that don't belong in time period
10. **`custom-mini-game`** - Extensible registry for unique games

### Typical Chapter Flow
```
Narrative → Decision/Dialogue → Interactive Scene → Narrative → Quiz
(60-70% story scenes, 30-40% interactive scenes)
```

---

## Key Principles

### Educational Design
- **Learning Points:** Every scene must have 1-3 learning points
  - Categories: `historical-context`, `literary-technique`, `character-analysis`, `thematic-analysis`, etc.
  - Be specific and concise (1-2 sentences)

- **Learning Objectives:** 3-5 per chapter
  - Use action verbs: Understand, Analyze, Recognize, Explore
  - Must be measurable (testable in quiz)

### Content Guidelines
- **Scene count:** 8-15 scenes per chapter
- **Scene length:** 150-400 words for narrative scenes
- **Chapter duration:** 30-45 minutes total
- **Quiz:** 8-15 questions, 70% passing score recommended

### Writing Style
- Active voice and present tense
- Second person ("you") for player agency
- Clear, accessible language
- Educational but narrative-driven (70% story, 30% teaching)

---

## Scene Type Selection Guide

**For storytelling:**
- Opening/transitions → `narrative`
- Player choices → `decision`
- Character moments → `dialogue`

**For teaching concepts:**
- Introduction → `narrative` with annotations
- Analysis → `primary-source`
- Practice → Any interactive type

**For teaching relationships:**
- Causation → `cause-effect`
- Attribution → `quote-attribution`
- Chronology → `timeline-game`

**For spatial/visual:**
- Geography → `map-exploration`
- Historical accuracy → `anachronism`

---

## Asset Requirements

### Standard Sizes
| Type | Dimensions | Format |
|------|-----------|--------|
| Background | 1920x1080px | PNG/JPG |
| Scene Image | 600x400px | PNG/JPG |
| Character Portrait | 600x600px | PNG/JPG |
| Map | 1920x1080px | PNG/JPG |

### Video Support (Optional)
- Use `backgroundVideo`, `imageVideo`, `portraitVideo` fields
- 3-10 seconds, seamless looping
- MP4 with H.264 codec, <5MB

**Document all assets in `[adventure-name]_assets.md`**

---

## Quiz Creation

```typescript
export const chapterXQuiz: Quiz = {
  id: 'quiz-chapter-x',
  title: 'Chapter X Quiz',
  description: 'Test your knowledge...',
  passingScore: 70,
  allowRetry: true,

  questions: [
    {
      id: 'q1',
      question: 'Question text?',
      type: 'multiple-choice', // or 'true-false', 'short-answer', 'matching'
      points: 10,
      options: ['Option A', 'Option B', 'Option C', 'Option D'],
      correctAnswer: 'Option B',
      explanation: 'Why this is correct...',
      relatedLearningPoints: ['lp-1', 'lp-2'],
    },
    // More questions...
  ],
};
```

**Quiz Design:**
- Link questions to learning points from scenes
- Mix difficulty levels (start easy, build up)
- Provide educational explanations (teach, don't just grade)
- Use plausible distractors

---

## Common Patterns

### Progressive Difficulty
Chapter 1: Simple scenes (narrative, decision, quote-attribution)
Chapter 3: Complex scenes (dialogue, map-exploration, primary-source)

### Branching Stories
Use `nextSceneId` in decision choices to create parallel paths that eventually converge.

### Quiz Triggers
Add to last scene's `events.onExit`:
```typescript
events: {
  onExit: [{
    type: 'quiz',
    componentId: 'quiz-chapter-x',
    condition: { type: 'if-not-completed' },
  }],
}
```

---

## Essential Documentation

**Must reference when working on:**
- **Scene types** → `docs/SCENE_TYPES_REFERENCE.md` (complete structures & examples)
- **Chapter creation** → `docs/CHAPTER_AUTHORING_GUIDE.md` (detailed guide)
- **Inline annotations** → `docs/FEATURE_INLINE_ANNOTATIONS.md` (tooltip system)
- **Prerequisites** → `docs/CHAPTER_PREREQUISITES_EXAMPLES.md` (navigation patterns)
- **File structure** → `docs/ADVENTURE_FILE_STRUCTURE.md`

**Type definitions:** `src/types/adventure.ts` (source of truth)

---

## Checklist Before Finalizing a Chapter

- [ ] All IDs are unique across the adventure
- [ ] 8-15 scenes with varied types
- [ ] Every scene has learning points
- [ ] 3-5 learning objectives defined
- [ ] Quiz with 8-15 questions linking to learning points
- [ ] Assets documented in `_assets.md`
- [ ] Tested playthrough (no broken paths)
- [ ] Consistent tone and style
- [ ] Educational goals met

---

## Common Mistakes to Avoid

❌ Too many narrative scenes in a row (boring)
❌ Interactive scenes without clear instructions
❌ Decisions without meaningful consequences
❌ Missing learning points
❌ Quiz questions not linked to learning points
❌ Inconsistent IDs or duplicate IDs
❌ Missing asset documentation

---

## Example: Creating a New Chapter

1. **Plan** (use `ADVENTURE_OUTLINE.md`)
   - Define learning objectives
   - Outline story arc (setup → conflict → resolution)
   - Select appropriate scene types

2. **Write** content files
   - Create `chapters/chapter-X-name.ts`
   - Create `quizzes/chapter-X-quiz.ts`
   - Document assets in `_assets.md`

3. **Integrate** into adventure
   - Import chapter in main adventure file
   - Add to `chapters` array
   - Test navigation and prerequisites

4. **Test** thoroughly
   - Play through entire chapter
   - Verify quiz scoring
   - Check asset loading
   - Validate learning flow

---

## Helper Utilities

Import from `src/utils/sceneHelpers.ts`:
- `shuffleArray()` - Randomize arrays
- `calculateScore()` - Percentage scoring
- `normalizeString()` - String comparison
- `getScoreColor()` - Color by performance
- And more...

---

## Current Status

### Arabian Nights Adventure
- ✅ Chapter 1: Scheherazade (9 scenes, complete)
- ✅ Chapter 2: Merchant & Jinni (10 scenes, complete)
- ✅ Chapter 3: Aladdin (15 scenes, complete)
- 🚧 Chapter 4: Ali Baba (in progress)
- 🚧 Chapter 5: Sinbad (in progress)
- 📋 Final Quiz (defined but needs expansion)

### Platform Features
- ✅ All 10 scene types implemented
- ✅ Quiz system with multiple question types
- ✅ Progress tracking (IndexedDB)
- ✅ Asset caching
- ✅ Music player
- ✅ Export/import progress
- ⏳ Achievement system (types exist, not implemented)
- ⏳ Settings/preferences (not implemented)

---

## Development Workflow

When asked to create/modify chapters:

1. **Reference documentation first** - Always check relevant docs
2. **Follow established patterns** - Review existing chapters as examples
3. **Validate types** - Ensure TypeScript compliance
4. **Document assets** - Update `_assets.md` with any new assets needed
5. **Test interactively** - Consider the player experience
6. **Educational focus** - Prioritize learning alongside narrative

---

*Last Updated: October 2025*
*Platform Version: 1.0 - All scene types implemented*
