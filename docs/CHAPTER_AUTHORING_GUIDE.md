# Chapter Authoring Guide

This comprehensive guide explains how to create new chapters for Imsie adventures, based on the Arabian Nights implementation.

## Table of Contents
1. [Overview](#overview)
2. [Chapter Structure](#chapter-structure)
3. [Scene Types](#scene-types)
4. [Asset Management](#asset-management)
5. [Quiz Creation](#quiz-creation)
6. [Learning Design](#learning-design)
7. [Prerequisites & Navigation](#prerequisites--navigation)
8. [Best Practices](#best-practices)
9. [Not Yet Implemented](#not-yet-implemented)

---

## Overview

A **chapter** is a self-contained unit of an adventure containing:
- 8-15 scenes (narrative beats)
- Educational learning points
- An end-of-chapter quiz
- Visual and audio assets
- Optional prerequisites

Chapters follow a three-act structure: setup → conflict → resolution, with educational content woven throughout.

### File Organization

```
src/adventures/[adventure-name]/
├── chapters/
│   ├── chapter-1-name.ts          # Chapter definition
│   ├── chapter-2-name.ts
│   └── ...
├── quizzes/
│   ├── chapter-1-quiz.ts          # Quiz definitions
│   ├── chapter-2-quiz.ts
│   └── ...
├── [adventure-name]_assets.md     # Asset documentation
└── ADVENTURE_OUTLINE.md           # Planning document
```

---

## Chapter Structure

### Minimum Required Fields

```typescript
import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1-unique-id',              // Unique identifier
  title: 'Chapter Title',                 // Display name
  description: 'Brief chapter summary',   // 1-2 sentences

  learningObjectives: [                   // 3-5 educational goals
    'Understand X concept',
    'Analyze Y theme',
    'Recognize Z technique',
  ],

  scenes: [                               // 8-15 scene objects
    // Scene definitions here
  ],

  endQuiz: chapter1Quiz,                  // Reference to quiz
};
```

### Optional Fields

```typescript
prerequisites: {
  type: 'sequential' | 'any' | 'all',
  chapterIds: ['chapter-1-id', 'chapter-2-id'], // Required for 'any' and 'all'
}
```

See `docs/CHAPTER_PREREQUISITES_EXAMPLES.md` for detailed prerequisite patterns.

---

## Scene Types

Imsie supports multiple scene types. Each serves a different educational and narrative purpose.

### 1. Narrative Scene ✅ IMPLEMENTED

**Purpose**: Story exposition, character development, setting establishment

**When to use**:
- Opening scenes
- Transitional moments
- Climactic reveals
- Educational context

**Structure**:
```typescript
{
  id: 'scene-1-introduction',
  type: 'narrative',
  backgroundImage: 'https://path-to-image.png',
  backgroundVideo: 'https://path-to-video.mp4',  // Optional
  image: 'https://path-to-scene-image.png',      // Optional
  imageVideo: 'https://path-to-video.mp4',       // Optional
  narration: 'path/to/audio.mp3',                // Optional

  content: `Your narrative text here.

  Supports multiple paragraphs.

  Can be as long as needed for the story beat.`,

  continueButtonText: 'Next',  // Optional, defaults to "Continue"

  inlineAnnotations: [         // Optional, see below
    {
      id: 'annotation-1',
      text: 'word or phrase to highlight',
      tooltip: {
        title: 'Tooltip Header',
        content: 'Explanation or context',
        category: 'historical-context', // or 'literary-context', 'cultural-context', 'vocabulary', 'reference'
      },
    },
  ],

  learningPoints: [
    {
      id: 'lp-1-unique-id',
      content: 'Educational takeaway from this scene',
      category: 'historical-context', // or 'literary-technique', 'character-analysis', etc.
    },
  ],

  events: {                    // Optional event triggers
    onEnter: [],
    onExit: [
      {
        type: 'quiz',
        componentId: 'quiz-chapter-1',
        condition: {
          type: 'if-not-completed',
        },
      },
    ],
  },
}
```

**Inline Annotations**: See `docs/FEATURE_INLINE_ANNOTATIONS.md` for full details on implementing contextual learning tooltips.

### 2. Decision Scene ✅ IMPLEMENTED

**Purpose**: Player agency, branching narratives, moral choices

**When to use**:
- Character-defining moments
- Moral dilemmas
- Strategic choices
- Testing comprehension

**Structure**:
```typescript
{
  id: 'scene-3-decision',
  type: 'decision',
  backgroundImage: 'https://path-to-image.png',

  prompt: 'The main question or situation',
  context: 'Additional context to help frame the decision (1-2 paragraphs)',

  timeLimit: 30,  // Optional, seconds

  choices: [
    {
      id: 'choice-1',
      text: 'First option text',
      consequence: 'What happens if they choose this (shown after selection)',
      learningPoints: [  // Optional, choice-specific learning
        {
          id: 'lp-choice-1',
          content: 'What this choice teaches',
          category: 'character-development',
        },
      ],
      nextSceneId: 'scene-4a',  // Optional, for true branching
    },
    {
      id: 'choice-2',
      text: 'Second option text',
      consequence: 'Result of this choice',
    },
    // 2-4 choices total
  ],

  learningPoints: [],  // Scene-level learning points
}
```

**Note on Branching**: Currently, different `nextSceneId` values create parallel story paths that must eventually converge. True multi-ending stories are not yet supported but the structure allows for it.

### 3. Dialogue Scene ✅ IMPLEMENTED

**Purpose**: Character interaction, revealing personality, player engagement

**When to use**:
- Important conversations
- Character development
- Revealing backstory
- Testing understanding

**Structure**:
```typescript
{
  id: 'scene-7-dialogue',
  type: 'dialogue',
  backgroundImage: 'https://path-to-image.png',

  character: {
    id: 'character-name',
    name: 'Display Name',
    portrait: 'https://path-to-portrait.png',
    portraitVideo: 'https://path-to-video.mp4',  // Optional
    description: 'Brief character description',
  },

  dialogueTree: {
    id: 'node-1',
    speaker: 'character-name',  // or 'player'
    text: 'What the character says',
    audio: 'path/to/audio.mp3',  // Optional

    responses: [
      {
        id: 'response-1',
        text: 'Player response option 1',
        nextNodeId: 'node-2',
        requiresCondition: 'some-flag',  // Optional
        learningPoints: [],  // Optional
      },
      // More response options
    ],

    nextNodeId: 'node-2',  // If no responses (linear dialogue)

    allNodes: [
      // All other dialogue nodes defined here
      {
        id: 'node-2',
        speaker: 'character-name',
        text: 'Response to player choice',
        responses: [...],
        isEnd: true,  // If this is a terminal node
      },
    ],
  },

  learningPoints: [],
}
```

**Dialogue Design Tips**:
- Keep individual text blocks to 2-3 sentences
- Provide 2-4 response options per node
- Create at least 3-4 layers of conversation depth
- Use `isEnd: true` on terminal nodes
- Linear dialogue (no responses) is fine for cutscenes

### 4. Map Exploration Scene ✅ IMPLEMENTED

**Purpose**: Interactive exploration, spatial learning, discovery

**When to use**:
- Geographic education
- Treasure hunts
- Journey visualization
- Exploring complex environments

**Structure**:
```typescript
{
  id: 'scene-map-exploration',
  type: 'map-exploration',
  backgroundImage: 'https://path-to-image.png',

  mapImage: 'https://path-to-map.png',  // The main map
  prompt: 'Explore the map to discover...',

  locations: [
    {
      id: 'location-1',
      name: 'Location Name',
      x: 25,  // Percentage from left (0-100)
      y: 30,  // Percentage from top (0-100)
      content: 'What the player learns when clicking this location',
      image: 'https://path-to-detail-image.png',  // Optional
      unlockCondition: 'location-2-visited',  // Optional
    },
    // More locations
  ],

  requiredLocations: ['location-1', 'location-3'],  // Optional

  learningPoints: [],
}
```

**Map Design Tips**:
- Use clear, labeled maps with distinct regions
- Place 4-8 clickable locations
- Provide meaningful content at each location
- Consider required locations for pacing
- Make hotspot areas large enough (20-30px radius)

### 5-9. Not Yet Implemented ⚠️

The following scene types are defined in the type system but not yet implemented:

- **Timeline Game**: Order events chronologically
- **Primary Source**: Analyze documents/artifacts
- **Cause-Effect**: Match causes with effects
- **Quote Attribution**: Identify speakers
- **Anachronism**: Find historical inaccuracies
- **Custom Mini-Game**: Extensible game framework

See [Not Yet Implemented](#not-yet-implemented) for details on what's needed to build these.

---

## Asset Management

### Asset Documentation File

Create `[adventure-name]_assets.md` alongside your chapters:

```markdown
# Adventure Name - Asset Requirements

## Cover Art
- **File**: `public/assets/adventure-name/cover.png`
- **Dimensions**: 800x1200px
- **Prompt**: [Midjourney/DALL-E prompt]

## Background Images (1920x1080px)

### 1. Scene Name
- **File**: `public/assets/adventure-name/backgrounds/scene-bg.png`
- **Prompt**: [Detailed generation prompt]
- **Usage**: Scenes 1, 3, 5

### 2. Another Background
...

## Scene Illustrations (600x400px)

### 1. Character Portrait
- **File**: `public/assets/adventure-name/scenes/character.png`
- **Prompt**: [Generation prompt]
- **Usage**: Scene 4 (dialogue)

## Video Assets (Optional)

### Background Video
- **File**: `.../background-video.mp4`
- **Duration**: 5 seconds looping
- **Description**: Animated version of static background

## Music & Audio

### Background Music
- **File**: `.../music/theme.mp3`
- **Style**: [Musical description]
- **Loop**: Yes

## Color Palette
- Primary: #hexcode
- Secondary: #hexcode
- Accent: #hexcode
```

### Asset Types and Sizes

| Asset Type | Dimensions | Format | Purpose |
|------------|-----------|---------|----------|
| Cover Art | 800x1200px | PNG/JPG | Adventure selection |
| Background | 1920x1080px | PNG/JPG | Scene backgrounds |
| Scene Image | 600x400px | PNG/JPG | Narrative illustrations |
| Character Portrait | 600x600px | PNG/JPG | Dialogue scenes |
| Map | 1920x1080px | PNG/JPG | Map exploration |
| Background Video | 1920x1080px | MP4 | Animated backgrounds |
| Portrait Video | 600x600px | MP4 | Animated portraits |
| Music | Variable | MP3 | Background music |
| Narration | Variable | MP3 | Voice narration |

### Video Assets (New Feature ✨)

Chapters 3 includes video support:

```typescript
backgroundVideo: 'https://path-to-video.mp4',  // Replaces static background
imageVideo: 'https://path-to-video.mp4',       // Replaces static image
portraitVideo: 'https://path-to-video.mp4',    // Animated character portrait
```

**Video Guidelines**:
- Keep videos short (3-10 seconds)
- Design for seamless looping
- Provide fallback static images
- Use MP4 format with H.264 codec
- Optimize for web (target < 5MB per video)

---

## Quiz Creation

### Quiz Structure

Create quizzes in `quizzes/chapter-name-quiz.ts`:

```typescript
import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1',
  title: 'Chapter 1: Title Quiz',
  description: 'Test your knowledge of...',
  passingScore: 70,  // Percentage required to pass
  allowRetry: true,   // Can the player retake it?

  questions: [
    // 8-15 questions
  ],
};
```

### Question Types

#### Multiple Choice
```typescript
{
  id: 'q1',
  question: 'The question text?',
  type: 'multiple-choice',
  points: 10,
  options: [
    'Option A',
    'Option B',
    'Option C',
    'Option D',
  ],
  correctAnswer: 'Option B',
  explanation: 'Why this is correct and others are wrong.',
  relatedLearningPoints: ['lp-1', 'lp-2'],
}
```

#### True/False
```typescript
{
  id: 'q2',
  question: 'Statement to evaluate as true or false.',
  type: 'true-false',
  points: 10,
  options: ['True', 'False'],
  correctAnswer: 'True',
  explanation: 'Explanation of the correct answer.',
  relatedLearningPoints: ['lp-3'],
}
```

#### Short Answer (Not Yet Fully Tested)
```typescript
{
  id: 'q3',
  question: 'Open-ended question?',
  type: 'short-answer',
  points: 10,
  correctAnswer: 'Expected answer or keywords',  // String or array
  explanation: 'Model answer and why it matters.',
  relatedLearningPoints: ['lp-4'],
}
```

#### Matching (Not Yet Fully Tested)
```typescript
{
  id: 'q4',
  question: 'Match the following items:',
  type: 'matching',
  points: 10,
  correctAnswer: {
    'Term 1': 'Definition A',
    'Term 2': 'Definition B',
    'Term 3': 'Definition C',
  },
  explanation: 'Explanation of the correct pairings.',
  relatedLearningPoints: ['lp-5'],
}
```

### Quiz Design Best Practices

1. **Difficulty Curve**: Start easier, increase difficulty
2. **Bloom's Taxonomy**: Mix recall, comprehension, analysis questions
3. **Related Learning Points**: Always link questions to specific learning points
4. **Clear Explanations**: Every answer should teach, not just grade
5. **Distractor Quality**: Wrong answers should be plausible, not obviously false
6. **Question Count**: 8-15 questions per chapter
7. **Passing Score**: 70% is recommended for educational content

### Quiz Triggers

Trigger quizzes at chapter end using scene events:

```typescript
events: {
  onExit: [
    {
      type: 'quiz',
      componentId: 'quiz-chapter-1',
      condition: {
        type: 'if-not-completed',
      },
    },
  ],
}
```

---

## Learning Design

### Learning Points

Learning points are the educational "atoms" of your chapter.

**Categories**:
- `historical-context`: Historical facts and background
- `literary-technique`: Writing craft and structure
- `character-analysis`: Character development and psychology
- `thematic-analysis`: Themes, symbols, meanings
- `plot-structure`: Narrative structure and pacing
- `cultural-context`: Cultural customs and worldview
- `narrative-structure`: Story framing and organization
- `symbolism`: Symbolic meanings
- `character-development`: Growth and change
- `foreshadowing`: Hints at future events

**Best Practices**:
1. **Be Specific**: "The cliffhanger technique keeps audiences engaged" not "Stories are interesting"
2. **Be Concise**: 1-2 sentences max
3. **Be Actionable**: What should the learner take away?
4. **ID Convention**: Use descriptive IDs like `lp-ch2-15` or `lp-choice-trust`
5. **Progression**: Build concepts across scenes
6. **Reinforcement**: Reference learning points in quiz questions

### Learning Objectives

Chapter-level objectives should:
- Use action verbs (Understand, Analyze, Recognize, Explore)
- Be measurable (quizzable)
- Align with quiz questions
- Cover different cognitive levels
- Number 3-5 per chapter

**Example**:
```typescript
learningObjectives: [
  'Understand the tale-within-tale narrative structure',
  'Explore themes of justice, mercy, and redemption',
  'Analyze how stories can be used as bargaining tools',
  'Recognize the framing device used throughout Arabian Nights',
]
```

### Educational Pacing

**Scene 1-3**: Setup and context
- Introduce concepts gently
- Build vocabulary
- Establish setting/characters

**Scene 4-8**: Development and complexity
- Deepen understanding
- Introduce challenges
- Apply concepts

**Scene 9-12**: Synthesis and conclusion
- Connect ideas
- Meta-analysis
- Prepare for assessment

---

## Prerequisites & Navigation

### Sequential (Default)

If no `prerequisites` field is provided, chapters unlock sequentially:

```typescript
// Chapter 2 requires Chapter 1 completion (default behavior)
export const chapter2: Chapter = {
  id: 'chapter-2',
  title: 'Chapter 2',
  // No prerequisites field needed
}
```

### Explicit Prerequisites

```typescript
prerequisites: {
  type: 'sequential',  // Previous chapter must be complete
}

prerequisites: {
  type: 'all',
  chapterIds: ['chapter-1', 'chapter-2'],  // All must be complete
}

prerequisites: {
  type: 'any',
  chapterIds: ['chapter-2', 'chapter-3'],  // At least one must be complete
}
```

See `docs/CHAPTER_PREREQUISITES_EXAMPLES.md` for complex patterns like:
- Branching storylines
- Hub-and-spoke
- Parallel tracks
- Gated finales

---

## Best Practices

### Story Structure

1. **Hook Early**: First scene should grab attention
2. **Build Tension**: Gradually increase stakes
3. **Payoff**: Deliver satisfying conclusions
4. **Callbacks**: Reference earlier scenes
5. **Cliffhangers**: Last scene can tease next chapter

### Scene Length

- **Narrative**: 150-400 words per scene
- **Decision**: 50-150 words context
- **Dialogue**: 20-40 words per node
- **Total Chapter**: 2000-4000 words

### Educational Balance

- **70% Story / 30% Learning**: Education through narrative
- **Show Don't Tell**: Demonstrate concepts in action
- **Multiple Exposures**: Revisit key concepts 3+ times
- **Varied Formats**: Mix scene types for engagement

### Technical Considerations

1. **IDs Must Be Unique**: Across entire adventure
2. **Asset Paths**: Use full URLs or relative paths consistently
3. **Learning Point References**: IDs must match exactly in quizzes
4. **Test Early**: Play through your chapter before finalizing
5. **Accessibility**: Provide alt text in asset documentation

### Writing Style

- **Active Voice**: "Scheherazade told stories" not "Stories were told by Scheherazade"
- **Present Tense Narration**: Makes it immediate
- **Second Person for Decision**: "You must choose..." involves the player
- **Consistent Tone**: Match the adventure's overall voice

---

## Not Yet Implemented

The following features are defined in types but not yet built:

### Scene Types Needing Implementation

#### Timeline Game Scene
**What it needs**:
- Drag-and-drop interface component
- Timeline visualization
- Scoring algorithm based on ordering accuracy
- Component: `src/components/mini-games/TimelineGameScene.tsx`

**Type structure already exists**:
```typescript
{
  id: 'scene-timeline',
  type: 'timeline-game',
  prompt: 'Order these events chronologically',
  timelineEvents: [
    {
      id: 'event-1',
      title: 'Event Name',
      year: 1850,
      description: 'What happened',
      image: 'optional-image.png',
    },
  ],
  successThreshold: 75,  // % correct needed
}
```

#### Primary Source Scene
**What it needs**:
- Document viewer component
- Image/audio/video player
- Question renderer for analysis
- Component: `src/components/mini-games/PrimarySourceScene.tsx`

**Type structure already exists** - see `src/types/adventure.ts`

#### Cause-Effect Scene
**What it needs**:
- Matching interface (drag-drop or click)
- Pair validation logic
- Explanation reveal system
- Component: `src/components/mini-games/CauseEffectScene.tsx`

#### Quote Attribution Scene
**What it needs**:
- Quote display component
- Multiple choice character selection
- Context/explanation system
- Component: `src/components/mini-games/QuoteAttributionScene.tsx`

#### Anachronism Scene
**What it needs**:
- Grid display of items
- Click-to-mark interaction
- Correct/incorrect reveal
- Component: `src/components/mini-games/AnachronismScene.tsx`

#### Custom Mini-Game Scene
**What it needs**:
- Component registry system
- Standard interface for game components
- Props passing mechanism
- Component: `src/components/mini-games/CustomMiniGameScene.tsx`

### System Features Needing Implementation

#### Achievement System
**Current State**: Type structure exists in `src/types/adventure.ts`

**What it needs**:
- Achievement definitions per adventure
- Unlock condition checking
- Toast/modal notification component
- Achievement gallery UI
- Integration with progress manager

#### Enhanced Statistics
**Current State**: Basic stats exist

**What it could add**:
- Per-scene time tracking
- Quiz analytics dashboard
- Popular choice visualization
- Learning style indicators

#### Settings and Preferences
**Current State**: Not implemented

**What it needs**:
- Settings modal component
- Volume controls
- Text size adjustment
- Auto-advance toggle
- Accessibility options

#### Hints and Help
**Current State**: Not implemented

**What it needs**:
- Context-sensitive hint system
- Glossary modal
- Historical context sidebars
- Optional "learn more" links

### Implementing New Scene Types

When ready to implement a new scene type:

1. Create component in `src/components/mini-games/[SceneType]Scene.tsx`
2. Import in `src/components/adventure-engine/SceneRenderer.tsx`
3. Add case to switch statement
4. Remove from "not yet implemented" section
5. Test thoroughly with example content
6. Update this documentation

---

## Example Chapter Outline Template

Use this as your starting point:

```typescript
/**
 * Chapter X: [Title]
 *
 * [Brief description of chapter's narrative and educational goals]
 */
export const chapterX: Chapter = {
  id: 'chapter-x-name',
  title: '[Chapter Title]',
  description: '[1-2 sentence summary]',

  prerequisites: {
    type: 'sequential',  // or 'all' / 'any' with chapterIds
  },

  learningObjectives: [
    '[Objective 1]',
    '[Objective 2]',
    '[Objective 3]',
  ],

  scenes: [
    // Scene 1: Introduction (narrative)
    // Scene 2: Development (narrative)
    // Scene 3: First choice (decision)
    // Scene 4-5: Consequences (narrative)
    // Scene 6: Character moment (dialogue)
    // Scene 7-8: Rising action (narrative)
    // Scene 9: Climax (decision or dialogue)
    // Scene 10: Resolution (narrative with quiz trigger)
  ],

  endQuiz: chapterXQuiz,
};
```

---

## Getting Help

- **Types Reference**: `src/types/adventure.ts` - Complete type definitions
- **Examples**: Review existing chapters 1-3 in Arabian Nights
- **Docs Folder**: Additional guides on specific features
- **Adventure Outline**: Your adventure's `ADVENTURE_OUTLINE.md` for planning

## Quick Checklist

Before finalizing a chapter:

- [ ] All IDs are unique
- [ ] 8-15 scenes with good pacing
- [ ] 3-5 learning objectives
- [ ] Learning points in each scene
- [ ] End-of-chapter quiz (8-15 questions)
- [ ] Quiz questions link to learning points
- [ ] Assets documented in _assets.md
- [ ] Prerequisites configured (if not sequential)
- [ ] Playtested start to finish
- [ ] Inline annotations where helpful
- [ ] Spell-checked and proofread
- [ ] Scene transitions feel smooth (0.5s default)

---

*Last Updated: October 2025*
*Version: 1.0*
