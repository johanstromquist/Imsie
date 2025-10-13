# Adventure File Structure Guide

This guide explains how to organize multi-chapter adventures for maintainability and scalability.

## Recommended Structure

```
src/adventures/your-adventure-name/
├── index.ts                      # Main adventure export (assembles everything)
├── theme.ts                      # Shared theme, colors, fonts, music
├── chapters/
│   ├── chapter-1-name.ts        # Individual chapter files
│   ├── chapter-2-name.ts
│   ├── chapter-3-name.ts
│   └── ...
├── quizzes/
│   ├── chapter-1-quiz.ts        # Chapter-specific quizzes
│   ├── chapter-2-quiz.ts
│   └── final-quiz.ts            # Final comprehensive quiz
├── assets/                       # Optional: Local asset references
│   └── asset-urls.ts
└── ADVENTURE_OUTLINE.md          # Planning document
```

## Why This Structure?

### ✅ Benefits

1. **Maintainability**: Each chapter is self-contained and easy to update
2. **Collaboration**: Multiple people can work on different chapters simultaneously
3. **Code Review**: Changes to one chapter don't affect others
4. **Testing**: Test individual chapters in isolation
5. **Lazy Loading**: Potential for future code-splitting by chapter
6. **Organization**: Clear separation of concerns

### ❌ Avoid Single File

Don't put everything in `index.ts`:
- 5 chapters × 10 scenes each = 50+ scenes in one file
- Hard to navigate (thousands of lines)
- Difficult to review changes
- Merge conflicts when collaborating

## File Templates

### 1. `theme.ts` - Shared Theme

```typescript
import type { AdventureTheme } from '../../types';

export const yourAdventureTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',
  secondaryColor: '#d4af37',
  fontFamily: '"Your Font", serif',
  backgroundMusic: '/assets/your-adventure/music/theme.mp3',
};

export const musicPlaylist = [
  '/assets/your-adventure/music/track-1.mp3',
  '/assets/your-adventure/music/track-2.mp3',
];
```

### 2. `chapters/chapter-X.ts` - Chapter File

```typescript
import type { Chapter } from '../../../types';
import { chapterXQuiz } from '../quizzes/chapter-x-quiz';

export const chapterX: Chapter = {
  id: 'chapter-x-unique-id',
  title: 'Chapter X: Title',
  description: 'Brief chapter description',

  // Optional: Custom prerequisites
  // prerequisites: { type: 'sequential' },

  learningObjectives: [
    'Objective 1',
    'Objective 2',
  ],

  scenes: [
    // Your scenes here
  ],

  endQuiz: chapterXQuiz,
};
```

### 3. `quizzes/chapter-x-quiz.ts` - Quiz File

```typescript
import type { Quiz } from '../../../types';

export const chapterXQuiz: Quiz = {
  id: 'quiz-chapter-x',
  title: 'Chapter X Quiz',
  description: 'Test your knowledge',
  passingScore: 70,
  allowRetry: true,
  questions: [
    // Your questions here
  ],
};
```

### 4. `index.ts` - Main Assembly File

```typescript
import type { Adventure } from '../../types';
import { yourAdventureTheme, musicPlaylist } from './theme';
import { chapter1 } from './chapters/chapter-1-name';
import { chapter2 } from './chapters/chapter-2-name';
import { chapter3 } from './chapters/chapter-3-name';
import { finalQuiz } from './quizzes/final-quiz';

export const yourAdventure: Adventure = {
  id: 'your-adventure-id',
  title: 'Your Adventure Title',
  description: 'Brief adventure description',
  estimatedTime: 120, // minutes
  coverArt: 'https://your-cover-art.png',
  coverVideo: 'https://your-cover-video.mp4', // optional

  theme: yourAdventureTheme,
  musicPlaylist,

  chapters: [
    chapter1,
    chapter2,
    chapter3,
    // Add more chapters as you build them
  ],

  finalQuiz,
};
```

## Scene Type Examples in Chapters

### Narrative Scene
```typescript
{
  id: 'scene-1',
  type: 'narrative',
  backgroundImage: 'https://...',
  image: 'https://...',
  content: `Your narrative text here...`,
  learningPoints: [...]
}
```

