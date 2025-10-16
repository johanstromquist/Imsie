# Asset Planning Guide

**Step 3 of 9: Asset Planning**
**Version:** 2.0
**Last Updated:** October 2025

---

## Purpose

This guide walks you through planning and documenting all visual and audio assets for your adventure. By the end, you'll have a complete `[adventure-name]_assets.md` file with detailed generation prompts for every asset needed.

**Prerequisites:** Complete Step 2 (Adventure Outline)

**Key Principle:** Asset planning happens AFTER outline creation to ensure perfect alignment between narrative and visuals.

---

## Overview of Asset Types

| Asset Type | Dimensions | Format | Count (typical) | Purpose |
|-----------|-----------|--------|----------------|----------|
| Cover Art | 800x1200px | PNG/JPG | 1 | Adventure selection screen |
| Backgrounds | 1920x1080px | PNG/JPG | 20-40 | Scene backdrops |
| Scene Images | 600x400px | PNG/JPG | 15-30 | Narrative illustrations |
| Character Portraits | 600x600px | PNG/JPG | 5-15 | Dialogue scenes |
| Maps | 1920x1080px | PNG/JPG | 1-5 | Map exploration scenes |
| Background Videos | 1920x1080px | MP4 | 0-10 | Animated backdrops (optional) |
| Music Tracks | Variable | MP3 | 1-4 | Background ambience |

---

## Process Overview

**Follow this order:**

1. Review adventure outline from Step 2
2. Define visual style and artistic direction
3. Choose color palette
4. Create tone prefix for prompts
5. Create style suffix for prompts
6. Document cover art
7. Document all backgrounds (scene by scene)
8. Document all scene illustrations
9. Document all character portraits
10. Document maps (if needed)
11. Document music requirements
12. **CRITICAL SANITY CHECK** - Verify alignment with outline
13. Prioritize asset generation phases

---

## Step 1: Define Visual Style

### Choosing Your Artistic Direction

**Consider:**
- **Historical period** of your source material
- **Emotional tone** (mystical, dramatic, somber, playful)
- **Educational goals** (accessible vs. authentic)
- **Target audience** (16-20 years old)

**Examples from existing adventures:**

**Arabian Nights:**
- Style: "In the style of Nimona"
- Reasoning: Accessible, colorful, engaging for modern audience
- Tone: Mystical, adventurous, fantastical

**Dante's Inferno:**
- Style: "In the style of Gustave Doré's Divine Comedy engravings mixed with medieval manuscript illumination"
- Reasoning: Historically appropriate, dramatic, educational
- Tone: Serious, contemplative, dark but not frightening

### Document Your Style Decision

```markdown
## Overview

**Visual Style:** [Describe your artistic direction]
- Art style reference: [e.g., "Medieval manuscript illumination"]
- Inspiration: [Artists, periods, or works]
- Tone: [Mystical, dramatic, historical, etc.]
```

---

## Step 2: Select Color Palette

### Color Psychology for Educational Adventures

