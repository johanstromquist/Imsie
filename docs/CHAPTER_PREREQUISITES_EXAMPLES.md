# Chapter Prerequisites - Examples

This document provides real-world examples of how to use the chapter prerequisite system to create different adventure structures.

## Example 1: Simple Linear Adventure (Default)

No configuration needed! Chapters unlock sequentially:

```typescript
const linearAdventure: Adventure = {
  id: 'simple-quest',
  title: 'The Hero\'s Journey',
  chapters: [
    {
      id: 'ch1',
      title: 'The Call to Adventure',
      scenes: [...]
    },
    {
      id: 'ch2',
      title: 'Crossing the Threshold',
      scenes: [...]
    },
    {
      id: 'ch3',
      title: 'The Return Home',
      scenes: [...]
    }
  ]
}
```

**Unlock Flow:** ch1 (unlocked) → ch2 (unlocked after ch1) → ch3 (unlocked after ch2)

---

## Example 2: Branching Narrative (Choose Your Path)

Create two different story paths that branch after Chapter 1:

```typescript
const branchingAdventure: Adventure = {
  id: 'dual-paths',
  title: 'Light or Shadow',
  chapters: [
    {
      id: 'prologue',
      title: 'Prologue: The Choice',
      scenes: [...]
    },

    // Path A: Light Path
    {
      id: 'light-1',
      title: 'Chapter 2A: Path of Light',
      prerequisites: {
        type: 'all',
        chapterIds: ['prologue']
      },
      scenes: [...]
    },
    {
      id: 'light-2',
      title: 'Chapter 3A: Radiance',
      prerequisites: {
        type: 'sequential' // Requires previous chapter (light-1)
      },
      scenes: [...]
    },

    // Path B: Shadow Path
    {
      id: 'shadow-1',
      title: 'Chapter 2B: Path of Shadow',
      prerequisites: {
        type: 'all',
        chapterIds: ['prologue']
      },
      scenes: [...]
    },
    {
      id: 'shadow-2',
      title: 'Chapter 3B: Darkness',
      prerequisites: {
        type: 'sequential' // Requires previous chapter (shadow-1)
      },
      scenes: [...]
    },

    // Merge Point
    {
      id: 'epilogue',
      title: 'Epilogue: Consequences',
      prerequisites: {
        type: 'any',
        chapterIds: ['light-2', 'shadow-2']
      },
      scenes: [...]
    }
  ]
}
```

**Unlock Flow:**
```
prologue → light-1 → light-2 ↘
                                epilogue
prologue → shadow-1 → shadow-2 ↗
```

---

## Example 3: Parallel Storylines (Must Complete Both)

Two independent storylines that must both be completed:

```typescript
const parallelAdventure: Adventure = {
  id: 'dual-heroes',
  title: 'Two Heroes, One Destiny',
  chapters: [
    {
      id: 'intro',
      title: 'Introduction',
      scenes: [...]
    },

    // Hero A's storyline
    {
      id: 'hero-a-1',
      title: 'Hero A: Chapter 1',
      prerequisites: {
        type: 'all',
        chapterIds: ['intro']
      },
      scenes: [...]
    },
    {
      id: 'hero-a-2',
      title: 'Hero A: Chapter 2',
      prerequisites: {
        type: 'sequential'
      },
      scenes: [...]
    },

    // Hero B's storyline
    {
      id: 'hero-b-1',
      title: 'Hero B: Chapter 1',
      prerequisites: {
        type: 'all',
        chapterIds: ['intro']
      },
      scenes: [...]
    },
    {
      id: 'hero-b-2',
      title: 'Hero B: Chapter 2',
      prerequisites: {
        type: 'sequential'
      },
      scenes: [...]
    },

    // Finale requires BOTH storylines complete
    {
      id: 'finale',
      title: 'The Convergence',
      prerequisites: {
        type: 'all',
        chapterIds: ['hero-a-2', 'hero-b-2']
      },
      scenes: [...]
    }
  ]
}
```

**Unlock Flow:**
```
         ↗ hero-a-1 → hero-a-2 ↘
intro                            finale
         ↗ hero-b-1 → hero-b-2 ↗
```

---

## Example 4: Hub Structure (Complete X to Unlock Final)

A central hub with multiple side adventures:

```typescript
const hubAdventure: Adventure = {
  id: 'hub-world',
  title: 'The Five Trials',
  chapters: [
    {
      id: 'hub',
      title: 'The Central Hub',
      scenes: [...]
    },

    // 4 independent trials
    {
      id: 'trial-fire',
      title: 'Trial of Fire',
      prerequisites: {
        type: 'all',
        chapterIds: ['hub']
      },
      scenes: [...]
    },
    {
      id: 'trial-water',
      title: 'Trial of Water',
      prerequisites: {
        type: 'all',
        chapterIds: ['hub']
      },
      scenes: [...]
    },
    {
      id: 'trial-earth',
      title: 'Trial of Earth',
      prerequisites: {
        type: 'all',
        chapterIds: ['hub']
      },
      scenes: [...]
    },
    {
      id: 'trial-air',
      title: 'Trial of Air',
      prerequisites: {
        type: 'all',
        chapterIds: ['hub']
      },
      scenes: [...]
    },

    // Final chapter requires ALL trials
    {
      id: 'final-trial',
      title: 'The Final Trial',
      prerequisites: {
        type: 'all',
        chapterIds: ['trial-fire', 'trial-water', 'trial-earth', 'trial-air']
      },
      scenes: [...]
    }
  ]
}
```

