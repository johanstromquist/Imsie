# Appendices - Quick Reference Guide

**Version:** 1.0
**Last Updated:** October 2025

This reference guide provides quick-access tables, principles, and tools to support adventure authoring for the Imsie platform.

---

## Table of Contents

1. [Scene Type Quick Reference](#appendix-a-scene-type-quick-reference)
2. [Bloom's Taxonomy for Learning Objectives](#appendix-b-blooms-taxonomy-for-learning-objectives)
3. [Common Pitfalls to Avoid](#appendix-c-common-pitfalls-to-avoid)
4. [Educational Design Principles](#appendix-d-educational-design-principles)
5. [Asset Generation Tools](#appendix-e-asset-generation-tools)
6. [Glossary](#appendix-f-glossary)

---

## Appendix A: Scene Type Quick Reference

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

**Selection Guidelines:**

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

**See:** `docs/SCENE_TYPES_REFERENCE.md` for complete documentation with code examples.

---

## Appendix B: Bloom's Taxonomy for Learning Objectives

Use action verbs aligned with cognitive levels when writing learning objectives:

| Level | Action Verbs | Example Objective |
|-------|-------------|------------------|
| **Remember** | Identify, List, Name, Recall | "Identify key characters in Arabian Nights" |
| **Understand** | Describe, Explain, Summarize | "Explain the frame narrative structure" |
| **Apply** | Demonstrate, Illustrate, Solve | "Demonstrate understanding of cause-effect relationships" |
| **Analyze** | Compare, Contrast, Examine | "Analyze Scheherazade's use of storytelling" |
| **Evaluate** | Assess, Critique, Judge | "Evaluate the effectiveness of nested narratives" |
| **Create** | Compose, Design, Develop | "Create an original story using frame narrative" |

### Recommended Distribution

Distribute learning objectives across cognitive levels for balanced learning:

- **40% Understand/Remember** - Foundation knowledge
- **40% Apply/Analyze** - Critical thinking
- **20% Evaluate/Create** - Higher-order synthesis

### Complete Action Verb List by Level

**Remember:**
- Define, Duplicate, List, Memorize, Recall, Repeat, Reproduce, State

**Understand:**
- Classify, Describe, Discuss, Explain, Express, Identify, Indicate, Locate, Recognize, Report, Restate, Review, Select, Translate

**Apply:**
- Apply, Choose, Demonstrate, Dramatize, Employ, Illustrate, Interpret, Operate, Practice, Schedule, Sketch, Solve, Use, Write

**Analyze:**
- Analyze, Appraise, Calculate, Categorize, Compare, Contrast, Criticize, Differentiate, Discriminate, Distinguish, Examine, Experiment, Question, Test

**Evaluate:**
- Appraise, Argue, Assess, Attach, Choose, Compare, Defend, Estimate, Judge, Predict, Rate, Score, Select, Support, Value

**Create:**
- Assemble, Construct, Create, Design, Develop, Formulate, Author, Investigate, Compose, Plan, Prepare, Propose, Set up

---

## Appendix C: Common Pitfalls to Avoid

### Content Pitfalls

- **Too much text per scene** (>500 words)
  - *Fix:* Break into multiple scenes or use more concise language

- **Unclear learning objectives**
  - *Fix:* Use specific action verbs from Bloom's Taxonomy

- **No connection between scenes and quiz**
  - *Fix:* Use `relatedLearningPoints` in quiz questions

- **Inconsistent tone or style**
  - *Fix:* Establish style guide, review all content in one pass

- **Assuming prior knowledge without teaching it**
  - *Fix:* Include context in learning points or early narrative scenes

### Technical Pitfalls

- **Duplicate IDs across scenes**
  - *Fix:* Use naming convention like `scene-ch1-1-opening`, `scene-ch2-3-decision`

- **Broken asset paths**
  - *Fix:* Use absolute paths from `/assets/`, verify files exist

- **Missing learning points**
  - *Fix:* Every scene must have at least 1 learning point

- **Wrong question types in quizzes**
  - *Fix:* Use `short-answer` only for exact words; `self-assessment` for reasoning

- **No quiz triggers**
  - *Fix:* Add `events.onExit` with quiz trigger to final scene

### Design Pitfalls

- **Too many consecutive narrative scenes**
  - *Fix:* Alternate narrative with interactive scenes (max 2-3 narrative in a row)

- **Decisions without meaningful consequences**
  - *Fix:* Vary outcomes and learning points based on choices

- **Interactive scenes without clear instructions**
  - *Fix:* Add explicit `instructions` or `context` fields

- **No variety in scene types**
  - *Fix:* Use 4-6 different scene types per chapter

- **Poor pacing** (too fast or too slow)
  - *Fix:* Aim for 30-45 minutes per chapter, test with real users

---

## Appendix D: Educational Design Principles

### Cognitive Load Theory

**Principle:** Limit the amount of information processed at once to optimize learning.

**Application in Imsie:**
- Limit information per scene to **3-5 key points**
- Use multimedia to support learning (images + text)
- Scaffold complexity (easy → medium → hard)
- Provide frequent low-stakes assessments

**Example:**
```
Chapter 1: Simple narrative + decision scenes
Chapter 3: Add dialogue and map exploration
Chapter 5: Complex primary source analysis
```

### Spaced Repetition

**Principle:** Revisit key concepts multiple times over increasing intervals.

**Application in Imsie:**
- Revisit key concepts across multiple scenes
- Reference earlier learning in later chapters
- Include callback questions in quizzes
- Build on previous knowledge incrementally

**Example:**
```
Chapter 1: Introduce frame narrative concept
Chapter 3: Apply frame narrative in new story
Chapter 5: Analyze why frame narratives work
Final Quiz: Compare frame narratives across chapters
```

### Active Learning

**Principle:** Engage learners as active participants, not passive recipients.

**Application in Imsie:**
- Engage learners through decisions and interactions
- Use varied scene types to maintain attention
- Provide immediate feedback
- Encourage reflection (self-assessment questions)

**Example:**
```
Instead of: "Scheherazade was clever."
Use: "What would YOU do in Scheherazade's position?" (decision scene)
```

### Universal Design for Learning (UDL)

**Principle:** Provide multiple ways to access, engage with, and demonstrate learning.

**Application in Imsie:**

| UDL Principle | Implementation |
|--------------|----------------|
| **Multiple means of representation** | Text, images, audio, video, inline annotations |
| **Multiple means of engagement** | Narrative, games, analysis, decisions, exploration |
| **Multiple means of expression** | Choices, short answer, self-assessment, matching |

**Benefits:**
- Supports diverse learning styles
- Increases accessibility
- Maintains engagement
- Deepens comprehension

---

## Appendix E: Asset Generation Tools

### Image Generation

#### Midjourney
- **Platform:** Discord-based
- **Pricing:** $10-60/month
- **Best For:** Artistic, stylized images with consistent aesthetic
- **Process:** Discord commands (`/imagine [prompt]`)
- **Website:** [midjourney.com](https://midjourney.com)
- **Strengths:** Best overall quality, strong artistic interpretation
- **Limitations:** Requires Discord, no direct API

#### DALL-E 3
- **Platform:** ChatGPT Plus
- **Pricing:** $20/month
- **Best For:** Precise prompt following, specific compositions
- **Process:** ChatGPT interface (text prompts)
- **Website:** [openai.com](https://openai.com)
- **Strengths:** Excellent text understanding, integrated with ChatGPT
- **Limitations:** More literal, less artistic freedom

#### Stable Diffusion
- **Platform:** Self-hosted or online services
- **Pricing:** Free (self-hosted) or $10-30/month (hosted)
- **Best For:** Full control, customization, experimentation
- **Process:** Local installation or web UIs (ComfyUI, Automatic1111)
- **Website:** [stability.ai](https://stability.ai)
- **Strengths:** Open source, full control, no censorship
- **Limitations:** Steeper learning curve, requires technical setup

### Music Generation

#### Suno
- **Platform:** Web-based
- **Pricing:** Free tier available, $10-30/month for more credits
- **Best For:** Full songs with lyrics, thematic background music
- **Process:** Text prompt describing style, mood, instruments
- **Website:** [suno.ai](https://suno.ai)
- **Strengths:** Excellent quality, easy to use, can generate vocals
- **Limitations:** Credit-based, limited control over structure

#### Udio
- **Platform:** Web-based
- **Pricing:** Similar to Suno ($10-30/month)
- **Best For:** Instrumental focus, cinematic scores
- **Process:** Text prompts with musical descriptors
- **Website:** [udio.com](https://udio.com)
- **Strengths:** High quality instrumentals, good for ambient music
- **Limitations:** Newer platform, smaller community

### Audio Editing

#### Audacity
- **Platform:** Desktop (Windows, Mac, Linux)
- **Pricing:** Free, open source
- **Best For:** Basic audio editing, looping, trimming, effects
- **Process:** Download, import audio, edit visually
- **Website:** [audacityteam.org](https://audacityteam.org)
- **Strengths:** Free, powerful, cross-platform
- **Use Cases:** Loop music tracks, trim silence, normalize volume

### Image Optimization

#### Squoosh
- **Platform:** Web-based
- **Pricing:** Free
- **Best For:** Quick compression, format conversion
- **Process:** Drag and drop, adjust settings, download
- **Website:** [squoosh.app](https://squoosh.app)
- **Strengths:** Fast, visual comparison, multiple formats
- **Recommended Settings:**
  - Backgrounds: WebP at 80% quality
  - Illustrations: PNG-8 or WebP at 85% quality

#### ImageOptim
- **Platform:** Mac only
- **Pricing:** Free
- **Best For:** Batch optimization of PNG/JPG
- **Process:** Drag folder, automatic optimization
- **Website:** [imageoptim.com](https://imageoptim.com)
- **Strengths:** Lossless optimization, very fast
- **Use Cases:** Optimize entire asset folders at once

### Additional Tools

#### Color Palette Generators
- **Coolors.co** - Generate and test palettes
- **Adobe Color** - Extract colors from images
- **Paletton** - Create harmonious color schemes

#### Font Resources
- **Google Fonts** - Free web fonts
- **Font Squirrel** - Free commercial fonts
- **Adobe Fonts** - Premium fonts (Creative Cloud subscription)

---

## Appendix F: Glossary

### A

**Adventure**
A complete educational experience consisting of multiple chapters, typically 2-6 hours in length. Each adventure focuses on a literary work, historical period, or cultural tradition.

**Asset**
Any media file (image, video, audio, music) used in an adventure. Assets are stored in `public/assets/[adventure-name]/`.

**Annotation** (see *Inline Annotation*)

### C

**Chapter**
A self-contained unit of an adventure, typically 30-45 minutes in length and containing 8-15 scenes. Each chapter has its own learning objectives and end quiz.

**Consequence**
The outcome displayed to the player after making a choice in a decision scene. Should include educational context and learning points.

### F

**Frame Narrative**
A story structure where one story contains another, creating layers of narrative (e.g., Arabian Nights, where Scheherazade tells stories within the larger story of her and the Sultan).

### I

**Inline Annotation**
A tooltip that appears when hovering over specific text in a scene. Used to provide context, explain terminology, or offer historical/cultural insights without interrupting the narrative flow.

**Interactive Scene**
Any scene type that requires player input beyond clicking "Continue" (decisions, dialogue, map exploration, mini-games, etc.).

### L

**Learning Objective**
A measurable educational goal for a chapter or adventure. Written using action verbs from Bloom's Taxonomy (e.g., "Analyze Scheherazade's use of storytelling as a survival tool").

**Learning Point**
A specific educational insight delivered in a scene. Every scene should have 1-3 learning points with defined categories (historical-context, literary-technique, thematic-analysis, etc.).

### M

**Mini-Game**
An interactive scene type focused on gameplay mechanics (timeline games, quote attribution, anachronism detection, etc.). Designed to reinforce learning through engagement.

### P

**Prerequisite**
A requirement that must be met before accessing a chapter (e.g., completing previous chapter, passing a quiz). Defined in the chapter's `prerequisites` field.

### Q

**Quiz**
An assessment with multiple questions testing comprehension of a chapter or entire adventure. Supports multiple question types: multiple-choice, true-false, short-answer, matching, and self-assessment.

### S

**Scene**
The smallest unit of content in an adventure, typically 1-5 minutes. Each scene has a type (narrative, decision, dialogue, etc.) and learning points.

**Self-Assessment**
A quiz question type where students write their answer and then evaluate it against provided criteria and a model answer. Used for open-ended, analytical questions.

### T

**Theme**
Visual and audio styling configuration for an adventure, including color palette, typography, and background music. Defined in the adventure's `theme.ts` file.

**Tooltip** (see *Inline Annotation*)

---

## Quick Reference Tables

### Recommended Chapter Structure

| Chapter | Purpose | Scene Complexity | Duration |
|---------|---------|-----------------|----------|
| 1 | Introduction | Simple (narrative, decision) | 30-35 min |
| 2 | Development | Medium (add dialogue, maps) | 35-40 min |
| 3 | Exploration | Medium-High (primary source) | 40-45 min |
| 4 | Complexity | High (all scene types) | 40-45 min |
| 5 | Resolution | Medium (reflection focus) | 35-40 min |

### Asset Specifications

| Asset Type | Dimensions | Format | Optimization Target |
|-----------|-----------|--------|-------------------|
| Cover Art | 800×1200px | PNG/WebP | <200 KB |
| Backgrounds | 1920×1080px | PNG/WebP/JPG | <500 KB |
| Scene Images | 600×400px | PNG/WebP | <150 KB |
| Portraits | 600×600px | PNG/WebP | <150 KB |
| Maps | 1920×1080px | PNG | <400 KB |
| Music | Variable | MP3 | 128-192 kbps |
| Videos | 1920×1080px | MP4 (H.264) | <5 MB |

### Quiz Question Distribution

**Chapter Quiz (10 questions):**
- Multiple choice: 60% (6 questions)
- True/False: 20% (2 questions)
- Short answer: 10% (1 question)
- Self-assessment: 10% (1 question)

**Final Quiz (15 questions):**
- Multiple choice: 60% (9 questions)
- True/False: 13% (2 questions)
- Matching: 13% (2 questions)
- Self-assessment: 14% (2 questions)

### Scene Type Distribution per Chapter

**Recommended mix for balanced engagement:**
- Narrative: 40-50% (foundation)
- Decision: 15-20% (agency)
- Dialogue: 10-15% (character)
- Interactive (map, timeline, etc.): 20-30% (varied)

---

## Additional Resources

### Documentation References

- **Scene Types:** `docs/SCENE_TYPES_REFERENCE.md`
- **Chapter Authoring:** `docs/CHAPTER_AUTHORING_GUIDE.md`
- **Quiz System:** `docs/QUIZ_SYSTEM_REFERENCE.md`
- **Inline Annotations:** `docs/FEATURE_INLINE_ANNOTATIONS.md`
- **Prerequisites:** `docs/CHAPTER_PREREQUISITES_EXAMPLES.md`
- **File Structure:** `docs/ADVENTURE_FILE_STRUCTURE.md`

### Example Adventures

- **Arabian Nights:** `src/adventures/arabian-nights/`
  - Best example of frame narrative structure
  - Demonstrates all 10 scene types

- **Dante's Inferno:** `src/adventures/dantes-inferno/`
  - Complex thematic exploration
  - Strong use of primary source analysis

### Type Definitions

- **Complete Types:** `src/types/adventure.ts`
- **Use as source of truth** for all TypeScript interfaces

---

**Version:** 1.0
**Last Updated:** October 2025
**Contributors:** Johan Strömquist, Claude (Anthropic)
