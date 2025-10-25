# 10 - Consistency Review Guide

**Version:** 1.0
**Last Updated:** October 2025

## Purpose

This guide covers the critical consistency review phase that ensures educational quality and technical correctness before final registration. This review verifies that all interactive elements are properly supported with context and assets.

**IMPORTANT AUTO-FIX PRINCIPLES:**
- **Missing Assets:** Automatically update the `[adventure-name]_assets.md` file with new asset requirements and generation prompts. Add a "Consistency Review Additions" section documenting all missing assets.
- **Formatting Issues:** Automatically fix formatting problems (paragraph breaks, spacing) directly in chapter files. No need to just report - fix immediately.
- **Context Issues:** Report pedagogical/educational concerns for user decision. Do not auto-fix content/educational design without user approval.

---

## Prerequisites

Before consistency review:
- [ ] All chapters complete with scenes
- [ ] All quizzes created and linked
- [ ] Assets integrated (images, portraits, maps)
- [ ] Type checking passes (`npx tsc --noEmit`)
- [ ] Build succeeds (`npm run build`)

---

## Review Checklist

### 1. Dialogue Scene Portrait Verification

**Objective:** Ensure every dialogue scene has appropriate character portraits for all speakers.

**What to check:**
- Each dialogue node has a `portrait` field where relevant
- Portrait URLs are valid (Midjourney CDN or local `/Imsie/` paths)
- Portraits match the character speaking
- No missing portraits for named characters
- Generic/narrator dialogue may omit portraits appropriately

**How to review:**
```bash
# Search for dialogue scenes
grep -r "type: 'dialogue'" src/adventures/[adventure-name]/chapters/
```

**For each dialogue scene:**
1. Open the chapter file
2. Find all dialogue tree nodes
3. Verify each character node has a portrait
4. Check portrait URL is valid and matches character

**Common issues:**
- Missing portrait field for main character
- Placeholder paths not replaced with actual URLs
- Wrong character portrait used
- Portrait URL points to background image instead

**AUTO-FIX ACTION:**
If portraits are missing, immediately update `[adventure-name]_assets.md`:
1. Add "## Consistency Review Additions" section at the end if it doesn't exist
2. Document each missing portrait with generation prompt
3. Report findings to user for asset generation

**Example - Correct:**
```typescript
{
  id: 'scene-dialogue',
  type: 'dialogue',
  backgroundImage: 'https://cdn.midjourney.com/abc.../0_0.png',
  dialogueTree: {
    nodes: {
      'socrates-1': {
        speaker: 'Socrates',
        portrait: 'https://cdn.midjourney.com/xyz.../0_0.png', // ✓ Has portrait
        text: 'Welcome, friend...',
        nextNodeId: 'response-1',
      },
    },
  },
}
```

---

### 2. Map/Exploration Location Image Verification

**Objective:** Ensure all map-exploration scenes have images for every clickable location.

**What to check:**
- Each location in `locations` array has an `image` field
- Image URLs are valid
- Images are appropriate for the location being shown
- No placeholder or missing images

**How to review:**
```bash
# Search for map-exploration scenes
grep -r "type: 'map-exploration'" src/adventures/[adventure-name]/chapters/
```

**For each map-exploration scene:**
1. Count total locations in the array
2. Verify each location object has `image` field
3. Check all image URLs are valid
4. Ensure images match location descriptions

**Common issues:**
- Location missing `image` field entirely
- Placeholder path like `/assets/.../location.png` not replaced
- Same image used for multiple distinct locations
- Image doesn't match location description

**AUTO-FIX ACTION:**
If location images are missing, immediately update `[adventure-name]_assets.md`:
1. Add to "## Consistency Review Additions" section
2. Document each missing location image with appropriate generation prompt based on location name and content
3. Follow the adventure's established visual style and prompt format
4. Report total missing locations to user

