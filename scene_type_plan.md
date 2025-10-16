# Scene Type Implementation Plan

This document outlines the implementation logic needed for the scene types that are currently missing from the Imsie educational adventure platform.

## Overview

Based on the existing codebase, we have **4 implemented scene types** and **5 missing scene types** (plus 1 extensible custom type). This document focuses on the 5 missing types.

### Implemented Scene Types ✅
1. **NarrativeScene** - Static storytelling with text and images
2. **DecisionScene** - Branching choices with optional time limits
3. **DialogueScene** - Conversation trees with characters
4. **MapExplorationScene** - Interactive maps with clickable locations

### Missing Scene Types 🚧
1. **TimelineGameScene** - Order historical events chronologically
2. **PrimarySourceScene** - Analyze historical documents
3. **CauseEffectScene** - Match causes with their effects
4. **QuoteAttributionScene** - Identify who said what
5. **AnachronismScene** - Find items that don't belong in a time period
6. **CustomMiniGameScene** - Extensible registry system

---

## Implementation Pattern Analysis

All existing scene components follow this consistent pattern:

### Component Structure
```typescript
interface [SceneType]Props {
  scene: [SceneType]Type;
  theme: AdventureTheme;
  onComplete: () => void;  // or (data: any) => void for scenes with results
  onBack: () => void;
  canGoBack: boolean;
}
```

### Common Features
- **Background handling**: Support for both `backgroundImage` and optional `backgroundVideo`
- **Theme integration**: Use `theme.primaryColor` and `theme.secondaryColor` throughout
- **Responsive layout**: Centered container with `maxWidth` (typically 800-1200px)
- **Dark overlay**: `rgba(0, 0, 0, 0.7-0.85)` background with `backdropFilter: 'blur(10px)'`
- **Learning points display**: Bordered section at bottom with theme color accent
- **Navigation**: Back button (circular, positioned absolutely, low opacity until hover)
- **Asset loading**: Use `assetLoader.getImage()` for all images
- **Animations**: Fade-in effects, hover transforms, smooth transitions

### Integration Points
1. Add component import to `SceneRenderer.tsx`
2. Add case statement in switch for scene type
3. Pass standard props: `scene`, `theme`, `onComplete`, `onBack`, `canGoBack`
4. Type definitions already exist in `src/types/adventure.ts`

---

## 1. TimelineGameScene

### Purpose
Students drag and drop or click to arrange historical events in chronological order.

### Type Definition (Already Exists)
```typescript
interface TimelineGameScene extends BaseScene {
  type: 'timeline-game';
  prompt: string;
  timelineEvents: TimelineEvent[];
  successThreshold: number; // percentage correct needed to pass
}

interface TimelineEvent {
  id: string;
  title: string;
  year: number;
  description: string;
  image?: string;
}
```

### Implementation Logic

#### State Management
```typescript
const [shuffledEvents, setShuffledEvents] = useState<TimelineEvent[]>([]);
const [orderedEvents, setOrderedEvents] = useState<TimelineEvent[]>([]);
const [isSubmitted, setIsSubmitted] = useState(false);
const [score, setScore] = useState<number | null>(null);
const [showExplanation, setShowExplanation] = useState(false);
```

#### Core Logic

1. **Initialization**
   - On mount, shuffle the `timelineEvents` array randomly
   - Store shuffled events in state
   - Initialize empty `orderedEvents` array

2. **Drag and Drop Interface**
   - Two columns: "Available Events" (left) and "Your Timeline" (right)
   - Events start in left column (shuffled)
   - User drags events to right column to build timeline
   - Can reorder within right column
   - Can drag back to left column to remove from timeline

   **Alternative Simple Implementation:**
   - Display shuffled events as numbered buttons
   - User clicks to add to timeline in order
   - "Clear" button to reset

3. **Validation Logic**
   ```typescript
   const validateTimeline = () => {
     let correctPairs = 0;
     const totalPairs = orderedEvents.length - 1;

     // Check each adjacent pair
     for (let i = 0; i < orderedEvents.length - 1; i++) {
       if (orderedEvents[i].year <= orderedEvents[i + 1].year) {
         correctPairs++;
       }
     }

     const scorePercent = (correctPairs / totalPairs) * 100;
     return scorePercent;
   };
   ```

4. **Submit Flow**
   - User must place all events before submitting
   - Calculate score based on correct adjacent pairs
   - Show score compared to `successThreshold`
   - Display correct timeline with years
   - Show explanations (descriptions) for each event
   - Allow retry if failed

