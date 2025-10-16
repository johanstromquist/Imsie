# Common Type Errors and How to Avoid Them

**Version:** 1.0
**Last Updated:** October 2025

This guide documents common TypeScript errors encountered when authoring adventures and how to prevent them.

---

## Error 1: Missing `relatedLearningPoints` in Quiz Questions

### The Problem

All quiz questions REQUIRE a `relatedLearningPoints` field. This is not optional in the TypeScript type definition.

### ❌ WRONG

```typescript
{
  id: 'q1',
  question: 'What happened in the story?',
  type: 'multiple-choice',
  points: 10,
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 'Option A',
  explanation: 'Explanation of the answer...',
  // Missing relatedLearningPoints! This will cause a TypeScript error
}
```

### ✅ CORRECT

```typescript
{
  id: 'q1',
  question: 'What happened in the story?',
  type: 'multiple-choice',
  points: 10,
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 'Option A',
  explanation: 'Explanation of the answer...',
  relatedLearningPoints: ['lp-ch1-scene-3'], // REQUIRED field - links to learning point IDs
}
```

### If No Direct Learning Points

Even if a question doesn't directly relate to a specific learning point, you must include an empty array:

```typescript
{
  id: 'q1',
  question: 'General comprehension question...',
  type: 'multiple-choice',
  points: 10,
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correctAnswer: 'Option A',
  explanation: 'Explanation...',
  relatedLearningPoints: [], // Empty array is valid
}
```

---

## Error 2: Incorrect Terminal Dialogue Responses

### The Problem

In dialogue scenes, responses that end the conversation should NOT include a `nextNodeId` field at all. Including `null` or `undefined` will cause TypeScript errors.

### ❌ WRONG

```typescript
{
  id: 'node-end',
  speaker: 'character',
  text: 'Farewell, my friend.',
  responses: [
    {
      id: 'response-goodbye',
      text: 'Goodbye',
      nextNodeId: null, // DON'T do this
      learningPoints: [...]
    },
    {
      id: 'response-farewell',
      text: 'Farewell',
      nextNodeId: undefined, // DON'T do this either
      learningPoints: [...]
    }
  ]
}
```

### ✅ CORRECT

```typescript
{
  id: 'node-end',
  speaker: 'character',
  text: 'Farewell, my friend.',
  responses: [
    {
      id: 'response-goodbye',
      text: 'Goodbye',
      // No nextNodeId field at all - this signals end of dialogue
      learningPoints: [...]
    },
    {
      id: 'response-farewell',
      text: 'Farewell',
      // Omit the field entirely
      learningPoints: [...]
    }
  ]
}
```

### When to Include nextNodeId

Only include `nextNodeId` when the dialogue continues to another node:

```typescript
{
  id: 'node-middle',
  speaker: 'character',
  text: 'What will you do?',
  responses: [
    {
      id: 'response-fight',
      text: 'I will fight',
      nextNodeId: 'node-fight-scene', // Continues to another node
    },
    {
      id: 'response-flee',
      text: 'I will flee',
      nextNodeId: 'node-flee-scene', // Continues to another node
    }
  ]
}
```

---

## Error 3: Misusing `short-answer` Question Type

### The Problem

The `short-answer` question type only does exact string matching (case-insensitive). It cannot evaluate reasoning, analysis, or open-ended responses.

### ❌ WRONG - Using short-answer for reasoning

```typescript
{
  question: 'Why did Scheherazade volunteer to marry the Sultan?',
  type: 'short-answer', // WRONG! This requires reasoning
  correctAnswer: 'To save her people', // Too many valid phrasings
  // Students might answer: "to save the kingdom", "to stop the killings",
  // "to protect other women", etc. - all correct but won't match exactly
}
```

### ❌ WRONG - Using short-answer for analysis

```typescript
{
  question: 'How does the story demonstrate the power of narrative?',
  type: 'short-answer', // WRONG! This requires analysis
  correctAnswer: 'Stories transform the Sultan',
  // Many valid ways to phrase this answer
}
```

### ✅ CORRECT - Use multiple-choice or self-assessment instead