**Example - Correct:**
```typescript
{
  id: 'scene-map',
  type: 'map-exploration',
  mapImage: 'https://cdn.midjourney.com/map.../0_0.png',
  locations: [
    {
      id: 'agora',
      name: 'The Agora',
      x: 35,
      y: 50,
      image: 'https://cdn.midjourney.com/agora.../0_0.png', // ✓ Has image
      content: '...',
    },
    {
      id: 'academy',
      name: 'Plato\'s Academy',
      x: 60,
      y: 30,
      image: 'https://cdn.midjourney.com/academy.../0_0.png', // ✓ Has image
      content: '...',
    },
  ],
}
```

---

### 3. Timeline Game Event Images Verification

**Objective:** Ensure all timeline game events have images for each event.

**What to check:**
- Each event in `timelineEvents` array has an `image` field
- Image URLs are valid
- Images are appropriate for the historical event being depicted
- No placeholder or missing images

**How to review:**
```bash
# Search for timeline-game scenes
grep -r "type: 'timeline-game'" src/adventures/[adventure-name]/chapters/
```

**For each timeline-game scene:**
1. Count total events in the `timelineEvents` array
2. Verify each event object has `image` field
3. Check all image URLs are valid
4. Ensure images match event descriptions

**Common issues:**
- Event missing `image` field entirely
- Placeholder path like `/assets/.../event.png` not replaced
- Same image used for multiple distinct events
- Image doesn't match historical event description

**AUTO-FIX ACTION:**
If event images are missing, immediately update `[adventure-name]_assets.md`:
1. Add to "## Consistency Review Additions" section
2. Document each missing event image with appropriate generation prompt based on event title and description
3. Follow the adventure's established visual style and prompt format
4. Report total missing events to user

**Example - Correct:**
```typescript
{
  id: 'scene-timeline',
  type: 'timeline-game',
  prompt: 'Order these philosophical milestones chronologically',
  timelineEvents: [
    {
      id: 'birth-socrates',
      title: 'Birth of Socrates',
      year: -469,
      description: 'Socrates is born in Athens',
      image: 'https://cdn.midjourney.com/socrates-birth.../0_0.png', // ✓ Has image
    },
    {
      id: 'trial-socrates',
      title: 'Trial of Socrates',
      year: -399,
      description: 'Socrates is tried and sentenced to death',
      image: 'https://cdn.midjourney.com/socrates-trial.../0_0.png', // ✓ Has image
    },
  ],
}
```

---

### 4. Anachronism Scene Unique Images Verification

**Objective:** Ensure anachronism scenes have unique, distinct images for each item.

**What to check:**
- Each item in `items` array has an `image` field
- All images are unique (no duplicates)
- Images clearly show the specific anachronistic item
- Scene image (`sceneImage`) is different from item images

**How to review:**
```bash
# Search for anachronism scenes
grep -r "type: 'anachronism'" src/adventures/[adventure-name]/chapters/
```

**For each anachronism scene:**
1. List all item IDs and their images
2. Verify no duplicate image URLs
3. Check each image is appropriate for its item
4. Ensure `sceneImage` is distinct from item images

**Common issues:**
- Same image used for multiple different items
- Missing `image` field on some items
- Item image is identical to scene background
- Placeholder paths not replaced

**AUTO-FIX ACTION:**
If item images are missing, immediately update `[adventure-name]_assets.md`:
1. Add to "## Consistency Review Additions" section
2. Document each missing item image with generation prompt describing the specific item/concept
3. Ensure prompts create distinct, recognizable icons/illustrations
4. Report total missing items to user

**Example - Correct:**
```typescript
{
  id: 'scene-anachronism',
  type: 'anachronism',
  sceneImage: 'https://cdn.midjourney.com/scene.../0_0.png',
  items: [
    {
      id: 'wristwatch',
      name: 'Wristwatch',
      image: 'https://cdn.midjourney.com/watch.../0_0.png', // ✓ Unique
      isAnachronism: true,
      explanation: '...',
    },
    {
      id: 'smartphone',
      name: 'Smartphone',
      image: 'https://cdn.midjourney.com/phone.../0_0.png', // ✓ Unique, different from watch
      isAnachronism: true,
      explanation: '...',
    },
    {
      id: 'amphora',
      name: 'Clay Amphora',
      image: 'https://cdn.midjourney.com/amphora.../0_0.png', // ✓ Unique
      isAnachronism: false,
      explanation: '...',
    },
  ],
}
```