5. **Results Display**
   - Show user's timeline with correct/incorrect indicators
   - Display actual correct timeline below
   - Highlight differences
   - Show event descriptions as educational content

#### UI Components

```typescript
// Event Card Component
const EventCard = ({ event, onDrag }: EventCardProps) => (
  <div
    draggable
    onDragStart={() => onDrag(event)}
    style={{
      padding: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '0.5rem',
      cursor: 'grab',
      // ... styling
    }}
  >
    {event.image && <img src={event.image} />}
    <h4>{event.title}</h4>
    {isSubmitted && <span>{event.year}</span>}
  </div>
);
```

#### Success Criteria
- Pass: `score >= scene.successThreshold`
- Only allow continue if passed (or unlimited retries)

---

## 2. PrimarySourceScene

### Purpose
Display a historical document (text, image, audio, video) and ask analysis questions.

### Type Definition (Already Exists)
```typescript
interface PrimarySourceScene extends BaseScene {
  type: 'primary-source';
  prompt: string;
  source: PrimarySource;
  questions: AnalysisQuestion[];
}

interface PrimarySource {
  title: string;
  author?: string;
  date?: string;
  type: 'text' | 'image' | 'audio' | 'video';
  content: string; // text or path to media
  citation?: string;
}

interface AnalysisQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'short-answer' | 'highlight';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
}
```

### Implementation Logic

#### State Management
```typescript
const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
const [highlightedRanges, setHighlightedRanges] = useState<TextRange[]>([]);
const [showExplanation, setShowExplanation] = useState(false);
const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
```

#### Core Logic

1. **Layout Structure**
   - Split screen layout on desktop
   - Left side: Source document (scrollable, fixed)
   - Right side: Questions (scrollable)
   - Mobile: Tabs to switch between source and questions

2. **Source Display**
   ```typescript
   const renderSource = () => {
     switch (scene.source.type) {
       case 'text':
         return <div style={{ whiteSpace: 'pre-wrap' }}>{scene.source.content}</div>;
       case 'image':
         const img = assetLoader.getImage(scene.source.content);
         return <img src={img.src} alt={scene.source.title} />;
       case 'audio':
         return <audio controls src={scene.source.content} />;
       case 'video':
         return <video controls src={scene.source.content} />;
     }
   };
   ```

3. **Question Types**

   **Multiple Choice:**
   - Display question text
   - Show option buttons
   - Allow one selection
   - Store answer in state
   - Show correct/incorrect feedback after answering
   - Display explanation

   **Short Answer:**
   - Display text input area
   - Free-form text entry
   - Check against `correctAnswer` (case-insensitive, trimmed)
   - Could implement fuzzy matching for partial credit
   - Show explanation with model answer

   **Highlight (Advanced):**
   - For text sources only
   - User selects/highlights text in the source
   - Check if highlighted text matches `correctAnswer` keywords
   - More complex to implement - could defer to Phase 2

4. **Question Navigation**
   - "Next Question" button (disabled until answered)
   - Progress indicator: "Question X of Y"
   - Progress bar visualization
   - Can go back to review previous questions
   - Lock ability to change answers after revealing explanation

5. **Answer Validation**
   ```typescript
   const checkAnswer = (questionId: string, userAnswer: string | string[]) => {
     const question = scene.questions.find(q => q.id === questionId);
     if (!question) return false;

     if (Array.isArray(question.correctAnswer)) {
       // Multiple correct answers
       return arraysEqual(userAnswer, question.correctAnswer);
     } else {
       // Single answer
       return userAnswer.toString().toLowerCase().trim() ===
              question.correctAnswer.toString().toLowerCase().trim();
     }
   };
   ```

6. **Completion Flow**
   - All questions must be answered
   - Each question shows immediate feedback
   - Final "Complete Analysis" button appears after last question
   - No scoring - educational focus on explanations
   - Save answers to progress (for statistics)

#### UI Components