| Primary Color | Mood/Association | Good For |
|--------------|------------------|----------|
| Deep Purple-Blue (#1a0f2e) | Mystical, nocturnal, mysterious | Night-themed, mystical content |
| Dark Red-Brown (#3d1a1a) | Serious, historical, dramatic | Tragedies, historical epics |
| Forest Green (#1a3d1a) | Natural, growth, classic | Nature myths, pastoral tales |
| Royal Blue (#1a2e4a) | Noble, trustworthy, calm | Epic journeys, exploration |
| Charcoal (#2a2a2a) | Sophisticated, neutral | Modern lit, philosophy |

**Tools for palette generation:**
- [Coolors.co](https://coolors.co/) - Generate and test palettes
- [Adobe Color](https://color.adobe.com/) - Extract from images
- [Paletton](https://paletton.com/) - Create harmonious schemes

### Document Your Palette

```markdown
**Color Palette:**
- Primary: #hexcode ([color name] - [usage])
- Secondary: #hexcode ([color name] - [usage])
- Accent 1: #hexcode ([color name] - [usage])
- Accent 2: #hexcode ([color name] - [usage])
```

**Example:**
```markdown
**Color Palette:**
- Primary: #1a0f2e (Deep midnight blue - backgrounds, UI elements)
- Secondary: #d4af37 (Golden - highlights, accents, magical elements)
- Accent 1: #8b4789 (Rich purple - character elements)
- Accent 2: #c9a961 (Antique gold - borders, decorative elements)
```

---

## Step 3: Craft Prompt Components

### Tone Prefix Guidelines

**Purpose:** Sets the artistic era/style without confusing the AI.

**Rule of Thumb:**
- If the work's title naturally describes a style → Use the title
- If the title could confuse the AI → Use the historical period/style instead

**Examples:**

| Adventure Type | Good Prefix | Why |
|---------------|-------------|-----|
| Arabian Nights | "Arabian Nights:" | ✅ Work title doesn't confuse style |
| Dante's Inferno | "Dante's Inferno:" | ✅ Work title doesn't confuse style |
| Tristan and Isolde | "Medieval artwork:" | ✅ Avoids title confusion with style |
| Greek Mythology | "Classical Greek art:" | ✅ Clear artistic period |
| Arthurian Legends | "Medieval illumination:" | ✅ Specific style reference |
| Canterbury Tales | "14th century manuscript:" | ✅ Historical specificity |
| Beowulf | "Anglo-Saxon artwork:" | ✅ Cultural specificity |
| Romeo and Juliet | "Renaissance painting:" | ✅ Period appropriate |

### Style Suffix Guidelines

**Purpose:** Ensures visual consistency across all assets.

**Format:** Include artistic style, technical qualities, and tone/purpose.

**Template:**
```
In the style of [ARTISTIC REFERENCE], [TECHNICAL QUALITIES], [TONE] --ar [ratio]
```

**Components:**

1. **Artistic Reference** - Specific artist, era, or work
   - Examples: "Arthur Rackham", "Pre-Raphaelite painting", "Japanese ukiyo-e"

2. **Technical Qualities** - Lighting, composition, or technique
   - Examples: "dramatic chiaroscuro lighting", "watercolor textures", "bold graphic lines"

3. **Tone/Purpose** - Context about intended feel
   - Examples: "educational and accessible", "mystical and atmospheric", "historically accurate"

**Examples from existing adventures:**

**Arabian Nights:**
```
In the style of Nimona. --ar [ratio]
```

**Dante's Inferno:**
```
In the style of Gustave Doré's Divine Comedy engravings mixed with medieval manuscript illumination, dramatic chiaroscuro lighting, educational and accessible --ar [ratio]
```

**Tristan & Isolde (example):**
```
In the style of medieval manuscript illumination with Pre-Raphaelite detail, warm candlelight glow, historically evocative --ar [ratio]
```

### Document Your Prompt Format

```markdown
**Artistic Style Guidelines:**
[Describe the consistent style all assets should follow]

**Prompt Format:**
All image generation prompts follow this structure:
- **Tone prefix:** "[Your chosen prefix]:"
- **Content description:** [Subject, composition, mood]
- **Style suffix:** [Your complete suffix]

**Example:**
[Tone prefix]: [Example scene description]. [Style suffix] --ar [ratio]
```

---

## Step 4: Create Asset Documentation File

Create `[adventure-name]_assets.md` in your adventure folder.

### Complete File Template

```markdown
# [Adventure Title] - Asset Requirements

## Overview

**Visual Style:** [Describe your artistic direction]
- Art style reference: [e.g., "Medieval manuscript illumination"]
- Inspiration: [Artists, periods, or works]
- Tone: [Mystical, dramatic, historical, etc.]

**Color Palette:**
- Primary: #hexcode ([color name] - [usage])
- Secondary: #hexcode ([color name] - [usage])
- Accent 1: #hexcode ([color name] - [usage])
- Accent 2: #hexcode ([color name] - [usage])

**Artistic Style Guidelines:**
[Describe the consistent style all assets should follow. Include details about composition, perspective, detail level, etc.]

**Prompt Format:**
All image generation prompts follow this structure:
- **Tone prefix:** "[Your prefix]:"
- **Content description:** [Subject, composition, mood]
- **Style suffix:** [Your complete suffix]

---

## Cover Art

### Main Cover Image
- **File:** `public/assets/[adventure-name]/cover.png`
- **Dimensions:** 800x1200px
- **Format:** PNG
- **Description:** [What the cover depicts - the "hook" image for your adventure]
- **Prompt:**
```
[Tone]: [Detailed scene description including composition, mood, key visual elements]. [Style suffix] --ar 2:3
```
- **URL/Status:** [Link or generation status]

### Cover Video (Optional)
- **File:** `public/assets/[adventure-name]/cover-video.mp4`
- **Dimensions:** 800x1200px
- **Duration:** 5-8 seconds, looping
- **Description:** [Animation description]
- **URL/Status:** [Link or generation status]

---

## Background Images (1920x1080px)

### Chapter 1: [Chapter Title]

#### 1. Scene 1 - [Scene Name/Description]
- **File:** `backgrounds/chapter-1-scene-1.png`
- **Prompt:**
```
[Tone]: [Detailed scene description]. [Style suffix] --ar 16:9
```
- **Usage:** Chapter 1, Scene 1 ([scene type])
- **URL/Status:** [Link or status]

#### 2. Scene 2 - [Scene Name/Description]
- **File:** `backgrounds/chapter-1-scene-2.png`
- **Prompt:**
```
[Tone]: [Detailed scene description]. [Style suffix] --ar 16:9
```
- **Usage:** Chapter 1, Scene 2 ([scene type])
- **URL/Status:** [Link or status]

[Continue for all Chapter 1 scenes...]

### Chapter 2: [Chapter Title]

[Repeat pattern for all chapters...]

---

## Scene Illustrations (600x400px)

### Chapter 1: [Chapter Title]

#### 1. [Illustration Name] - Scene [X]
- **File:** `scenes/chapter-1-illustration-1.png`
- **Prompt:**
```
[Tone]: [Subject description, composition, focal point]. [Style suffix] --ar 3:2
```
- **Usage:** Chapter 1, Scene [X] (narrative scene)
- **URL/Status:** [Link or status]

[Continue for all scene illustrations...]

---

## Character Portraits (600x600px)

### 1. [Character Name]
- **File:** `portraits/[character-slug].png`
- **Prompt:**
```
[Tone]: Portrait of [character description - age, appearance, clothing, expression, personality hints]. [Style suffix] --ar 1:1
```
- **Usage:** Dialogue scenes throughout adventure (Chapters [X, Y, Z])
- **Expressions needed:** [Neutral, happy, concerned, etc.]
- **URL/Status:** [Link or status]

### 2. [Character Name]
[Repeat pattern for all characters...]

---

## Maps (1920x1080px)

### 1. [Map Name]
- **File:** `maps/[map-slug].png`
- **Prompt:**
```
[Tone]: [Map description - style (illustrated/cartographic), region shown, key locations labeled, decorative elements, historical accuracy level]. [Style suffix] --ar 16:9
```
- **Usage:** Chapter [X], Scene [Y] (map exploration)
- **Locations to include:** [List of locations that will be clickable]
- **URL/Status:** [Link or status]

[Repeat for all maps...]

---

## Music & Audio

### Background Music

#### Track 1: Main Theme
- **File:** `music/theme.mp3`
- **Style:** [Genre and cultural influence]
- **Instruments:** [Specific instruments, prioritized]
- **Mood:** [Emotional qualities]
- **Tempo:** [BPM range and pacing words]
- **Structure:** [Sections and progression]
- **Length:** 3-5 minutes, loopable
- **Reference Works:** [Similar pieces for inspiration]
- **Technical Notes:** [Production quality, mixing notes - must be suitable for extended play]
- **URL/Status:** [Link or status]

#### Track 2: [Variation/Scene-Specific] (Optional)
[Repeat pattern for additional tracks...]

---

## Video Assets (Optional)

### 1. [Video Name]
- **File:** `[path]/[filename].mp4`
- **Duration:** [X] seconds
- **Description:** [What it depicts, motion/animation]
- **Loop:** Yes/No
- **Technical Notes:** [Resolution, codec, file size target]
- **URL/Status:** [Link or status]

---

## Asset Generation Priority

**Phase 1 - Critical Path (Generate First):**
1. Cover art
2. Chapter 1 backgrounds (3-5 scenes)
3. Main character portraits (2-3 characters)
4. Background music track

**Phase 2 - Core Content (Generate Second):**
1. Remaining backgrounds for Chapters 2-3
2. Scene illustrations for key narrative moments
3. Additional character portraits

**Phase 3 - Complete (Generate Third):**
1. All remaining backgrounds (Chapters 4-5)
2. All remaining scene illustrations
3. Maps
4. Optional videos

**Phase 4 - Polish (Generate Last):**
1. Music variations
2. Ambient sounds
3. Video enhancements

---

## Budget Estimate

**AI Generation Approach:**
- Midjourney Pro: $60/month (unlimited generations)
- Suno/Udio for music: $30/month
- Estimated time: 2-4 weeks
- Total cost: ~$90-200 for complete asset set

**Professional Commission Approach:**
- Illustrations: $100-300 each
- Backgrounds: $200-500 each
- Character portraits: $150-300 each
- Music: $500-2000 per track
- Total cost: ~$5,000-15,000 for complete adventure

---

## Asset Checklist

- [ ] Cover art created
- [ ] All backgrounds generated (0/[X])
- [ ] All scene illustrations created (0/[X])
- [ ] All character portraits created (0/[X])
- [ ] Maps created (0/[X])
- [ ] Music composed/selected (0/[X])
- [ ] All assets optimized for web (<500KB per image)
- [ ] All assets uploaded to correct paths
- [ ] All URLs updated in this document

---

## Asset Organization Structure

```
public/assets/[adventure-name]/
├── cover.png                        # 800x1200px
├── cover-video.mp4                  # Optional, 5-8s loop
├── backgrounds/                     # 1920x1080px
│   ├── chapter-1-scene-1.png
│   ├── chapter-1-scene-2.png
│   ├── chapter-2-scene-1.png
│   └── ...
├── scenes/                          # 600x400px
│   ├── chapter-1-illustration-1.png
│   ├── chapter-1-illustration-2.png
│   └── ...
├── portraits/                       # 600x600px
│   ├── character-main.png
│   ├── character-supporting.png
│   └── ...
├── maps/                           # 1920x1080px
│   ├── world-map.png
│   └── ...
├── music/                          # MP3
│   ├── theme.mp3
│   └── ...
├── videos/                         # MP4 (optional)
│   ├── background-animated.mp4
│   └── ...
└── README.md                       # Asset inventory
```
```

---

## Prompt Crafting Examples

### Background Image Examples

**Arabian Nights - Palace Exterior:**
```
Arabian Nights: Majestic exterior view of an Arabian palace at twilight. Grand architecture with ornate domes and slender minarets silhouetted against a purple-pink sky, palm trees swaying, distant city lights beginning to glow, sense of grandeur and mystery. In the style of Nimona. --ar 16:9
```

**Dante's Inferno - Dark Forest:**
```
Dante's Inferno: Dense, foreboding forest at dusk, twisted ancient trees with gnarled branches reaching overhead, shadows deepening, narrow path barely visible through undergrowth, atmosphere of being lost and uncertain. In the style of Gustave Doré's Divine Comedy engravings mixed with medieval manuscript illumination, dramatic chiaroscuro lighting, educational and accessible --ar 16:9
```

### Character Portrait Examples

**Arabian Nights - Scheherazade:**
```
Arabian Nights: Portrait of Scheherazade, young woman in her twenties with intelligent dark eyes and gentle smile, wearing elegant Middle Eastern royal attire with jeweled headdress, warm confident expression, hint of determination mixed with compassion, flowing fabrics and ornate patterns. In the style of Nimona. --ar 1:1
```

**Dante's Inferno - Virgil:**
```
Dante's Inferno: Virgil the Roman poet, elderly wise man with gray beard and serene expression, laurel crown on head, white toga draped classically, gentle wise smile, golden ethereal aura suggesting his divine guidance, classical Roman features, kind but knowing eyes. In the style of Gustave Doré's Divine Comedy engravings mixed with medieval manuscript illumination, dramatic chiaroscuro lighting, educational and accessible --ar 1:1
```

### Scene Illustration Examples

**Tristan & Isolde - Love Potion Scene:**
```
Medieval artwork: Tristan and Isolde sharing the love potion aboard a ship, intimate moment with goblet between them, Celtic patterns in decorative borders, rich jewel tones of deep blue ocean and ruby wine, romantic yet tragic atmosphere, detailed ship rigging and sails in background. In the style of medieval manuscript illumination with Pre-Raphaelite detail, warm candlelight glow, historically evocative --ar 3:2
```

### Map Examples

**Canterbury Tales - Pilgrimage Route:**
```
14th century manuscript: Medieval map showing pilgrimage route from London to Canterbury, stylized cities represented as clusters of towers and walls, winding road marked clearly, decorative compass rose in corner, parchment texture, key locations labeled in gothic script, educational cartography style with illustrated landmarks. In the style of medieval manuscript maps with illuminated borders, aged parchment aesthetic --ar 16:9
```

---

## Music Prompt Examples

### Arabian Nights Theme
```markdown
### Theme Music
- **File:** `music/theme.mp3`
- **Style:** Traditional Middle Eastern instrumentation with modern cinematic production
- **Instruments:** Oud (primary melody), ney flute (countermelody), qanun (texture), hand drums including darbuka and frame drums (rhythm)
- **Mood:** Mysterious, enchanting, contemplative without being melancholic
- **Tempo:** Slow to medium (60-80 BPM), flowing and unhurried
- **Structure:**
  - Intro: Solo oud establishing main theme (0:00-0:30)
  - Main theme: Full ensemble, ney flute joins (0:30-1:30)
  - Variation: Qanun takes melody, drums more prominent (1:30-2:30)
  - Bridge: Stripped back to oud and light percussion (2:30-3:00)
  - Return to theme: Full ensemble for seamless loop back (3:00-3:30)
- **Length:** 3-4 minutes, seamless loop point
- **Reference Works:** Epic Middle Eastern film scores ("Lawrence of Arabia" meets "Prince of Persia"), but calmer and suitable for study/concentration
- **Technical Notes:** Not too distracting, dynamic range kept moderate, can play for extended periods without fatigue
```

### Dante's Inferno - Descent Theme
```markdown
### Descent Theme
- **File:** `music/descent-theme.mp3`
- **Style:** Dark orchestral with medieval instruments, Gregorian chant influence
- **Instruments:** String section (low register cellos and basses), pipe organ (sustained notes), male choir (Gregorian chant style), lute (medieval texture), hurdy-gurdy (eerie sustained notes)
- **Mood:** Ominous but contemplative, serious without being scary, sense of weight and significance
- **Tempo:** Slow to moderate (60-80 BPM), solemn and deliberate
- **Structure:**
  - Intro: Plainchant opening, unaccompanied male voices (0:00-0:45)
  - Build: Strings enter, low sustained notes (0:45-1:30)
  - Crescendo: Organ joins with minor chord progression (1:30-2:30)
  - Return: Back to chant with light string accompaniment for loop (2:30-3:30)
- **Length:** 3-4 minutes, looping
- **Reference Works:** Hildegard von Bingen meets Arvo Pärt, Carl Orff's Carmina Burana (restrained version), medieval liturgical music
- **Technical Notes:** Minor keys, medieval modes (Dorian, Phrygian), suitable for concentration and reading, educational tone not horror
```

---

## CRITICAL SANITY CHECK

**Before finalizing this document, verify alignment with your outline:**

### Verification Checklist

- [ ] **Background count matches scene count**
  - Count total scenes across all chapters: _____
  - Count total backgrounds documented: _____
  - Every scene has a background assigned? _____ (Yes/No)

- [ ] **Character portraits match dialogue scenes**
  - List all characters in outline: ___________________
  - List all character portraits documented: ___________________
  - Every dialogue scene has portraits for speakers? _____ (Yes/No)

- [ ] **Scene illustrations align with key narrative moments**
  - Review outline for major story beats
  - Verify illustrations created for important moments
  - Check that illustrations don't duplicate background content

- [ ] **Map assets match map-exploration scenes**
  - Count map-exploration scenes in outline: _____
  - Count maps documented: _____
  - Each map has all required locations listed? _____ (Yes/No)

- [ ] **Special assets documented**
  - Anachronism scenes need props/items documented? _____ (Yes/No)
  - Primary source scenes need historical documents? _____ (Yes/No)
  - Timeline scenes have date markers/visuals? _____ (Yes/No)

- [ ] **Asset counts are realistic**
  - Backgrounds per chapter: _____ (should be close to scene count)
  - Total backgrounds: _____ (typically 20-40)
  - Total portraits: _____ (typically 5-15)
  - Total illustrations: _____ (typically 15-30)

### Common Misalignments to Fix

**Too many backgrounds:**
- Multiple scenes can share the same background location
- Dialogue scenes in the same setting don't need new backgrounds

**Missing character portraits:**
- Every speaking character in dialogue scenes needs a portrait
- Characters appearing in multiple chapters need consistent portraits

**Unclear illustration purpose:**
- Scene illustrations should enhance narrative, not duplicate backgrounds
- Use for: close-ups, action moments, emotional beats, educational diagrams

**Map details missing:**
- Each map must list all clickable locations from outline
- Verify location names match those in scene structure

---

## Next Steps

After completing asset planning:

1. **Save this document** as `[adventure-name]_assets.md` in adventure folder
2. **Sanity check complete?** Fix any misalignments found
3. **Proceed to Step 4** (Theme Configuration) while user generates assets
4. **User can begin asset generation** using prompts in parallel

**Remember:** Asset generation happens IN PARALLEL with steps 4-7 (Theme Configuration, Chapter Development, Structure Review, Quiz Creation). By the time code is complete, assets should be ready for integration.

---

## Asset Generation Tools Reference

**Image Generation:**
- **Midjourney** (Discord-based, $10-60/month) - Best for artistic, stylized images
- **DALL-E 3** (ChatGPT Plus, $20/month) - Best for precise prompt following
- **Stable Diffusion** (Free, self-hosted) - Best for full control and customization

**Music Generation:**
- **Suno** (Free tier, $10-30/month) - Best for full songs with lyrics
- **Udio** (Similar to Suno) - Best for instrumental focus

**Audio Editing:**
- **Audacity** (Free, open source) - Basic audio editing and looping

**Image Optimization:**
- **Squoosh** (Free, web-based) - Quick compression
- **ImageOptim** (Free, Mac only) - Batch optimization

---

**Version:** 2.0
**Last Updated:** October 2025
**Part of:** Adventure Authoring Guide
**Next:** [04_theme_configuration.md](04_theme_configuration.md)