---

### 5. Primary Source Scene Formatting Verification

**Objective:** Ensure primary source scenes are well-formatted with proper spacing and valid assets.

**What to check:**
- Document text has appropriate paragraph breaks (`\n\n` for new paragraphs)
- Text is readable and not a wall of text
- If `documentImage` is used, URL is valid
- If `documentVideo` is used, URL is valid
- Images/videos enhance understanding, not distract
- Transcription matches historical accuracy (if applicable)

**How to review:**
```bash
# Search for primary-source scenes
grep -r "type: 'primary-source'" src/adventures/[adventure-name]/chapters/
```

**For each primary-source scene:**
1. Read the `documentText` field
2. Check for proper paragraph spacing
3. Verify readability (not too dense)
4. If image/video present, check URL validity
5. Confirm asset matches document content

**Common issues:**
- Wall of text with no paragraph breaks
- Using placeholder image paths
- Image doesn't match the source being presented
- Text too long without breaks for student readability
- Missing critical spacing around quotes or sections

**AUTO-FIX ACTION:**
For formatting issues, immediately fix in chapter files:
1. Add `\n\n` between paragraphs in `documentText` fields
2. Break long passages into readable chunks (3-4 sentences per paragraph)
3. Ensure proper spacing around quotes, citations, and transitions
4. No need to report - just fix formatting directly
5. For missing images, update assets file as with other asset issues

**Example - Correct:**
```typescript
{
  id: 'scene-primary-source',
  type: 'primary-source',
  documentTitle: 'Letter to Menoeceus',
  documentImage: 'https://cdn.midjourney.com/letter.../0_0.png', // ✓ Valid URL
  documentText: `Let no one be slow to seek wisdom when he is young nor weary in the search thereof when he is grown old.

For no age is too early or too late for the health of the soul.

And to say that the season for studying philosophy has not yet come, or that it is past and gone, is like saying that the season for happiness is not yet or that it is now no more.`, // ✓ Proper paragraph breaks
  analysisPrompt: 'What does Epicurus suggest about the right time to study philosophy?',
}
```

---

### 6. Decision Scene Historical Accuracy Review

**Objective:** Ensure decision scenes lead to historically accurate outcomes and flow properly into next scenes.

**What to check:**
- If allowing historical choices, outcomes match historical record
- Choice consequences are clearly explained
- Scene conclusion text transitions smoothly to next scene
- `nextSceneId` values are correct and scenes exist
- Student feedback reflects historical accuracy
- No anachronistic outcomes presented as historical

**How to review:**
```bash
# Search for decision scenes
grep -r "type: 'decision'" src/adventures/[adventure-name]/chapters/
```

**For each decision scene:**
1. Identify if decisions are historical or hypothetical
2. For historical decisions:
   - Verify outcomes match historical events
   - Check that feedback explains historical consequences
3. Read the choice with highest `correctnessScore`
4. Verify the scene's conclusion transitions to next scene
5. Load the next scene and confirm continuity

**Common issues:**
- Historical decision has anachronistic outcome
- Choice feedback contradicts historical record
- Scene conclusion doesn't match next scene's opening
- `nextSceneId` points to non-existent scene
- All choices equally weighted when one is historically accurate

**Example - Correct (Historical):**
```typescript
{
  id: 'scene-trial-verdict',
  type: 'decision',
  title: 'The Verdict',
  prompt: 'The jury has found Socrates guilty. What should his punishment be?',
  choices: [
    {
      id: 'exile',
      text: 'Propose exile from Athens',
      nextSceneId: 'socrates-in-prison',
      feedback: 'Historically, Socrates considered exile but ultimately rejected it, choosing death instead to stay true to his principles.',
      correctnessScore: 0.5, // Plausible but not what happened
    },
    {
      id: 'death',
      text: 'Accept the death penalty',
      nextSceneId: 'socrates-in-prison',
      feedback: 'This is what Socrates chose. He believed fleeing would mean abandoning his philosophical principles and the laws of Athens he had lived under his entire life.',
      correctnessScore: 1.0, // ✓ Historically accurate
    },
  ],
  conclusion: 'Socrates made his choice. Now, in prison, he would face the final days of his life...', // ✓ Transitions to next scene
}
```