```typescript
// Option 1: Multiple-choice with specific options
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
  explanation: '...',
  relatedLearningPoints: ['lp-motivation'],
}

// Option 2: Self-assessment for open-ended analysis
{
  question: 'Analyze how Scheherazade\'s storytelling transforms the Sultan. Consider his character arc, the role of empathy, and the power of narrative.',
  type: 'self-assessment',
  points: 20,
  modelAnswer: 'Detailed model answer showing what a complete response looks like...',
  assessmentCriteria: [
    {
      id: 'crit1',
      text: 'Discussed the Sultan\'s transformation',
      points: 7,
    },
    // ... more criteria
  ],
  explanation: '...',
  relatedLearningPoints: ['lp-transformation'],
}
```

### ✅ CORRECT - When to use short-answer

Only use `short-answer` for exact, single-word or short-phrase answers:

```typescript
// Character name
{
  question: 'What was the name of the vizier\'s daughter?',
  type: 'short-answer',
  correctAnswer: 'Scheherazade',
  explanation: '...',
  relatedLearningPoints: ['lp-characters'],
}

// Specific number
{
  question: 'How many nights did Scheherazade tell stories?',
  type: 'short-answer',
  correctAnswer: '1001',
  explanation: '...',
  relatedLearningPoints: ['lp-frame-story'],
}

// Exact phrase or term
{
  question: 'What phrase opens the treasure cave in Ali Baba?',
  type: 'short-answer',
  correctAnswer: 'Open Sesame',
  explanation: '...',
  relatedLearningPoints: ['lp-magic-words'],
}
```

---

## Error 4: Duplicate IDs

### The Problem

All IDs (scenes, quizzes, questions, learning points) must be unique within their scope.

### ❌ WRONG

```typescript
// In chapter-1.ts
scenes: [
  {
    id: 'scene-1', // ❌ Too generic, might conflict
    // ...
  },
  {
    id: 'scene-1', // ❌ DUPLICATE! Will cause issues
    // ...
  }
]
```

### ✅ CORRECT

```typescript
// Use namespaced IDs with chapter prefix
scenes: [
  {
    id: 'scene-ch1-1-opening', // ✅ Unique, descriptive
    // ...
  },
  {
    id: 'scene-ch1-2-decision', // ✅ Unique, descriptive
    // ...
  }
]
```

### ID Naming Conventions

- **Scenes:** `scene-ch[X]-[number]-[description]`
- **Learning Points:** `lp-ch[X]-[number]-[description]`
- **Quizzes:** `quiz-chapter-[X]-[adventure-name]`
- **Questions:** `q[number]` (within quiz scope)
- **Chapters:** `chapter-[X]-[adventure-name]`

---

## Pre-Commit Checklist

Before committing your work, verify:

### Type Check
```bash
npx tsc -b --force
```
**Should produce no errors.**

### Build Check
```bash
npm run build
```
**Should complete successfully.**

### Lint Check
```bash
npm run lint
```
**Should have no errors (warnings are acceptable).**

### Manual Verification

- [ ] All quiz questions have `relatedLearningPoints` field
- [ ] Terminal dialogue responses omit `nextNodeId` field
- [ ] No `short-answer` questions used for reasoning/analysis
- [ ] All IDs are unique and follow naming conventions
- [ ] All asset paths are correct and files exist
- [ ] All learning point IDs referenced in quizzes actually exist

---

## Type Definition References

If you're unsure about a type structure, check:

- **`src/types/adventure.ts`** - Source of truth for all types
- **`docs/SCENE_TYPES_REFERENCE.md`** - Detailed scene type documentation
- **`docs/QUIZ_SYSTEM_REFERENCE.md`** - Detailed quiz type documentation

---

## When You Get a Type Error

1. **Read the error message carefully** - TypeScript errors are usually descriptive
2. **Check this guide** for common patterns
3. **Look at existing adventures** - `arabian-nights` and `dantes-inferno` for examples
4. **Verify the type definition** in `src/types/adventure.ts`
5. **Run the type checker** incrementally as you work, don't wait until the end

---

**Remember:** TypeScript is your friend! These errors prevent runtime bugs and ensure consistency across adventures.

---

**Version:** 1.0
**Last Updated:** October 2025
