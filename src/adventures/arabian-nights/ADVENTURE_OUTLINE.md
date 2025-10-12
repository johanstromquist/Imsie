# Imsie - Arabian Nights Adventure Outline

## Current Status ✅

### Completed Components
- [x] Chapter 1: The Tale of Scheherazade (9 narrative scenes)
- [x] All Chapter 1 backgrounds and scene illustrations (Midjourney assets)
- [x] Music player with playlist (4 tracks, mute/unmute controls)
- [x] Scene navigation (forward/back)
- [x] Progress tracking (IndexedDB)
- [x] Export/Import progress
- [x] Restart adventure functionality
- [x] Asset caching system
- [x] Narrative scene type implementation

## Phase 1: Core Interactive Systems 🎮

### A. Quiz System (HIGH PRIORITY)
**Status**: Quiz data exists but no UI implementation
**Location**: `src/components/quiz/`

Components to build:
- [ ] `QuizRenderer.tsx` - Main quiz component
  - Display quiz title and description
  - Question navigation
  - Progress indicator (Question X of Y)
  - Timer display (if timeLimit specified)
  - Score tracking

- [ ] `QuizQuestion.tsx` - Individual question renderer
  - Multiple choice questions
  - True/false questions
  - Short answer questions
  - Matching questions
  - Visual feedback (correct/incorrect)

- [ ] `QuizResults.tsx` - Quiz completion screen
  - Final score display
  - Percentage correct
  - Pass/fail indication
  - Question-by-question review
  - Learning points recap
  - Retry button (if allowed)
  - Continue to next chapter button

**Integration Points**:
- Chapter end quiz (after scene 9)
- Final adventure quiz
- Score saving to progress
- Statistics updates

### B. Additional Scene Types (MEDIUM PRIORITY)
**Status**: Types defined, implementations needed
**Location**: `src/components/mini-games/`

Currently implemented:
- [x] NarrativeScene

Need implementation:
- [ ] **DecisionScene** - Branching story choices
  - Display prompt and context
  - Show 2-4 choice buttons
  - Optional time limit with countdown
  - Show consequence/feedback after choice
  - Branch to different scenes based on choice
  - Track choice in progress

- [ ] **TimelineGameScene** - Order historical events
  - Display shuffled events
  - Drag-and-drop interface
  - Submit and check order
  - Show correct timeline with explanations
  - Calculate score based on accuracy

- [ ] **MapExplorationScene** - Interactive map with clickable locations
  - Display map image
  - Clickable hotspots at specific coordinates
  - Reveal content when location is clicked
  - Track visited locations
  - Require visiting certain locations to continue

- [ ] **PrimarySourceScene** - Analyze historical documents
  - Display source (text, image, audio, video)
  - Show analysis questions
  - Multiple question types
  - Reveal explanations after answering

- [ ] **DialogueScene** - Conversation tree with characters
  - Character portrait and name
  - Display dialogue text
  - Player response options
  - Navigate through dialogue tree
  - Conditional responses based on previous choices

- [ ] **CauseEffectScene** - Match causes with effects
  - Display shuffled causes and effects
  - Drag-and-drop or button matching
  - Show explanations for correct pairs
  - Optional distractors

- [ ] **QuoteAttributionScene** - Identify who said what
  - Display quotes one at a time
  - Multiple choice character selection
  - Show context and explanation

- [ ] **AnachronismScene** - Find items that don't belong
  - Display scenario description
  - Grid of items/images
  - Click to mark as anachronism
  - Reveal explanations for each item

- [ ] **CustomMiniGameScene** - Extensible for unique games
  - Registry system for custom game components
  - Pass config to custom game
  - Standard interface for completion

## Phase 2: Additional Arabian Nights Content 📚

### Chapter 2: The Merchant and the Jinni
**Status**: Not started
**Estimated scenes**: 8-10

Story outline:
1. Introduction to the tale-within-a-tale structure
2. Merchant's journey and accident
3. Jinni's appearance and demand for vengeance
4. Merchant's plea for time
5. First sheikh's story (The Gazelle)
6. Second sheikh's story (The Two Black Dogs)
7. Third sheikh's story (The Mule and the Woman)
8. Jinni's decision and moral lesson
9. Literary analysis: Frame narrative technique