**Unlock Flow:**
```
      ↗ trial-fire ↘
    ↗  trial-water  ↘
hub                   final-trial
    ↘  trial-earth  ↗
      ↘ trial-air ↗
```

---

## Example 5: Flexible Path (Complete Any 2 of 3)

Requires completing ANY 2 out of 3 chapters:

```typescript
const flexibleAdventure: Adventure = {
  id: 'flexible-path',
  title: 'Choose Your Allies',
  chapters: [
    {
      id: 'intro',
      title: 'Introduction',
      scenes: [...]
    },

    // 3 optional ally quests
    {
      id: 'ally-warrior',
      title: 'Recruit the Warrior',
      prerequisites: {
        type: 'all',
        chapterIds: ['intro']
      },
      scenes: [...]
    },
    {
      id: 'ally-mage',
      title: 'Recruit the Mage',
      prerequisites: {
        type: 'all',
        chapterIds: ['intro']
      },
      scenes: [...]
    },
    {
      id: 'ally-rogue',
      title: 'Recruit the Rogue',
      prerequisites: {
        type: 'all',
        chapterIds: ['intro']
      },
      scenes: [...]
    },

    // Finale requires ANY 2 of the 3 allies
    {
      id: 'finale',
      title: 'The Final Battle',
      prerequisites: {
        type: 'any', // Will unlock when ANY of these is complete
        chapterIds: ['ally-warrior', 'ally-mage', 'ally-rogue']
      },
      scenes: [...]
    }
  ]
}
```

**Note:** The `any` type means "at least one" - if you need "exactly 2 of 3", you'd need custom logic or create multiple finale variations.

**Unlock Flow:**
```
      ↗ ally-warrior ↘
intro → ally-mage    → finale (unlocks after ANY one complete)
      ↘ ally-rogue ↗
```

---

## Example 6: Complex Multi-Stage Adventure

Combines multiple patterns:

```typescript
const complexAdventure: Adventure = {
  id: 'epic-quest',
  title: 'The Epic Quest',
  chapters: [
    // Act 1: Introduction
    { id: 'act1-intro', title: 'Act 1: The Beginning', scenes: [...] },

    // Act 2: Branching paths (choose one)
    {
      id: 'act2-north',
      title: 'Act 2A: Northern Route',
      prerequisites: { type: 'all', chapterIds: ['act1-intro'] },
      scenes: [...]
    },
    {
      id: 'act2-south',
      title: 'Act 2B: Southern Route',
      prerequisites: { type: 'all', chapterIds: ['act1-intro'] },
      scenes: [...]
    },

    // Act 3: Merge and continue
    {
      id: 'act3-trials',
      title: 'Act 3: The Trials',
      prerequisites: { type: 'any', chapterIds: ['act2-north', 'act2-south'] },
      scenes: [...]
    },

    // Act 4: Parallel missions (must do both)
    {
      id: 'act4-mission-a',
      title: 'Act 4A: Mission Alpha',
      prerequisites: { type: 'all', chapterIds: ['act3-trials'] },
      scenes: [...]
    },
    {
      id: 'act4-mission-b',
      title: 'Act 4B: Mission Beta',
      prerequisites: { type: 'all', chapterIds: ['act3-trials'] },
      scenes: [...]
    },

    // Act 5: Finale (requires both missions)
    {
      id: 'act5-finale',
      title: 'Act 5: The Final Confrontation',
      prerequisites: {
        type: 'all',
        chapterIds: ['act4-mission-a', 'act4-mission-b']
      },
      scenes: [...]
    }
  ]
}
```

**Unlock Flow:**
```
act1 → act2-north ↘
                   act3 → act4-mission-a ↘
act1 → act2-south ↗                      act5-finale
                        act4-mission-b ↗
```

---

## Tips for Adventure Designers

1. **Keep it simple**: Most adventures work great with sequential chapters (no prerequisites needed)

2. **Test thoroughly**: Use the chapter navigation UI to verify unlock logic works as intended

3. **Provide context**: Use chapter descriptions to explain which paths are available

4. **Visual feedback**: The UI automatically shows smart lock messages like "Complete any: Chapter 2a or Chapter 2b"

5. **Consider replay value**: Branching paths encourage players to replay and explore different storylines

6. **Balance freedom and structure**: Too many branches can be overwhelming; guide players with clear choices

7. **Document your structure**: Create a flow diagram to visualize complex prerequisite chains