**Example - Correct (Hypothetical):**
```typescript
{
  id: 'scene-ethical-choice',
  type: 'decision',
  title: 'The Trolley Problem',
  prompt: 'A hypothetical ethical dilemma...',
  choices: [
    {
      id: 'utilitarian',
      text: 'Pull the lever (save five, sacrifice one)',
      feedback: 'This reflects utilitarian ethics: the greatest good for the greatest number.',
      correctnessScore: 0.5, // No single "right" answer
    },
    {
      id: 'deontological',
      text: 'Do nothing (don\'t actively cause harm)',
      feedback: 'This reflects deontological ethics: some actions are inherently wrong regardless of consequences.',
      correctnessScore: 0.5, // No single "right" answer
    },
  ],
}
```

---

### 7. Interactive Scene Context and Placement Review

**Objective:** Ensure every interactive scene is preceded by adequate context for students to respond appropriately.

**What to check:**
- Interactive scenes follow explanatory narrative scenes
- Students have been taught concepts before being tested
- Quiz questions relate to previously presented learning points
- Map exploration follows introduction to the geography
- Quote attribution follows introduction to the philosophers
- Cause-effect follows explanation of the relationships
- No "gotcha" questions testing material not yet covered

**How to review:**

For each interactive scene type, verify context:

**Quote Attribution:**
- Quotes come from philosophers already introduced
- Students have learned about these figures' key ideas
- Preceding scenes mention or discuss these quotes

**Timeline Games:**
- Events have all been mentioned in previous scenes
- Students have context for chronological relationships
- Dates/eras have been established

**Cause-Effect:**
- Both causes and effects have been explained
- Relationships have been discussed in narrative
- Students have learning points covering these connections

**Map Exploration:**
- Geographic context established in previous scenes
- Locations mentioned before being explored
- Historical/cultural context provided

**Primary Source Analysis:**
- Source author/context introduced beforehand
- Historical period and significance explained
- Key concepts from source already taught

**Anachronism:**
- Time period clearly established
- Technology/culture level explained
- Students understand what belongs in the era

**Dialogue Choices:**
- Philosophical positions explained beforehand
- Students taught the concepts being discussed
- No trick questions about unintroduced ideas

**How to conduct review:**
1. List all interactive scenes in order
2. For each, read the 2-3 scenes immediately before it
3. Verify adequate context is provided
4. Check that learning points cover tested concepts
5. Ensure no knowledge gaps exist

**Common issues:**
- Quiz question about concept not yet introduced
- Quote attribution from philosopher not yet met
- Timeline event not previously mentioned
- Map location with no prior context
- Cause-effect testing relationship not explained
- Anachronism in period not yet established

**Example - Incorrect Placement:**
```typescript
// Scene 2: Early Greek philosophy introduction
{
  id: 'intro-philosophy',
  type: 'narrative',
  content: 'Philosophy began in ancient Greece...',
},

// Scene 3: Quote Attribution - TOO EARLY!
{
  id: 'quote-game',
  type: 'quote-attribution',
  quotes: [
    {
      text: 'I think, therefore I am',
      correctAnswer: 'Descartes', // ✗ Descartes not introduced yet!
    },
  ],
}
```

**Example - Correct Placement:**
```typescript
// Scene 5: Introduce Socrates and his method
{
  id: 'intro-socrates',
  type: 'narrative',
  content: 'Socrates revolutionized philosophy with his questioning method. "The unexamined life is not worth living," he famously said...',
  learningPoints: [
    {
      content: 'Socrates believed the unexamined life is not worth living',
      category: 'philosophical-concept',
    },
  ],
},

// Scene 6: Socratic dialogue example
{
  id: 'socrates-method',
  type: 'narrative',
  content: 'Let us witness the Socratic method in action...',
},

// Scene 7: NOW quote attribution is appropriate
{
  id: 'quote-game',
  type: 'quote-attribution',
  quotes: [
    {
      text: 'The unexamined life is not worth living',
      correctAnswer: 'Socrates', // ✓ Socrates introduced 2 scenes ago
    },
  ],
}
```