```typescript
// Source Viewer
const SourceViewer = () => (
  <div style={{
    position: 'sticky',
    top: 0,
    maxHeight: '80vh',
    overflow: 'auto'
  }}>
    <div style={{ marginBottom: '1rem' }}>
      <h3>{scene.source.title}</h3>
      {scene.source.author && <p>By {scene.source.author}</p>}
      {scene.source.date && <p>{scene.source.date}</p>}
    </div>
    {renderSource()}
    {scene.source.citation && (
      <p style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
        {scene.source.citation}
      </p>
    )}
  </div>
);

// Question Card
const QuestionCard = ({ question, index }: QuestionCardProps) => (
  <div>
    <h4>Question {index + 1}</h4>
    <p>{question.question}</p>
    {renderQuestionInput(question)}
    {showExplanation && (
      <div style={{ borderLeft: `4px solid ${theme.secondaryColor}` }}>
        {question.explanation}
      </div>
    )}
  </div>
);
```

---

## 3. CauseEffectScene

### Purpose
Match historical causes with their effects through drag-and-drop or button matching.

### Type Definition (Already Exists)
```typescript
interface CauseEffectScene extends BaseScene {
  type: 'cause-effect';
  prompt: string;
  pairs: CauseEffectPair[];
  distractors?: string[]; // wrong effects to mix in
}

interface CauseEffectPair {
  id: string;
  cause: string;
  effect: string;
  explanation: string;
}
```

### Implementation Logic

#### State Management
```typescript
const [causes, setCauses] = useState<string[]>([]);
const [effects, setEffects] = useState<string[]>([]);
const [matches, setMatches] = useState<Record<string, string>>({}); // causeId -> effectId
const [selectedCause, setSelectedCause] = useState<string | null>(null);
const [isSubmitted, setIsSubmitted] = useState(false);
const [results, setResults] = useState<Record<string, boolean>>({});
```

#### Core Logic

1. **Initialization**
   - Extract causes from `scene.pairs`
   - Extract effects from `scene.pairs` and shuffle
   - Add `distractors` to effects if provided
   - Shuffle both arrays for randomization

2. **Matching Interface (Two Options)**

   **Option A: Drag and Drop**
   - Left column: Causes (fixed order)
   - Right column: Effects (draggable)
   - Drag effect next to its cause
   - Drop zone appears next to each cause

   **Option B: Click Matching (Simpler)**
   - Left column: Causes (clickable)
   - Right column: Effects (clickable)
   - Click cause, then click effect to match
   - Matched pairs show visual connection
   - Click matched pair to unmatch

3. **Visual Feedback**
   ```typescript
   // Before submission
   - Unmatched causes: neutral color
   - Selected cause: highlighted with theme color
   - Matched pairs: subtle connection line or badge

   // After submission
   - Correct matches: green border/background
   - Incorrect matches: red border/background
   - Unmatched: gray
   ```

4. **Validation**
   ```typescript
   const validateMatches = () => {
     const results: Record<string, boolean> = {};

     Object.entries(matches).forEach(([causeId, effectId]) => {
       const pair = scene.pairs.find(p => p.id === causeId);
       // Check if the effect text matches the correct pair's effect
       const isCorrect = pair && effects.find(e => e === pair.effect) === effectId;
       results[causeId] = isCorrect;
     });

     return results;
   };
   ```

5. **Submission Flow**
   - "Submit Matches" button (enabled when at least some matches made)
   - Calculate results
   - Show correct/incorrect for each match
   - Display explanations for all pairs
   - Show correct matches that user missed
   - "Continue" button appears after reviewing

6. **Results Display**
   - Score: X out of Y correct
   - Percentage: (correct / total pairs) * 100
   - List all pairs with:
     - User's match (if any)
     - Correct effect
     - Explanation
     - Visual indicator (✓ or ✗)

#### UI Components

```typescript
// Cause Card
const CauseCard = ({ cause, isSelected, isMatched }: CauseCardProps) => (
  <div
    onClick={() => handleCauseClick(cause.id)}
    style={{
      padding: '1rem',
      backgroundColor: isSelected ? `${theme.secondaryColor}40` : 'rgba(255, 255, 255, 0.1)',
      border: `2px solid ${isSelected ? theme.secondaryColor : 'transparent'}`,
      borderRadius: '0.5rem',
      cursor: 'pointer',
      position: 'relative',
    }}
  >
    <div>{cause.text}</div>
    {isMatched && <div style={{ position: 'absolute', right: '1rem' }}>🔗</div>}
  </div>
);

// Effect Card (similar structure)
```

---

## 4. QuoteAttributionScene

### Purpose
Display famous quotes and identify which character or historical figure said them.

