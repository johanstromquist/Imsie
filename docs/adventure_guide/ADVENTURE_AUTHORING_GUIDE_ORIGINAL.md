# Adventure Authoring Guide

**Version:** 1.0
**Last Updated:** October 2025

This comprehensive guide walks you through creating an educational adventure for Imsie from initial concept to final deployment, including detailed asset planning with AI-generation prompts.

---

## Table of Contents

1. [Introduction](#introduction)
2. [Phase 1: Planning and Concept](#phase-1-planning-and-concept)
3. [Phase 2: Asset Planning](#phase-2-asset-planning)
4. [Phase 3: File Structure Setup](#phase-3-file-structure-setup)
5. [Phase 4: Theme and Configuration](#phase-4-theme-and-configuration)
6. [Phase 5: Chapter Development](#phase-5-chapter-development)
7. [Phase 6: Quiz Creation](#phase-6-quiz-creation)
8. [Phase 7: Testing and Refinement](#phase-7-testing-and-refinement)
9. [Phase 8: Integration and Deployment](#phase-8-integration-and-deployment)
10. [Appendices](#appendices)

---

## Introduction

### What is an Imsie Adventure?

An Imsie adventure is an **interactive educational experience** that combines narrative storytelling with pedagogical design to teach literature, history, and critical thinking skills. Adventures are structured as journeys through chapters, each containing multiple scenes with varied interaction types, culminating in quizzes that assess comprehension.

### Key Components

Every adventure consists of:

1. **Adventure Metadata** - Title, description, theme, cover art
2. **Chapters** - 3-10 self-contained story units (30-45 min each)
3. **Scenes** - 8-15 per chapter (10 available scene types)
4. **Learning Points** - Educational takeaways embedded in scenes
5. **Quizzes** - End-of-chapter assessments (8-15 questions)
6. **Assets** - Images, videos, audio, music
7. **Prerequisites** - Optional chapter unlock logic

### Target Audience

- **Age Range:** 16-20 years old (high school to early college)
- **Educational Level:** Advanced reading comprehension
- **Time Commitment:** 2-6 hours per adventure
- **Learning Style:** Self-paced, multimedia, interactive

### Development Timeline

**Typical adventure creation:**
- Planning: 1-2 weeks
- Asset creation: 2-4 weeks (with AI tools) or 8-12 weeks (commissioned art)
- Content writing: 3-6 weeks
- Testing: 1-2 weeks
- **Total: 2-4 months**

---

## Phase 1: Planning and Concept

### Step 1: Choose Your Source Material

**Criteria for good adventures:**
- ✅ Rich narrative tradition (myths, epics, classic literature)
- ✅ Complex themes suitable for analysis
- ✅ Cultural or historical significance
- ✅ Multiple story arcs or episodes
- ✅ Visual and cinematic potential

**Examples:**
- ✅ **Great:** Arabian Nights, Dante's Inferno, Greek Mythology, Arthurian Legends
- ✅ **Good:** Shakespeare plays, Epic of Gilgamesh, Beowulf
- ⚠️ **Challenging:** Contemporary novels (copyright), highly abstract philosophy

### Step 2: Define Learning Objectives

**Adventure-Level Objectives** (3-5 broad goals):

```
Example: Arabian Nights
1. Understand frame narrative structure and its literary purpose
2. Analyze cultural context of medieval Islamic storytelling traditions
3. Explore universal themes of justice, mercy, and wisdom
4. Recognize how stories function as tools for survival and transformation
5. Compare Eastern and Western narrative traditions
```

**Write yours:**
```
[Adventure Title]: _______________

1. _______________________________________
2. _______________________________________
3. _______________________________________
4. _______________________________________
5. _______________________________________
```

### Step 3: Outline Chapter Structure

**Standard Structure:** 5 chapters + final quiz

**Template:**
```
Chapter 1: Introduction/Frame Story
- Establishes world, characters, stakes
- Simple scene types (narrative, decision)
- Introduces key themes

Chapter 2: First Major Story/Arc
- Deepens understanding
- More interactive scenes
- Character development

Chapter 3: Second Major Story/Arc
- Increases complexity
- Advanced scene types
- Thematic exploration

Chapter 4: Third Major Story/Arc (optional)
- Peak complexity
- Synthesis of concepts
- Climactic moments

Chapter 5: Conclusion/Resolution
- Ties themes together
- Meta-analysis
- Reflective content

Final Quiz: Comprehensive Assessment
- Tests adventure-wide understanding
- 15-20 questions
- Integrates all chapters
```

### Step 4: Create Detailed Outline

Create `ADVENTURE_OUTLINE.md` in your adventure folder:

```markdown
# [Adventure Title] - Detailed Outline

## Adventure Overview
- **Title:** [Full title]
- **Estimated Duration:** [X hours]
- **Educational Level:** [Grade/age range]
- **Primary Subjects:** [Literature, History, etc.]

## Learning Objectives
1. [Objective 1]
2. [Objective 2]
...

## Chapter Breakdown

### Chapter 1: [Title]
**Learning Objectives:**
- [Chapter-specific objective 1]
- [Chapter-specific objective 2]

**Scene Flow:** (8-15 scenes)
1. [Scene 1 type] - [Brief description]
2. [Scene 2 type] - [Brief description]
...

**Key Themes:** [Themes covered]
**Quiz Topics:** [What will be tested]

### Chapter 2: [Title]
...

## Asset Requirements Summary
- Cover art: 1
- Background images: [X]
- Scene illustrations: [X]
- Character portraits: [X]
- Maps: [X]
- Music tracks: [X]

## Production Timeline
- Planning: [dates]
- Asset creation: [dates]
- Content writing: [dates]
- Testing: [dates]
- Launch: [date]
```

**See:** `src/adventures/arabian-nights/ADVENTURE_OUTLINE.md` for a complete example.

---

## Phase 2: Asset Planning

### Overview of Asset Types

| Asset Type | Dimensions | Format | Count (typical) | Purpose |
|-----------|-----------|--------|----------------|----------|
| Cover Art | 800x1200px | PNG/JPG | 1 | Adventure selection screen |
| Backgrounds | 1920x1080px | PNG/JPG | 20-40 | Scene backdrops |
| Scene Images | 600x400px | PNG/JPG | 15-30 | Narrative illustrations |
| Character Portraits | 600x600px | PNG/JPG | 5-15 | Dialogue scenes |
| Maps | 1920x1080px | PNG/JPG | 1-5 | Map exploration scenes |
| Background Videos | 1920x1080px | MP4 | 0-10 | Animated backdrops (optional) |
| Music Tracks | Variable | MP3 | 1-4 | Background ambience |

### Creating Your Asset Documentation File

Create `[adventure-name]_assets.md` in your adventure folder.

**File Structure:**

```markdown
# [Adventure Title] - Asset Requirements

## Overview

**Visual Style:** [Describe your artistic direction]
- Art style reference: [e.g., "Medieval manuscript illumination"]
- Inspiration: [Artists, periods, or works]
- Tone: [Mystical, dramatic, historical, etc.]

**Color Palette:**
- Primary: #hexcode ([color name])
- Secondary: #hexcode ([color name])
- Accents: #hexcode, #hexcode

**Artistic Style Guidelines:**
[Describe the consistent style all assets should follow]

**Prompt Format:**
All image generation prompts follow this structure:
- **Tone prefix:** "[Style/era description]:"
- **Content description:** [Subject, composition, mood]
- **Style suffix:** [Consistent ending for all prompts]

## Cover Art

### Main Cover Image
- **File:** `public/assets/[adventure-name]/cover.png`
- **Dimensions:** 800x1200px
- **Format:** PNG
- **Description:** [What the cover depicts]
- **Prompt:**
```
[Tone]: [Detailed scene description]. [Style suffix] --ar 2:3
```
- **URL/Status:** [Link or generation status]

### Cover Video (Optional)
- **File:** `public/assets/[adventure-name]/cover-video.mp4`
- **Dimensions:** 800x1200px
- **Duration:** 5-8 seconds, looping
- **Description:** [Animation description]

## Background Images (1920x1080px)

### 1. [Background Name]
- **File:** `backgrounds/[filename].png`
- **Prompt:**
```
[Tone]: [Scene description]. [Style suffix] --ar 16:9
```
- **Usage:** Scenes [X, Y, Z]
- **URL/Status:** [Link or status]

[Continue for all backgrounds...]

## Scene Illustrations (600x400px)

### 1. [Illustration Name]
- **File:** `scenes/[filename].png`
- **Prompt:**
```
[Tone]: [Subject description]. [Style suffix] --ar 3:2
```
- **Usage:** Scene [X]
- **URL/Status:** [Link or status]

[Continue for all scene illustrations...]

## Character Portraits (600x600px)

### 1. [Character Name]
- **File:** `portraits/[character-name].png`
- **Prompt:**
```
[Tone]: Portrait of [character description]. [Style suffix] --ar 1:1
```
- **Usage:** Dialogue scenes throughout
- **URL/Status:** [Link or status]

[Continue for all characters...]

## Maps (1920x1080px)

### 1. [Map Name]
- **File:** `maps/[map-name].png`
- **Prompt:**
```
[Tone]: [Map description, style, labels]. [Style suffix] --ar 16:9
```
- **Usage:** Scene [X] (map exploration)
- **URL/Status:** [Link or status]

## Music & Audio

### Background Music
- **File:** `music/theme.mp3`
- **Style:** [Musical description]
- **Instruments:** [List of instruments]
- **Mood:** [Emotional tone]
- **Tempo:** [BPM range]
- **Length:** 3-5 minutes, loopable
- **Reference:** [Similar musical works]

### Additional Tracks (if needed)
[List additional music or audio assets]

## Video Assets (Optional)

### [Video Name]
- **File:** `[path]/[filename].mp4`
- **Duration:** [X] seconds
- **Description:** [What it depicts]
- **Loop:** Yes/No

## Asset Generation Priority

**Phase 1 - Critical Path:**
1. Cover art
2. Chapter 1 backgrounds (3-5)
3. Main character portraits (2-3)
4. Background music track

**Phase 2 - Core Content:**
1. Remaining backgrounds for Chapters 2-3
2. Scene illustrations for key moments
3. Additional character portraits

**Phase 3 - Complete:**
1. All remaining backgrounds
2. All remaining illustrations
3. Maps
4. Optional videos

**Phase 4 - Polish:**
1. Music variations
2. Ambient sounds
3. Video enhancements

## Budget Estimate

**AI Generation Approach:**
- Midjourney Pro: $60/month
- Suno/Udio for music: $30/month
- Total: ~$90-200 for all assets

**Professional Commission Approach:**
- Illustrations: $100-300 each
- Backgrounds: $200-500 each
- Music: $500-2000 per track
- Total: ~$5,000-15,000

## Asset Checklist

- [ ] Cover art created
- [ ] All backgrounds generated (X/X)
- [ ] All scene illustrations created (X/X)
- [ ] All character portraits created (X/X)
- [ ] Maps created (X/X)
- [ ] Music composed/selected
- [ ] All assets optimized for web
- [ ] All assets uploaded to correct paths
- [ ] All URLs updated in code
```

### Crafting Effective Image Generation Prompts

**Anatomy of a Good Prompt:**

```
[TONE PREFIX]: [SUBJECT] in [SETTING], [COMPOSITION], [LIGHTING], [MOOD], [DETAILS]. [STYLE SUFFIX] --ar [ASPECT RATIO]
```

#### Tone Prefix Guidelines

**Purpose:** Sets the artistic era/style without confusing the AI with the work's title.

**Examples:**

| Adventure Type | Good Prefix | Why |
|---------------|-------------|-----|
| Arabian Nights | "Arabian Nights:" | ✅ Work title doesn't confuse style |
| Dante's Inferno | "Dante's Inferno:" | ✅ Work title doesn't confuse style |
| Tristan and Isolde | "Medieval artwork:" | ✅ Avoids title confusion with style |
| Greek Mythology | "Classical Greek art:" | ✅ Clear artistic period |
| Arthurian Legends | "Medieval illumination:" | ✅ Specific style reference |
| Canterbury Tales | "14th century manuscript:" | ✅ Historical specificity |
| Beowulf | "Anglo-Saxon artwork:" | ✅ Cultural specificity |
| Romeo and Juliet | "Renaissance painting:" | ✅ Period appropriate |

**Rule of Thumb:**
- If the work's title naturally describes a style → Use the title
- If the title could confuse the AI → Use the historical period/style instead

#### Style Suffix Guidelines

**Purpose:** Ensures consistency across all assets.

**Format:** Include artistic style, aesthetic approach, and accessibility notes.

**Examples from existing adventures:**

**Arabian Nights:**
```
In the style of Nimona. --ar [ratio]
```

**Dante's Inferno:**
```
In the style of Gustave Doré's Divine Comedy engravings mixed with medieval manuscript illumination, dramatic chiaroscuro lighting, educational and accessible --ar [ratio]
```

**Creating Your Style Suffix:**

1. **Artistic Reference:** Choose a specific artist, era, or work
   - Examples: "In the style of Arthur Rackham", "Pre-Raphaelite painting", "Japanese ukiyo-e"

2. **Technical Qualities:** Specify lighting, composition, or technique
   - Examples: "dramatic chiaroscuro lighting", "watercolor textures", "bold graphic lines"

3. **Tone/Purpose:** Add context about intended feel
   - Examples: "educational and accessible", "mystical and atmospheric", "historically accurate"

**Your Adventure's Style Suffix Template:**
```
In the style of [ARTISTIC REFERENCE], [TECHNICAL QUALITIES], [TONE] --ar [ratio]
```

#### Complete Prompt Examples

**Background Image (Arabian Nights):**
```
Arabian Nights: Majestic exterior view of an Arabian palace. Grand architecture with domes and minarets, warm evening light or twilight, palm trees, possibly a distant city. In the style of Nimona. --ar 16:9
```

**Character Portrait (Dante's Inferno):**
```
Dante's Inferno: Virgil the Roman poet, elderly wise man with gray beard, laurel crown, white toga, gentle wise smile, golden ethereal aura, classical features, kind eyes. In the style of Gustave Doré's Divine Comedy engravings mixed with medieval manuscript illumination, dramatic chiaroscuro lighting, educational and accessible --ar 1:1
```

**Scene Illustration (Tristan and Isolde - example):**
```
Medieval artwork: Tristan and Isolde sharing the love potion aboard a ship, intimate moment, Celtic patterns in borders, rich jewel tones, romantic yet tragic atmosphere. In the style of medieval manuscript illumination with Pre-Raphaelite detail, warm candlelight glow, historically evocative --ar 3:2
```

**Map (Canterbury Tales - example):**
```
14th century manuscript: Medieval map showing pilgrimage route from London to Canterbury, stylized cities and roads, decorative compass rose, parchment texture, labeled in gothic script, educational cartography. In the style of medieval manuscript maps with illuminated borders, aged parchment aesthetic --ar 16:9
```

### Music and Audio Guidelines

**Background Music Prompt Structure:**

```markdown
### [Track Name]
- **Style:** [Genre and cultural influence]
- **Instruments:** [Specific instruments, prioritized]
- **Mood:** [Emotional qualities]
- **Tempo:** [BPM range and pacing words]
- **Structure:** [Sections and progression]
- **Length:** 3-5 minutes, loopable
- **Reference Works:** [Similar pieces for inspiration]
- **Technical Notes:** [Production quality, mixing notes]
```

**Examples:**

**Arabian Nights Theme:**
```markdown
### Theme Music
- **Style:** Traditional Middle Eastern instrumentation with modern cinematic production
- **Instruments:** Oud (primary), ney flute, qanun, hand drums (darbuka, frame drums)
- **Mood:** Mysterious, enchanting, contemplative
- **Tempo:** Slow to medium (60-80 BPM), flowing
- **Structure:** Intro → Main theme → Variation → Bridge → Return to theme (loopable)
- **Length:** 3-5 minutes, seamless loop
- **Reference Works:** Epic Middle Eastern film scores (think "Lawrence of Arabia" meets "Prince of Persia"), suitable for study
- **Technical Notes:** Not too distracting, can play for extended periods
```

**Dante's Inferno - Descent Theme:**
```markdown
### Descent Theme
- **Style:** Dark orchestral with medieval instruments, Gregorian chant influence
- **Instruments:** Strings (low register), pipe organ, male choir, lute, hurdy-gurdy
- **Mood:** Ominous but contemplative, serious without being scary
- **Tempo:** Slow to moderate (60-80 BPM)
- **Structure:** Plainchant opening → Building strings → Organ crescendo → Return to chant
- **Length:** 3-4 minutes, looping
- **Reference Works:** Hildegard von Bingen meets Arvo Pärt, Carl Orff's Carmina Burana (restrained)
- **Technical Notes:** Minor keys, medieval modes, suitable for concentration
```

### Asset Organization Structure

```
public/assets/[adventure-name]/
├── cover.png                        # 800x1200px
├── cover-video.mp4                  # Optional, 5-8s loop
├── backgrounds/                     # 1920x1080px
│   ├── chapter-1-opening.png
│   ├── chapter-1-scene-2.png
│   └── ...
├── scenes/                          # 600x400px
│   ├── scene-1-illustration.png
│   └── ...
├── portraits/                       # 600x600px
│   ├── character-main.png
│   └── ...
├── maps/                           # 1920x1080px
│   ├── world-map.png
│   └── ...
├── music/                          # MP3
│   ├── theme.mp3
│   └── ...
├── videos/                         # MP4 (optional)
│   ├── background-animated.mp4
│   └── ...
└── README.md                       # Asset inventory
```

---

## Phase 3: File Structure Setup

### Create Adventure Directory

```bash
cd src/adventures/
mkdir your-adventure-name
cd your-adventure-name
```

### Initialize File Structure

Create the following structure:

```
src/adventures/your-adventure-name/
├── index.ts                          # Main adventure export
├── theme.ts                          # Theme configuration
├── chapters/                         # Chapter definitions
│   ├── chapter-1-name.ts
│   ├── chapter-2-name.ts
│   └── ...
├── quizzes/                         # Quiz definitions
│   ├── chapter-1-quiz.ts
│   ├── chapter-2-quiz.ts
│   └── final-quiz.ts
├── your-adventure-name_assets.md    # Asset documentation
└── ADVENTURE_OUTLINE.md             # Planning document
```

### Create Placeholder Files

**`theme.ts`:**
```typescript
import type { AdventureTheme } from '../../types';

export const yourAdventureTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // Update these colors
  secondaryColor: '#d4af37',
  fontFamily: '"Crimson Text", serif',
  backgroundMusic: '/assets/your-adventure/music/theme.mp3',
};

export const musicPlaylist = [
  '/assets/your-adventure/music/theme.mp3',
  // Add more tracks as needed
];
```

**`index.ts`:**
```typescript
import type { Adventure } from '../../types';
import { yourAdventureTheme, musicPlaylist } from './theme';

export const yourAdventure: Adventure = {
  id: 'your-adventure-id',
  title: 'Your Adventure Title',
  description: 'Brief description of your adventure (1-2 sentences)',
  estimatedTime: 180,  // minutes
  coverArt: '/assets/your-adventure/cover.png',

  theme: yourAdventureTheme,
  musicPlaylist,

  chapters: [
    // Will add chapters here
  ],

  finalQuiz: undefined,  // Will add later
};
```

---

## Phase 4: Theme and Configuration

### Choosing Your Color Palette

**Color Psychology for Educational Adventures:**

| Primary Color | Mood/Association | Good For |
|--------------|------------------|----------|
| Deep Purple-Blue (#1a0f2e) | Mystical, nocturnal, mysterious | Night-themed, mystical content |
| Dark Red-Brown (#3d1a1a) | Serious, historical, dramatic | Tragedies, historical epics |
| Forest Green (#1a3d1a) | Natural, growth, classic | Nature myths, pastoral tales |
| Royal Blue (#1a2e4a) | Noble, trustworthy, calm | Epic journeys, exploration |
| Charcoal (#2a2a2a) | Sophisticated, neutral | Modern lit, philosophy |

**Tools for palette generation:**
- [Coolors.co](https://coolors.co/) - Generate and test palettes
- [Adobe Color](https://color.adobe.com/) - Extract from images
- [Paletton](https://paletton.com/) - Create harmonious schemes

### Font Selection

**Recommended font pairings:**

| Adventure Style | Font Recommendation | Why |
|----------------|--------------------|----|
| Classical Literature | `'Crimson Text', serif` | Elegant, traditional, readable |
| Medieval/Fantasy | `'Cinzel', serif` | Formal, historical feel |
| Modern Literature | `'Lora', serif` | Contemporary but literary |
| Mythology | `'Cormorant Garamond', serif` | Graceful, mythic quality |
| Eastern Literature | `'Noto Serif', serif` | Multi-script support |

**Google Fonts CDN:**
```html
<link href="https://fonts.googleapis.com/css2?family=[Your+Font]:wght@400;700&display=swap" rel="stylesheet">
```

### Theme Configuration Complete Example

```typescript
// theme.ts
import type { AdventureTheme } from '../../types';

export const tristanTheme: AdventureTheme = {
  primaryColor: '#2c1810',      // Deep brown (medieval)
  secondaryColor: '#c9a961',    // Antique gold
  fontFamily: '"Cinzel", serif',
  backgroundMusic: '/assets/tristan-isolde/music/celtic-theme.mp3',
};

export const musicPlaylist = [
  '/assets/tristan-isolde/music/celtic-theme.mp3',
  '/assets/tristan-isolde/music/court-life.mp3',
  '/assets/tristan-isolde/music/tragic-theme.mp3',
];
```

---

## Phase 5: Chapter Development

### Chapter Development Workflow

**For each chapter:**

1. ✅ Write chapter outline (in ADVENTURE_OUTLINE.md)
2. ✅ Create chapter file (`chapters/chapter-X-name.ts`)
3. ✅ Define learning objectives
4. ✅ Write scene outlines
5. ✅ Implement scenes one by one
6. ✅ Add learning points to each scene
7. ✅ Create chapter quiz
8. ✅ Test chapter playthrough
9. ✅ Refine and polish

### Chapter File Template

```typescript
// chapters/chapter-1-opening.ts
import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1-your-adventure',
  title: 'Chapter 1: [Title]',
  description: 'Brief 1-2 sentence summary of this chapter',

  // Optional: Only if non-sequential unlocking
  // prerequisites: { type: 'sequential' },

  learningObjectives: [
    'Objective 1: [Action verb] [concept]',
    'Objective 2: [Action verb] [concept]',
    'Objective 3: [Action verb] [concept]',
  ],

  scenes: [
    // Scene 1: Opening narrative
    {
      id: 'scene-ch1-1-opening',
      type: 'narrative',
      backgroundImage: '/assets/your-adventure/backgrounds/opening.png',

      content: `Your opening narrative text here.

      Keep paragraphs to 2-4 sentences. Use double line breaks for paragraph separation.

      Start with a hook that captures attention immediately.`,

      learningPoints: [
        {
          id: 'lp-ch1-1-context',
          content: 'First learning point: introduce a key concept or context.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Example decision
    {
      id: 'scene-ch1-2-decision',
      type: 'decision',
      backgroundImage: '/assets/your-adventure/backgrounds/crossroads.png',

      prompt: 'What will you do?',
      context: 'Set up the decision with 1-2 paragraphs of context.',

      choices: [
        {
          id: 'choice-option-a',
          text: 'First option text',
          consequence: 'What happens if they choose this.',
          learningPoints: [
            {
              id: 'lp-ch1-2a-theme',
              content: 'What this choice teaches about the theme.',
              category: 'thematic-analysis',
            },
          ],
        },
        {
          id: 'choice-option-b',
          text: 'Second option text',
          consequence: 'Alternative outcome.',
        },
      ],

      learningPoints: [],
    },

    // Add 6-13 more scenes...

    // Final scene with quiz trigger
    {
      id: 'scene-ch1-final',
      type: 'narrative',
      backgroundImage: '/assets/your-adventure/backgrounds/chapter-end.png',

      content: `Chapter conclusion text.

      Summarize key points and transition to quiz.`,

      learningPoints: [
        {
          id: 'lp-ch1-final-synthesis',
          content: 'Final synthesizing learning point.',
          category: 'thematic-analysis',
        },
      ],

      events: {
        onExit: [{
          type: 'quiz',
          componentId: 'quiz-chapter-1',
          condition: { type: 'if-not-completed' },
        }],
      },
    },
  ],

  endQuiz: chapter1Quiz,
};
```

### Scene Type Selection Guide

**Quick reference for choosing scene types:**

| Educational Goal | Recommended Scene Type | Why |
|-----------------|----------------------|-----|
| Story exposition | Narrative | Best for delivering content |
| Player agency | Decision | Creates investment |
| Character development | Dialogue | Reveals personality |
| Geographic learning | Map Exploration | Spatial understanding |
| Character knowledge | Quote Attribution | Test recognition |
| Chronological understanding | Timeline Game | Sequence comprehension |
| Causal relationships | Cause-Effect | Logic connections |
| Source analysis | Primary Source | Critical thinking |
| Historical accuracy | Anachronism | Attention to detail |
| Unique mechanics | Custom Mini-Game | Flexible creativity |

**See:** `docs/SCENE_TYPES_REFERENCE.md` for complete documentation of all 10 scene types.

### Learning Points Best Practices

**Categories to use:**

- `historical-context` - Historical facts and background
- `literary-technique` - Writing craft and structure
- `character-analysis` - Character development and psychology
- `thematic-analysis` - Themes, symbols, meanings
- `plot-structure` - Narrative structure and pacing
- `cultural-context` - Cultural customs and worldview
- `narrative-structure` - Story framing and organization

**Writing effective learning points:**

✅ **Good:**
```typescript
{
  id: 'lp-frame-narrative',
  content: 'Frame narratives create layers of meaning by embedding stories within stories, like Russian nesting dolls.',
  category: 'literary-technique',
}
```

❌ **Bad:**
```typescript
{
  id: 'lp-1',
  content: 'Stories are interesting.',
  category: 'general',
}
```

**Guidelines:**
- Be specific and concrete
- Keep to 1-2 sentences
- Use vivid comparisons/metaphors
- Connect to the current scene
- Build on previous learning points

### Inline Annotations

**When to use inline annotations:**
- Historical paradoxes (e.g., "China" in Aladdin)
- Cultural context that enriches understanding
- Literary techniques being demonstrated
- References modern readers might miss
- Specialized vocabulary

**How to implement:**

```typescript
{
  id: 'scene-with-annotations',
  type: 'narrative',
  content: `In a city in China, there once lived a poor boy named Aladdin...`,

  inlineAnnotations: [
    {
      id: 'annotation-china',
      text: 'China',  // Exact text to underline
      tooltip: {
        title: 'Why "China"?',
        content: 'The story says "China," but everything about it is Middle Eastern. To medieval audiences, "China" meant "far-off exotic land." Fantasy worldbuilding, not geography!',
        category: 'literary-context',
      },
    },
  ],
}
```

**Guidelines:**
- Maximum 3-4 annotations per scene
- Keep tooltip content to 1-3 sentences
- Make discoveries, not lectures
- Only annotate if it genuinely enhances understanding

**See:** `docs/FEATURE_INLINE_ANNOTATIONS.md` for complete documentation.

---

## Phase 6: Quiz Creation

### Quiz Structure and Planning

**Quiz Types:**

1. **Chapter Quizzes** - Test understanding of that chapter (8-15 questions)
2. **Final Quiz** - Comprehensive assessment of entire adventure (15-20 questions)

### Question Type Decision Tree

```
What are you testing?
│
├─ Factual recall (name, term, number)?
│  ├─ Single word/phrase answer? → short-answer
│  └─ Multiple options? → multiple-choice
│
├─ True/False statement? → true-false
│
├─ Match relationships? → matching
│
└─ Reasoning/Analysis/Explanation? → self-assessment
```

### ⚠️ Critical: Don't Misuse Short-Answer Questions

**SHORT-ANSWER IS ONLY FOR EXACT WORD/PHRASE MATCHING**

```typescript
// ✅ GOOD: Exact term with one answer
{
  question: 'What was the name of the vizier\'s daughter?',
  type: 'short-answer',
  correctAnswer: 'Scheherazade',
}

// ✅ GOOD: Specific number
{
  question: 'How many nights did Scheherazade tell stories?',
  type: 'short-answer',
  correctAnswer: '1001',
}

// ❌ WRONG: Requires reasoning
{
  question: 'Why did Scheherazade volunteer?',
  type: 'short-answer',  // Should be 'self-assessment'
}

// ❌ WRONG: Multiple valid phrasings
{
  question: 'What theme is explored in this story?',
  type: 'short-answer',  // Should be 'multiple-choice' or 'self-assessment'
}
```

**Rule:** If you expect more than 1-3 words, use `self-assessment` instead.

### Quiz File Template

```typescript
// quizzes/chapter-1-quiz.ts
import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1-your-adventure',
  title: 'Chapter 1: [Title] Quiz',
  description: 'Test your knowledge of [chapter content]',
  passingScore: 70,  // Percentage required to pass
  allowRetry: true,

  questions: [
    // Multiple Choice (60-70% of questions)
    {
      id: 'q1',
      question: 'What was [specific plot point]?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Option A (correct)',
        'Option B (plausible distractor)',
        'Option C (plausible distractor)',
        'Option D (plausible distractor)',
      ],
      correctAnswer: 'Option A (correct)',
      explanation: 'Educational explanation of why A is correct and what it means.',
      relatedLearningPoints: ['lp-ch1-2-scene'],
    },

    // True/False (10-20% of questions)
    {
      id: 'q2',
      question: '[Statement to evaluate].',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'Why this statement is true/false and what it reveals.',
      relatedLearningPoints: ['lp-ch1-3-context'],
    },

    // Short Answer (5-10% of questions - ONLY FOR EXACT WORDS)
    {
      id: 'q3',
      question: 'What was the name of [character]?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'ExactName',
      explanation: 'Information about this character/term.',
      relatedLearningPoints: ['lp-ch1-character'],
    },

    // Matching (5-10% of questions)
    {
      id: 'q4',
      question: 'Match each [item] to its [relationship]:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Item 1': 'Match A',
        'Item 2': 'Match B',
        'Item 3': 'Match C',
      },
      explanation: 'Explanation of these relationships.',
      relatedLearningPoints: ['lp-ch1-relationships'],
    },

    // Self-Assessment (5-10% of questions - 1-2 per quiz)
    {
      id: 'q5',
      question: 'Analyze how [complex concept]. Consider [aspect 1], [aspect 2], and [aspect 3].',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Comprehensive model answer showing what a complete response looks like.

      Should cover all aspects mentioned in the question.

      2-3 paragraphs demonstrating depth of analysis.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed [aspect 1] in detail',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Explained [aspect 2] and its significance',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Connected to [broader theme or concept]',
          points: 6,
        },
      ],
      explanation: 'Additional context about why this question matters.',
      relatedLearningPoints: ['lp-ch1-theme', 'lp-ch1-analysis'],
    },
  ],
};
```

### Question Distribution Recommendations

**Chapter Quiz (10 questions example):**
- Multiple choice: 6 questions (60 points)
- True/False: 2 questions (20 points)
- Short answer: 1 question (10 points)
- Self-assessment: 1 question (20 points)
- **Total:** 110 points, 70% = 77 points to pass

**Final Quiz (15 questions example):**
- Multiple choice: 9 questions (90 points)
- True/False: 2 questions (20 points)
- Matching: 2 questions (30 points)
- Self-assessment: 2 questions (40 points)
- **Total:** 180 points, 75% = 135 points to pass

### Linking Quizzes to Chapters

```typescript
// In chapter file
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  // ... other fields
  endQuiz: chapter1Quiz,
};
```

**Quiz automatically triggers when:**
- Player reaches last scene and clicks "Continue"
- Scene has `events.onExit` with quiz trigger
- Player hasn't completed the quiz yet

**See:** `docs/QUIZ_SYSTEM_REFERENCE.md` for complete documentation.

---

## Phase 7: Testing and Refinement

### Testing Checklist

#### Pre-Testing Setup

```bash
# 1. Ensure development server is running
npm run dev

# 2. Clear browser cache and storage
# In browser DevTools: Application → Storage → Clear site data

# 3. Test in multiple browsers
# - Chrome/Edge (Chromium)
# - Firefox
# - Safari (if on Mac)
```

#### Chapter-by-Chapter Testing

For each chapter:

- [ ] **Navigation**
  - [ ] All scenes advance properly
  - [ ] Back button works on all scenes
  - [ ] Can navigate to previous chapters
  - [ ] Chapter navigation menu shows correct status

- [ ] **Content**
  - [ ] All text displays correctly (no overflow)
  - [ ] Images load properly (check console for 404s)
  - [ ] Background images display
  - [ ] Learning points appear
  - [ ] Inline annotations work (if present)

- [ ] **Interactive Elements**
  - [ ] Decision choices are clickable
  - [ ] Decisions show consequences
  - [ ] Dialogue progresses correctly
  - [ ] Map locations are clickable
  - [ ] Mini-games function properly
  - [ ] All interactive scenes can be completed

- [ ] **Quiz**
  - [ ] Quiz triggers at chapter end
  - [ ] All questions display
  - [ ] Answer validation works
  - [ ] Can navigate between questions
  - [ ] Submit button appears on last question
  - [ ] Results screen shows correct score
  - [ ] Self-assessment questions work
  - [ ] Can retry if failed (if allowed)
  - [ ] Passing advances to next chapter

- [ ] **Technical**
  - [ ] No console errors
  - [ ] Music plays (if enabled)
  - [ ] Progress saves correctly
  - [ ] Performance is smooth

#### Integration Testing

- [ ] **Adventure-Wide**
  - [ ] All chapters accessible in correct order
  - [ ] Prerequisites work as intended
  - [ ] Final quiz accessible after all chapters
  - [ ] Progress persists across sessions
  - [ ] Export/import progress works

- [ ] **User Experience**
  - [ ] Clear instructions throughout
  - [ ] Consistent theme and styling
  - [ ] Appropriate pacing (not too fast/slow)
  - [ ] Educational goals met
  - [ ] Engaging and compelling

### Common Issues and Fixes

| Issue | Likely Cause | Fix |
|-------|-------------|-----|
| Image not loading | Wrong path or file doesn't exist | Check console, verify path and file |
| Scene won't advance | Missing required answer/action | Check validation logic in scene |
| Quiz doesn't trigger | Missing event trigger or wrong ID | Verify `events.onExit` and quiz ID |
| Learning points don't show | Not added to scene definition | Add learningPoints array to scene |
| Navigation broken | Scene IDs don't match | Check all scene IDs are unique and referenced correctly |
| Self-assessment stuck | Criteria not all evaluated | Ensure all criteria have radio selections |

### User Testing

**Recruit 3-5 testers:**
- Target age range (16-20)
- Mix of familiarity with source material
- Varied educational backgrounds

**Testing Protocol:**

1. **Introduction** (5 min)
   - Explain purpose: "Testing the adventure, not you"
   - Ask them to think aloud
   - Let them know they can quit anytime

2. **Playthrough** (2-4 hours)
   - Observe without interfering
   - Note where they pause/struggle
   - Record questions they ask
   - Watch for confusion or frustration

3. **Debrief** (15 min)
   - What did you enjoy most?
   - What was confusing?
   - Did you learn something new?
   - Would you recommend this to a friend?
   - What would you change?

4. **Survey** (5 min)
   - Rate 1-5: Engagement, Educational Value, Clarity, Pacing, Overall
   - Open feedback

**Iterate based on feedback:**
- Fix critical bugs immediately
- Note content issues for revision
- Identify patterns (if 2+ testers mention something, fix it)

---

## Phase 8: Integration and Deployment

### Integrating Your Adventure

#### Step 1: Register Adventure in Registry

**File:** `src/data/adventureRegistry.ts`

```typescript
import { yourAdventure } from '../adventures/your-adventure-name';

export const adventureRegistry = [
  arabianNights,
  dantesInferno,
  yourAdventure,  // ← Add your adventure here
];

export function getAdventureById(id: string) {
  return adventureRegistry.find(adv => adv.id === id);
}
```

#### Step 2: Test in Adventure Selection

```bash
npm run dev
```

1. Navigate to `http://localhost:5173`
2. Your adventure should appear on selection screen
3. Click to launch
4. Verify cover art, title, description display correctly

#### Step 3: Verify Routing

**File:** `src/App.tsx` (usually already configured)

```typescript
<Route path="/adventure/:adventureId" element={<AdventureEngine />} />
<Route path="/adventure/:adventureId/chapter/:chapterId" element={<AdventureEngine />} />
```

No changes needed unless custom routing required.

### Pre-Deployment Checklist

- [ ] **Code Quality**
  - [ ] No TypeScript errors (`npm run type-check`)
  - [ ] No ESLint warnings (`npm run lint`)
  - [ ] All files properly formatted
  - [ ] Remove console.logs and debug code

- [ ] **Assets**
  - [ ] All assets uploaded to public folder or CDN
  - [ ] Image paths correct in code
  - [ ] Images optimized (use WebP if possible)
  - [ ] Music files compressed appropriately
  - [ ] Total asset size reasonable (<100MB)

- [ ] **Content**
  - [ ] All text proofread
  - [ ] No placeholder text (e.g., "[TODO]", "Lorem ipsum")
  - [ ] Learning objectives clear and achievable
  - [ ] Quiz questions thoroughly tested
  - [ ] Inline annotations work

- [ ] **Documentation**
  - [ ] `ADVENTURE_OUTLINE.md` complete
  - [ ] `[adventure]_assets.md` complete
  - [ ] README updated (if applicable)
  - [ ] License information for assets

- [ ] **Testing**
  - [ ] Full playthrough completed
  - [ ] All chapters accessible
  - [ ] All quizzes passable
  - [ ] Tested on multiple browsers
  - [ ] Tested on mobile (responsive)

### Build for Production

```bash
# 1. Build the application
npm run build

# 2. Preview production build locally
npm run preview

# 3. Test production build thoroughly
# Navigate to localhost:4173
```

### Deployment

**Standard deployment process** (varies by hosting):

```bash
# Example: Deploying to Netlify
netlify deploy --prod

# Example: Deploying to Vercel
vercel --prod

# Example: GitHub Pages
npm run deploy
```

**Post-Deployment Verification:**
- [ ] Visit live URL
- [ ] Test one complete playthrough
- [ ] Verify all assets load
- [ ] Check mobile responsiveness
- [ ] Confirm progress saves correctly

---

## Appendices

### Appendix A: Scene Type Quick Reference

| Scene Type | Use For | Complexity | Typical Duration |
|-----------|---------|-----------|-----------------|
| Narrative | Story exposition | Low | 2-3 min |
| Decision | Player choices | Low | 1-2 min |
| Dialogue | Conversations | Medium | 3-5 min |
| Map Exploration | Geography | Medium | 3-5 min |
| Quote Attribution | Recognition | Low | 2-4 min |
| Timeline Game | Chronology | Medium | 3-5 min |
| Cause-Effect | Relationships | Medium | 3-5 min |
| Primary Source | Analysis | High | 5-8 min |
| Anachronism | Error detection | Medium | 3-5 min |
| Custom Mini-Game | Unique mechanics | Variable | Variable |

### Appendix B: Bloom's Taxonomy for Learning Objectives

**Use action verbs aligned with cognitive levels:**

| Level | Action Verbs | Example Objective |
|-------|-------------|------------------|
| **Remember** | Identify, List, Name, Recall | "Identify key characters in Arabian Nights" |
| **Understand** | Describe, Explain, Summarize | "Explain the frame narrative structure" |
| **Apply** | Demonstrate, Illustrate, Solve | "Demonstrate understanding of cause-effect relationships" |
| **Analyze** | Compare, Contrast, Examine | "Analyze Scheherazade's use of storytelling" |
| **Evaluate** | Assess, Critique, Judge | "Evaluate the effectiveness of nested narratives" |
| **Create** | Compose, Design, Develop | "Create an original story using frame narrative" |

**Distribute objectives across levels:**
- 40% Understand/Remember
- 40% Apply/Analyze
- 20% Evaluate/Create

### Appendix C: Common Pitfalls to Avoid

**Content Pitfalls:**
- ❌ Too much text per scene (>500 words)
- ❌ Unclear learning objectives
- ❌ No connection between scenes and quiz
- ❌ Inconsistent tone or style
- ❌ Assuming prior knowledge without teaching it

**Technical Pitfalls:**
- ❌ Duplicate IDs across scenes
- ❌ Broken asset paths
- ❌ Missing learning points
- ❌ Wrong question types in quizzes
- ❌ No quiz triggers

**Design Pitfalls:**
- ❌ Too many consecutive narrative scenes
- ❌ Decisions without meaningful consequences
- ❌ Interactive scenes without clear instructions
- ❌ No variety in scene types
- ❌ Poor pacing (too fast or too slow)

### Appendix D: Educational Design Principles

**Cognitive Load Theory:**
- Limit information per scene to 3-5 key points
- Use multimedia to support learning (images + text)
- Scaffold complexity (easy → medium → hard)
- Provide frequent low-stakes assessments

**Spaced Repetition:**
- Revisit key concepts across multiple scenes
- Reference earlier learning in later chapters
- Include callback questions in quizzes
- Build on previous knowledge incrementally

**Active Learning:**
- Engage learners through decisions and interactions
- Use varied scene types to maintain attention
- Provide immediate feedback
- Encourage reflection (self-assessment questions)

**Universal Design for Learning (UDL):**
- Multiple means of representation (text, images, audio)
- Multiple means of engagement (narrative, games, analysis)
- Multiple means of expression (choices, short answer, self-assessment)

### Appendix E: Asset Generation Tools

**Image Generation:**
- **Midjourney** (Discord-based, $10-60/month)
  - Best: Artistic, stylized images
  - Process: Discord commands
  - Website: midjourney.com

- **DALL-E 3** (ChatGPT Plus, $20/month)
  - Best: Precise prompt following
  - Process: ChatGPT interface
  - Website: openai.com

- **Stable Diffusion** (Free, self-hosted or online)
  - Best: Full control, customization
  - Process: Local or web UIs
  - Website: stability.ai

**Music Generation:**
- **Suno** (Free tier, $10-30/month for more)
  - Best: Full songs with lyrics
  - Website: suno.ai

- **Udio** (Similar to Suno)
  - Best: Instrumental focus
  - Website: udio.com

**Audio Editing:**
- **Audacity** (Free, open source)
  - Best: Basic audio editing, looping
  - Website: audacityteam.org

**Image Optimization:**
- **Squoosh** (Free, web-based)
  - Best: Quick compression
  - Website: squoosh.app

- **ImageOptim** (Free, Mac only)
  - Best: Batch optimization
  - Website: imageoptim.com

### Appendix F: Glossary

**Adventure** - A complete educational experience consisting of multiple chapters

**Asset** - Any media file (image, video, audio, music) used in an adventure

**Chapter** - A self-contained unit of an adventure (30-45 minutes, 8-15 scenes)

**Frame Narrative** - A story structure where one story contains another (like Arabian Nights)

**Inline Annotation** - A tooltip that appears when hovering over specific text

**Learning Objective** - A measurable educational goal for a chapter or adventure

**Learning Point** - A specific educational insight delivered in a scene

**Mini-Game** - An interactive scene type focused on gameplay mechanics

**Prerequisite** - A requirement that must be met before accessing a chapter

**Quiz** - An assessment with multiple questions testing comprehension

**Scene** - The smallest unit of content, typically 1-5 minutes

**Self-Assessment** - A quiz question type where students evaluate their own answer

**Theme** - Visual and audio styling configuration for an adventure

---

## Conclusion

You now have a complete roadmap for creating an Imsie adventure from concept to deployment. Remember:

1. **Plan thoroughly** before writing content
2. **Document assets** with detailed prompts
3. **Test frequently** as you develop
4. **Iterate based on feedback**
5. **Focus on education** first, entertainment second

**Next Steps:**

1. Review existing adventures (`arabian-nights`, `dantes-inferno`) for inspiration
2. Read all referenced documentation files
3. Start with your outline (`ADVENTURE_OUTLINE.md`)
4. Create your asset documentation (`[adventure]_assets.md`)
5. Build one chapter completely before moving to the next

**Need Help?**

- **Type Definitions:** `src/types/adventure.ts`
- **Examples:** `src/adventures/arabian-nights/` and `src/adventures/dantes-inferno/`
- **Documentation:** All files in `docs/`

Good luck with your adventure creation! 🚀

---

**Version:** 1.0
**Last Updated:** October 2025
**Contributors:** Johan Strömquist, Claude (Anthropic)
**License:** MIT
