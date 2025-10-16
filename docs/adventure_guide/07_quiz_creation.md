# Quiz Creation Guide

**Version:** 1.0
**Last Updated:** October 2025

This guide provides comprehensive instructions for creating effective quizzes in Imsie, including question type selection, quiz structure, and best practices for educational assessment.

---

## Table of Contents

1. [Overview](#overview)
2. [Question Type Decision Tree](#question-type-decision-tree)
3. [Critical: Short-Answer Misuse Warning](#critical-short-answer-misuse-warning)
4. [Quiz File Template](#quiz-file-template)
5. [Question Distribution Recommendations](#question-distribution-recommendations)
6. [Writing Good Explanations](#writing-good-explanations)
7. [Self-Assessment Design Guidelines](#self-assessment-design-guidelines)
8. [Question Type Verification](#question-type-verification)
9. [Linking Quizzes to Chapters](#linking-quizzes-to-chapters)
10. [Complete Quiz Example](#complete-quiz-example)
11. [Checklist](#checklist)

---

## Overview

Quizzes are essential assessment components in Imsie that:

- **Test comprehension** of chapter content and learning objectives
- **Provide immediate feedback** with educational explanations
- **Link to learning points** from scenes (REQUIRED)
- **Support 5 question types** with different validation methods
- **Enable self-assessment** for complex analytical questions

**Quiz Types:**
1. **Chapter Quizzes** - Test understanding of that chapter (8-15 questions)
2. **Final Quiz** - Comprehensive assessment of entire adventure (15-20 questions)

**See:** `docs/QUIZ_SYSTEM_REFERENCE.md` for complete technical documentation.

---

## Question Type Decision Tree

Use this decision tree to select the appropriate question type:

```
What are you testing?
│
├─ Factual recall (name, term, number)?
│  ├─ Single specific word/phrase with ONE exact answer? → short-answer
│  └─ Multiple options to choose from? → multiple-choice
│
├─ True/False statement? → true-false
│
├─ Match relationships/pairs? → matching
│
└─ Reasoning/Analysis/Explanation? → self-assessment
```

### Quick Selection Guide

| What You're Testing | Best Question Type | Example |
|--------------------|--------------------|---------|
| Character name | `short-answer` or `multiple-choice` | "What was the vizier's daughter's name?" |
| Specific term/vocabulary | `short-answer` | "What phrase opened the cave?" |
| Historical date/number | `short-answer` | "How many nights did Scheherazade tell stories?" |
| Plot event/fact | `multiple-choice` | "What was the Sultan's decree?" |
| True/False statement | `true-false` | "The Arabian Nights has multiple cultural sources." |
| Matching pairs | `matching` | "Match each character to their role." |
| Why/How/Explain | `self-assessment` | "Why did Scheherazade volunteer?" |
| Analysis/Interpretation | `self-assessment` | "Analyze the role of storytelling..." |
| Multiple valid phrasings | `self-assessment` or `multiple-choice` | "What theme is explored?" |

---

## Critical: Short-Answer Misuse Warning

### ⚠️ THE MOST COMMON MISTAKE IN QUIZ AUTHORING

**SHORT-ANSWER IS ONLY FOR EXACT WORD/PHRASE MATCHING**

The `short-answer` question type uses simple string comparison. It CANNOT:
- Understand synonyms or alternate phrasings
- Evaluate reasoning or explanation quality
- Award partial credit
- Handle multiple valid answers

### When to Use Short-Answer

**✅ CORRECT Usage:**
- Character names (e.g., "Scheherazade")
- Location names (e.g., "Baghdad")
- Specific terms (e.g., "Frame narrative")
- Titles (e.g., "The Merchant and the Jinni")
- Numbers (e.g., "1001")
- Famous phrases (e.g., "Open Sesame")

**Key criterion:** The answer is a single, objective, factual word or phrase

### When NOT to Use Short-Answer

**❌ WRONG Usage:**
- Any question requiring reasoning, analysis, or explanation
- Questions asking "Why?", "How?", "Explain...", "Describe...", "Analyze..."
- Questions with multiple possible valid phrasings
- Questions requiring sentences or paragraphs
- **For these, use `self-assessment` instead**

### Examples: Correct vs. Incorrect

#### ✅ GOOD: Exact term with one answer

```typescript
{
  question: 'What was the name of the vizier\'s daughter?',
  type: 'short-answer',
  correctAnswer: 'Scheherazade',
  explanation: 'Scheherazade was the vizier\'s learned daughter who volunteered to marry the Sultan...',
  relatedLearningPoints: ['lp-7-scheherazade-character'],
}
```

#### ✅ GOOD: Specific number

```typescript
{
  question: 'How many nights did Scheherazade tell stories?',
  type: 'short-answer',
  correctAnswer: '1001',
  explanation: 'The collection is called "One Thousand and One Nights"...',
  relatedLearningPoints: ['lp-frame-structure'],
}
```

#### ❌ WRONG: Requires reasoning

```typescript
{
  question: 'Why did Scheherazade volunteer to marry the Sultan?',
  type: 'short-answer',  // WRONG! This requires explanation
  // Should be 'self-assessment' or 'multiple-choice'
}
```

#### ❌ WRONG: Multiple valid phrasings

```typescript
{
  question: 'What theme is explored in this story?',
  type: 'short-answer',  // WRONG! Multiple themes possible, different wording
  // Should be 'multiple-choice' or 'self-assessment'
}
```

#### ❌ WRONG: Requires analysis

```typescript
{
  question: 'How does storytelling transform the Sultan?',
  type: 'short-answer',  // WRONG! This requires analytical thinking
  // Should be 'self-assessment'
}
```

### Decision Rule

**If you're unsure whether to use `short-answer` or `self-assessment`, ask:**

1. "Is there exactly ONE correct word or short phrase?" → Use `short-answer`
2. "Could students express this in different valid ways?" → Use `self-assessment`
3. "Does this require explanation beyond a single term?" → Use `self-assessment`

**When in doubt between `short-answer` and `self-assessment`, choose `self-assessment`**

---

## Quiz File Template

Create quiz files in `src/adventures/[adventure-name]/quizzes/`:

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
      relatedLearningPoints: ['lp-ch1-2-scene'],  // REQUIRED
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
      relatedLearningPoints: ['lp-ch1-3-context'],  // REQUIRED
    },

    // Short Answer (5-10% of questions - ONLY FOR EXACT WORDS)
    {
      id: 'q3',
      question: 'What was the name of [character]?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'ExactName',
      explanation: 'Information about this character/term.',
      relatedLearningPoints: ['lp-ch1-character'],  // REQUIRED
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
      relatedLearningPoints: ['lp-ch1-relationships'],  // REQUIRED
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
      relatedLearningPoints: ['lp-ch1-theme', 'lp-ch1-analysis'],  // REQUIRED
    },
  ],
};
```

### CRITICAL: relatedLearningPoints Field

**Every question MUST include the `relatedLearningPoints` field.**

```typescript
// ✅ CORRECT: All questions have relatedLearningPoints
{
  id: 'q1',
  question: 'What was the Sultan\'s decree?',
  type: 'multiple-choice',
  // ... other fields ...
  relatedLearningPoints: ['lp-4-decree'],  // REQUIRED
}

// ❌ WRONG: Missing relatedLearningPoints
{
  id: 'q1',
  question: 'What was the Sultan\'s decree?',
  type: 'multiple-choice',
  // ... other fields ...
  // Missing relatedLearningPoints!
}
```

**Why it's required:**
- Links assessment to learning content
- Helps students understand what they should have learned
- Enables targeted review of specific learning points
- Required by TypeScript type definitions

**If a question doesn't link to a specific learning point:**
- Create a general learning point for the concept
- Link to multiple related learning points
- At minimum, use an empty array: `relatedLearningPoints: []`

---

## Question Distribution Recommendations

### Chapter Quiz (10 questions example)

```
- Multiple choice: 6 questions (60 points)    [60%]
- True/False: 2 questions (20 points)         [20%]
- Short answer: 1 question (10 points)        [10%]
- Self-assessment: 1 question (20 points)     [10%]
────────────────────────────────────────────────────
  Total: 110 points, 70% passing = 77 points
```

### Final Quiz (15 questions example)

```
- Multiple choice: 9 questions (90 points)    [60%]
- True/False: 2 questions (20 points)         [13%]
- Matching: 2 questions (30 points)           [13%]
- Self-assessment: 2 questions (40 points)    [13%]
────────────────────────────────────────────────────
  Total: 180 points, 75% passing = 135 points
```

### Distribution Guidelines

**Question Type Mix:**

| Type | Percentage | Count (10q) | Count (15q) | Purpose |
|------|-----------|------------|------------|---------|
| Multiple choice | 60-70% | 6-7 | 9-10 | Core comprehension |
| True/False | 10-20% | 1-2 | 2-3 | Quick checks |
| Short answer | 5-10% | 0-1 | 1-2 | Key terms (EXACT matching only) |
| Matching | 5-10% | 0-1 | 1-2 | Relationships |
| Self-assessment | 5-10% | 1 | 1-2 | Higher-order thinking |

**Important Notes:**
- Don't overuse `short-answer` - most factual questions work better as `multiple-choice`
- Reserve `short-answer` for iconic names/terms students MUST memorize
- If you find yourself writing many `short-answer` questions, convert most to `multiple-choice`
- Every quiz should have at least 1 `self-assessment` question for higher-order thinking

### Point Distribution

**By Complexity:**
- Simple recall (multiple-choice, true-false): 5-10 points
- Application (matching, short-answer): 10-15 points
- Analysis (self-assessment): 15-25 points

**Passing Thresholds:**
- Chapter quizzes: 70% typical
- Final quizzes: 75% typical
- Consider difficulty when setting threshold

---

## Writing Good Explanations

Every question must include an `explanation` field that provides educational feedback.

### Purpose of Explanations

Explanations should:
- **Teach, not just grade** - Provide learning value even for correct answers
- **Reinforce key concepts** - Connect to broader themes
- **Explain the "why"** - Not just what's correct, but why it matters
- **Reference learning points** - Connect to scene content

### Explanation Structure

**Good explanation format:**

```
[Confirmation of answer] + [Context/Why it's correct] + [Additional insight]
```

### Examples: Good vs. Bad

#### ✅ GOOD: Educational and informative

```typescript
{
  question: 'What was Sultan Shahryar\'s cruel decree?',
  correctAnswer: 'He would marry a new bride each day and execute her at dawn',
  explanation: 'After being betrayed by his wife, Sultan Shahryar decreed that he would marry a new bride each day and execute her at dawn. This extreme response to betrayal sets up the central conflict of the Arabian Nights and demonstrates how trauma can lead to tyranny.',
  // Confirms answer + Provides context + Connects to theme
}
```

#### ✅ GOOD: Corrects misconceptions

```typescript
{
  question: 'True or False: The Arabian Nights was written by a single author.',
  correctAnswer: 'False',
  explanation: 'False! The Arabian Nights was compiled over centuries from sources across Persia, Arabia, India, and Egypt, making it a rich multicultural collection rather than the work of a single author. This diversity is one of its greatest strengths.',
  // Corrects + Explains why + Adds value
}
```

#### ❌ BAD: Too brief, not educational

```typescript
{
  question: 'What was the vizier\'s daughter\'s name?',
  correctAnswer: 'Scheherazade',
  explanation: 'The correct answer is Scheherazade.',
  // Just repeats the answer, no learning value
}
```

#### ❌ BAD: No context

```typescript
{
  question: 'How many nights did Scheherazade tell stories?',
  correctAnswer: '1001',
  explanation: '1001 is correct.',
  // No explanation of why or what it means
}
```

### Explanation Guidelines

**Do:**
- Explain the significance of the answer
- Connect to themes, character development, or literary techniques
- Provide historical or cultural context
- Use 2-4 sentences
- Write in an engaging, conversational tone

**Don't:**
- Simply repeat the answer
- Use condescending language ("Obviously...", "Everyone knows...")
- Introduce new confusing information
- Make the explanation longer than the question
- Assume students already understand

---

## Self-Assessment Design Guidelines

Self-assessment questions are for complex analytical questions where automated grading is insufficient.

### When to Use Self-Assessment

**✅ Use for:**
- Complex analytical questions
- Open-ended reflection prompts
- Questions with multiple valid approaches
- Synthesis across multiple concepts
- "Why?", "How?", "Analyze...", "Evaluate..." questions

**❌ Don't use for:**
- Factual recall questions (use `short-answer` or `multiple-choice`)
- Questions with single correct answers
- Every question in a quiz (use sparingly!)

### Structure of Self-Assessment Questions

```typescript
{
  id: 'q-self-assessment',
  question: 'Analyze [topic]. Consider [aspect 1], [aspect 2], and [aspect 3].',
  type: 'self-assessment',
  points: 20,

  // Model answer shows what a complete response looks like
  modelAnswer: `[2-3 paragraphs demonstrating thorough analysis]

  [Addresses all aspects mentioned in the question]

  [Shows depth of thinking and connection to broader themes]`,

  // Criteria break down what should be covered
  assessmentCriteria: [
    {
      id: 'crit1',
      text: '[Observable criterion 1]',
      points: 7,
    },
    {
      id: 'crit2',
      text: '[Observable criterion 2]',
      points: 7,
    },
    {
      id: 'crit3',
      text: '[Observable criterion 3]',
      points: 6,
    },
  ],

  explanation: '[Why this question matters and what it teaches]',
  relatedLearningPoints: ['lp-theme', 'lp-analysis'],
}
```

### Writing Effective Model Answers

**Model answers should:**
- Be 2-3 paragraphs (150-250 words)
- Cover all aspects mentioned in the question
- Demonstrate depth of analysis
- Use specific examples from the content
- Show connections between concepts
- Serve as an exemplar, not the only correct answer

**Example:**

```typescript
modelAnswer: `Scheherazade's stories gradually transform Sultan Shahryar from a vengeful tyrant into a compassionate ruler. Through tales of justice, mercy, and love, she helps him develop empathy and see beyond his trauma. The stories serve as mirrors that reflect different perspectives, allowing him to process his pain and rediscover his humanity.

The power of narrative lies in its ability to create emotional distance while maintaining engagement. By hearing about other characters' struggles, the Sultan can examine his own behavior without feeling directly attacked. This indirect approach allows him to change his mind without losing face.

This transformation demonstrates the broader theme of storytelling as a tool for education and healing. Scheherazade doesn't just save her own life—she saves an entire kingdom by showing that stories can change hearts and minds.`
```

### Writing Effective Assessment Criteria

**Criteria should be:**
- **Observable** - Students can identify if they covered it
- **Specific** - Not vague or general
- **Concrete** - Based on content from scenes
- **Fair** - Points distributed proportionally

**Good Criterion:**
```typescript
{
  id: 'crit1',
  text: 'Discussed Sultan Shahryar\'s character transformation from tyrant to compassionate ruler',
  points: 7,
}
// Specific, observable, directly addresses the question
```

**Poor Criterion:**
```typescript
{
  id: 'crit1',
  text: 'Showed understanding of the story',
  points: 7,
}
// Too vague, not specific, hard to evaluate
```

### Self-Assessment Tips

**Question Design:**
- Include 2-3 specific aspects to analyze in the question itself
- Use action verbs: "Analyze", "Evaluate", "Compare", "Explain"
- Make expectations clear

**Criteria Design:**
- 3-5 criteria per question
- Distribute points: 5-8 points each
- Order by importance (most important first)
- Make each criterion measurable

**Model Answer:**
- Write the model answer first
- Ensure it covers all criteria
- Use it to test if criteria are observable

---

## Question Type Verification

After writing all quiz questions, review each one using this checklist.

### Question Type Verification Checklist

For each question, ask:

#### For `short-answer` questions:

- [ ] Is the answer a single, exact word or short phrase?
- [ ] Is there only ONE correct answer (no synonyms or alternate phrasings)?
- [ ] Is this a factual term, name, or number (not requiring reasoning)?
- [ ] Would a student who knows the answer type the exact same words?
- [ ] If NO to any above → Change to `multiple-choice` or `self-assessment`

#### For `multiple-choice` questions:

- [ ] Is there one clearly correct answer?
- [ ] Are distractors plausible but incorrect?
- [ ] Do options avoid "all of the above" or "none of the above"?
- [ ] Are options roughly the same length?

#### For `true-false` questions:

- [ ] Is the statement unambiguously true or false?
- [ ] Does it avoid trick wording or double negatives?
- [ ] Does it test important knowledge (not trivial details)?

#### For `matching` questions:

- [ ] Are there 3-5 pairs to match?
- [ ] Is each match unambiguous?
- [ ] Are items clearly related?

#### For `self-assessment` questions:

- [ ] Does the question require analysis or explanation?
- [ ] Are there 3-5 specific criteria?
- [ ] Is the model answer comprehensive (2-3 paragraphs)?
- [ ] Can students self-evaluate based on criteria?

### Common Fixes

| Problem | Solution |
|---------|----------|
| `short-answer` question asking "Why?" | Change to `self-assessment` |
| `short-answer` with multiple valid answers | Change to `multiple-choice` or `self-assessment` |
| `multiple-choice` with obvious answer | Improve distractors or rephrase |
| `true-false` with ambiguous wording | Rephrase statement to be clearer |
| `self-assessment` with vague criteria | Make criteria more specific and observable |

### Review Process

1. **Write all questions** for the quiz
2. **Review each question type** using checklist above
3. **Flag problematic questions** (especially `short-answer`)
4. **Revise flagged questions** (change type or rewrite)
5. **Test the quiz** by taking it yourself
6. **Verify all learning point links** are correct

**Red flags to watch for:**
- More than 2 `short-answer` questions in a 10-question quiz
- `short-answer` questions with long answers
- Questions without `relatedLearningPoints`
- Self-assessment without model answer
- Explanations that just repeat the answer

---

## Linking Quizzes to Chapters

### Step 1: Import Quiz in Chapter File

```typescript
// chapters/chapter-1-name.ts
import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1-your-adventure',
  title: 'Chapter 1: [Title]',
  // ... other chapter fields ...

  endQuiz: chapter1Quiz,  // Link to quiz
};
```

### Step 2: Add Quiz Trigger to Final Scene (Optional)

Quizzes automatically trigger at chapter end, but you can add explicit triggers:

```typescript
// In the last scene of the chapter
{
  id: 'scene-chapter-end',
  type: 'narrative',
  content: 'Chapter complete! Ready to test your knowledge?',
  // ... other fields ...

  events: {
    onExit: [{
      type: 'quiz',
      componentId: 'quiz-chapter-1-your-adventure',
      condition: { type: 'if-not-completed' },
    }],
  },
}
```

### Quiz Trigger Conditions

| Condition | Behavior |
|-----------|----------|
| `always` | Trigger every time (not recommended for quizzes) |
| `once` | Trigger only the first time |
| `if-not-completed` | Trigger only if quiz not yet passed (RECOMMENDED) |
| `custom` | Use custom function to evaluate |

**Recommended:** Use `if-not-completed` so students don't see the quiz repeatedly after passing.

### Linking Learning Points

Ensure quiz questions reference learning point IDs from chapter scenes:

```typescript
// In scene
learningPoints: [
  {
    id: 'lp-ch1-frame-narrative',  // ← This ID
    content: 'Frame narratives create layers of meaning...',
    category: 'literary-technique',
  },
]

// In quiz question
{
  id: 'q3',
  question: 'What literary technique does Scheherazade use?',
  // ... other fields ...
  relatedLearningPoints: ['lp-ch1-frame-narrative'],  // ← Reference same ID
}
```

---

## Complete Quiz Example

Here's a complete, well-structured quiz with all question types:

```typescript
// quizzes/chapter-1-quiz.ts
import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1-arabian-nights',
  title: 'Chapter 1: The Frame Story',
  description: 'Test your understanding of Scheherazade and the Arabian Nights framework.',
  passingScore: 70,
  allowRetry: true,

  questions: [
    // Multiple Choice - Plot Recall
    {
      id: 'q1',
      question: 'What was Sultan Shahryar\'s cruel decree?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'He would banish all women from the kingdom',
        'He would marry a new bride each day and execute her at dawn',
        'He would lock all women in the palace',
        'He would forbid anyone from marrying',
      ],
      correctAnswer: 'He would marry a new bride each day and execute her at dawn',
      explanation: 'After being betrayed by his wife, Sultan Shahryar decreed that he would marry a new bride each day and execute her at dawn to prevent future betrayals. This extreme response sets up the central conflict of the Arabian Nights.',
      relatedLearningPoints: ['lp-4-decree'],
    },

    // Multiple Choice - Literary Concept
    {
      id: 'q2',
      question: 'What narrative technique does Scheherazade use to save lives?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'Frame narrative - stories within stories',
        'Stream of consciousness',
        'Epistolary format - letters',
        'Unreliable narrator',
      ],
      correctAnswer: 'Frame narrative - stories within stories',
      explanation: 'Scheherazade uses frame narrative, telling stories within stories to keep the Sultan engaged and curious. This technique creates layers of meaning and allows her to defer her execution night after night.',
      relatedLearningPoints: ['lp-17-frame-resolution'],
    },

    // True/False - Historical Context
    {
      id: 'q3',
      question: 'The Arabian Nights is a collection from multiple cultural sources.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! The Arabian Nights was compiled over centuries from sources across Persia, Arabia, India, and Egypt, making it a rich multicultural collection rather than the work of a single author.',
      relatedLearningPoints: ['lp-1-origins'],
    },

    // Short Answer - Character Name (EXACT matching)
    {
      id: 'q4',
      question: 'What was the name of Scheherazade\'s sister who helped with her plan?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Dinarzad',
      explanation: 'Scheherazade\'s younger sister Dinarzad was her accomplice, asking her to tell stories each night at the right moment to set the plan in motion.',
      relatedLearningPoints: ['lp-11-execution'],
    },

    // Matching - Character Roles
    {
      id: 'q5',
      question: 'Match each character to their role in the story:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Scheherazade': 'Storyteller who saved lives',
        'Sultan Shahryar': 'King transformed by stories',
        'Dinarzad': 'Sister who prompted the stories',
        'The Vizier': 'Father who feared for his daughter',
      },
      explanation: 'Each character played a crucial role in the frame narrative: Scheherazade as the clever storyteller, Shahryar as the tyrant transformed by empathy, Dinarzad as the essential accomplice, and the Vizier as the conflicted father.',
      relatedLearningPoints: ['lp-7-scheherazade-character', 'lp-6-vizier-role'],
    },

    // Multiple Choice - Theme
    {
      id: 'q6',
      question: 'What does Scheherazade\'s storytelling demonstrate?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'The power of narrative to transform and educate',
        'The importance of memorizing stories',
        'The superiority of written over oral tradition',
        'The inevitability of fate',
      ],
      correctAnswer: 'The power of narrative to transform and educate',
      explanation: 'Scheherazade demonstrates that stories have the power to transform hearts and minds. Through narrative, she educates the Sultan, helps him develop empathy, and ultimately saves not just her own life but an entire kingdom.',
      relatedLearningPoints: ['lp-19-storytelling-power'],
    },

    // True/False - Plot Detail
    {
      id: 'q7',
      question: 'Scheherazade chose to marry the Sultan despite knowing his decree.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True. Scheherazade volunteered to marry the Sultan despite full knowledge of his decree. Her courage and clever plan made her a hero who saved countless lives.',
      relatedLearningPoints: ['lp-9-volunteers'],
    },

    // Multiple Choice - Cultural Context
    {
      id: 'q8',
      question: 'Why was the Arabian Nights originally called "One Thousand and One Nights"?',
      type: 'multiple-choice',
      points: 10,
      options: [
        'It was written over 1,001 days',
        'It contains exactly 1,001 stories',
        'Scheherazade told stories for 1,001 nights',
        'There were 1,001 original authors',
      ],
      correctAnswer: 'Scheherazade told stories for 1,001 nights',
      explanation: 'The title refers to the 1,001 nights that Scheherazade told stories to the Sultan. In medieval Islamic culture, 1,001 was considered a symbolic number representing "many" or "countless," emphasizing the vast scope of her storytelling.',
      relatedLearningPoints: ['lp-17-frame-resolution'],
    },

    // Self-Assessment - Analysis
    {
      id: 'q9',
      question: 'Analyze how Scheherazade\'s storytelling transforms Sultan Shahryar. Consider his character arc, the role of empathy, and the power of narrative.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: `Scheherazade's stories gradually transform Sultan Shahryar from a vengeful tyrant into a compassionate ruler. Through tales of justice, mercy, and love, she helps him develop empathy and see beyond his trauma. The stories serve as mirrors that reflect different perspectives, allowing him to process his pain and rediscover his humanity.

The power of narrative lies in its ability to create emotional distance while maintaining engagement. By hearing about other characters' struggles, the Sultan can examine his own behavior without feeling directly attacked. This indirect approach allows him to change his mind without losing face.

This transformation demonstrates the central theme of the Arabian Nights: that stories can heal, educate, and change hearts. Scheherazade doesn't just save her own life—she saves an entire kingdom by showing that narrative has the power to transform even the most hardened hearts.`,
      assessmentCriteria: [
        {
          id: 'crit1',
          text: 'Discussed Sultan Shahryar\'s character transformation from tyrant to compassionate ruler',
          points: 7,
        },
        {
          id: 'crit2',
          text: 'Explained how stories built empathy and changed his perspective',
          points: 7,
        },
        {
          id: 'crit3',
          text: 'Connected to broader themes about the power of storytelling',
          points: 6,
        },
      ],
      explanation: 'This question explores the central theme of transformation through narrative, demonstrating how Scheherazade uses stories not just to survive, but to heal and educate the Sultan.',
      relatedLearningPoints: ['lp-15-redemption', 'lp-19-storytelling-power'],
    },
  ],
};
```

---

## Checklist

Use this checklist before finalizing any quiz:

### Content Verification

- [ ] All questions align with chapter learning objectives
- [ ] 8-15 questions for chapter quiz (or 15-20 for final quiz)
- [ ] Question types distributed appropriately (60-70% multiple-choice, etc.)
- [ ] At least 1 self-assessment question for analysis
- [ ] No more than 1-2 short-answer questions

### Question Type Verification

- [ ] All `short-answer` questions ask for EXACT words/phrases only
- [ ] No `short-answer` questions asking "Why?", "How?", or "Explain..."
- [ ] `multiple-choice` questions have plausible distractors
- [ ] `true-false` statements are unambiguous
- [ ] `matching` questions have clear pairs (3-5 items)
- [ ] `self-assessment` questions have model answers and criteria

### Technical Requirements

- [ ] All questions have unique IDs
- [ ] All questions have `relatedLearningPoints` field (REQUIRED)
- [ ] Learning point IDs match scene learning point IDs
- [ ] All questions have educational `explanation` fields
- [ ] Quiz ID is unique across adventure
- [ ] `passingScore` set appropriately (70-75%)
- [ ] `allowRetry` set to `true` (recommended)

### Educational Quality

- [ ] Questions test understanding, not just memorization
- [ ] Explanations teach and provide context
- [ ] Progressive difficulty (start easy, build up)
- [ ] Mix of recall, comprehension, and analysis questions
- [ ] Self-assessment criteria are specific and observable

### Integration

- [ ] Quiz imported in chapter file
- [ ] Quiz linked to `endQuiz` property
- [ ] Quiz trigger added to final scene (optional but recommended)
- [ ] Tested playthrough of entire chapter including quiz
- [ ] Self-assessment questions tested thoroughly

---

## Additional Resources

**Related Documentation:**
- `docs/QUIZ_SYSTEM_REFERENCE.md` - Complete technical reference
- `docs/CHAPTER_AUTHORING_GUIDE.md` - Chapter creation guide
- `src/types/adventure.ts` - Type definitions

**Example Quizzes:**
- `src/adventures/arabian-nights/quizzes/` - All Arabian Nights quizzes
- `src/adventures/dantes-inferno/quizzes/` - Dante's Inferno quizzes

---

**Version:** 1.0
**Last Updated:** October 2025
**Platform Version:** 1.0 - All scene types implemented