### Type Definition (Already Exists)
```typescript
interface QuoteAttributionScene extends BaseScene {
  type: 'quote-attribution';
  prompt: string;
  quotes: Quote[];
}

interface Quote {
  id: string;
  text: string;
  speaker: string; // character or author
  context: string;
  explanation?: string;
}
```

### Implementation Logic

#### State Management
```typescript
const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
const [answers, setAnswers] = useState<Record<string, string>>({});
const [showResult, setShowResult] = useState(false);
const [allAnswered, setAllAnswered] = useState(false);
const [score, setScore] = useState(0);
```

#### Core Logic

1. **Quote Presentation**
   - Show one quote at a time (flashcard style)
   - Display quote text prominently
   - Extract all unique speakers from quotes
   - Shuffle speaker options for each question
   - Add 1-2 distractor names (random other speakers) if desired

2. **Speaker Options**
   ```typescript
   const getSpeakerOptions = (currentQuote: Quote) => {
     // Get all speakers
     const allSpeakers = scene.quotes.map(q => q.speaker);
     const uniqueSpeakers = [...new Set(allSpeakers)];

     // Ensure correct speaker is included
     const options = [currentQuote.speaker];

     // Add 3-4 other speakers randomly
     const others = uniqueSpeakers
       .filter(s => s !== currentQuote.speaker)
       .sort(() => Math.random() - 0.5)
       .slice(0, 3);

     options.push(...others);

     // Shuffle final options
     return options.sort(() => Math.random() - 0.5);
   };
   ```

3. **Answer Selection**
   - Multiple choice buttons for speakers
   - Visual feedback on selection
   - "Submit Answer" button (or auto-submit on selection)
   - Show immediate feedback (correct/incorrect)
   - Display context and explanation

4. **Feedback Display**
   ```typescript
   const showQuoteResult = (quoteId: string, selectedSpeaker: string) => {
     const quote = scene.quotes.find(q => q.id === quoteId);
     const isCorrect = selectedSpeaker === quote.speaker;

     return (
       <div>
         {isCorrect ? (
           <div style={{ color: '#4ade80' }}>✓ Correct!</div>
         ) : (
           <div style={{ color: '#ef4444' }}>
             ✗ Incorrect. The correct answer was {quote.speaker}
           </div>
         )}
         <div style={{ marginTop: '1rem' }}>
           <strong>Context:</strong> {quote.context}
         </div>
         {quote.explanation && (
           <div style={{ marginTop: '0.5rem' }}>
             {quote.explanation}
           </div>
         )}
       </div>
     );
   };
   ```

5. **Navigation Flow**
   - Show quote
   - User selects speaker
   - Show immediate feedback with context
   - "Next Quote" button
   - Progress indicator: "Quote X of Y"
   - After last quote, show final results

6. **Final Results**
   - Total score: X out of Y correct
   - Percentage
   - List of all quotes with:
     - Quote text
     - Correct speaker
     - User's answer (if wrong)
     - Context
   - "Continue" button to proceed

#### UI Components

```typescript
// Quote Card
const QuoteCard = ({ quote }: QuoteCardProps) => (
  <div style={{
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '2rem',
  }}>
    <div style={{
      fontSize: '1.5rem',
      fontStyle: 'italic',
      marginBottom: '1rem',
      lineHeight: '1.8',
    }}>
      "{quote.text}"
    </div>
    <div style={{ fontSize: '1rem', color: '#aaa' }}>
      Who said this?
    </div>
  </div>
);

// Speaker Options
const SpeakerButtons = ({ options, onSelect, disabled }: SpeakerButtonsProps) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1rem',
  }}>
    {options.map(speaker => (
      <button
        key={speaker}
        onClick={() => onSelect(speaker)}
        disabled={disabled}
        style={{
          padding: '1rem',
          fontSize: '1.125rem',
          // ... button styling
        }}
      >
        {speaker}
      </button>
    ))}
  </div>
);
```

---

## 5. AnachronismScene

### Purpose
Present a historical scenario and identify items that don't belong in that time period.

### Type Definition (Already Exists)
```typescript
interface AnachronismScene extends BaseScene {
  type: 'anachronism';
  prompt: string;
  scenario: string;
  items: AnachronismItem[];
  correctAnswers: string[]; // IDs of items that are anachronisms
}

interface AnachronismItem {
  id: string;
  name: string;
  image?: string;
  description: string;
  explanation: string; // shown after answer
}
```

### Implementation Logic