**Scene types to use**:
- Narrative scenes (core story)
- Decision scene (Merchant's choices)
- Dialogue scene (Merchant and Jinni)
- Primary source scene (Analyzing the moral lessons)
- End quiz

**Assets needed**:
- Background: Desert oasis
- Background: Magical jinni realm
- Scene: Merchant portrait
- Scene: Jinni appearance
- Scene: The three sheikhs
- Scene: Transformation scenes

### Chapter 3: Aladdin and the Magic Lamp
**Status**: Not started
**Estimated scenes**: 12-15

Story outline:
1. Aladdin's humble beginnings
2. The sorcerer's arrival
3. Journey to the cave
4. Discovery of the lamp
5. First encounter with the genie
6. Aladdin's transformation
7. Meeting the princess
8. The sorcerer's return
9. Final confrontation
10. Themes: Ambition, identity, social class

**Scene types to use**:
- Narrative scenes
- Decision scenes (key plot choices)
- Map exploration (the cave)
- Dialogue scene (Aladdin and Genie)
- Timeline game (key events)
- End quiz

**Assets needed**:
- Background: Aladdin's home
- Background: The magical cave
- Background: Palace
- Scene: Aladdin before/after
- Scene: The magic lamp
- Scene: The genie
- Scene: The princess
- Scene: The sorcerer

### Chapter 4: Ali Baba and the Forty Thieves
**Status**: Not started
**Estimated scenes**: 10-12

Story outline:
1. Ali Baba discovers the thieves
2. "Open Sesame" - entering the cave
3. Sharing the secret with Kasim
4. Kasim's greed and fate
5. The thieves' revenge plot
6. Morgiana's cleverness
7. The oil jars deception
8. The final confrontation
9. Themes: Greed, cleverness, loyalty

**Scene types to use**:
- Narrative scenes
- Decision scene (Moral choices)
- Anachronism scene (Verify historical details)
- Map exploration (The cave)
- Cause-effect scene (Consequences of greed)
- End quiz

**Assets needed**:
- Background: Forest/mountain exterior
- Background: Treasure cave
- Background: Ali Baba's house
- Scene: Ali Baba
- Scene: Kasim
- Scene: Morgiana
- Scene: Thieves
- Scene: Treasure

### Chapter 5: Sinbad's Voyages (Selected)
**Status**: Not started
**Estimated scenes**: 10-12

Story outline:
1. Sinbad's introduction
2. First voyage: The living island (whale)
3. Second voyage: The Roc's egg
4. Third voyage: The cannibals and the giant
5. Themes of adventure and travel literature
6. Islamic Golden Age maritime trade context
7. Influence on later adventure literature

**Scene types to use**:
- Narrative scenes
- Map exploration (Sinbad's travels)
- Timeline game (Order the voyages)
- Primary source scene (Historical trade routes)
- Quote attribution (Sinbad's famous lines)
- End quiz

**Assets needed**:
- Background: Ship at sea
- Background: Various exotic locations
- Scene: Sinbad portrait
- Scene: The Roc
- Scene: Magical creatures
- Scene: Trade goods
- Map: Medieval maritime trade routes

### Final Quiz
**Status**: Defined but incomplete
**Questions needed**: 15-20 comprehensive questions

Topics to cover:
- Frame narrative and literary structure
- Character development and themes
- Cultural and historical context
- Influence on world literature
- Moral lessons across stories
- Literary devices and techniques

## Phase 3: Platform Features 🛠️

### A. Achievement System
**Status**: Data structure exists, no implementation
**Location**: `src/components/achievements/`

Components to build:
- [ ] Achievement definitions for Arabian Nights
  - Complete Chapter 1
  - Perfect quiz score
  - Complete all chapters
  - Find all learning points
  - Make specific story choices

- [ ] Achievement notification system
  - Toast/modal when achievement unlocked
  - Sound effect (optional)
  - Achievement gallery/collection view

- [ ] Achievement progress tracking
  - Integrate with progress manager
  - Check conditions after key events
  - Save unlock timestamps

### B. Enhanced Statistics
**Status**: Basic stats exist, could be expanded

Additional metrics:
- [ ] Reading speed / time per scene
- [ ] Quiz performance breakdown by question type
- [ ] Most/least visited scenes
- [ ] Choice patterns and popular paths
- [ ] Learning style indicators

### C. Settings and Preferences
**Status**: Not implemented
**Location**: `src/components/settings/`

Settings to add:
- [ ] Music volume control
- [ ] Sound effects toggle
- [ ] Text size adjustment
- [ ] Reading speed preferences
- [ ] Auto-advance scenes (optional)
- [ ] High contrast mode
- [ ] Language selection (future)

### D. Hints and Help System
**Status**: Not implemented

Features to add:
- [ ] Context-sensitive hints
- [ ] Learning point tooltips
- [ ] Glossary of terms
- [ ] Historical context pop-ups
- [ ] Optional "learn more" links

## Phase 4: Additional Adventures 🌍

### Dante's Inferno
**Status**: Mentioned but not started

Chapters outline:
1. Dark Wood and the Journey Begins
2. The Vestibule and River Acheron
3. Circles of Hell (selected)
4. Notable sinners and their punishments
5. Literary and theological themes
6. Medieval worldview and allegory
7. Influence on Western literature

**Unique features**:
- Visual representation of Hell's structure
- Character matching to their sins/circles
- Medieval symbolism decoder
- Parallel text (English/Italian excerpts)
- Art history connections (Botticelli, Doré)

### Other Adventure Ideas
- **Shakespeare's Plays** - Choose one play for deep dive
- **Greek Mythology** - The Odyssey or selected myths
- **American Literature** - Mark Twain or Poe
- **World History** - Renaissance, Age of Exploration, etc.

## Phase 5: Polish and Enhancement ✨

### Visual Improvements
- [ ] Transitions between scenes
- [ ] Loading animations
- [ ] Particle effects (optional)
- [ ] Better hover states
- [ ] Animation on achievement unlocks

### Accessibility
- [ ] Screen reader support
- [ ] Keyboard navigation
- [ ] ARIA labels
- [ ] Color contrast compliance
- [ ] Focus indicators

### Performance
- [ ] Code splitting by adventure
- [ ] Lazy load scene components
- [ ] Image optimization
- [ ] Service worker for offline support

### Deployment
- [ ] GitHub Pages deployment (already configured)
- [ ] Custom domain setup (optional)
- [ ] Analytics integration (optional)
- [ ] Error tracking (Sentry, etc.)

## Recommended Build Order 🏗️

### Immediate (Do First)
1. **Quiz System** - Needed to complete Chapter 1
2. **Quiz Results Screen** - Show scores and feedback
3. **Chapter-to-Chapter Navigation** - Connect chapters

### Short Term (Next 2-3 weeks)
4. **Decision Scene Type** - Most useful for storytelling
5. **Dialogue Scene Type** - Common in adventures
6. **Chapter 2: The Merchant and the Jinni**
7. **Generate assets for Chapter 2**

### Medium Term (Next 1-2 months)
8. **Achievement System** - Adds replay value
9. **Map Exploration Scene Type**
10. **Timeline Game Scene Type**
11. **Chapter 3: Aladdin**
12. **Settings/Preferences**

### Long Term (2-3+ months)
13. **Remaining scene types**
14. **Chapter 4 & 5**
15. **Final quiz completion**
16. **Second adventure (Dante's Inferno)**
17. **Advanced features and polish**

## Parallel Work Opportunities 👥

These can be worked on simultaneously:

**Track A: Content Creation**
- Writing new chapter stories
- Generating assets in Midjourney
- Creating quiz questions
- Defining learning objectives

**Track B: Scene Type Development**
- Implementing DecisionScene
- Implementing DialogueScene
- Implementing MapExplorationScene
- Implementing other mini-game types

**Track C: System Features**
- Building quiz UI system
- Achievement system
- Settings and preferences
- Statistics and analytics

**Track D: Polish**
- Visual improvements
- Accessibility enhancements
- Performance optimization
- Testing and bug fixes

## Notes 📝

- Each chapter should take 30-45 minutes to complete
- Mix of scene types keeps it engaging
- Quiz questions should test comprehension, not just recall
- Learning points should be clear and educational
- Assets should maintain consistent style (Nimona-inspired)
- Music should continue to loop through entire adventure
