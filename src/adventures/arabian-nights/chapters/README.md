# Arabian Nights Chapters

This directory contains individual chapter files for the Arabian Nights adventure.

## Chapter Overview

### ✅ Chapter 1: The Tale of Scheherazade
**File**: `chapter-1-scheherazade.ts`
**Status**: Complete
**Scenes**: 9 narrative scenes
**Quiz**: 10 questions (complete)
**Theme**: The framing story - storytelling as survival and transformation

### 🚧 Chapter 2: The Merchant and the Jinni
**File**: `chapter-2-merchant.ts`
**Status**: Template only (needs content)
**Planned Scenes**: 8-10 scenes
**Story**: Merchant accidentally kills jinni's son, three sheikhs tell tales to save him
**Scene Types**: Narrative, Decision, Dialogue

### ✅ Chapter 3: Aladdin and the Magic Lamp
**File**: `chapter-3-aladdin.ts`
**Status**: Scaffolding complete (needs images & content)
**Scenes**: 15 scenes
**Quiz**: 10 questions (complete)
**Story**: Aladdin's journey from poverty to royalty via magic lamp
**Scene Types**: Narrative, Decision, Dialogue

### ✅ Chapter 4: Ali Baba and the Forty Thieves
**File**: `chapter-4-ali-baba.ts`
**Status**: Scaffolding complete (needs images & content)
**Scenes**: 20 scenes
**Quiz**: 10 questions (complete)
**Story**: Ali Baba discovers thieves' cave, "Open Sesame", Morgiana's cleverness
**Scene Types**: Narrative, Decision

### ✅ Chapter 5: Sinbad's Voyages
**File**: `chapter-5-sinbad.ts`
**Status**: Scaffolding complete (needs images & content)
**Scenes**: 21 scenes
**Quiz**: 10 questions (complete)
**Story**: Selected voyages - living island, Roc's egg, Valley of Diamonds, one-eyed giant
**Scene Types**: Narrative, Decision

## Adding a New Chapter

1. Copy `chapter-2-merchant.ts` as a template
2. Rename to `chapter-X-name.ts`
3. Update all IDs and content
4. Create corresponding quiz in `../quizzes/`
5. Import in `../index.ts`
6. Update this README

## File Naming Convention

- Use kebab-case: `chapter-X-descriptive-name.ts`
- Start with chapter number for sorting
- Use descriptive names from the story
- Examples: `chapter-3-aladdin.ts`, `chapter-4-ali-baba.ts`

## Scene ID Convention

Within each chapter, use prefixed IDs:
- `scene-1-introduction`
- `scene-2-conflict`
- `scene-3-resolution`

This prevents ID collisions across chapters.