#### State Management
```typescript
const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
const [isSubmitted, setIsSubmitted] = useState(false);
const [results, setResults] = useState<Record<string, 'correct' | 'incorrect' | 'missed'>>({});
const [score, setScore] = useState<{ correct: number; total: number } | null>(null);
```

#### Core Logic

1. **Scenario Presentation**
   - Display scenario description prominently
   - Make time period very clear (e.g., "Medieval Europe, 1200s")
   - Show instructions: "Click all items that don't belong in this time period"

2. **Item Grid Display**
   ```typescript
   // Layout
   - Grid layout: 3-4 columns on desktop, 2 on mobile
   - Each item as a card with:
     - Image (if available)
     - Name
     - Clickable to toggle selection
   - Selected items get visual highlight (border, background)
   ```

3. **Selection Logic**
   ```typescript
   const toggleItem = (itemId: string) => {
     if (isSubmitted) return; // Can't change after submission

     setSelectedItems(prev => {
       const newSet = new Set(prev);
       if (newSet.has(itemId)) {
         newSet.delete(itemId);
       } else {
         newSet.add(itemId);
       }
       return newSet;
     });
   };
   ```

4. **Validation**
   ```typescript
   const validateAnswers = () => {
     const results: Record<string, 'correct' | 'incorrect' | 'missed'> = {};
     let correctCount = 0;

     // Check selected items
     selectedItems.forEach(itemId => {
       const isAnachronism = scene.correctAnswers.includes(itemId);
       results[itemId] = isAnachronism ? 'correct' : 'incorrect';
       if (isAnachronism) correctCount++;
     });

     // Check missed anachronisms
     scene.correctAnswers.forEach(correctId => {
       if (!selectedItems.has(correctId)) {
         results[correctId] = 'missed';
       }
     });

     return {
       results,
       score: {
         correct: correctCount,
         total: scene.correctAnswers.length,
       },
     };
   };
   ```

5. **Submission Flow**
   - "Submit Answers" button (enabled when at least one item selected)
   - Calculate results
   - Show visual feedback on each item:
     - Correct anachronism (user found): Green border + checkmark
     - Incorrect selection (not an anachronism): Red border + X
     - Missed anachronism: Yellow/orange border + missed indicator
     - Correct non-anachronism (not selected): No highlight
   - Display score and percentage

