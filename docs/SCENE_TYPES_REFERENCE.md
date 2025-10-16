# Scene Types Reference

Complete guide to all available scene types in the Imsie educational adventure platform.

## Table of Contents
1. [Overview](#overview)
2. [Scene Type Inventory](#scene-type-inventory)
3. [Base Scene Properties](#base-scene-properties)
4. [Narrative Scene](#1-narrative-scene)
5. [Decision Scene](#2-decision-scene)
6. [Dialogue Scene](#3-dialogue-scene)
7. [Map Exploration Scene](#4-map-exploration-scene)
8. [Quote Attribution Scene](#5-quote-attribution-scene)
9. [Timeline Game Scene](#6-timeline-game-scene)
10. [Cause-Effect Scene](#7-cause-effect-scene)
11. [Primary Source Scene](#8-primary-source-scene)
12. [Anachronism Scene](#9-anachronism-scene)
13. [Custom Mini-Game Scene](#10-custom-mini-game-scene)
14. [Quick Reference Table](#quick-reference-table)
15. [Choosing the Right Scene Type](#choosing-the-right-scene-type)

---

## Overview

Imsie supports **10 distinct scene types**, each designed for specific educational and narrative purposes. All scenes share common base properties and can be enhanced with learning points, background media, and optional events.

### Implementation Status

✅ **All 10 scene types are fully implemented**

---

## Scene Type Inventory

| # | Type | ID | Purpose | Complexity | Typical Duration |
|---|------|----|---------|-----------:|---------------:|
| 1 | Narrative | `narrative` | Story exposition | Low | 2-3 min |
| 2 | Decision | `decision` | Player choices | Low | 1-2 min |
| 3 | Dialogue | `dialogue` | Conversations | Medium | 3-5 min |
| 4 | Map Exploration | `map-exploration` | Interactive maps | Medium | 3-5 min |
| 5 | Quote Attribution | `quote-attribution` | Identify speakers | Low | 2-4 min |
| 6 | Timeline Game | `timeline-game` | Order events | Medium | 3-5 min |
| 7 | Cause-Effect | `cause-effect` | Match pairs | Medium | 3-5 min |
| 8 | Primary Source | `primary-source` | Analyze documents | High | 5-8 min |
| 9 | Anachronism | `anachronism` | Find errors | Medium | 3-5 min |
| 10 | Custom Mini-Game | `custom-mini-game` | Extensible games | Variable | Variable |

---

## Base Scene Properties

All scene types extend the `BaseScene` interface:

```typescript
interface BaseScene {
  id: string;                    // Unique identifier
  type: SceneType;               // Scene type discriminator
  learningPoints: LearningPoint[]; // Educational takeaways
  backgroundImage?: string;      // Background image path
  backgroundVideo?: string;      // Optional animated background
  backgroundMusic?: string;      // Scene-specific music
  events?: SceneEvents;          // Optional event triggers
}
```

### Learning Points

Every scene should include relevant learning points:

```typescript
learningPoints: [
  {
    id: 'lp-unique-id',
    content: 'Educational insight or fact (1-2 sentences)',
    category: 'historical-context', // or literary-technique, etc.
  },
]
```

**Common Categories:**
- `historical-context` - Historical facts and background
- `literary-technique` - Writing craft and structure
- `character-analysis` - Character development
- `thematic-analysis` - Themes and symbolism
- `cultural-context` - Cultural customs
- `plot-structure` - Narrative structure

### Background Media

Support for both static and animated backgrounds:

```typescript
backgroundImage: 'https://path/to/image.png',   // Static background
backgroundVideo: 'https://path/to/video.mp4',   // Animated background (loops)
backgroundMusic: 'path/to/audio.mp3',           // Scene-specific audio
```

**Note:** If both `backgroundImage` and `backgroundVideo` are provided, the video takes precedence.

### Events System (Advanced)

Trigger quizzes or other interactions at scene boundaries:

```typescript
events: {
  onEnter: [
    // Triggers when entering the scene
  ],
  onExit: [
    {
      type: 'quiz',
      componentId: 'quiz-chapter-1',
      condition: { type: 'if-not-completed' },
    },
  ],
  onChoice: {
    'choice-id': [
      // Triggers after specific choice
    ],
  },
}
```

---

## 1. Narrative Scene

**Purpose:** Story exposition, character development, setting establishment

**Best for:**
- Opening scenes
- Transitional moments
- Climactic reveals
- Educational context delivery

### Structure

```typescript
{
  id: 'scene-narrative-1',
  type: 'narrative',

  // Media
  backgroundImage: 'https://path/to/background.png',
  backgroundVideo: 'https://path/to/video.mp4',    // Optional
  image: 'https://path/to/scene-image.png',        // Optional central image
  imageVideo: 'https://path/to/scene-video.mp4',   // Optional animated version
  narration: 'path/to/audio.mp3',                  // Optional voice narration

  // Content
  content: `Your narrative text here.

  Supports multiple paragraphs separated by double newlines.

  Can include as much text as needed for the story beat.`,

  continueButtonText: 'Next',  // Optional, defaults to "Continue"

  // Inline annotations (optional)
  inlineAnnotations: [
    {
      id: 'annotation-1',
      text: 'Arabian Nights',  // Text to highlight in content
      tooltip: {
        title: 'What is Arabian Nights?',
        content: 'A collection of Middle Eastern folk tales...',
        category: 'historical-context',
      },
    },
  ],

  learningPoints: [
    {
      id: 'lp-frame-narrative',
      content: 'The frame narrative technique embeds stories within stories.',
      category: 'literary-technique',
    },
  ],
}
```

### Features

- **Content Formatting:** Double newlines create paragraph breaks
- **Inline Annotations:** Hover tooltips for contextual learning (see `docs/FEATURE_INLINE_ANNOTATIONS.md`)
- **Media Support:** Images, videos, audio narration
- **Navigation:** Round forward/back buttons on edges

### Design Tips

- Keep paragraphs to 2-4 sentences each
- Use 150-400 words per scene
- Place most important information first
- End with a hook or transition

---

## 2. Decision Scene

**Purpose:** Player agency, branching narratives, moral choices

**Best for:**
- Character-defining moments
- Moral dilemmas
- Strategic choices
- Comprehension checks

### Structure

```typescript
{
  id: 'scene-decision-1',
  type: 'decision',

  backgroundImage: 'https://path/to/background.png',
  image: 'https://path/to/illustration.png',  // Optional

  prompt: 'What should you do?',
  context: `Additional context to help frame the decision.

  Can be 1-2 paragraphs to set up the choice.`,

  timeLimit: 30,  // Optional, seconds before auto-select first choice

  choices: [
    {
      id: 'choice-trust',
      text: 'Trust the stranger and follow them',
      consequence: 'You follow the stranger into the marketplace...',
      learningPoints: [  // Optional per-choice learning
        {
          id: 'lp-trust',
          content: 'Trust is a key theme in Arabian Nights.',
          category: 'thematic-analysis',
        },
      ],
      nextSceneId: 'scene-5a',  // Optional for branching
    },
    {
      id: 'choice-refuse',
      text: 'Politely decline and continue on your own',
      consequence: 'You decide to continue alone through the city...',
      nextSceneId: 'scene-5b',  // Creates parallel path
    },
    {
      id: 'choice-question',
      text: 'Ask them questions before deciding',
      consequence: 'You interrogate the stranger about their intentions...',
      // No nextSceneId = continues to next sequential scene
    },
  ],

  learningPoints: [
    {
      id: 'lp-decision-point',
      content: 'Decision points create player investment in the story.',
      category: 'narrative-structure',
    },
  ],
}
```

### Features

- **Multiple Choices:** 2-4 options per decision
- **Optional Time Limit:** Countdown timer with auto-select
- **Consequences:** Immediate feedback after selection
- **Branching:** `nextSceneId` creates alternate paths
- **Per-Choice Learning:** Unique learning points for each option

### Design Tips

- Make all choices viable (no obvious "correct" answer for story choices)
- Use 2-3 choices for simple decisions, 4 for complex ones
- Show consequences that feel meaningful
- Time limits add tension (use sparingly)

---

## 3. Dialogue Scene

**Purpose:** Character interaction, revealing personality, player engagement

**Best for:**
- Important conversations
- Character development
- Revealing backstory
- Testing understanding through dialogue

### Structure

```typescript
{
  id: 'scene-dialogue-1',
  type: 'dialogue',

  backgroundImage: 'https://path/to/background.png',

  character: {
    id: 'scheherazade',
    name: 'Scheherazade',
    portrait: 'https://path/to/portrait.png',
    portraitVideo: 'https://path/to/portrait-video.mp4',  // Optional animated
    description: 'The legendary storyteller',
    voiceActor: 'Actor Name',  // Optional, for future audio
  },

  dialogueTree: {
    id: 'node-1',
    speaker: 'scheherazade',  // or 'player' for player character
    text: 'Welcome, traveler. I have stories to share...',
    audio: 'path/to/audio.mp3',  // Optional voice line

    responses: [
      {
        id: 'response-1',
        text: 'Tell me about the tales',
        nextNodeId: 'node-2',
        requiresCondition: 'flag-curious',  // Optional condition
        learningPoints: [  // Optional learning from this choice
          {
            id: 'lp-frame',
            content: 'Scheherazade uses storytelling to survive.',
            category: 'character-analysis',
          },
        ],
      },
      {
        id: 'response-2',
        text: 'Why do you tell stories?',
        nextNodeId: 'node-3',
      },
    ],

    // Alternative: Linear dialogue without choices
    nextNodeId: 'node-2',  // Auto-continues if no responses

    // All other nodes in the tree
    allNodes: [
      {
        id: 'node-2',
        speaker: 'scheherazade',
        text: 'Ah, you wish to know about the tales...',
        responses: [...],  // More branching or linear
        isEnd: true,  // Marks terminal node
      },
      {
        id: 'node-3',
        speaker: 'scheherazade',
        text: 'I tell stories to postpone my fate...',
        responses: [...],
      },
    ],
  },

  learningPoints: [
    {
      id: 'lp-dialogue-frame',
      content: 'Dialogue reveals character motivation and personality.',
      category: 'literary-technique',
    },
  ],
}
```

### Features

- **Character Portraits:** Static or animated
- **Branching Dialogue:** Player responses shape conversation
- **Linear Dialogue:** Auto-advancing for cutscenes
- **Dialogue History:** Can navigate back through conversation
- **Speaker Identification:** Character info bar shows who's talking

### Design Tips

- Keep individual text blocks to 2-3 sentences
- Provide 2-4 response options per node
- Create 3-4 layers of conversation depth minimum
- Use `isEnd: true` on terminal nodes
- Linear dialogue (no responses) works well for important reveals

---

## 4. Map Exploration Scene

**Purpose:** Interactive exploration, spatial learning, discovery

**Best for:**
- Geographic education
- Journey visualization
- Treasure hunts
- Exploring complex environments

### Structure

```typescript
{
  id: 'scene-map-1',
  type: 'map-exploration',

  backgroundImage: 'https://path/to/background.png',
  mapImage: 'https://path/to/map.png',  // The clickable map

  prompt: 'Explore the map to discover key locations',

  locations: [
    {
      id: 'location-market',
      name: 'The Bazaar',
      x: 25,  // Percentage from left (0-100)
      y: 30,  // Percentage from top (0-100)
      content: `When you visit the bazaar, you discover...

      Can include multiple paragraphs of information.`,
      image: 'https://path/to/location-detail.png',  // Optional
      unlockCondition: 'location-gate-visited',  // Optional dependency
    },
    {
      id: 'location-palace',
      name: 'The Palace',
      x: 60,
      y: 45,
      content: 'The magnificent palace towers above the city...',
    },
    // More locations (4-8 recommended)
  ],

  requiredLocations: ['location-market', 'location-palace'],  // Optional

  learningPoints: [
    {
      id: 'lp-geography',
      content: 'Baghdad was a major center of trade in the Islamic Golden Age.',
      category: 'historical-context',
    },
  ],
}
```

### Features

- **Clickable Hotspots:** Positioned as percentages for responsive design
- **Location Details:** Modal popup with content and optional image
- **Required Locations:** Force exploration of key points
- **Unlock Conditions:** Sequential discovery paths
- **Visual States:** Different markers for unvisited/required/visited

### Design Tips

- Use clear, labeled maps with distinct regions
- Place 4-8 clickable locations
- Make hotspot areas large enough (icon is 40px)
- Provide meaningful educational content at each location
- Use `requiredLocations` to ensure key learning isn't missed

---

## 5. Quote Attribution Scene

**Purpose:** Identify which character or person said famous quotes

**Best for:**
- Character recognition
- Testing literary knowledge
- Famous quotes analysis
- Speaker identification

### Structure

```typescript
{
  id: 'scene-quotes-1',
  type: 'quote-attribution',

  backgroundImage: 'https://path/to/background.png',

  prompt: 'Who said each of these quotes?',

  quotes: [
    {
      id: 'quote-1',
      text: 'Open Sesame!',
      speaker: 'Ali Baba',
      context: 'Spoken at the entrance to the thieves\' cave.',
      explanation: 'This famous phrase has entered common usage...', // Optional
    },
    {
      id: 'quote-2',
      text: 'I wish it, I wish it!',
      speaker: 'Aladdin',
      context: 'Aladdin speaking to the genie of the lamp.',
      explanation: 'The repetition emphasizes his excitement...',
    },
    // More quotes (4-8 recommended)
  ],

  learningPoints: [
    {
      id: 'lp-quotations',
      content: 'Famous quotations often reveal key character moments.',
      category: 'literary-analysis',
    },
  ],
}
```

### Features

- **Flashcard Style:** One quote at a time
- **Multiple Choice:** 4 speaker options (correct + 3 others)
- **Immediate Feedback:** Shows correct/incorrect with context
- **Progress Tracking:** "Quote X of Y" indicator
- **Final Results:** Complete review with all contexts and explanations

### Design Tips

- Use 4-8 quotes per scene
- Select distinctive, memorable quotes
- Provide rich context that teaches
- Mix difficulty levels (some obvious, some challenging)
- Ensure speakers are familiar from the adventure

---

## 6. Timeline Game Scene

**Purpose:** Order historical events chronologically

**Best for:**
- Historical sequence learning
- Plot structure understanding
- Cause-and-effect chains
- Story order comprehension

### Structure

```typescript
{
  id: 'scene-timeline-1',
  type: 'timeline-game',

  backgroundImage: 'https://path/to/background.png',

  prompt: 'Order these events from earliest to latest',

  timelineEvents: [
    {
      id: 'event-1',
      title: 'Scheherazade begins her tales',
      year: 1,  // Can use actual years or story sequence numbers
      description: 'To save her life, Scheherazade tells the Sultan...',
      image: 'https://path/to/event-image.png',  // Optional
    },
    {
      id: 'event-2',
      title: 'Aladdin discovers the lamp',
      year: 5,
      description: 'In a magical cave, Aladdin finds a mysterious lamp...',
    },
    {
      id: 'event-3',
      title: 'Sinbad\'s first voyage',
      year: 10,
      description: 'Sinbad sets sail on his first great adventure...',
    },
    // More events (5-10 recommended)
  ],

  successThreshold: 70,  // Percentage correct needed to pass

  learningPoints: [
    {
      id: 'lp-chronology',
      content: 'Understanding chronological order helps track narrative flow.',
      category: 'plot-structure',
    },
  ],
}
```

### Features

- **Shuffled Events:** Randomized on each attempt
- **Click Ordering:** Simple interface (click to add to timeline)
- **Score Calculation:** Based on adjacent pair accuracy
- **Pass/Fail:** Compared against success threshold
- **Retry Option:** Can retry if failed
- **Correct Timeline Display:** Shows proper order with explanations

### Design Tips

- Use 5-10 events for good challenge
- Make events clearly distinguishable
- Provide detailed descriptions for learning
- Set threshold to 70-80% for reasonable difficulty
- Include images when possible for visual memory

---

## 7. Cause-Effect Scene

**Purpose:** Match historical causes with their effects

**Best for:**
- Understanding consequences
- Historical causation
- Logical reasoning
- Thematic connections

### Structure

```typescript
{
  id: 'scene-cause-effect-1',
  type: 'cause-effect',

  backgroundImage: 'https://path/to/background.png',

  prompt: 'Match each cause with its effect',

  pairs: [
    {
      id: 'pair-1',
      cause: 'Scheherazade tells captivating stories',
      effect: 'The Sultan postpones her execution',
      explanation: 'Her storytelling skill saves her life each night...',
    },
    {
      id: 'pair-2',
      cause: 'Ali Baba learns the magic words',
      effect: 'He gains access to the thieves\' treasure',
      explanation: 'Knowledge of "Open Sesame" unlocks the cave...',
    },
    {
      id: 'pair-3',
      cause: 'Aladdin rubs the lamp',
      effect: 'A powerful genie appears',
      explanation: 'The lamp contains a magical being...',
    },
    // More pairs (4-8 recommended)
  ],

  distractors: [  // Optional wrong effects to mix in
    'The merchant becomes wealthy',
    'The city celebrates a festival',
  ],

  learningPoints: [
    {
      id: 'lp-causation',
      content: 'Understanding cause and effect reveals story logic.',
      category: 'plot-structure',
    },
  ],
}
```

### Features

- **Click Matching:** Click cause, then effect to match
- **Distractor Support:** Add wrong effects for challenge
- **Visual Feedback:** Color-coded results (green/red/orange)
- **Score Display:** Shows X out of Y correct
- **Comprehensive Explanations:** All pairs explained after submission

### Design Tips

- Use 4-8 pairs for appropriate scope
- Make causes and effects clearly stated
- Add 2-3 distractors for challenge
- Ensure explanations teach the connection
- Shuffle effects for each attempt

---

## 8. Primary Source Scene

**Purpose:** Analyze historical documents, images, or media

**Best for:**
- Source analysis
- Critical thinking
- Document interpretation
- Evidence-based reasoning

### Structure

```typescript
{
  id: 'scene-source-1',
  type: 'primary-source',

  backgroundImage: 'https://path/to/background.png',

  prompt: 'Analyze this primary source',

  source: {
    title: 'Excerpt from One Thousand and One Nights',
    author: 'Anonymous',
    date: '9th-13th century',
    type: 'text',  // or 'image', 'audio', 'video'
    content: `The actual source text here...

    Can be multiple paragraphs for text sources.

    Or a path to media file for image/audio/video.`,
    citation: 'The Arabian Nights: Tales of 1001 Nights, trans. Malcolm Lyons',
  },

  questions: [
    {
      id: 'q1',
      question: 'What is the main theme of this passage?',
      type: 'multiple-choice',
      options: [
        'Revenge and justice',
        'Love and sacrifice',
        'Power and corruption',
        'Wisdom and knowledge',
      ],
      correctAnswer: 'Wisdom and knowledge',
      explanation: 'The passage emphasizes the value of knowledge...',
    },
    {
      id: 'q2',
      question: 'Summarize the key argument in your own words',
      type: 'short-answer',
      correctAnswer: 'storytelling as survival',  // Keywords to check
      explanation: 'The passage shows how stories can be used strategically...',
    },
    // More questions (3-6 recommended)
  ],

  learningPoints: [
    {
      id: 'lp-source-analysis',
      content: 'Primary sources provide direct evidence from the time period.',
      category: 'historical-context',
    },
  ],
}
```

### Features

- **Split Screen Layout:** Source on left, questions on right
- **Multiple Source Types:** Text, image, audio, video
- **Question Types:** Multiple choice and short answer (highlight not yet implemented)
- **Metadata Display:** Author, date, citation
- **Immediate Feedback:** Explanations after each answer
- **Progress Tracking:** Move through questions sequentially

### Design Tips

- Choose sources that are accessible yet rich
- Use 3-6 questions per source
- Mix question types for variety
- Provide detailed explanations that teach analysis
- Keep source to 200-400 words for text

---

## 9. Anachronism Scene

**Purpose:** Find items that don't belong in a time period

**Best for:**
- Historical accuracy training
- Time period awareness
- Critical observation
- Temporal reasoning

### Structure

```typescript
{
  id: 'scene-anachronism-1',
  type: 'anachronism',

  backgroundImage: 'https://path/to/background.png',

  prompt: 'Find all items that don\'t belong',
  scenario: 'You are in medieval Baghdad during the 9th century. Which items are anachronistic?',

  items: [
    {
      id: 'item-sword',
      name: 'Curved Sword',
      image: 'https://path/to/sword.png',  // Optional
      description: 'A curved blade typical of the region',
      explanation: 'Curved swords were common in medieval Islamic warfare.',
    },
    {
      id: 'item-smartphone',
      name: 'Smartphone',
      image: 'https://path/to/phone.png',
      description: 'A modern communication device',
      explanation: 'Smartphones were invented in the late 20th century, over 1000 years later!',
    },
    {
      id: 'item-camel',
      name: 'Camel',
      image: 'https://path/to/camel.png',
      description: 'A desert animal used for transport',
      explanation: 'Camels were essential for trade and travel in this era.',
    },
    {
      id: 'item-clock',
      name: 'Digital Clock',
      image: 'https://path/to/clock.png',
      description: 'A device showing the time',
      explanation: 'Digital clocks didn\'t exist until the 1970s.',
    },
    // More items (6-12 recommended)
  ],

  correctAnswers: ['item-smartphone', 'item-clock'],  // IDs of anachronisms

  learningPoints: [
    {
      id: 'lp-historical-accuracy',
      content: 'Recognizing anachronisms helps understand historical contexts.',
      category: 'historical-context',
    },
  ],
}
```

### Features

- **Grid Layout:** Visual display of all items
- **Click Selection:** Toggle items on/off
- **Three-State Results:**
  - Green: Correctly identified anachronism
  - Red: Incorrectly selected (item belongs)
  - Orange: Missed anachronism
- **Expandable Explanations:** Details for every item
- **Score Calculation:** Correct identifications / total anachronisms

### Design Tips

- Use 6-12 items total
- Include 3-5 anachronisms
- Make some obvious, some subtle
- Provide images for visual identification
- Ensure explanations teach historical context
- Make scenario time period very clear

---

## 10. Custom Mini-Game Scene

**Purpose:** Extensible framework for unique game mechanics

**Best for:**
- Unique educational games
- Custom interactions not covered by other types
- Experimental mechanics
- Adventure-specific activities

### Structure

```typescript
{
  id: 'scene-custom-1',
  type: 'custom-mini-game',

  backgroundImage: 'https://path/to/background.png',

  gameType: 'memory-match',  // Identifier for registered game

  config: {
    // Flexible configuration object
    // Structure depends on the specific game
    pairs: [
      { id: 'p1', value: 'Aladdin', image: 'aladdin.png' },
      { id: 'p2', value: 'Ali Baba', image: 'ali-baba.png' },
      { id: 'p3', value: 'Sinbad', image: 'sinbad.png' },
    ],
    timeLimit: 120,
    gridSize: '4x3',
  },

  learningPoints: [
    {
      id: 'lp-custom',
      content: 'Memory games reinforce character recognition.',
      category: 'character-analysis',
    },
  ],
}
```

### Registry System

**Creating a Custom Game:**

1. Create game component implementing `CustomGameProps` interface
2. Register it using `customGameRegistry.register(gameType, Component)`
3. Use in adventure with matching `gameType` string

**Example Registration:**

```typescript
// src/components/mini-games/custom/MemoryMatchGame.tsx
import { customGameRegistry, CustomGameProps } from '../customGameRegistry';

const MemoryMatchGame: React.FC<CustomGameProps> = ({ config, theme, onComplete }) => {
  // Game implementation
  return <div>Memory game UI</div>;
};

// Register the game
customGameRegistry.register('memory-match', MemoryMatchGame);

export default MemoryMatchGame;
```

**Example Included:** See `src/components/mini-games/custom/MemoryMatchGame.tsx` and `src/components/mini-games/custom/README.md` for a complete implementation.

### Features

- **Fully Flexible:** Any React component can be a mini-game
- **Type-Safe:** TypeScript support with `CustomGameProps`
- **Themed:** Access to adventure theme colors
- **Standard Interface:** Consistent props and callbacks
- **Error Handling:** Graceful fallback if game not registered

### Design Tips

- Create reusable games that work across adventures
- Document config structure clearly
- Follow theme colors for consistency
- Handle edge cases (empty config, missing data)
- Test registration before using in adventure

---

## Quick Reference Table

### By Educational Purpose

| Purpose | Scene Types | Best For |
|---------|-------------|----------|
| Story exposition | Narrative | Context, setup, transitions |
| Player agency | Decision, Dialogue | Engagement, choice, character |
| Spatial learning | Map Exploration | Geography, journeys |
| Sequence understanding | Timeline Game | Chronology, plot order |
| Relationship matching | Cause-Effect, Quote Attribution | Connections, attribution |
| Source analysis | Primary Source | Critical thinking, evidence |
| Error detection | Anachronism | Historical accuracy |
| Custom mechanics | Custom Mini-Game | Unique interactions |

### By Complexity

**Low Complexity** (Easy to author, quick to complete):
- Narrative Scene
- Decision Scene
- Quote Attribution Scene

**Medium Complexity** (Moderate authoring, standard completion):
- Dialogue Scene
- Map Exploration Scene
- Timeline Game Scene
- Cause-Effect Scene
- Anachronism Scene

**High Complexity** (Complex authoring, longer completion):
- Primary Source Scene
- Custom Mini-Game Scene (varies)

### By Interaction Type

| Interaction | Scene Types |
|-------------|-------------|
| Read/advance | Narrative |
| Choose from options | Decision, Quote Attribution |
| Conversation | Dialogue |
| Click/explore | Map Exploration, Anachronism |
| Order/sequence | Timeline Game |
| Match/pair | Cause-Effect |
| Answer questions | Primary Source |
| Custom gameplay | Custom Mini-Game |

---

## Choosing the Right Scene Type

### Decision Framework

**For storytelling:**
- **Narrative** → Pure exposition
- **Decision** → Player makes meaningful choice
- **Dialogue** → Character development through conversation

**For teaching concepts:**
- **Narrative with annotations** → Introduce new concepts
- **Primary Source** → Analyze evidence
- **Any interactive type** → Apply and test understanding

**For teaching relationships:**
- **Cause-Effect** → Causal relationships
- **Quote Attribution** → Character-quote relationships
- **Timeline Game** → Chronological relationships

**For teaching spatial/visual:**
- **Map Exploration** → Geography, locations
- **Anachronism** → Visual identification

**For custom needs:**
- **Custom Mini-Game** → Anything else!

### Mixing Scene Types

**Recommended Chapter Flow:**
1. Start: Narrative (setup)
2. Early: Decision or Dialogue (engagement)
3. Middle: Interactive scene (map, timeline, cause-effect)
4. Late: Another narrative or decision (development)
5. End: Narrative with quiz trigger (synthesis)

**Balance:** Aim for 60-70% narrative/story scenes, 30-40% interactive/game scenes.

---

## Common Patterns

### Progressive Difficulty

```typescript
// Chapter 1: Simple
scenes: [
  { type: 'narrative' },      // Introduction
  { type: 'decision' },        // Simple choice
  { type: 'narrative' },       // Continue story
  { type: 'quote-attribution' }, // Easy quiz
]

// Chapter 3: Complex
scenes: [
  { type: 'narrative' },       // Setup
  { type: 'dialogue' },         // Character depth
  { type: 'map-exploration' },  // Exploration
  { type: 'primary-source' },   // Analysis
  { type: 'timeline-game' },    // Synthesis
]
```

### Branching Story

```typescript
{
  type: 'decision',
  choices: [
    { id: 'path-a', nextSceneId: 'scene-4a' },  // Path A
    { id: 'path-b', nextSceneId: 'scene-4b' },  // Path B
  ],
},
// Scene 4a (Path A scenes)
// Scene 4b (Path B scenes)
// Eventually: Both paths converge to scene-8
```

### Concept Introduction → Practice → Assessment

```typescript
// 1. Introduce concept
{ type: 'narrative', content: 'Frame narratives are stories within stories...' }

// 2. Show example
{ type: 'narrative', content: 'Notice how Scheherazade\'s story contains...' }

// 3. Practice identifying
{ type: 'dialogue' }  // Player experiences frame narrative

// 4. Test understanding
{ type: 'primary-source', questions: [...] }  // Analyze the technique
```

---

## Best Practices

### For All Scene Types

1. **Clear Learning Goals:** Every scene should teach something
2. **Appropriate Length:** Don't make scenes too long or too short
3. **Visual Interest:** Use images, videos when possible
4. **Consistent Theming:** Match adventure theme colors and style
5. **Accessibility:** Provide context and instructions

### Authoring Workflow

1. **Plan:** Outline chapter with scene types in mind
2. **Write:** Draft content for narrative scenes first
3. **Design:** Create interactive scenes with clear goals
4. **Asset:** Source or create images/videos
5. **Test:** Play through the entire sequence
6. **Refine:** Adjust based on playtesting

### Common Mistakes to Avoid

- ❌ Too many narrative scenes in a row (boring)
- ❌ Interactive scenes without clear instructions
- ❌ Decisions without meaningful consequences
- ❌ Missing learning points
- ❌ Inconsistent difficulty progression
- ❌ Too many scene types in one chapter (overwhelming)

### Pacing Guidelines

**Scene Duration Targets:**
- Narrative: 2-3 minutes
- Decision: 1-2 minutes
- Dialogue: 3-5 minutes
- Interactive (maps, games): 3-5 minutes

**Chapter Duration:**
- Total: 30-45 minutes
- Scenes: 8-15 scenes
- Interactive: 30-40% of scenes

---

## Technical Reference

### Type Definitions

All scene type interfaces are defined in `src/types/adventure.ts`

### Component Locations

All scene components are in `src/components/mini-games/`

```
src/components/mini-games/
├── NarrativeScene.tsx
├── DecisionScene.tsx
├── DialogueScene.tsx
├── MapExplorationScene.tsx
├── QuoteAttributionScene.tsx
├── TimelineGameScene.tsx
├── CauseEffectScene.tsx
├── PrimarySourceScene.tsx
├── AnachronismScene.tsx
├── CustomMiniGameScene.tsx
├── customGameRegistry.ts
└── custom/
    ├── MemoryMatchGame.tsx
    └── README.md
```

### Scene Renderer

All scenes are rendered through `src/components/adventure-engine/SceneRenderer.tsx` which handles the type discrimination and component selection.

---

## Related Documentation

- **`CHAPTER_AUTHORING_GUIDE.md`** - Complete guide to creating chapters
- **`FEATURE_INLINE_ANNOTATIONS.md`** - Using tooltips in narrative scenes
- **`CHAPTER_PREREQUISITES_EXAMPLES.md`** - Chapter navigation patterns
- **`ADVENTURE_FILE_STRUCTURE.md`** - File organization
- **`src/components/mini-games/custom/README.md`** - Custom game development

---

## Support

For questions or issues with scene types:
1. Review type definitions in `src/types/adventure.ts`
2. Examine existing chapters in `src/adventures/arabian-nights/chapters/`
3. Check component implementations in `src/components/mini-games/`

---

*Last Updated: October 2025*
*Version: 1.0*
*All 10 scene types fully implemented*