### Decision Scene
```typescript
{
  id: 'scene-decision',
  type: 'decision',
  backgroundImage: 'https://...',
  prompt: 'What will you do?',
  context: 'Additional context...',
  timeLimit: 30, // optional
  choices: [
    {
      id: 'choice-a',
      text: 'Option A',
      consequence: 'Result of choice A',
      learningPoints: [...]
    },
    // More choices...
  ],
  learningPoints: []
}
```

### Dialogue Scene
```typescript
{
  id: 'scene-dialogue',
  type: 'dialogue',
  backgroundImage: 'https://...',
  character: {
    id: 'character-id',
    name: 'Character Name',
    portrait: 'https://...',
    description: 'Character description'
  },
  dialogueTree: {
    id: 'node-1',
    speaker: 'character-id',
    text: 'Character says...',
    responses: [
      {
        id: 'resp-1',
        text: 'Player response',
        nextNodeId: 'node-2'
      }
    ]
  },
  learningPoints: []
}
```

### Map Exploration Scene
```typescript
{
  id: 'scene-map',
  type: 'map-exploration',
  backgroundImage: 'https://...',
  mapImage: 'https://your-map.png',
  prompt: 'Explore the map...',
  locations: [
    {
      id: 'loc-1',
      name: 'Location Name',
      x: 25, // percentage from left
      y: 50, // percentage from top
      content: 'Content revealed when clicked',
      image: 'https://...' // optional
    },
    // More locations...
  ],
  requiredLocations: ['loc-1', 'loc-2'], // optional
  learningPoints: []
}
```

## Workflow: Adding a New Chapter

1. **Create chapter file**: `chapters/chapter-X-name.ts`
2. **Create quiz file**: `quizzes/chapter-x-quiz.ts`
3. **Import in index.ts**: Add to chapters array
4. **Test**: Verify it appears in chapter navigation
5. **Iterate**: Add scenes, refine quiz questions

## Tips

### Development Flow
```bash
# 1. Create chapter stub with 1-2 scenes
# 2. Test in browser
# 3. Add more scenes iteratively
# 4. Add quiz questions as you go
# 5. Review and polish
```

### Keep Chapters Focused
- 8-12 scenes per chapter is ideal
- Each scene = 1-3 minutes of content
- Mix scene types for variety
- End with quiz to reinforce learning

### Reusable Assets
If you have shared assets or constants:

```typescript
// assets/asset-urls.ts
export const BACKGROUNDS = {
  palace: 'https://...',
  desert: 'https://...',
};

export const CHARACTERS = {
  hero: 'https://...',
  villain: 'https://...',
};
```

Then import in chapters:
```typescript
import { BACKGROUNDS, CHARACTERS } from '../assets/asset-urls';

// Use in scenes
backgroundImage: BACKGROUNDS.palace,
image: CHARACTERS.hero,
```

## Migration: Single File → Modular

If you have an existing single-file adventure:

1. Create the directory structure
2. Extract theme to `theme.ts`
3. Extract each chapter to separate file
4. Extract quizzes to `quizzes/` folder
5. Update `index.ts` to import everything
6. Test thoroughly
7. Delete old monolithic file

## Example: Arabian Nights

See `src/adventures/arabian-nights/` for a complete example of this structure in action.

```
arabian-nights/
├── index.ts                          # Assembles adventure
├── theme.ts                          # Theme + music playlist
├── chapters/
│   ├── chapter-1-scheherazade.ts    # Frame story
│   ├── chapter-2-merchant.ts        # The Merchant and the Jinni
│   ├── chapter-3-aladdin.ts         # Aladdin's tale
│   └── ...
├── quizzes/
│   ├── chapter-1-quiz.ts
│   ├── chapter-2-quiz.ts
│   └── final-quiz.ts
└── ADVENTURE_OUTLINE.md              # Planning doc
```

## Summary

✅ **DO**: Separate chapters into individual files
✅ **DO**: Keep related code together (chapter + its quiz)
✅ **DO**: Use descriptive file names
✅ **DO**: Add comments explaining chapter themes

❌ **DON'T**: Put everything in one huge file
❌ **DON'T**: Mix multiple chapters in one file
❌ **DON'T**: Forget to export from index.ts

This structure scales beautifully from 1 chapter to 100+ chapters!
