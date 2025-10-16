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
- [x] Chapter-to-chapter navigation with flexible prerequisite system
  - Sequential (one-to-one) - default
  - Branching (one-to-many)
  - Merging (many-to-one)
  - Complex dependencies (many-to-many)
- [x] Quiz system (QuizRenderer, QuizQuestion, QuizResults)
- [x] Decision scene type (branching choices with consequences)
- [x] Dialogue scene type (conversation trees)
- [x] Map exploration scene type (interactive maps)

## Phase 1: Core Interactive Systems 🎮

### A. Quiz System ✅ COMPLETE
**Status**: Fully implemented and functional
**Location**: `src/components/quiz/`

Components built:
- [x] `QuizRenderer.tsx` - Main quiz component
  - Display quiz title and description
  - Question navigation
  - Progress indicator (Question X of Y)
  - Progress bar visualization
  - Score tracking

- [x] `QuizQuestion.tsx` - Individual question renderer
  - Multiple choice questions
  - True/false questions
  - Short answer questions
  - Matching questions
  - Visual feedback (correct/incorrect)

- [x] `QuizResults.tsx` - Quiz completion screen
  - Final score display
  - Percentage correct
  - Pass/fail indication
  - Question-by-question expandable review
  - Statistics grid
  - Retry button (if allowed)
  - Continue to next chapter button

**Integration Points**:
- Chapter end quiz (after scene 9)
- Final adventure quiz
- Score saving to progress
- Statistics updates

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

## Recommended Build Order 🏗️

### Immediate (Do First)
1. ✅ **Quiz System** - Needed to complete Chapter 1 ✅ COMPLETE
2. ✅ **Quiz Results Screen** - Show scores and feedback ✅ COMPLETE
3. ✅ **Chapter-to-Chapter Navigation** - Connect chapters ✅ COMPLETE

### Short Term (Next 2-3 weeks)
4. ✅ **Decision Scene Type** - Most useful for storytelling ✅ COMPLETE
5. ✅ **Dialogue Scene Type** - Common in adventures ✅ COMPLETE
6. ✅ **Map Exploration Scene Type** ✅ COMPLETE
7. **Chapter 2: The Merchant and the Jinni**
8. **Generate assets for Chapter 2**

### Medium Term (Next 1-2 months)
9. **Achievement System** - Adds replay value
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
