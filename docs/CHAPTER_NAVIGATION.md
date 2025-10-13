# Chapter Navigation System

## Overview

The chapter navigation system allows users to navigate between chapters in an adventure while enforcing completion requirements. Chapters must be completed in order before subsequent chapters can be accessed.

## Features

### 1. Chapter Selection Menu
- Accessed via the "Chapters" button in the top-right controls
- Shows all chapters with visual status indicators
- Displays progress for each chapter (scenes completed)
- Available during scenes, quizzes, and quiz results

### 2. Completion Blocking
- **First chapter**: Always unlocked
- **Subsequent chapters**: Only unlocked after previous chapter is completed
- Locked chapters show 🔒 icon and "Complete previous chapter to unlock" message
- Cannot click or select locked chapters

### 3. Chapter Status Display

Each chapter shows:
- **Locked** (🔒): Previous chapter not completed
- **Unlocked**: Available to play
- **Current**: Currently playing (highlighted with theme color)
- **Completed** (✓): Chapter fully completed

### 4. Progress Tracking

For each unlocked chapter:
- Progress bar showing X/Y scenes completed
- Percentage completion visualization
- Status badge (Currently Playing, Completed, etc.)

### 5. Smart Scene Selection

When switching chapters:
- **Current chapter**: Stays on current scene
- **Completed chapters**: Can replay from beginning
- **Partially played chapters**: Resumes from first incomplete scene

## Path Definition

### Simple Sequential (Default)

By default, chapters unlock sequentially without any configuration:

```typescript
const adventure: Adventure = {
  chapters: [
    { id: 'ch1', title: 'Chapter 1', ... },  // Always unlocked
    { id: 'ch2', title: 'Chapter 2', ... },  // Unlocks after ch1
    { id: 'ch3', title: 'Chapter 3', ... },  // Unlocks after ch2
  ]
}
```

### Advanced Prerequisites

For non-linear adventures, use the optional `prerequisites` field:

```typescript
interface ChapterPrerequisite {
  type: 'sequential' | 'any' | 'all';
  chapterIds?: string[];  // Required chapter IDs
}
```

## Access Pattern Examples

### One-to-One (Sequential - Default)
```typescript
{
  id: 'ch2',
  title: 'Chapter 2',
  // No prerequisites needed - defaults to sequential
  scenes: [...],
}
```

### One-to-Many (Branching Paths)
```typescript
// After Chapter 1, player can choose either path
{
  id: 'ch2a',
  title: 'Path of Light',
  prerequisites: {
    type: 'all',
    chapterIds: ['ch1']
  },
  scenes: [...],
},
{
  id: 'ch2b',
  title: 'Path of Shadow',
  prerequisites: {
    type: 'all',
    chapterIds: ['ch1']
  },
  scenes: [...],
}
```

### Many-to-One (Merge Point)
```typescript
// Chapter 3 unlocks after completing EITHER ch2a OR ch2b
{
  id: 'ch3',
  title: 'The Convergence',
  prerequisites: {
    type: 'any',
    chapterIds: ['ch2a', 'ch2b']
  },
  scenes: [...],
}
```

### Many-to-Many (Complex Dependencies)
```typescript
// Chapter 5 requires BOTH ch3 AND ch4 to be completed
{
  id: 'ch5',
  title: 'The Final Battle',
  prerequisites: {
    type: 'all',
    chapterIds: ['ch3', 'ch4']
  },
  scenes: [...],
}
```

### Mixed Example (Complete Branching Adventure)
```typescript
const adventure: Adventure = {
  chapters: [
    // Chapter 1: Always unlocked
    { id: 'ch1', title: 'Prologue', scenes: [...] },

    // One-to-Many: Two paths branch from ch1
    {
      id: 'ch2a',
      title: 'Eastern Quest',
      prerequisites: { type: 'all', chapterIds: ['ch1'] }
    },
    {
      id: 'ch2b',
      title: 'Western Quest',
      prerequisites: { type: 'all', chapterIds: ['ch1'] }
    },

    // Many-to-One: Merge point (complete either path)
    {
      id: 'ch3',
      title: 'Return Home',
      prerequisites: { type: 'any', chapterIds: ['ch2a', 'ch2b'] }
    },

    // Sequential: Must complete ch3
    { id: 'ch4', title: 'Preparation', scenes: [...] },

    // Many-to-Many: Requires both ch3 AND ch4
    {
      id: 'ch5',
      title: 'Epic Finale',
      prerequisites: { type: 'all', chapterIds: ['ch3', 'ch4'] }
    }
  ]
}
```

## Technical Implementation

### Components

**ChapterNavigation.tsx** (`src/components/adventure-engine/`)
- Modal overlay for chapter selection
- Status calculation and display
- Lock/unlock logic
- Progress visualization

### Progress Manager Integration

Uses existing progress tracking:
```typescript
interface AdventureProgress {
  completedChapters: string[];  // IDs of completed chapters
  completedScenes: string[];    // IDs of completed scenes
  currentChapterId: string;
  currentSceneId: string;
  ...
}
```

### Chapter Completion

Chapters are marked complete when:
1. All scenes in the chapter are completed
2. Chapter-end quiz is passed (if present)

Method: `progressManager.markChapterComplete(adventureId, chapterId)`

## Usage

### For Players

1. Click "Chapters" button (top-right)
2. View available chapters
3. Click unlocked chapter to jump to it
4. Complete chapters to unlock next ones

### For Content Creators

Simply define chapters in order in your adventure data:

```typescript
{
  id: 'arabian-nights',
  chapters: [
    chapter1,  // ← Always accessible
    chapter2,  // ← Unlocks after chapter1 complete
    chapter3,  // ← Unlocks after chapter2 complete
  ]
}
```

**That's it!** No additional configuration needed.

## UI Location

The "Chapters" button appears in three views:
1. **Scene view**: During normal gameplay
2. **Quiz view**: While taking quizzes
3. **Quiz results view**: After completing quizzes

This ensures players can always access chapter navigation.

## Design Features

- **Visual hierarchy**: Clear locked/unlocked states
- **Progress indicators**: Shows completion percentage
- **Hover effects**: Interactive feedback on clickable chapters
- **Responsive**: Works on all screen sizes
- **Themed**: Uses adventure's color scheme
- **Accessible**: Keyboard navigation supported

## Smart Lock Messages

The system automatically generates descriptive lock messages based on prerequisites:

### Sequential
```
"Complete previous chapter to unlock"
```

### Any (One Incomplete)
```
"Complete Chapter 2a to unlock"
```

### Any (Multiple Incomplete)
```
"Complete any: Chapter 2a or Chapter 2b"
```

### All (One Remaining)
```
"Complete Chapter 4 to unlock"
```

### All (Multiple Remaining)
```
"Complete all: Chapter 3, Chapter 4"
```

## Backward Compatibility

✅ **Fully backward compatible!**

Existing adventures without `prerequisites` field will continue to work exactly as before:
- First chapter always unlocked
- Subsequent chapters unlock sequentially
- No migration needed

## Future Enhancements

Possible improvements:
- [ ] Achievement-based chapter unlocks
- [ ] Chapter difficulty ratings
- [ ] Estimated time per chapter display
- [ ] Visual chapter map/graph for complex adventures
- [ ] Save branching choices (e.g., "You chose the Path of Light")