---

## Review Workflow

### Phase 1: Asset Consistency (Parallel Tasks)

Execute these reviews in parallel:

**Task 1: Dialogue Portraits**
- Scan all dialogue scenes
- Create list of missing/incorrect portraits
- Report findings

**Task 2: Location Images**
- Scan all map-exploration scenes
- List missing location images
- Report findings

**Task 3: Timeline Event Images**
- Scan all timeline-game scenes
- List missing event images
- Report findings

**Task 4: Anachronism Images**
- Scan all anachronism scenes
- Check for duplicate or missing images
- Report findings

**Task 5: Primary Source Formatting**
- Scan all primary-source scenes
- Check text formatting and spacing
- Verify image assets
- Report findings

### Phase 2: Educational Consistency (Sequential Tasks)

Execute after Phase 1 completes:

**Task 6: Decision Historical Accuracy**
- Review each decision scene
- Verify historical accuracy where applicable
- Check scene transitions
- Report findings

**Task 7: Interactive Context**
- Map all interactive scenes
- Verify preceding context
- Check learning point coverage
- Report findings

---

## Reporting Template

For each review task, report:

```markdown
## [Task Name] Review Results

**Chapters Reviewed:** [List]
**Total Scenes Checked:** [Number]

### Issues Found: [Number]

1. **[Chapter X, Scene Y]:** [Description of issue]
   - Current state: [What's wrong]
   - Recommended fix: [What should be done]

2. **[Chapter X, Scene Z]:** [Description]
   - Current state:
   - Recommended fix:

### Scenes Verified: [Number]

All other scenes passed this review criterion.

### Recommendations:

[Any general observations or patterns noticed]
```

---

## Common Fixes

### Adding Missing Portrait
```typescript
// Before
nodes: {
  'character-1': {
    speaker: 'Socrates',
    text: 'Hello...',
  }
}

// After
nodes: {
  'character-1': {
    speaker: 'Socrates',
    portrait: 'https://cdn.midjourney.com/abc.../0_0.png',
    text: 'Hello...',
  }
}
```

### Adding Location Image
```typescript
// Before
locations: [
  {
    id: 'agora',
    name: 'Agora',
    content: '...',
  }
]

// After
locations: [
  {
    id: 'agora',
    name: 'Agora',
    image: 'https://cdn.midjourney.com/agora.../0_0.png',
    content: '...',
  }
]
```

### Improving Primary Source Formatting
```typescript
// Before
documentText: `Let no one be slow to seek wisdom when he is young nor weary in the search thereof when he is grown old. For no age is too early or too late for the health of the soul. And to say that the season for studying philosophy has not yet come, or that it is past and gone, is like saying that the season for happiness is not yet or that it is now no more.`

// After
documentText: `Let no one be slow to seek wisdom when he is young nor weary in the search thereof when he is grown old.

For no age is too early or too late for the health of the soul.

And to say that the season for studying philosophy has not yet come, or that it is past and gone, is like saying that the season for happiness is not yet or that it is now no more.`
```

---

## Completion Checklist

- [ ] All dialogue scenes have character portraits
- [ ] All map-exploration locations have images
- [ ] All timeline-game events have images
- [ ] All anachronism items have unique images
- [ ] All primary sources are well-formatted
- [ ] Decision scenes are historically accurate (where applicable)
- [ ] All interactive scenes have adequate preceding context
- [ ] All issues documented and reported
- [ ] Recommended fixes clear and actionable

---

## Next Steps

After consistency review passes:
- **Proceed to Phase 11:** Adventure Registration
- Register adventure in application
- Begin play testing

If issues found:
- Fix all reported issues
- Re-run affected reviews
- Proceed when all checks pass

---

## Related Documentation

- **Previous Phase:** [09 - Asset Integration](09_asset_integration.md)
- **Next Phase:** [11 - Adventure Registration](11_adventure_registration.md)
- **Scene Types Reference:** `docs/SCENE_TYPES_REFERENCE.md`
- **Type Definitions:** `src/types/adventure.ts`

---

**Version:** 1.0
**Last Updated:** October 2025
**Part of:** Adventure Authoring Guide Series
