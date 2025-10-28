# Phase 5: Chapter Development

**Purpose:** This guide covers implementing the scenes defined in your Adventure Outline (Step 2). You'll learn how to create chapter files, select appropriate scene types, write engaging content, and integrate educational learning points.

---

## Table of Contents

1. [Asset Placeholder System](#asset-placeholder-system)
2. [Chapter Development Workflow](#chapter-development-workflow)
3. [Chapter File Template](#chapter-file-template)
4. [Scene Type Selection Guide](#scene-type-selection-guide)
5. [Writing Narrative Content](#writing-narrative-content)
6. [Adding Learning Points](#adding-learning-points)
7. [Using Inline Annotations](#using-inline-annotations)
8. [Quiz Trigger Setup](#quiz-trigger-setup)
9. [Quiz Question Types for Scenes](#quiz-question-types-for-scenes)
10. [Complete Chapter Example](#complete-chapter-example)
11. [Best Practices](#best-practices)

---

## Asset Placeholder System

### ⚠️ CRITICAL: Understanding Placeholders During Development

When you're developing chapters in **Phase 5**, you **DO NOT** use real asset paths. Instead, use an obvious placeholder format that cannot be mistaken for a real path.

**Why Placeholders?**
- Chapter development (Phase 5) focuses on content, structure, and educational design
- Asset creation and integration happens later in **Phase 9: Asset Integration**
- Placeholders make it clear what assets are needed without committing to final paths
- Prevents confusion about which assets exist vs. which are planned

### Placeholder Format

**Use this format for ALL asset references during chapter development:**

```typescript
// Background images
backgroundImage: '[PLACEHOLDER-BG]/opening-scene.png'

// Scene images
image: '[PLACEHOLDER-IMG]/marketplace.png'

// Character portraits
portrait: '[PLACEHOLDER-PORTRAIT]/scheherazade.png'

// Map images
mapImage: '[PLACEHOLDER-MAP]/baghdad.png'

// Location images within maps
image: '[PLACEHOLDER-LOC]/palace.png'

// Timeline event images
image: '[PLACEHOLDER-EVENT]/battle-scene.png'

// Anachronism item images
image: '[PLACEHOLDER-ITEM]/smartphone.png'

// Primary source documents
documentImage: '[PLACEHOLDER-DOC]/manuscript.png'

// Video assets
backgroundVideo: '[PLACEHOLDER-VIDEO]/storm-animation.mp4'

// Music assets
background: '[PLACEHOLDER-MUSIC]/theme.mp3'
```

**Alternative descriptive format:**
```typescript
backgroundImage: '[Asset pending - see assets.md: backgrounds/palace-exterior]'
image: '[Asset pending - see assets.md: scenes/storyteller]'
```

### What These Mean

| Placeholder | Meaning | Real Asset Created In |
|------------|---------|---------------------|
| `[PLACEHOLDER-BG]` | Background image needed | Phase 9 |
| `[PLACEHOLDER-IMG]` | Scene image needed | Phase 9 |
| `[PLACEHOLDER-PORTRAIT]` | Character portrait needed | Phase 9 |
| `[PLACEHOLDER-MAP]` | Map image needed | Phase 9 |
| `[PLACEHOLDER-LOC]` | Map location image needed | Phase 9 |
| `[PLACEHOLDER-EVENT]` | Timeline event image needed | Phase 9 |
| `[PLACEHOLDER-ITEM]` | Anachronism item image needed | Phase 9 |
| `[PLACEHOLDER-DOC]` | Primary source document needed | Phase 9 |
| `[PLACEHOLDER-VIDEO]` | Video asset needed | Phase 9 |
| `[PLACEHOLDER-MUSIC]` | Music/audio file needed | Phase 9 |

### When Placeholders Become Real Paths

**Phase 9: Asset Integration** is when you:
1. Reference your `[adventure]_assets.md` file (created in Phase 3)
2. Create or commission actual assets
3. Replace ALL placeholders with real paths
4. Test that all assets load correctly

**Real path formats** (used AFTER Phase 9):
- External CDN: `https://cdn.midjourney.com/...`
- Local public folder: `/assets/[adventure-name]/backgrounds/opening.png`

### How to Track Asset Needs

As you develop chapters, document every placeholder in your `[adventure]_assets.md` file:

```markdown
## Backgrounds
- `opening-scene.png` - Used in: Chapter 1, Scene 1 (opening narrative)
  - Description: Magical book opening with golden light
  - Placeholder: [PLACEHOLDER-BG]/opening-scene.png

## Scene Images
- `marketplace.png` - Used in: Chapter 1, Scene 3 (decision scene)
  - Description: Bustling Middle Eastern bazaar at sunset
  - Placeholder: [PLACEHOLDER-IMG]/marketplace.png
```

**Cross-reference:** See **Phase 3: Asset Planning** (`03_asset_planning.md`) for creating comprehensive asset documentation.

### Visual Identification

**If you see this in code:**
```typescript
backgroundImage: '/assets/your-adventure/backgrounds/opening.png'
```
❌ **WRONG** - This looks like it might be real but uses "your-adventure" (ambiguous)

**If you see this in code:**
```typescript
backgroundImage: '[PLACEHOLDER-BG]/opening.png'
```
✅ **CORRECT** - Obviously a placeholder, clearly not integrated yet

**If you see this in code:**
```typescript
backgroundImage: '/assets/greek-myths/backgrounds/opening.png'
```
✅ **CORRECT** - Real path after Phase 9 integration (specific adventure name, actual asset)

### Development Workflow Summary

```
Phase 5: Chapter Development
├─ Write chapter content
├─ Use placeholder format: [PLACEHOLDER-*]
├─ Document assets in assets.md
└─ Focus on narrative & educational design

Phase 9: Asset Integration
├─ Review assets.md requirements
├─ Create/commission actual assets
├─ Replace ALL [PLACEHOLDER-*] with real paths
└─ Test asset loading
```

**Important:** Never mix placeholder and real paths. Either use all placeholders (during development) or all real paths (after integration).

---

## Chapter Development Workflow

**For each chapter, follow these steps:**

1. ✅ **Write chapter outline** (in `ADVENTURE_OUTLINE.md`)
2. ✅ **Create chapter file** (`chapters/chapter-X-name.ts`)
3. ✅ **Define learning objectives** (3-5 measurable goals)
4. ✅ **Write scene outlines** (8-15 scenes with type selection)
5. ✅ **Implement scenes one by one** (start with narrative, add interactive)
6. ✅ **Add learning points to each scene** (1-3 per scene)
7. ✅ **Create chapter quiz** (see Phase 6)
8. ✅ **Add quiz trigger to last scene** ⚠️ **CRITICAL - Don't forget!**
9. ✅ **Test chapter playthrough** (full walkthrough)
10. ✅ **Refine and polish** (based on testing)

**Key Principle:** Build incrementally. Complete each scene fully before moving to the next.

### ⚠️ Critical: Quiz Trigger Checklist

Before marking a chapter as complete, verify:
- [ ] Quiz file created in `quizzes/chapter-X-quiz.ts`
- [ ] Quiz imported at top of chapter file
- [ ] `endQuiz: chapterXQuiz` added at end of chapter
- [ ] **Quiz trigger event added to LAST scene's `events.onExit`** ← Most commonly missed!

---

## Chapter File Template

### Basic Structure

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
    // Scene implementations here (see examples below)
  ],

  endQuiz: chapter1Quiz,
};
```

### Minimal Opening Scene Example

```typescript
scenes: [
  // Scene 1: Opening narrative
  {
    id: 'scene-ch1-1-opening',
    type: 'narrative',
    backgroundImage: '[PLACEHOLDER-BG]/opening.png',

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
]
```

### Decision Scene Example

```typescript
{
  id: 'scene-ch1-2-decision',
  type: 'decision',
  backgroundImage: '[PLACEHOLDER-BG]/crossroads.png',

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
          category: 'literary-context',
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
}
```

### Final Scene with Quiz Trigger

```typescript
{
  id: 'scene-ch1-final',
  type: 'narrative',
  backgroundImage: '[PLACEHOLDER-BG]/chapter-end.png',

  content: `Chapter conclusion text.

  Summarize key points and transition to quiz.`,

  learningPoints: [
    {
      id: 'lp-ch1-final-synthesis',
      content: 'Final synthesizing learning point.',
      category: 'literary-context',
    },
  ],

  events: {
    onExit: [{
      type: 'quiz',
      componentId: 'quiz-chapter-1',
      condition: { type: 'if-not-completed' },
    }],
  },
}
```

---

## Scene Type Selection Guide

### Quick Reference Table

| Educational Goal | Recommended Scene Type | Why |
|-----------------|----------------------|-----|
| Story exposition | Narrative | Best for delivering content |
| Player agency | Decision | Creates investment |
| Character development | Dialogue | Reveals personality |
| Geographic learning | Map Exploration | Spatial understanding |
| Character knowledge | Quote Attribution | Test recognition |
| Chronological understanding | Timeline Game | Sequence comprehension |
| Causal relationships | Cause-Effect | Logic connections |
| Source analysis | Primary Source | Critical thinking (use self-assessment) |
| Historical accuracy | Anachronism | Attention to detail |
| Unique mechanics | Custom Mini-Game | Flexible creativity |

**For complete scene type documentation:** See `docs/SCENE_TYPES_REFERENCE.md`

### Selection Decision Tree

```
What is the primary goal of this scene?

├─ Tell story / provide context?
│  → Use NARRATIVE
│
├─ Give player a meaningful choice?
│  → Use DECISION
│
├─ Develop character through conversation?
│  → Use DIALOGUE
│
├─ Teach geography / spatial relationships?
│  → Use MAP EXPLORATION
│
├─ Test knowledge of who said what?
│  → Use QUOTE ATTRIBUTION
│
├─ Teach chronological order?
│  → Use TIMELINE GAME
│
├─ Show cause-and-effect relationships?
│  → Use CAUSE-EFFECT
│
├─ Analyze primary source documents?
│  → Use PRIMARY SOURCE (with self-assessment questions)
│
├─ Test historical accuracy?
│  → Use ANACHRONISM
│
└─ Something unique/custom?
   → Use CUSTOM MINI-GAME
```

### Typical Chapter Flow (8-15 scenes)

**Chapter 1 (Introduction):**
```
1. Narrative (opening)
2. Narrative (context)
3. Decision (simple choice)
4. Narrative (continuation)
5. Quote Attribution (easy test)
6. Narrative (development)
7. Decision (meaningful choice)
8. Narrative (conclusion + quiz trigger)
```

**Chapter 3 (Mid-adventure complexity):**
```
1. Narrative (setup)
2. Map Exploration (geography)
3. Narrative (story continuation)
4. Dialogue (character depth)
5. Narrative (plot twist)
6. Timeline Game (chronology test)
7. Narrative (development)
8. Cause-Effect (relationships)
9. Narrative (climax)
10. Primary Source (analysis)
11. Narrative (resolution + quiz trigger)
```

**Balance Guidelines:**
- **Story scenes (narrative/decision/dialogue):** 60-70%
- **Interactive scenes (games/exploration):** 30-40%
- **Total scenes per chapter:** 8-15

---

## Writing Narrative Content

### Content Structure

**Paragraphs:**
- Use double newlines to separate paragraphs
- Keep each paragraph to 2-4 sentences
- Total scene length: 150-400 words

**Example:**
```typescript
content: `This is the first paragraph. It introduces the scene and sets the stage. Keep it concise but vivid.

This is the second paragraph. It continues the narrative and adds depth. Notice the double newline between paragraphs.

This is the conclusion. It provides a transition or calls to action.`
```

### Writing Style Guidelines

**Do:**
- ✅ Use **second person** ("you") for player agency
- ✅ Write in **present tense** for immediacy
- ✅ Use **active voice** for clarity
- ✅ Start with a **hook** that grabs attention
- ✅ End with **momentum** toward next scene
- ✅ Include **sensory details** (sights, sounds, textures)
- ✅ Balance **storytelling with teaching** (70/30 split)

**Don't:**
- ❌ Use overly complex vocabulary (unless teaching it)
- ❌ Write paragraphs longer than 5 sentences
- ❌ Include multiple major concepts in one scene
- ❌ Assume prior knowledge without explanation
- ❌ Use passive voice unnecessarily

### Example: Good vs. Bad Narrative

**Bad:**
```typescript
content: `The Arabian Nights was compiled over many centuries from various sources including Persian, Arabic, Indian, and Egyptian traditions. It is considered one of the most important works of literature in human history and has influenced countless writers and artists across the globe. The frame narrative structure is particularly noteworthy as it demonstrates sophisticated literary techniques that were ahead of their time.`
```

**Problems:**
- Too dense (3 major concepts in one paragraph)
- Passive voice ("was compiled", "is considered")
- Academic tone (not engaging)
- No sensory details or narrative voice

**Good:**
```typescript
content: `Welcome to the magical world of the Arabian Nights!

The collection known as "One Thousand and One Nights" is one of the most influential works of literature in human history. These tales, compiled over centuries from sources across Persia, Arabia, India, and Egypt, have captivated audiences worldwide.

But before we dive into the famous adventures of Aladdin, Ali Baba, and Sinbad, we must first understand the remarkable frame story that holds all these tales together...`
```

**Why it works:**
- Engaging opening hook ("Welcome...")
- Conversational tone with active voice
- Breaks concepts into digestible paragraphs
- Uses "we" to include the player
- Creates anticipation for what's next

---

## Adding Learning Points

### Learning Point Anatomy

```typescript
learningPoints: [
  {
    id: 'lp-unique-identifier',              // Unique across entire adventure
    content: 'Educational insight (1-2 sentences)', // The actual learning
    category: 'historical-context',           // Categorization
  },
]
```

### Categories

Use these standard categories for consistency:

| Category | Use For | Example |
|----------|---------|---------|
| `historical-context` | Historical facts and background | "The Arabian Nights was compiled over 8 centuries" |
| `literary-technique` | Writing craft and structure | "Frame narratives create layers of meaning" |
| `character-analysis` | Character development and psychology | "Scheherazade embodies courage and wisdom" |
| `thematic-analysis` | Themes, symbols, meanings | "Storytelling as a tool for survival and transformation" |
| `plot-structure` | Narrative structure and pacing | "The cliffhanger technique keeps audiences engaged" |
| `cultural-context` | Cultural customs and worldview | "A vizier was a high-ranking political adviser" |
| `narrative-structure` | Story framing and organization | "The tale within a tale creates complexity" |
| `literary-significance` | Impact and influence | "These stories influenced Shakespeare and Dickens" |

### Best Practices

**Do:**
- ✅ Write 1-3 learning points per scene
- ✅ Keep each to 1-2 sentences maximum
- ✅ Be specific and concrete (not vague)
- ✅ Connect to the current scene directly
- ✅ Build on previous learning points
- ✅ Use vivid comparisons and metaphors
- ✅ Focus on insights, not just facts

**Don't:**
- ❌ Create generic learning points ("Stories are interesting")
- ❌ Write long paragraphs (save for content)
- ❌ Repeat information already in the content
- ❌ Use overly academic language
- ❌ Mix multiple concepts in one point

### Examples: Good vs. Bad Learning Points

**Bad:**
```typescript
{
  id: 'lp-1',
  content: 'This is important to know.',
  category: 'general',
}
```
**Problems:** Vague, no specific learning, generic category

**Good:**
```typescript
{
  id: 'lp-frame-narrative',
  content: 'Frame narratives create layers of meaning by embedding stories within stories, like Russian nesting dolls.',
  category: 'literary-technique',
}
```
**Why it works:** Specific technique, vivid metaphor, concrete

---

**Bad:**
```typescript
{
  id: 'lp-sultan',
  content: 'The Sultan was betrayed by his wife and became angry so he decided to execute all his future wives at dawn which made everyone in the kingdom very sad and many people left.',
  category: 'plot',
}
```
**Problems:** Too long, multiple concepts, plot summary not learning

**Good:**
```typescript
{
  id: 'lp-sultan-transformation',
  content: 'Sultan Shahryar\'s transformation shows how personal trauma can corrupt even just rulers.',
  category: 'literary-context',
}
```
**Why it works:** Analytical, concise, teaches character psychology

---

**Bad:**
```typescript
{
  id: 'lp-scheherazade',
  content: 'Scheherazade was smart.',
  category: 'character',
}
```
**Problems:** Superficial, no insight

**Good:**
```typescript
{
  id: 'lp-scheherazade-power',
  content: 'Scheherazade uses storytelling as a tool for survival and transformation, showing that intellect can triumph over violence.',
  category: 'literary-context',
}
```
**Why it works:** Deep insight, thematic connection, reveals strategy

---

## Using Inline Annotations

### What Are Inline Annotations?

Inline annotations are interactive tooltips that appear when players hover over (or tap on mobile) specific words or phrases in narrative text. They provide contextual educational information without interrupting the narrative flow.

**Complete documentation:** See `docs/FEATURE_INLINE_ANNOTATIONS.md`

### When to Use Annotations

**Use annotations for:**
- ✅ Historical paradoxes or anachronisms (e.g., "China" in Aladdin)
- ✅ Cultural context that enriches understanding
- ✅ Literary techniques being demonstrated in the text
- ✅ References modern readers might miss
- ✅ Specialized vocabulary or terms
- ✅ Name pronunciations or meanings
- ✅ Interesting tangents that would break narrative flow

**Don't use annotations for:**
- ❌ Core plot information (put in main content)
- ❌ Information essential to understanding (make explicit)
- ❌ Common knowledge terms
- ❌ Concepts better suited to learning points

### Implementation

```typescript
{
  id: 'scene-with-annotations',
  type: 'narrative',

  content: `In a city in China, there once lived a poor boy named Aladdin...`,

  inlineAnnotations: [
    {
      id: 'annotation-china',
      text: 'China',  // Exact text to underline in content
      tooltip: {
        title: 'Why "China"?',
        content: 'The story says "China," but everything about it is Middle Eastern. To medieval audiences, "China" meant "far-off exotic land." Fantasy worldbuilding, not geography!',
        category: 'literary-context',
      },
    },
  ],
}
```

**Result:** The word "China" will be underlined with a dotted line. When players hover/tap, they see the tooltip with title and explanation.

### Guidelines

**Content:**
- Keep tooltip content to 1-3 sentences
- Make discoveries, not lectures
- Use conversational tone
- Provide "aha!" moments

**Quantity:**
- Maximum 3-4 annotations per scene
- Less is more (don't overuse)
- Only annotate if it genuinely enhances understanding

**Categories:**
```typescript
category: 'historical-context'  // Historical facts
category: 'cultural-context'    // Cultural customs
category: 'literary-context'    // Literary techniques
category: 'pronunciation'       // Name/word pronunciation
category: 'etymology'           // Word origins
```

### Example from Arabian Nights

```typescript
{
  id: 'scene-2-sultan-betrayal',
  type: 'narrative',

  content: `Long ago, in the lands between India and China, there ruled a powerful sultan named Shahryar...`,

  inlineAnnotations: [
    {
      id: 'sultan-shahryar',
      text: 'Shahryar',
      tooltip: {
        title: 'The Sultan\'s Name',
        content: 'Shahryar (shah-ree-YAR) means "friend of the city" in Persian. The name emphasizes his role as protector-turned-tyrant, making his transformation more dramatic.',
        category: 'cultural-context',
      },
    },
  ],
}
```

---

## Quiz Trigger Setup

### ⚠️ CRITICAL: Every Chapter Needs a Quiz Trigger!

**Common mistake:** Creating the quiz but forgetting to add the trigger event to the last scene. Without this, the quiz will never appear and players will skip directly to the next chapter.

### Basic Quiz Trigger

Add to the **LAST SCENE** of the chapter (the `events` property is separate from `learningPoints`):

```typescript
{
  id: 'scene-ch1-final',
  type: 'narrative',
  // ... content and learning points ...

  learningPoints: [
    // ... your learning points ...
  ],

  // ⚠️ THIS IS REQUIRED - Add AFTER learningPoints
  events: {
    onExit: [{
      type: 'quiz',
      componentId: 'quiz-chapter-1',  // Must match quiz ID exactly
      condition: { type: 'if-not-completed' },
    }],
  },
}
```

**How it works:**
1. Player completes final scene
2. Clicks "Continue"
3. If quiz not already completed → Quiz launches
4. If quiz already completed → Advances to next chapter

**Verification:** After implementing a chapter, play through to the end. You should see the quiz appear, not jump to the next chapter.

### Multiple Event Triggers (Advanced)

You can trigger multiple events:

```typescript
events: {
  onExit: [
    {
      type: 'quiz',
      componentId: 'quiz-chapter-1',
      condition: { type: 'if-not-completed' },
    },
    {
      type: 'achievement',
      componentId: 'achievement-complete-chapter-1',
      condition: { type: 'always' },
    },
  ],
}
```

### Conditional Triggers (Advanced)

```typescript
events: {
  onExit: [{
    type: 'quiz',
    componentId: 'quiz-chapter-1',
    condition: {
      type: 'if-condition',
      check: 'visited-all-locations',  // Custom condition
    },
  }],
}
```

**Note:** Conditional triggers beyond `if-not-completed` require custom implementation in the engine.

---

## Quiz Question Types for Scenes

When designing interactive scenes (especially `primary-source` scenes), it's critical to choose the right question type for assessment.

### ⚠️ Critical Rule: Avoid `short-answer` for Analysis

**`short-answer` should ONLY be used for exact word/phrase matching:**
- Character names (e.g., "Scheherazade")
- Location names (e.g., "Baghdad")
- Specific terms (e.g., "Open Sesame")
- Numbers or dates (e.g., "1001")

**DO NOT use `short-answer` for:**
- ❌ Questions asking "Why?", "How?", "Explain...", "Analyze...", "Describe..."
- ❌ Questions requiring reasoning or critical thinking
- ❌ Questions with multiple valid phrasings
- ❌ Questions requiring sentences or paragraphs

### Use `multiple-choice` for Analysis Questions

For scenes like `primary-source` that ask students to analyze content, **always use `multiple-choice` questions**:

**❌ WRONG - Using short-answer for analysis:**
```typescript
{
  id: 'scene-primary-source',
  type: 'primary-source',
  questions: [
    {
      id: 'q1',
      question: 'What techniques does Cervantes use to parody chivalric romances?',
      type: 'short-answer',  // WRONG! This requires analysis
      correctAnswer: 'He uses elevated language to describe mundane reality',
      // This will frustrate students - they need exact wording!
    },
  ],
}
```

**✅ CORRECT - Using multiple-choice for analysis:**
```typescript
{
  id: 'scene-primary-source',
  type: 'primary-source',
  questions: [
    {
      id: 'q1',
      question: 'What techniques does Cervantes use to parody chivalric romances? Consider how he contrasts idealized descriptions with harsh reality.',
      type: 'multiple-choice',  // CORRECT!
      options: [
        'He completely rejects the structure of chivalric romances',
        'He uses elevated language to describe mundane reality while maintaining the chivalric structure',
        'He focuses only on realistic depictions without any literary techniques',
        'He avoids any reference to chivalric traditions',
      ],
      correctAnswer: 'He uses elevated language to describe mundane reality while maintaining the chivalric structure',
      explanation: 'Cervantes employs parody by using the elevated language and structure of chivalric romances to describe decidedly un-chivalric reality (rusty armor, skinny horse, windmills instead of dragons). This creates both humor and social commentary by highlighting the gap between romantic ideals and actual life.',
    },
  ],
}
```

### Question Type Decision Tree

```
Is this question in a scene (primary-source, dialogue, etc.)?
│
├─ Asking for exact name/term/number?
│  → Use `short-answer` (rare - consider `multiple-choice` instead)
│
├─ Asking for analysis, reasoning, or explanation?
│  → Use `multiple-choice` (most common for educational scenes)
│
└─ Testing recognition from limited options?
   → Use `multiple-choice`
```

**Best Practice:** For primary-source scenes, always use `multiple-choice` questions with well-crafted distractors that test understanding.

**For detailed quiz question guidance, see:** `docs/QUIZ_SYSTEM_REFERENCE.md`

---

## Complete Chapter Example

Here's a complete, working chapter with multiple scene types:

```typescript
// chapters/chapter-1-opening.ts
import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1-tales-begin',
  title: 'Chapter 1: The Tales Begin',
  description: 'Discover the magical world of storytelling and meet the legendary narrator who began it all.',

  learningObjectives: [
    'Understand the historical origins of the story collection',
    'Analyze the frame narrative structure and its purpose',
    'Explore the theme of storytelling as survival',
    'Recognize the cultural context of medieval storytelling',
  ],

  scenes: [
    // Scene 1: Opening Narrative
    {
      id: 'scene-1-welcome',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/opening.png',
      image: '[PLACEHOLDER-IMG]/book-opening.png',

      content: `Welcome to a world where stories hold the power of life and death!

      You are about to embark on a journey through one of the most famous story collections in human history. But this is no ordinary book—it is a tapestry woven from centuries of tradition, spanning multiple cultures and generations of storytellers.

      Your adventure begins with a question: What makes a story powerful enough to change the world?`,

      learningPoints: [
        {
          id: 'lp-1-intro',
          content: 'Great story collections often emerge from multiple cultural traditions blending over time.',
          category: 'historical-context',
        },
      ],
    },

    // Scene 2: Historical Context Narrative with Annotation
    {
      id: 'scene-2-origins',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/library.png',

      content: `These tales were compiled between the 9th and 13th centuries, drawing from Persian, Arabic, Indian, and Egyptian sources.

      Storytellers in the bazaars of Baghdad and Cairo would mesmerize audiences with these tales night after night. Each storyteller added their own flourishes, creating an ever-evolving oral tradition before the stories were finally written down.

      The collection became known as "Alf Layla wa-Layla"—One Thousand and One Nights.`,

      inlineAnnotations: [
        {
          id: 'annotation-baghdad',
          text: 'Baghdad',
          tooltip: {
            title: 'The City of Stories',
            content: 'Baghdad was the capital of the Islamic Golden Age, a center of learning, culture, and commerce. Its bazaars were famous gathering places where stories spread like wildfire.',
            category: 'historical-context',
          },
        },
      ],

      learningPoints: [
        {
          id: 'lp-2-oral-tradition',
          content: 'Oral storytelling traditions allow stories to evolve and adapt to each audience and era.',
          category: 'cultural-context',
        },
        {
          id: 'lp-3-compilation',
          content: 'Written collections preserve oral traditions but lose the spontaneity and interaction of live performance.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 3: Decision Scene
    {
      id: 'scene-3-storyteller-choice',
      type: 'decision',
      backgroundImage: '[PLACEHOLDER-BG]/bazaar.png',
      image: '[PLACEHOLDER-IMG]/storyteller.png',

      prompt: 'What draws you most to a great story?',
      context: `You find yourself in a bustling marketplace. A storyteller sits on a carpet, surrounded by an enthralled crowd. She pauses and looks directly at you.

      "You there," she says. "What brings you to hear my tales?"`,

      choices: [
        {
          id: 'choice-adventure',
          text: 'The promise of adventure and excitement',
          consequence: 'The storyteller smiles. "Ah, a seeker of thrills! Then you shall have journeys to distant lands, encounters with magical beings, and treasures beyond imagination."',
          learningPoints: [
            {
              id: 'lp-4-adventure',
              content: 'Adventure narratives fulfill our desire to experience danger and excitement vicariously.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-wisdom',
          text: 'The wisdom and lessons hidden within',
          consequence: 'The storyteller nods approvingly. "A student of life! Good stories teach us how to navigate the world. Every tale holds a mirror to our own choices."',
          learningPoints: [
            {
              id: 'lp-5-wisdom',
              content: 'Didactic storytelling embeds moral and practical lessons within entertaining narratives.',
              category: 'literary-context',
            },
          ],
        },
        {
          id: 'choice-escape',
          text: 'An escape from the troubles of daily life',
          consequence: 'The storyteller\'s eyes soften. "Yes, stories offer refuge. In the world of imagination, we can forget our burdens for a time and return refreshed."',
          learningPoints: [
            {
              id: 'lp-6-escape',
              content: 'Escapist literature serves the psychological need for temporary respite from reality.',
              category: 'literary-context',
            },
          ],
        },
      ],

      learningPoints: [],
    },

    // Scene 4: Continuation Narrative
    {
      id: 'scene-4-frame-intro',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/palace-exterior.png',

      content: `"All these answers are true," the storyteller continues. "But there is one more reason people tell and listen to stories—the reason at the heart of this very collection."

      She leans in conspiratorially.

      "Sometimes, stories are a matter of life and death. Let me tell you about a young woman named Scheherazade, who discovered this truth in the most dramatic way possible..."`,

      learningPoints: [
        {
          id: 'lp-7-frame-intro',
          content: 'Frame narratives create context that gives meaning to the stories within them.',
          category: 'literary-technique',
        },
      ],
    },

    // Scene 5: Quote Attribution Game
    {
      id: 'scene-5-famous-quotes',
      type: 'quote-attribution',
      backgroundImage: '[PLACEHOLDER-BG]/scroll-background.png',

      prompt: 'Test your knowledge: Match these famous phrases to their stories',

      quotes: [
        {
          id: 'quote-1',
          text: 'Open Sesame!',
          speaker: 'Ali Baba',
          context: 'The magical phrase that opens the thieves\' cave.',
          explanation: 'This phrase has entered popular culture as a general term for accessing something hidden or locked.',
        },
        {
          id: 'quote-2',
          text: 'Your wish is my command',
          speaker: 'The Genie',
          context: 'Traditional response of a genie to its master.',
          explanation: 'The genie\'s subservience reflects the story\'s exploration of power dynamics and wish fulfillment.',
        },
        {
          id: 'quote-3',
          text: 'Trust in Allah, but tie your camel',
          speaker: 'Proverb narrator',
          context: 'A proverb embedded in the tales about balancing faith and prudence.',
          explanation: 'This wisdom saying demonstrates how the tales preserved cultural values and practical advice.',
        },
        {
          id: 'quote-4',
          text: 'One thousand and one nights',
          speaker: 'Scheherazade',
          context: 'The number of nights Scheherazade told her stories.',
          explanation: 'In Middle Eastern tradition, 1,000 represents infinity; adding "one" suggests going beyond the impossible.',
        },
      ],

      learningPoints: [
        {
          id: 'lp-8-cultural-impact',
          content: 'Famous quotations from literature often transcend their source and become part of everyday language.',
          category: 'literary-significance',
        },
      ],
    },

    // Scene 6: Dialogue Scene
    {
      id: 'scene-6-storyteller-dialogue',
      type: 'dialogue',
      backgroundImage: '[PLACEHOLDER-BG]/bazaar-night.png',

      character: {
        id: 'storyteller',
        name: 'Storyteller',
        portrait: '[PLACEHOLDER-PORTRAIT]/storyteller.png',
        description: 'A wise keeper of ancient tales',
      },

      dialogueTree: {
        id: 'node-1',
        speaker: 'storyteller',
        text: 'Now you understand the power of stories. Tell me, what have you learned so far?',

        responses: [
          {
            id: 'response-traditions',
            text: 'That stories come from many traditions',
            nextNodeId: 'node-2',
            learningPoints: [
              {
                id: 'lp-9-multicultural',
                content: 'Recognizing the multicultural origins of story collections enriches our appreciation of cultural exchange.',
                category: 'cultural-context',
              },
            ],
          },
          {
            id: 'response-oral',
            text: 'That oral storytelling was essential to preservation',
            nextNodeId: 'node-3',
            learningPoints: [
              {
                id: 'lp-10-preservation',
                content: 'Oral traditions were the primary means of cultural preservation before widespread literacy.',
                category: 'historical-context',
              },
            ],
          },
        ],

        allNodes: [
          {
            id: 'node-2',
            speaker: 'storyteller',
            text: 'Exactly! Cultural blending creates richer, more resilient traditions. Each culture contributed its unique flavor to this magnificent collection.',
            isEnd: true,
          },
          {
            id: 'node-3',
            speaker: 'storyteller',
            text: 'Indeed! Without the dedication of countless storytellers, these tales would have been lost to history. Their voices echo through the centuries.',
            isEnd: true,
          },
        ],
      },

      learningPoints: [
        {
          id: 'lp-11-reflection',
          content: 'Reflective dialogue encourages learners to consolidate and articulate their understanding.',
          category: 'narrative-structure',
        },
      ],
    },

    // Scene 7: Final Narrative with Quiz Trigger
    {
      id: 'scene-7-chapter-conclusion',
      type: 'narrative',
      backgroundImage: '[PLACEHOLDER-BG]/stars.png',
      image: '[PLACEHOLDER-IMG]/book-glowing.png',

      content: `The storyteller closes her eyes, and for a moment, you see the centuries unfolding—thousands of voices in bazaars, palaces, and humble homes, all weaving the same tales in their own unique ways.

      "The stories survived," she says softly, "because they were more than entertainment. They were hope, wisdom, escape, and sometimes—as you will learn—salvation itself."

      She opens her eyes and smiles.

      "Now, let's see how well you've been listening. Every good story deserves a good listener!"`,

      learningPoints: [
        {
          id: 'lp-12-synthesis',
          content: 'Great literary collections endure because they fulfill multiple human needs simultaneously.',
          category: 'literary-context',
        },
        {
          id: 'lp-13-transmission',
          content: 'Cultural transmission through storytelling requires both dedicated tellers and engaged listeners.',
          category: 'cultural-context',
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

---

## Best Practices

### Planning Before Writing

**Do this first:**
1. Outline all scenes with types in `ADVENTURE_OUTLINE.md`
2. Map learning objectives to specific scenes
3. Identify which assets you'll need
4. Plan the narrative arc (setup → conflict → resolution)

### Building Incrementally

**Start with:**
- Core narrative scenes (the story backbone)
- Learning points for each scene
- Simple decisions or dialogue

**Then add:**
- Interactive scenes (games, exploration)
- Inline annotations
- Optional media (images, videos)

### Testing as You Go

**After every 3-4 scenes:**
- Play through from chapter start
- Verify navigation works
- Check that learning points appear
- Ensure assets load properly
- Confirm quiz trigger at end

### Common Mistakes to Avoid

**Content Mistakes:**
- ❌ Too much text per scene (>500 words)
- ❌ Too many narrative scenes in a row (>3)
- ❌ Decisions without meaningful consequences
- ❌ Interactive scenes without clear instructions
- ❌ Missing transitions between scenes

**Technical Mistakes:**
- ❌ Duplicate IDs across scenes
- ❌ Wrong asset paths
- ❌ Missing learning points
- ❌ Quiz trigger on wrong scene (must be LAST scene)
- ❌ **No quiz trigger at all** ← MOST COMMON MISTAKE - Always verify!

**Educational Mistakes:**
- ❌ Learning objectives not addressed in content
- ❌ Learning points too vague or generic
- ❌ No connection between scenes and quiz questions
- ❌ Concepts introduced but never reinforced
- ❌ Assuming prior knowledge without teaching it
- ❌ **Using `short-answer` questions for analysis/reasoning (use `self-assessment` instead)**

### Pacing Guidelines

**Scene Distribution:**
- Opening: 1-2 narrative scenes (setup)
- Early: 2-3 story scenes with 1 simple interactive (engagement)
- Middle: Alternating story and interactive (development)
- Late: 1-2 story scenes with complex interactive (climax)
- End: 1 narrative scene (resolution + quiz trigger)

**Timing Targets:**
- Individual scene: 2-5 minutes
- Chapter total: 30-45 minutes
- Interactive scenes: 30-40% of total
- Story scenes: 60-70% of total

### Scene Type Variety

**Aim for:**
- At least 3 different scene types per chapter
- No more than 3 consecutive narrative scenes
- At least 2 interactive scenes per chapter
- Progressive complexity (simple → complex)

**Example variety:**
```
✅ Good: Narrative → Narrative → Decision → Narrative → Map Exploration → Narrative → Timeline → Narrative
❌ Bad: Narrative → Narrative → Narrative → Narrative → Narrative → Narrative → Narrative → Narrative
```

---

## Next Steps

Once you've completed your chapter:

1. **Repeat for all chapters** → Complete all chapter development in parallel
2. **Review structure** → See Phase 6: Structure Review
3. **Create quizzes** → See Phase 7: Quiz Creation
4. **Document assets** → Update `[adventure]_assets.md` as needed

---

## Related Documentation

### Essential References for Phase 5
- **`docs/SCENE_TYPES_REFERENCE.md`** - Complete technical reference for all 10 scene types
- **`docs/FEATURE_INLINE_ANNOTATIONS.md`** - Detailed annotation documentation
- **`docs/adventure_guide/03_asset_planning.md`** - Creating asset requirement documentation
- **`src/adventures/arabian-nights/chapters/`** - Example chapters to reference
- **`src/types/adventure.ts`** - Type definitions (source of truth)

### Next Steps in Workflow
- **`docs/adventure_guide/06_structure_review.md`** - Verify scene sequence and flow (Phase 6)
- **`docs/adventure_guide/07_quiz_creation.md`** - Creating effective quizzes (Phase 7)
- **`docs/adventure_guide/09_asset_integration.md`** - Replace placeholders with real assets (Phase 9)

### Asset Management
- **Asset Placeholders:** During chapter development (Phase 5), use `[PLACEHOLDER-*]` format
- **Asset Documentation:** Track all asset needs in `[adventure]_assets.md` (created in Phase 3)
- **Asset Integration:** Replace placeholders with real paths in Phase 9

---

## Chapter Quality Checklist

### Run These Checks BEFORE Marking Chapter Complete

Complete this checklist for every chapter to avoid cleanup work later. Each check includes the command to verify and common fixes.

#### 1. TypeScript Type Check ✅

**Check single file for errors:**
```bash
npx tsc --noEmit src/adventures/[adventure-name]/chapters/chapter-X-name.ts
```

**Common type errors and fixes:**

| Error | Fix |
|-------|-----|
| `'title' does not exist in type 'PrimarySourceScene'` | Remove `title`, use only `prompt` |
| `'content' does not exist in type 'PrimarySourceScene'` | Move scene-level `content` into `prompt` field |
| `'title' does not exist in type 'MapExplorationScene'` | Replace `title` and `description` with single `prompt` |
| `'description' does not exist in type 'MapExplorationScene'` | Merge into `prompt` field |
| `'events' does not exist in type 'TimelineGameScene'` | Rename to `timelineEvents` |
| `'correctOrder' does not exist in type 'TimelineEvent'` | Remove field (order determined by array position) |
| `Type 'string' is not assignable to type 'number'` (year) | Change year from `'Book 16'` to `16` |
| `'points' does not exist in type 'AnalysisQuestion'` | Remove `points` field |
| `'successThreshold' does not exist in type 'CauseEffectScene'` | Remove field (not applicable to this scene type) |
| `'description' does not exist in type 'TimelineGameScene'` | Merge into `prompt` |
| `'description' does not exist in type 'MapLocation'` | Rename to `content` |
| `'context' does not exist in type 'PrimarySource'` | Rename to `content` and add `type: 'text'` |

**Type-specific field reference:**

```typescript
// PrimarySourceScene - ONLY these fields
{
  type: 'primary-source',
  prompt: string,              // ✅ Use this, NOT title or content
  image?: string,              // Optional
  source: PrimarySource,
  questions: AnalysisQuestion[],
}

// MapExplorationScene - ONLY these fields
{
  type: 'map-exploration',
  mapImage: string,
  prompt: string,              // ✅ Use this, NOT title or description
  image?: string,              // Optional
  locations: MapLocation[],
  requiredLocations?: string[],
}

// TimelineGameScene - ONLY these fields
{
  type: 'timeline-game',
  prompt: string,              // ✅ Use this, NOT description
  image?: string,
  timelineEvents: TimelineEvent[], // ✅ NOT 'events'
  successThreshold: number,    // ✅ Required!
}

// TimelineEvent - ONLY these fields
{
  id: string,
  title: string,
  year: number,                // ✅ Must be number, NOT string
  description: string,
  image?: string,
}

// MapLocation - ONLY these fields
{
  id: string,
  name: string,
  x: number,
  y: number,
  content: string,             // ✅ Use 'content', NOT 'description'
  image?: string,
}

// PrimarySource - ONLY these fields
{
  title: string,
  author?: string,
  date?: string,
  type: 'text' | 'image' | 'audio' | 'video',
  content: string,             // ✅ Use 'content', NOT 'context'
  citation?: string,
}

// CauseEffectScene - Does NOT have
// ❌ successThreshold
// ❌ description
```

#### 2. Learning Point Category Check ✅

**Valid categories ONLY:**
- `historical-context`
- `literary-context` ⚠️ NOT `literary-technique` or `character-analysis`
- `cultural-context`
- `vocabulary`
- `reference`

**Quick fix:**
```typescript
// ❌ WRONG
category: 'character-analysis'
category: 'literary-technique'
category: 'thematic-analysis'
category: 'plot-structure'

// ✅ CORRECT - Use one of the 5 valid categories
category: 'literary-context'  // For character analysis, themes, plot, techniques
category: 'historical-context'
category: 'cultural-context'
category: 'vocabulary'
category: 'reference'
```

#### 3. Quiz Question Type Verification ✅

**Rule: Never use `short-answer` for analysis questions**

```bash
# Search for problematic short-answer questions
grep -n "type: 'short-answer'" src/adventures/[adventure-name]/chapters/chapter-X-name.ts
```

**Check each match:**
- If question asks "Why?", "How?", "Explain...", "Analyze..." → Change to `multiple-choice`
- Only keep `short-answer` for exact names, terms, or numbers

#### 4. Required Field Verification ✅

**Check for missing required fields:**

```bash
# Check if successThreshold exists in timeline-game scenes
grep -A 5 "type: 'timeline-game'" src/adventures/[adventure-name]/chapters/chapter-X-name.ts | grep "successThreshold"
```

If no results, add `successThreshold: 70` to your timeline-game scenes.

#### 5. Quiz Trigger Verification ✅

**CRITICAL: Verify quiz trigger exists on LAST scene:**

```bash
# Check last scene has quiz trigger
tail -50 src/adventures/[adventure-name]/chapters/chapter-X-name.ts | grep -A 5 "events:"
```

**Must see:**
```typescript
events: {
  onExit: [{
    type: 'quiz',
    componentId: 'quiz-chapter-X',
    condition: { type: 'if-not-completed' },
  }],
},
```

**If missing, add to the LAST scene** (after learningPoints, before closing brace).

#### 6. ID Uniqueness Check ✅

**Check for duplicate IDs within chapter:**

```bash
# Extract all IDs and check for duplicates
grep -o "id: '[^']*'" src/adventures/[adventure-name]/chapters/chapter-X-name.ts | sort | uniq -d
```

If any duplicates appear, make them unique by adding suffixes or better descriptors.

#### 7. Learning Points Existence ✅

**Every scene must have learning points (even if empty array):**

```bash
# Check all scenes have learningPoints field
grep -c "learningPoints:" src/adventures/[adventure-name]/chapters/chapter-X-name.ts
```

Count should match number of scenes. If not, add `learningPoints: []` to scenes missing it.

#### 8. Asset Path Format ✅

**During Phase 5 (Development), check all assets use placeholder format:**

```bash
# Check for asset paths in chapter
grep -n "backgroundImage:\|image:\|mapImage:\|portrait:" src/adventures/[adventure-name]/chapters/chapter-X-name.ts
```

**Development Phase (Phase 5) - Use placeholders:**
- Background: `'[PLACEHOLDER-BG]/scene-name.png'` ✅
- Scene image: `'[PLACEHOLDER-IMG]/image-name.png'` ✅
- Portrait: `'[PLACEHOLDER-PORTRAIT]/character-name.png'` ✅
- Map: `'[PLACEHOLDER-MAP]/map-name.png'` ✅
- Alternative: `'[Asset pending - see assets.md: backgrounds/scene-name]'` ✅

**WRONG during Phase 5:**
- `/assets/your-adventure/...` ❌ (Ambiguous - looks real but isn't)
- `/assets/...` ❌ (Incomplete)
- Relative paths like `./assets/...` ❌

**After Phase 9 (Asset Integration) - Use real paths:**
- External CDN: `'https://cdn.midjourney.com/...'` ✅
- Local public: `'/Imsie/assets/[adventure-name]/backgrounds/opening.png'` ✅
  - Note: Must include `/Imsie/` prefix (required by Vite config `base: '/Imsie/'`)
  - Must match actual adventure name (e.g., `greek-myths`, `arabian-nights`)
  - Files must exist in `public/assets/[adventure-name]/` directory

**How to verify integration status:**
- If you see `[PLACEHOLDER-*]` → Assets NOT yet integrated (Phase 5 state)
- If you see real paths → Assets integrated (Phase 9 complete)
- Never mix placeholders and real paths in the same chapter

#### 9. Final Build Test ✅

**After all fixes, run full build:**

```bash
npm run build
```

**If build fails:**
1. Read error message for file and line number
2. Check error type against table in Check #1
3. Apply appropriate fix
4. Re-run build
5. Repeat until clean build

---

### Quick Pre-Completion Checklist

Print this and check off for each chapter:

```
Chapter: ________________  Date: __________

□ TypeScript check passes (npx tsc --noEmit [file])
□ All learning point categories are valid (5 categories only)
□ No short-answer questions for analysis
□ All timeline-game scenes have successThreshold
□ Quiz trigger exists on LAST scene
□ No duplicate IDs in chapter
□ All scenes have learningPoints field
□ Asset paths use placeholder format [PLACEHOLDER-*] (Phase 5)
  OR real paths after integration (Phase 9)
□ All placeholder assets documented in [adventure]_assets.md
□ Full build succeeds (npm run build)
□ Quiz file created and imported
□ endQuiz field added to chapter
□ Playthrough tested from start to quiz

Notes/Issues:
_____________________________________________
_____________________________________________

Asset Integration Status:
□ Using placeholders - Phase 9 not yet done
□ Integrated real assets - Phase 9 complete
```

---

**Version:** 1.0
**Last Updated:** October 2025
**Part of:** Adventure Authoring Guide
**Previous Phase:** [04 - Theme and Configuration](04_theme_configuration.md)
**Next Phase:** [06 - Structure Review](06_structure_review.md)