6. **Explanation Display**
   - After submission, show explanations for:
     - All anachronisms (why they don't belong)
     - All correctly placed items (why they DO belong)
   - Expandable details for each item
   - "Continue" button to proceed

#### UI Components

```typescript
// Item Card
const ItemCard = ({
  item,
  isSelected,
  result,
  onClick
}: ItemCardProps) => {
  const getBorderColor = () => {
    if (!isSubmitted) {
      return isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.2)';
    }
    switch (result) {
      case 'correct': return '#4ade80';
      case 'incorrect': return '#ef4444';
      case 'missed': return '#fb923c';
      default: return 'rgba(255, 255, 255, 0.1)';
    }
  };

  return (
    <div
      onClick={onClick}
      style={{
        padding: '1rem',
        border: `3px solid ${getBorderColor()}`,
        borderRadius: '0.75rem',
        cursor: isSubmitted ? 'default' : 'pointer',
        backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
        transition: 'all 0.2s',
        position: 'relative',
      }}
    >
      {item.image && (
        <div style={{ marginBottom: '0.75rem' }}>
          <img
            src={assetLoader.getImage(item.image).src}
            alt={item.name}
            style={{
              width: '100%',
              height: '120px',
              objectFit: 'cover',
              borderRadius: '0.5rem',
            }}
          />
        </div>
      )}
      <div style={{ fontWeight: 'bold', textAlign: 'center' }}>
        {item.name}
      </div>
      {isSubmitted && result && (
        <div style={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          backgroundColor: getBorderColor(),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '1.25rem',
        }}>
          {result === 'correct' && '✓'}
          {result === 'incorrect' && '✗'}
          {result === 'missed' && '!'}
        </div>
      )}
    </div>
  );
};

// Explanation Modal/Section
const ExplanationsSection = () => (
  <div style={{ marginTop: '2rem' }}>
    <h3>Explanations</h3>
    {scene.items.map(item => {
      const isAnachronism = scene.correctAnswers.includes(item.id);
      return (
        <details key={item.id} style={{ marginBottom: '1rem' }}>
          <summary style={{
            cursor: 'pointer',
            padding: '0.75rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '0.5rem',
          }}>
            {item.name} {isAnachronism ? '(Anachronism)' : '(Belongs)'}
          </summary>
          <div style={{ padding: '1rem' }}>
            <p>{item.description}</p>
            <p style={{
              marginTop: '0.5rem',
              fontStyle: 'italic',
              borderLeft: `4px solid ${theme.secondaryColor}`,
              paddingLeft: '1rem',
            }}>
              {item.explanation}
            </p>
          </div>
        </details>
      );
    })}
  </div>
);
```

---

## 6. CustomMiniGameScene (Extensible)

### Purpose
Provide a registry system for custom mini-games that don't fit the predefined types.

### Type Definition (Already Exists)
```typescript
interface CustomMiniGameScene extends BaseScene {
  type: 'custom-mini-game';
  gameType: string; // identifier for custom game component
  config: Record<string, unknown>; // flexible config for custom games
}
```

### Implementation Logic

#### Registry Pattern

```typescript
// src/components/mini-games/customGameRegistry.ts
import { ComponentType } from 'react';

export interface CustomGameProps {
  config: Record<string, unknown>;
  theme: AdventureTheme;
  onComplete: (result?: any) => void;
  onBack: () => void;
  canGoBack: boolean;
}

type CustomGameComponent = ComponentType<CustomGameProps>;

class CustomGameRegistry {
  private games: Map<string, CustomGameComponent> = new Map();

  register(gameType: string, component: CustomGameComponent): void {
    this.games.set(gameType, component);
  }

  get(gameType: string): CustomGameComponent | undefined {
    return this.games.get(gameType);
  }

  has(gameType: string): boolean {
    return this.games.has(gameType);
  }
}

export const customGameRegistry = new CustomGameRegistry();
```

#### CustomMiniGameScene Component

```typescript
// src/components/mini-games/CustomMiniGameScene.tsx
import { customGameRegistry } from './customGameRegistry';

interface CustomMiniGameSceneProps {
  scene: CustomMiniGameSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const CustomMiniGameScene: React.FC<CustomMiniGameSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const GameComponent = customGameRegistry.get(scene.gameType);

  if (!GameComponent) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primaryColor,
        color: 'white',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Custom game type "{scene.gameType}" not found</h2>
          <p>Please register this game type before using it.</p>
          <button onClick={onComplete}>Skip</button>
        </div>
      </div>
    );
  }

  return (
    <GameComponent
      config={scene.config}
      theme={theme}
      onComplete={onComplete}
      onBack={onBack}
      canGoBack={canGoBack}
    />
  );
};

export default CustomMiniGameScene;
```

#### Example Custom Game

```typescript
// src/components/mini-games/custom/MemoryMatchGame.tsx
import { CustomGameProps } from '../customGameRegistry';

const MemoryMatchGame: React.FC<CustomGameProps> = ({
  config,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  // Access config
  const cards = config.cards as string[];
  const timeLimit = config.timeLimit as number;

  // Implement memory matching logic
  // ...

  return (
    <div>
      {/* Memory game UI */}
    </div>
  );
};

// Register the game
customGameRegistry.register('memory-match', MemoryMatchGame);

export default MemoryMatchGame;
```

#### Usage in Adventure Definition

```typescript
{
  id: 'custom-1',
  type: 'custom-mini-game',
  gameType: 'memory-match',
  config: {
    cards: ['card1.jpg', 'card2.jpg', ...],
    timeLimit: 120,
    pairsToMatch: 6,
  },
  learningPoints: [...]
}
```

---

## Integration Checklist

For each new scene type implementation:

### 1. Create Component File
- [ ] Create `src/components/mini-games/[SceneType].tsx`
- [ ] Import necessary types from `src/types/adventure.ts`
- [ ] Import `assetLoader` for images
- [ ] Define component props interface
- [ ] Implement component with standard structure

### 2. Update SceneRenderer
- [ ] Import new component in `SceneRenderer.tsx`
- [ ] Add case statement for scene type
- [ ] Pass standard props
- [ ] Test scene switching

### 3. Add to TypeScript Exports
- [ ] Export component from `src/components/mini-games/index.ts` (if exists)

### 4. Styling Checklist
- [ ] Use theme colors consistently
- [ ] Responsive layout (mobile + desktop)
- [ ] Dark overlay background
- [ ] Back button (positioned, low opacity)
- [ ] Learning points section
- [ ] Smooth transitions and animations
- [ ] Hover effects
- [ ] Focus states for accessibility

### 5. Asset Integration
- [ ] Use `assetLoader.getImage()` for all images
- [ ] Handle loading states gracefully
- [ ] Support optional images (graceful degradation)

### 6. State Management
- [ ] Use React hooks (useState, useEffect)
- [ ] Manage user interactions
- [ ] Track completion state
- [ ] Save results to progress (if needed)

### 7. Testing
- [ ] Test with sample data
- [ ] Test edge cases (empty arrays, missing images, etc.)
- [ ] Test navigation (back button)
- [ ] Test on mobile viewport
- [ ] Test keyboard navigation

---

## Recommended Implementation Order

Based on complexity and utility:

1. **QuoteAttributionScene** - Simplest, good starting point
2. **TimelineGameScene** - Moderate complexity, high educational value
3. **CauseEffectScene** - Similar to timeline but with matching
4. **PrimarySourceScene** - More complex, multiple question types
5. **AnachronismScene** - Moderate complexity, unique interaction
6. **CustomMiniGameScene** - Infrastructure piece, implement last

---

## Common Helper Functions

These can be shared across scene types:

```typescript
// src/utils/sceneHelpers.ts

export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const calculateScore = (correct: number, total: number): number => {
  return Math.round((correct / total) * 100);
};

export const arraysEqual = <T>(a: T[], b: T[]): boolean => {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
};

export const normalizeString = (str: string): string => {
  return str.toLowerCase().trim();
};
```

---

## Progress Tracking Integration

All scene types should save relevant data to `AdventureProgress`:

```typescript
// In onComplete callback
const saveSceneProgress = (sceneId: string, data?: any) => {
  // Save to progress manager
  progressManager.completeScene(sceneId, {
    completedAt: new Date(),
    score: data?.score,
    answers: data?.answers,
    // ... other relevant data
  });
};
```

---

## Accessibility Considerations

All scene types should implement:

- **Keyboard Navigation**: Tab through interactive elements
- **ARIA Labels**: Proper labels for buttons and interactive elements
- **Focus Indicators**: Visible focus states
- **Color Contrast**: Meet WCAG AA standards
- **Screen Reader Support**: Semantic HTML and ARIA attributes
- **Alternative Text**: For all images

Example:
```typescript
<button
  onClick={handleClick}
  aria-label="Select this option"
  onFocus={handleFocus}
  onBlur={handleBlur}
>
  Option Text
</button>
```

---

## Performance Considerations

- **Lazy Loading**: Only load scene components when needed
- **Image Optimization**: Use `assetLoader` which handles caching
- **Debouncing**: For drag/drop events
- **Memoization**: Use `React.memo` for repeated components
- **Virtual Scrolling**: For long lists (if needed)

---

## Future Enhancements

Once basic implementations are complete, consider:

1. **Sound Effects**: Add audio feedback for correct/incorrect answers
2. **Animations**: Entry/exit animations for elements
3. **Progress Persistence**: Save in-progress state for complex scenes
4. **Hints System**: Add optional hints for difficult questions
5. **Adaptive Difficulty**: Adjust based on user performance
6. **Multiplayer Mode**: Compete on scores (future feature)
7. **Analytics**: Track time spent, attempts, patterns

---

## Example Test Data

For each scene type, create test data:

```typescript
// Example: TimelineGameScene test data
const testTimelineScene: TimelineGameScene = {
  id: 'test-timeline-1',
  type: 'timeline-game',
  prompt: 'Order these events from Arabian Nights in chronological order',
  timelineEvents: [
    { id: '1', title: 'First Night', year: 1, description: '...', image: 'night1.jpg' },
    { id: '2', title: 'Aladdin', year: 5, description: '...', image: 'aladdin.jpg' },
    { id: '3', title: 'Sinbad', year: 10, description: '...', image: 'sinbad.jpg' },
  ],
  successThreshold: 70,
  learningPoints: [],
  backgroundImage: 'bg.jpg',
};
```

---

## Conclusion

This plan provides detailed logic and structure for implementing all missing scene types. Each implementation should:

1. Follow the established patterns from existing scenes
2. Maintain consistent styling and UX
3. Integrate seamlessly with the existing system
4. Prioritize educational value and user engagement
5. Handle edge cases gracefully
6. Support accessibility standards

The modular nature of the codebase makes it straightforward to add these scene types incrementally, test them independently, and integrate them into adventures as needed.
