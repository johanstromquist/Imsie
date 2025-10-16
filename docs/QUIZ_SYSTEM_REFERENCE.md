# Quiz System Reference

**Version:** 1.0
**Last Updated:** October 2025

This document provides comprehensive documentation of Imsie's quiz system, including architecture, question types, scoring logic, self-assessment functionality, and best practices.

---

## Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Quiz Structure](#quiz-structure)
4. [Question Types](#question-types)
5. [Quiz Renderer Logic](#quiz-renderer-logic)
6. [Scoring System](#scoring-system)
7. [Self-Assessment Questions](#self-assessment-questions)
8. [Quiz Results and Review](#quiz-results-and-review)
9. [Progress Tracking](#progress-tracking)
10. [Quiz Triggers](#quiz-triggers)
11. [Creating Quizzes](#creating-quizzes)
12. [Best Practices](#best-practices)
13. [Examples](#examples)

---

## Overview

The quiz system is a core assessment component of Imsie that:

- **Tests comprehension** of chapter content and learning objectives
- **Provides immediate feedback** with explanations
- **Tracks progress** and performance statistics
- **Supports multiple question types** including self-assessment
- **Links to learning points** from scenes
- **Enables retries** with optional passing thresholds
- **Integrates with the event system** via triggers

**Key Features:**
- 5 question types (multiple-choice, true-false, short-answer, matching, self-assessment)
- Self-assessment with model answers and criteria-based evaluation
- Dynamic scoring with percentage-based passing thresholds
- Question-by-question navigation with validation
- Detailed results review with expandable answers
- Integration with IndexedDB progress tracking

---

## Architecture

### Component Structure

```
src/components/quiz/
├── QuizRenderer.tsx       # Main quiz orchestrator
├── QuizQuestion.tsx       # Individual question renderer
└── QuizResults.tsx        # Results display and self-assessment

src/services/
├── progressManager.ts     # Quiz score persistence
└── triggerHandler.ts      # Quiz trigger evaluation

src/types/adventure.ts     # Type definitions
```

### Data Flow

```
Quiz Definition (quiz.ts)
         ↓
QuizRenderer (state management, navigation)
         ↓
QuizQuestion (answer collection, validation)
         ↓
QuizRenderer (scoring calculation)
         ↓
QuizResults (display, self-assessment)
         ↓
ProgressManager (persistence)
```

---

## Quiz Structure

### Quiz Interface

```typescript
interface Quiz {
  id: string;                    // Unique identifier
  title: string;                 // Display title
  description?: string;          // Optional subtitle/instructions
  questions: QuizQuestion[];     // Array of questions
  passingScore: number;          // Percentage (0-100) required to pass
  allowRetry: boolean;           // Whether retry is allowed
}
```

### Question Interface

```typescript
interface QuizQuestion {
  id: string;                                        // Unique question ID
  question: string;                                  // Question text
  type: QuestionType;                                // Question type
  points: number;                                    // Points awarded if correct
  options?: string[];                                // For multiple-choice/matching
  correctAnswer?: string | string[] | Record<string, string>; // Expected answer
  explanation: string;                               // Educational feedback
  relatedLearningPoints: string[];                   // Links to scene learning points

  // Self-assessment specific
  modelAnswer?: string;                              // Expert answer to compare
  assessmentCriteria?: AssessmentCriterion[];        // Evaluation checklist
}

type QuestionType =
  | 'multiple-choice'
  | 'true-false'
  | 'short-answer'
  | 'matching'
  | 'self-assessment';
```

### Assessment Criterion

```typescript
interface AssessmentCriterion {
  id: string;         // Unique criterion ID
  text: string;       // Description of what should be covered
  points: number;     // Points awarded if student says they covered it
}
```

---

## Question Types

### 1. Multiple Choice

**Structure:**
- Single correct answer from 2-4 options
- Radio button selection interface
- Case-insensitive string comparison

**Example:**
```typescript
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
  explanation: 'After being betrayed, Sultan Shahryar decreed...',
  relatedLearningPoints: ['lp-4-decree'],
}
```

**Answer Validation:**
- Exact string match (case-insensitive, trimmed)
- Single selection required

---

### 2. True/False

**Structure:**
- Binary choice (True or False)
- Large button interface
- String comparison

**Example:**
```typescript
{
  id: 'q7',
  question: 'The Arabian Nights is a collection from multiple cultural sources.',
  type: 'true-false',
  points: 10,
  options: ['True', 'False'],
  correctAnswer: 'True',
  explanation: 'True! The Arabian Nights was compiled over centuries...',
  relatedLearningPoints: ['lp-1-origins'],
}
```

**Answer Validation:**
- Must be exactly 'True' or 'False' string

---

### 3. Short Answer

**⚠️ IMPORTANT: Use ONLY for exact word/phrase matching (names, terms, specific vocabulary). DO NOT use for reasoning or explanation questions.**

**Structure:**
- Free text input field
- Case-insensitive comparison with trimming
- Single correct word or short phrase expected
- Exact string match required

**When to Use:**
- Character names
- Location names
- Technical terms or vocabulary
- Specific titles (books, stories, etc.)
- Historical dates or numbers
- **Key criterion:** The answer is a single, objective, factual word or phrase

**When NOT to Use:**
- ❌ Any question requiring reasoning, analysis, or explanation
- ❌ Questions asking "Why?", "How?", "Explain...", "Describe...", "Analyze..."
- ❌ Questions with multiple possible valid phrasings
- ❌ Questions requiring sentences or paragraphs
- **For these, use `self-assessment` instead**

**Correct Usage Examples:**

```typescript
// ✅ GOOD: Asking for a character name
{
  id: 'q1',
  question: 'What was the name of the vizier\'s daughter who saved the kingdom?',
  type: 'short-answer',
  points: 10,
  correctAnswer: 'Scheherazade',
  explanation: 'Scheherazade, the vizier\'s learned daughter...',
  relatedLearningPoints: ['lp-7-scheherazade-character'],
}

// ✅ GOOD: Asking for a specific term
{
  id: 'q2',
  question: 'What is the name of the 40-word phrase used to open the treasure cave?',
  type: 'short-answer',
  points: 10,
  correctAnswer: 'Open Sesame',
  explanation: 'The famous phrase "Open Sesame" unlocks the thieves\' cave...',
  relatedLearningPoints: ['lp-magic-words'],
}

// ✅ GOOD: Asking for a number
{
  id: 'q3',
  question: 'How many nights did Scheherazade tell stories?',
  type: 'short-answer',
  points: 10,
  correctAnswer: '1001',
  explanation: 'The collection is called "One Thousand and One Nights"...',
  relatedLearningPoints: ['lp-frame-structure'],
}
```

**INCORRECT Usage Examples:**

```typescript
// ❌ WRONG: Asking for reasoning/explanation
{
  id: 'bad-q1',
  question: 'Why did Scheherazade choose to tell stories?',
  type: 'short-answer',  // WRONG! This requires explanation
  // Should be 'self-assessment' or 'multiple-choice'
}

// ❌ WRONG: Asking for analysis
{
  id: 'bad-q2',
  question: 'How does storytelling transform the Sultan?',
  type: 'short-answer',  // WRONG! This requires analytical thinking
  // Should be 'self-assessment'
}

// ❌ WRONG: Open-ended description
{
  id: 'bad-q3',
  question: 'Describe the character of Morgiana.',
  type: 'short-answer',  // WRONG! This requires sentences
  // Should be 'self-assessment'
}

// ❌ WRONG: Multiple valid answers
{
  id: 'bad-q4',
  question: 'What theme is explored in this story?',
  type: 'short-answer',  // WRONG! Multiple valid themes possible
  // Should be 'multiple-choice' or 'self-assessment'
}
```

**Answer Validation:**
```typescript
correctAnswer.toLowerCase().trim() === userAnswer.toLowerCase().trim()
```

**Validation Limitations:**
- Only exact matches (case-insensitive)
- Cannot handle synonyms or alternate phrasings
- Cannot evaluate partial credit
- Cannot assess understanding beyond the exact word

**Decision Rule:**
If you're unsure whether to use `short-answer` or `self-assessment`, ask:
- "Is there exactly ONE correct word or short phrase?" → Use `short-answer`
- "Could students express this in different valid ways?" → Use `self-assessment`
- "Does this require explanation beyond a single term?" → Use `self-assessment`

### Comparison: Short Answer vs. Self-Assessment

| Question Wording | Correct Type | Why |
|-----------------|--------------|-----|
| "What was the name of Aladdin's uncle?" | `short-answer` | Exact name: "Maghreb" |
| "Who was the main antagonist?" | `multiple-choice` | Better with options (could be ambiguous) |
| "Why did Scheherazade volunteer?" | `self-assessment` | Requires reasoning/explanation |
| "How does the lamp symbolize opportunity?" | `self-assessment` | Requires analysis |
| "What phrase opened the cave?" | `short-answer` | Exact phrase: "Open Sesame" |
| "Describe the role of Morgiana." | `self-assessment` | Requires detailed description |
| "Explain the significance of 1,001 nights." | `self-assessment` | Requires explanation |
| "How many voyages did Sinbad take?" | `short-answer` | Exact number: "7" or "seven" |

**Rule of Thumb:**
- If you can imagine the student typing 1-3 words → `short-answer` (maybe)
- If you expect a sentence or more → `self-assessment` (definitely)
- If there are multiple ways to phrase the answer → `self-assessment` (definitely)

---

### 4. Matching

**Structure:**
- Match items to their correct pairs
- Dropdown selection interface
- Object-based answer format

**Example:**
```typescript
{
  id: 'q4',
  question: 'Match each character to their role in the story:',
  type: 'matching',
  points: 15,
  correctAnswer: {
    'Scheherazade': 'Storyteller who saved lives',
    'Sultan Shahryar': 'King who was transformed by stories',
    'Dinarzad': 'Sister who prompted the stories',
    'The Vizier': 'Father who feared for his daughter',
  },
  explanation: 'Each character played a crucial role...',
  relatedLearningPoints: ['lp-character-roles'],
}
```

**Answer Validation:**
- All keys must match
- All values must match their corresponding keys
- Order-independent comparison

**Validation Logic:**
```typescript
const correctKeys = Object.keys(correctAnswer).sort();
const userKeys = Object.keys(userAnswer).sort();
if (correctKeys.length !== userKeys.length) return false;
return correctKeys.every(key => correctAnswer[key] === userAnswer[key]);
```

---

### 5. Self-Assessment

**Structure:**
- Free-text response (textarea)
- Model answer provided for comparison
- Criteria-based self-evaluation
- Points awarded based on self-reported coverage

**Purpose:** Encourage reflection and metacognition for open-ended questions where automated grading is insufficient.

**Example:**
```typescript
{
  id: 'q12',
  question: 'Analyze how Scheherazade\'s storytelling transforms Sultan Shahryar. Consider his character arc, the role of empathy, and the power of narrative.',
  type: 'self-assessment',
  points: 20,
  modelAnswer: `Scheherazade's stories gradually transform Sultan Shahryar from a vengeful tyrant into a compassionate ruler. Through tales of justice, mercy, and love, she helps him develop empathy and see beyond his trauma. The stories serve as mirrors that reflect different perspectives, allowing him to process his pain and rediscover his humanity. This transformation demonstrates the power of narrative to heal and educate.`,
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
  explanation: 'This question explores the central theme of transformation through narrative...',
  relatedLearningPoints: ['lp-transformation', 'lp-storytelling-power'],
}
```

**Workflow:**
1. Student writes their answer during quiz
2. Quiz is submitted (self-assessment question awards 0 points initially)
3. Results screen shows student's answer and model answer side-by-side
4. Student evaluates their answer against each criterion
5. Points are awarded based on self-assessment selections
6. Final score is recalculated dynamically

**Important Notes:**
- `correctAnswer` is optional for self-assessment questions
- Initial scoring marks self-assessment questions as "correct" with 0 points
- Points are added during the results phase based on self-evaluation
- Student must complete all self-assessments before continuing

---

## Quiz Renderer Logic

### State Management

**QuizRenderer.tsx** manages:
- Current question index
- User answers array
- Completion status
- Validation errors

```typescript
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [userAnswers, setUserAnswers] = useState<QuizAnswer[]>([]);
const [isCompleted, setIsCompleted] = useState(false);
const [validationError, setValidationError] = useState<string | null>(null);
```

### Navigation Flow

```
Question 1 → Answer → Validate → Next
Question 2 → Answer → Validate → Next
...
Question N → Answer → Validate → Submit → Results
```

**Navigation Rules:**
- Must answer current question before proceeding
- Can navigate backward to review/change answers
- Progress bar shows completion percentage
- Last question shows "Submit Quiz" instead of "Next"

### Answer Validation

Before allowing navigation:
```typescript
if (!currentAnswer) {
  setValidationError('Please answer the question before continuing.');
  return;
}
```

### Answer Recording

```typescript
const handleAnswerChange = (answer: string | string[] | Record<string, string>) => {
  const isSelfAssessment = currentQuestion.type === 'self-assessment';

  let isCorrect: boolean;
  let pointsEarned: number;

  if (isSelfAssessment) {
    isCorrect = true;  // Neutral marking
    pointsEarned = 0;  // Points awarded later via self-assessment
  } else {
    isCorrect = checkAnswer(currentQuestion.correctAnswer, answer);
    pointsEarned = isCorrect ? currentQuestion.points : 0;
  }

  const newAnswer: QuizAnswer = {
    questionId: currentQuestion.id,
    answer,
    correct: isCorrect,
    pointsEarned,
    // For self-assessment
    ...(isSelfAssessment && {
      selfAssessment: {},
      selfAssessmentComplete: false,
    }),
  };

  // Update or replace answer
  setUserAnswers(prev => {
    const filtered = prev.filter(a => a.questionId !== currentQuestion.id);
    return [...filtered, newAnswer];
  });
};
```

---

## Scoring System

### Score Calculation

```typescript
const completeQuiz = () => {
  // Calculate total points earned
  const totalPointsEarned = userAnswers.reduce(
    (sum, answer) => sum + answer.pointsEarned,
    0
  );

  // Calculate total possible points
  const totalPossiblePoints = quiz.questions.reduce(
    (sum, question) => sum + question.points,
    0
  );

  // Calculate percentage (rounded)
  const percentageScore = totalPossiblePoints > 0
    ? Math.round((totalPointsEarned / totalPossiblePoints) * 100)
    : 0;

  // Determine pass/fail
  const passed = percentageScore >= quiz.passingScore;

  onComplete(passed, percentageScore, userAnswers);
};
```

### Answer Checking Logic

**For Multiple Choice and True/False:**
```typescript
// Case-insensitive string comparison with trimming
correctAnswer.toLowerCase().trim() === userAnswer.toLowerCase().trim()
```

**For Short Answer:**
```typescript
// Same as above
correctAnswer.toLowerCase().trim() === userAnswer.toLowerCase().trim()
```

**For Matching:**
```typescript
// All key-value pairs must match
const correctKeys = Object.keys(correctAnswer).sort();
const userKeys = Object.keys(userAnswer).sort();
if (correctKeys.length !== userKeys.length) return false;
return correctKeys.every(key => correctAnswer[key] === userAnswer[key]);
```

**For Array Answers:**
```typescript
// Sort and compare arrays
const sortedCorrect = [...correctAnswer].sort();
const sortedUser = [...userAnswer].sort();
return sortedCorrect.every((val, idx) => val === sortedUser[idx]);
```

---

## Self-Assessment Questions

### Purpose and Rationale

Self-assessment questions address a fundamental challenge in educational technology: **how to evaluate complex, open-ended responses** that require critical thinking, analysis, and synthesis.

**Why Self-Assessment?**
- Automated grading cannot accurately evaluate nuanced analytical writing
- Encourages **metacognition** and self-reflection
- Develops **self-evaluation skills** crucial for lifelong learning
- Allows for **multiple valid approaches** to complex questions
- More honest than guessing on multiple choice for analytical topics

### Implementation Details

#### Phase 1: Question Answering (During Quiz)

```typescript
function renderSelfAssessmentInput() {
  return (
    <div>
      <div className="info-banner">
        ℹ️ This is a reflection question. You'll compare your answer
        to a model answer and self-assess after submitting the quiz.
      </div>
      <textarea
        value={localAnswer}
        onChange={(e) => handleShortAnswer(e.target.value)}
        placeholder="Type your answer here. Be thorough - you'll evaluate your own response later."
        rows={6}
      />
    </div>
  );
}
```

**Key Points:**
- Displayed as textarea (multi-line input)
- Info banner explains the self-assessment process
- No immediate grading
- Answer is stored with `selfAssessment: {}` and `selfAssessmentComplete: false`

#### Phase 2: Self-Assessment (Results Screen)

**Display:**
1. Student's original answer (read-only)
2. Model answer for comparison
3. Assessment criteria checklist
4. Radio buttons for each criterion (Covered / Not Covered)

**Scoring Logic:**
```typescript
const selfAssessmentPoints = selfAssessmentQuestions.reduce((total, q) => {
  const assessment = selfAssessments[q.id];
  if (!assessment || !q.assessmentCriteria) return total;

  return total + q.assessmentCriteria.reduce((sum, criterion) => {
    return sum + (assessment[criterion.id] === 'covered' ? criterion.points : 0);
  }, 0);
}, 0);

// Recalculate total score
const earnedPoints = answers.reduce((sum, a) => sum + a.pointsEarned, 0) + selfAssessmentPoints;
const actualScore = Math.round((earnedPoints / totalPoints) * 100);
```

**Validation:**
- All criteria must be evaluated before continuing
- Continue button is disabled until all self-assessments are complete
- Visual indicators show incomplete assessments

### Example Workflow

**Step 1:** Student answers question
```
Q: "Analyze how Scheherazade's storytelling transforms the Sultan."
A: [Student types multi-paragraph answer]
```

**Step 2:** Quiz submitted, results shown
```
Your Answer:
[Student's answer displayed]

Model Answer:
[Expert answer displayed for comparison]

Evaluate Your Answer:
☐ Discussed Sultan's transformation from tyrant to ruler (7 pts)
  ○ Covered in my answer  ○ Not covered in my answer

☐ Explained how stories built empathy (7 pts)
  ○ Covered in my answer  ○ Not covered in my answer

☐ Connected to broader themes (6 pts)
  ○ Covered in my answer  ○ Not covered in my answer
```

**Step 3:** Student completes self-assessment
```
Score recalculates dynamically as selections are made
Continue button enables when all criteria evaluated
```

---

## Quiz Results and Review

### Results Screen Components

**QuizResults.tsx** displays:
1. **Header:** Pass/fail status, score percentage, pass/fail icon
2. **Progress Bar:** Visual representation with passing threshold marker
3. **Statistics Grid:** Correct questions, points earned, total questions
4. **Question Review:** Expandable list of all questions
5. **Self-Assessment Section:** For self-assessment questions
6. **Action Buttons:** Retry (if allowed) and Continue

### Question Review Features

**Each Question Shows:**
- Question number and text
- Points earned / total points
- Your answer
- Correct answer (if wrong)
- Explanation
- Expandable/collapsible details

**Self-Assessment Questions Show:**
- Your answer
- Model answer
- Evaluation checklist with radio buttons
- Additional context

**Visual Indicators:**
- ✓ Green border for correct answers
- ✗ Red border for incorrect answers
- 📝 Yellow border for self-assessment questions
- ⚠️ Warning if self-assessment incomplete

### Dynamic Score Recalculation

```typescript
// Recalculate score as self-assessments are completed
const actualScore = totalPoints > 0
  ? Math.round((earnedPoints / totalPoints) * 100)
  : 0;

const passed = actualScore >= quiz.passingScore;
```

Score updates in real-time as students complete self-assessments.

### Continue Button Logic

```typescript
<button
  onClick={onContinue}
  disabled={hasSelfAssessments && !allSelfAssessmentsComplete}
  style={{
    backgroundColor: (hasSelfAssessments && !allSelfAssessmentsComplete)
      ? '#444'  // Disabled state
      : (passed ? '#228B22' : '#666'),  // Pass/fail colors
    cursor: (hasSelfAssessments && !allSelfAssessmentsComplete)
      ? 'not-allowed'
      : 'pointer',
  }}
>
  {(hasSelfAssessments && !allSelfAssessmentsComplete)
    ? 'Complete Self-Assessments to Continue'
    : (passed ? 'Continue to Next Chapter' : 'Continue')
  }
</button>
```

---

## Progress Tracking

### QuizScore Interface

```typescript
interface QuizScore {
  quizId: string;
  score: number;              // Percentage (0-100)
  answers: QuizAnswer[];
  completedAt: Date;
}

interface QuizAnswer {
  questionId: string;
  answer: string | string[] | Record<string, string>;
  correct: boolean;
  pointsEarned: number;
  // Self-assessment fields
  selfAssessment?: Record<string, 'covered' | 'not-covered'>;
  selfAssessmentComplete?: boolean;
}
```

### Progress Manager Integration

**Saving Quiz Scores:**
```typescript
// src/services/progressManager.ts
async saveQuizScore(adventureId: string, quizScore: QuizScore): Promise<void> {
  const progress = await this.getAdventureProgress(adventureId);
  if (progress) {
    progress.quizScores.push(quizScore);

    // Update statistics
    if (quizScore.score >= 70) {  // Assuming 70% is passing
      progress.statistics.quizzesPassed += 1;
    }
    if (quizScore.score === 100) {
      progress.statistics.perfectQuizzes += 1;
    }

    // Recalculate average
    const totalScore = progress.quizScores.reduce((sum, qs) => sum + qs.score, 0);
    progress.statistics.averageQuizScore = totalScore / progress.quizScores.length;

    await this.saveAdventureProgress(progress);
  }
}
```

**Statistics Tracked:**
- `quizzesPassed`: Total quizzes with score ≥ 70%
- `perfectQuizzes`: Total quizzes with score = 100%
- `averageQuizScore`: Mean of all quiz scores

### Storage

- **Backend:** IndexedDB (via idb library)
- **Store:** `adventures` object store
- **Key:** `adventureId`
- **Data:** `AdventureProgress` object containing `quizScores` array

---

## Quiz Triggers

Quizzes are typically triggered by scene events, most commonly at the end of a chapter.

### Event-Driven Trigger System

```typescript
interface SceneTrigger {
  type: 'quiz' | 'mini-game' | 'cutscene' | 'custom';
  componentId: string;        // Quiz ID to trigger
  condition?: TriggerCondition;
  data?: Record<string, unknown>;
}

interface TriggerCondition {
  type: 'always' | 'once' | 'if-not-completed' | 'custom';
  customCheck?: (progress: AdventureProgress) => boolean;
}
```

### Common Pattern: Chapter End Quiz

```typescript
// In last scene of chapter
{
  id: 'scene-final',
  type: 'narrative',
  content: 'Chapter complete!',
  // ... other fields
  events: {
    onExit: [{
      type: 'quiz',
      componentId: 'quiz-chapter-1',
      condition: { type: 'if-not-completed' },
    }],
  },
}
```

### Trigger Evaluation Logic

```typescript
// src/services/triggerHandler.ts
export function shouldTriggerFire(
  trigger: SceneTrigger,
  progress: AdventureProgress,
  triggeredBefore: boolean = false
): boolean {
  if (!trigger.condition) return true;

  const { type, customCheck } = trigger.condition;

  switch (type) {
    case 'always':
      return true;

    case 'once':
      return !triggeredBefore;

    case 'if-not-completed':
      if (trigger.type === 'quiz') {
        const quizCompleted = progress.quizScores.some(
          (score) => score.quizId === trigger.componentId
        );
        return !quizCompleted;
      }
      return true;

    case 'custom':
      return customCheck ? customCheck(progress) : true;

    default:
      return true;
  }
}
```

**Condition Types:**
- `always`: Trigger every time (default if no condition)
- `once`: Trigger only the first time
- `if-not-completed`: Trigger only if quiz not yet passed
- `custom`: Use custom function to evaluate

### Resolving Quiz Data

```typescript
export function resolveQuizData(quizId: string, adventure: any): Quiz | null {
  // Check chapter end quizzes
  for (const chapter of adventure.chapters) {
    if (chapter.endQuiz && chapter.endQuiz.id === quizId) {
      return chapter.endQuiz;
    }
  }

  // Check final quiz
  if (adventure.finalQuiz && adventure.finalQuiz.id === quizId) {
    return adventure.finalQuiz;
  }

  return null;
}
```

---

## Creating Quizzes

### Step 1: Define Quiz File

Create a new file in `src/adventures/[adventure-name]/quizzes/`:

```typescript
// chapter-1-quiz.ts
import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1',
  title: 'Chapter 1: Title Quiz',
  description: 'Test your knowledge of...',
  passingScore: 70,
  allowRetry: true,
  questions: [
    // ... questions
  ],
};
```

### Step 2: Link to Learning Points

Each question should reference learning point IDs from scenes:

```typescript
{
  id: 'q1',
  question: '...',
  // ... other fields
  relatedLearningPoints: ['lp-1-origins', 'lp-2-context'],
}
```

### Step 3: Import in Chapter

```typescript
// chapter-1.ts
import type { Chapter } from '../../../types';
import { chapter1Quiz } from '../quizzes/chapter-1-quiz';

export const chapter1: Chapter = {
  id: 'chapter-1',
  title: 'Chapter Title',
  // ... other fields
  endQuiz: chapter1Quiz,
};
```

### Step 4: Add Trigger (Optional)

If you want to trigger the quiz from a specific scene:

```typescript
{
  id: 'final-scene',
  type: 'narrative',
  content: '...',
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

## Best Practices

### ⚠️ Critical: Question Type Selection

**The most common mistake in quiz authoring is using `short-answer` for reasoning questions.**

```
Question Type Decision Tree:
├─ Factual recall (name, term, number)? → short-answer
├─ True/False statement? → true-false
├─ Choose from options (2-4)? → multiple-choice
├─ Match pairs? → matching
└─ Reasoning/Analysis/Explanation? → self-assessment
```

**Remember:**
- `short-answer` = ONLY exact word/phrase matching
- Analysis/Reasoning questions = ALWAYS `self-assessment`
- When in doubt between `short-answer` and `self-assessment`, choose `self-assessment`

---

### Question Design

**1. Align with Learning Objectives**
- Every question should test a stated learning objective
- Reference learning points from scenes

**2. Clear and Unambiguous**
- Use precise language
- Avoid trick questions
- One correct answer for multiple choice

**3. Plausible Distractors**
- Incorrect options should be believable
- Avoid "all of the above" or "none of the above"

**4. Educational Explanations**
- Always provide meaningful explanations
- Teach, don't just grade
- Reinforce key concepts

**5. Progressive Difficulty**
- Start with easier recall questions
- Build to analysis and synthesis
- Mix difficulty levels throughout

### Quiz Structure

**1. Length**
- Chapter quizzes: 8-15 questions
- Final quizzes: 12-20 questions
- Consider cognitive load and fatigue

**2. Point Distribution**
- Simple recall: 5-10 points
- Application: 10-15 points
- Analysis: 15-20 points
- Self-assessment: 15-25 points

**3. Passing Threshold**
- Chapter quizzes: 70% typical
- Final quizzes: 75% typical
- Consider difficulty and stakes

**4. Question Type Mix**
```
Recommended distribution:
- Multiple choice: 60-70%
- True/False: 10-20%
- Short answer: 5-10% (ONLY for exact word matching)
- Matching: 5-10%
- Self-assessment: 5-10% (1-2 questions for analysis)
```

**Important Notes on Distribution:**
- Don't overuse `short-answer` - most factual questions work better as `multiple-choice`
- Reserve `short-answer` for iconic names/terms students MUST memorize
- If you find yourself writing many `short-answer` questions, convert most to `multiple-choice`
- Every quiz should have at least 1 `self-assessment` question for higher-order thinking

### Self-Assessment Questions

**When to Use:**
- Complex analytical questions
- Open-ended reflection prompts
- Questions with multiple valid approaches
- Synthesis across multiple concepts

**When NOT to Use:**
- Factual recall questions
- Questions with single correct answers
- Every question in a quiz (sparingly!)

**Design Tips:**
- Provide a comprehensive model answer
- Break down criteria into 3-5 specific components
- Distribute points fairly across criteria
- Make criteria observable and concrete

**Good Criterion:**
✓ "Discussed Sultan Shahryar's character transformation from tyrant to compassionate ruler"

**Poor Criterion:**
✗ "Showed understanding of the story"

### Technical Best Practices

**1. Unique IDs**
- Quiz IDs: `quiz-chapter-1`, `quiz-chapter-2`, `final-quiz-[adventure]`
- Question IDs: `q1`, `q2`, ... or `fq1` (for final quiz)
- Criterion IDs: `crit1`, `crit2`, ...

**2. Type Safety**
- Use TypeScript interfaces
- Validate answer formats match question types
- Test with various answer combinations

**3. Performance**
- Limit quiz length to prevent fatigue
- Use progress bar for visual feedback
- Lazy load quiz data

**4. Accessibility**
- Clear focus states
- Keyboard navigation support
- High contrast colors
- Semantic HTML

---

## Examples

### Complete Chapter Quiz Example

```typescript
import type { Quiz } from '../../../types';

export const chapter1Quiz: Quiz = {
  id: 'quiz-chapter-1',
  title: 'Chapter 1: The Frame Story',
  description: 'Test your understanding of Scheherazade and the Arabian Nights framework.',
  passingScore: 70,
  allowRetry: true,
  questions: [
    // Multiple Choice - Recall
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
      explanation: 'After being betrayed, Sultan Shahryar decreed that he would marry a new bride each day and have her executed at dawn to prevent future betrayals.',
      relatedLearningPoints: ['lp-4-decree'],
    },

    // True/False - Comprehension
    {
      id: 'q2',
      question: 'The Arabian Nights is a collection from multiple cultural sources.',
      type: 'true-false',
      points: 10,
      options: ['True', 'False'],
      correctAnswer: 'True',
      explanation: 'True! The Arabian Nights was compiled over centuries from sources across Persia, Arabia, India, and Egypt, making it a rich multicultural collection.',
      relatedLearningPoints: ['lp-1-origins'],
    },

    // Short Answer - Factual Recall (character name)
    // ✅ CORRECT use: Asking for a specific name with one exact answer
    {
      id: 'q3',
      question: 'What was the name of Scheherazade\'s sister who helped with her plan?',
      type: 'short-answer',
      points: 10,
      correctAnswer: 'Dinarzad',
      explanation: 'Scheherazade\'s younger sister Dinarzad was her accomplice, asking her to tell stories each night to set the plan in motion.',
      relatedLearningPoints: ['lp-11-execution'],
    },

    // Matching - Application
    {
      id: 'q4',
      question: 'Match each character to their role:',
      type: 'matching',
      points: 15,
      correctAnswer: {
        'Scheherazade': 'Learned storyteller',
        'Sultan Shahryar': 'Transformed king',
        'Dinarzad': 'Supportive sister',
        'The Vizier': 'Conflicted father',
      },
      explanation: 'Each character played a crucial role in the frame narrative structure.',
      relatedLearningPoints: ['lp-7-scheherazade-character', 'lp-6-vizier-role'],
    },

    // Self-Assessment - Analysis/Synthesis
    {
      id: 'q5',
      question: 'Analyze how Scheherazade\'s storytelling transforms Sultan Shahryar. Consider his character arc, the role of empathy, and the power of narrative.',
      type: 'self-assessment',
      points: 20,
      modelAnswer: 'Scheherazade\'s stories gradually transform Sultan Shahryar from a vengeful tyrant into a compassionate ruler. Through tales of justice, mercy, and love, she helps him develop empathy and see beyond his trauma. The stories serve as mirrors that reflect different perspectives, allowing him to process his pain and rediscover his humanity. This transformation demonstrates the power of narrative to heal and educate, showing how stories can change hearts and minds.',
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

### Quiz with Event Trigger Example

```typescript
// Last scene of chapter
{
  id: 'scene-chapter-1-ending',
  type: 'narrative',
  content: `You've completed Chapter 1! Scheherazade has begun her storytelling journey,
            and you've learned about the frame narrative structure that shapes the
            entire Arabian Nights collection.\n\nReady to test your knowledge?`,
  learningPoints: [
    {
      id: 'lp-17-frame-resolution',
      content: 'The frame story of Scheherazade spans 1,001 nights and serves as the container for all other tales in the collection.',
      category: 'literary-technique',
    },
  ],
  backgroundImage: '/assets/arabian-nights/scheherazade-storytelling.jpg',

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

## Summary

The Imsie quiz system provides:

✅ **Flexible Question Types** - 5 types to match different assessment needs
✅ **Self-Assessment** - Innovative approach to complex analytical questions
✅ **Immediate Feedback** - Educational explanations for all questions
✅ **Progress Tracking** - Comprehensive statistics and persistence
✅ **Event Integration** - Seamless triggering via scene events
✅ **User Experience** - Intuitive navigation, validation, and results review

**Key Innovations:**
- Self-assessment with model answers and criteria-based evaluation
- Dynamic score recalculation during results review
- Flexible answer validation for multiple formats
- Deep integration with learning points and progress tracking

For more information, see:
- `src/types/adventure.ts` - Type definitions
- `src/components/quiz/` - Quiz components
- `docs/CHAPTER_AUTHORING_GUIDE.md` - Chapter creation guide
- `docs/SCENE_TYPES_REFERENCE.md` - Scene types documentation

---

**Document Version:** 1.0
**Platform Version:** 1.0 - All scene types implemented
**Last Updated:** October 2025
