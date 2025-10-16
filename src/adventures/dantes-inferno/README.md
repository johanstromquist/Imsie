# Dante's Inferno Adventure

An educational interactive adaptation of Dante Alighieri's *Inferno* (first part of the *Divine Comedy*), exploring medieval literature, theology, philosophy, and 14th-century Florence.

## Adventure Overview

**Target Audience**: High school and college students, adult learners interested in classical literature

**Estimated Time**: 180-240 minutes (3-4 hours)

**Educational Focus**:
- Medieval allegorical literature
- Christian theology and philosophy
- Historical context of Renaissance Italy
- Literary devices and epic poetry
- Cultural influence on Western literature

## File Structure

```
dantes-inferno/
├── README.md                           # This file
├── ADVENTURE_OUTLINE.md                # Detailed planning document
├── dantes-inferno_assets.md            # Asset requirements and documentation
├── index.ts                            # Main adventure export
├── theme.ts                            # Theme, colors, music
├── chapters/
│   ├── prologue-dark-wood.ts          # Prologue chapter
│   ├── chapter-1-limbo.ts             # Chapter 1: First Circle
│   ├── chapter-2-incontinence.ts      # Chapter 2: Circles II-V
│   ├── chapter-3-city-of-dis.ts       # Chapter 3: Circles VI-VII
│   ├── chapter-4-malebolge.ts         # Chapter 4: Circle VIII
│   └── chapter-5-cocytus.ts           # Chapter 5: Circle IX
└── quizzes/
    ├── prologue-quiz.ts               # Prologue quiz
    ├── chapter-1-quiz.ts              # Chapter quizzes
    ├── chapter-2-quiz.ts
    ├── chapter-3-quiz.ts
    ├── chapter-4-quiz.ts
    ├── chapter-5-quiz.ts
    └── final-quiz.ts                  # Comprehensive final quiz
```

## Chapter Structure

### Prologue: The Dark Wood
- **Duration**: 25-30 minutes
- **Scenes**: 8-10
- **Focus**: Introduction to allegory, Dante's context, meeting Virgil

### Chapter 1: Limbo & The Virtuous Pagans
- **Duration**: 30-35 minutes
- **Scenes**: 10-12
- **Focus**: Medieval theology, classical influences, contrapasso

### Chapter 2: Circles of Incontinence (II-V)
- **Duration**: 35-40 minutes
- **Scenes**: 12-15
- **Focus**: Seven deadly sins, Paolo & Francesca, medieval morality

### Chapter 3: The City of Dis (VI-VII)
- **Duration**: 30-35 minutes
- **Scenes**: 10-12
- **Focus**: Florentine politics, heresy, violence

### Chapter 4: Fraud - Malebolge (VIII)
- **Duration**: 40-45 minutes
- **Scenes**: 15-18
- **Focus**: Ten types of fraud, political satire, Ulysses

### Chapter 5: Treachery - Cocytus & Satan (IX)
- **Duration**: 35-40 minutes
- **Scenes**: 12-15
- **Focus**: Ultimate betrayal, Satan, cosmic structure, exit from Hell

## Implementation Status

- [x] File structure created
- [x] Theme defined
- [x] Adventure outline complete
- [x] Asset requirements documented
- [x] Chapter stub files created
- [x] Quiz stub files created
- [ ] Prologue implementation
- [ ] Chapter 1 implementation
- [ ] Chapter 2 implementation
- [ ] Chapter 3 implementation
- [ ] Chapter 4 implementation
- [ ] Chapter 5 implementation
- [ ] Final quiz implementation
- [ ] Asset generation
- [ ] Testing and polish

## Development Workflow

### Phase 1: Foundation (Current)
1. Create file structure ✓
2. Define theme and colors ✓
3. Write adventure outline ✓
4. Document asset requirements ✓

### Phase 2: Content Creation
1. Implement Prologue chapter (scenes, learning points)
2. Create Prologue quiz
3. Implement Chapter 1
4. Create Chapter 1 quiz
5. Continue with remaining chapters sequentially

### Phase 3: Asset Generation
1. Generate background images (Midjourney/DALL-E)
2. Generate character portraits
3. Generate scene illustrations
4. Create maps for exploration scenes
5. Source or commission music

### Phase 4: Testing & Polish
1. Playtest entire adventure
2. Refine pacing and difficulty
3. Add inline annotations
4. Accessibility review
5. Final polish

## Scene Type Strategy

### Distribution
- **Narrative scenes**: 55-60% (storytelling and context)
- **Interactive scenes**: 40-45% (engagement and learning)

### Scene Types Used
- **Narrative**: Primary storytelling, context, character development
- **Dialogue**: Conversations with Virgil, sinners, and other characters
- **Map Exploration**: Navigate circles, explore Hell's structure
- **Primary Source**: Analyze original text excerpts and historical documents
- **Decision**: Understand moral choices and consequences
- **Quote Attribution**: Identify speakers of famous lines
- **Timeline Game**: Order events, understand structure
- **Cause-Effect**: Match sins to punishments (contrapasso)
- **Anachronism**: Compare medieval and modern views
- **Custom Mini-Game**: Special mechanics for complex content

## Educational Approach

### Learning Point Categories
- **Historical Context**: Dante's life, Florence, medieval Italy
- **Literary Technique**: Allegory, symbolism, terza rima, contrapasso
- **Character Analysis**: Dante, Virgil, famous sinners
- **Thematic Analysis**: Sin, justice, redemption, political critique
- **Cultural Context**: Medieval theology, classical influence
- **Plot Structure**: Epic journey, descent narrative

### Assessment Strategy
- Chapter quizzes test immediate comprehension
- Final quiz tests synthesis and higher-order thinking
- Target passing score: 70-75%
- Mix of recall, comprehension, and analysis questions
- Detailed explanations for educational value

## Key Themes

1. **Allegory**: The literal journey represents spiritual/moral journey
2. **Contrapasso**: Punishments fit the crimes
3. **Justice**: Divine justice vs. earthly corruption
4. **Redemption**: The possibility of salvation through understanding
5. **Classical vs. Christian**: Integration of pagan wisdom with Christian theology
6. **Political Commentary**: Critique of contemporary Florence

## Unique Features

### Inline Annotations
Extensive use of tooltips to explain:
- Medieval Italian terms
- Historical references
- Theological concepts
- Classical allusions

### Primary Source Integration
- Original Italian text excerpts (with translation)
- Medieval manuscript illuminations
- Historical documents about Florence
- Classical texts referenced by Dante

### Maps and Visualizations
- Interactive maps of each circle
- Cross-section diagram of all Hell
- Visual guides to maintain orientation

## Related Documentation

- **Adventure Outline**: `ADVENTURE_OUTLINE.md` - Detailed planning
- **Asset Documentation**: `dantes-inferno_assets.md` - All visual and audio assets
- **Scene Types Reference**: `/docs/SCENE_TYPES_REFERENCE.md` - Platform scene types
- **Chapter Authoring Guide**: `/docs/CHAPTER_AUTHORING_GUIDE.md` - How to create chapters
- **Inline Annotations**: `/docs/FEATURE_INLINE_ANNOTATIONS.md` - Tooltip system

## Credits

**Original Work**: Dante Alighieri, *Inferno* (c. 1308-1320)

**Visual Inspiration**:
- Gustave Doré's engravings (1861-1868)
- Medieval manuscript illuminations

**Educational Adaptation**: Imsie Platform Team

---

**Status**: Planning complete, ready for implementation
**Version**: 1.0 (Initial structure)
**Last Updated**: October 2025
