# Adventure Authoring Guide - START HERE

**Version:** 2.0
**Last Updated:** October 2025

## Purpose

This guide walks you through creating an educational adventure for Imsie from initial concept to final deployment. Each step is documented in a separate focused guide to maintain clarity and context.

---

## Overview: The 9-Step Process

Creating an adventure involves these major phases:

1. **File Structure Setup** - Create the folder and file structure for your adventure
2. **Adventure Outline** - Define source material, learning objectives, and chapter structure (narrative only)
3. **Asset Planning** - Document all visual and audio assets with generation prompts, verify alignment with outline
4. **Theme Configuration** - Set up colors, fonts, and styling
5. **Chapter Development** - Write all chapters in parallel (scenes, learning points, narrative content)
6. **Structure Review** - Verify scene sequence and mini-game context
7. **Quiz Creation** - Build all quizzes and verify question types
8. **Type & Lint Checking** - Run automated checks to catch errors
9. **Asset Integration** - User provides URLs/files, we integrate them

**Estimated Timeline:** 2-4 months for a complete adventure

**Note:** User handles asset generation (parallel to steps 4-7) and play testing (after step 9)

---

## How to Use This Guide

### For AI Assistants (Claude)

When a user asks you to help create an adventure, follow this exact workflow. **Do NOT stop to ask for user confirmation between steps** - the guides are self-sufficient and you should proceed automatically through all steps.

---

#### Step 1: File Structure Setup
**INSTRUCTION:** Create a comprehensive todo list with all tasks for Step 1. Read and follow `01_file_structure.md`.

**Todo items should include:**
- Read the file structure guide
- Confirm adventure name with user
- Create adventure directory under `src/adventures/[adventure-name]/`
- Create folder structure (chapters/, quizzes/)
- Create placeholder `index.ts`
- Create placeholder `theme.ts`
- Verify structure is correct

**Automatically proceed to Step 2 when complete.**

---

#### Step 2: Adventure Outline
**INSTRUCTION:** Create a comprehensive todo list with all tasks for Step 2. Read and follow `02_adventure_outline.md`.

**Todo items should include:**
- Read the outline guide
- Discuss with user: source material and overall vision
- Define adventure-level learning objectives (3-5)
- Outline chapter structure (typically 5 chapters)
- For each chapter, define:
  - Chapter title and theme
  - Chapter-specific learning objectives (3-5)
  - Scene flow outline (8-15 scenes) - TYPES AND DESCRIPTIONS ONLY, no content yet
  - Key themes covered
  - Quiz topics
- Create `ADVENTURE_OUTLINE.md` with complete structure

**This is NARRATIVE PLANNING ONLY - no asset planning yet.**

**Automatically proceed to Step 3 when complete.**

---

#### Step 3: Asset Planning
**INSTRUCTION:** Create a comprehensive todo list with all tasks for Step 3. Read and follow `03_asset_planning.md`.

**Todo items should include:**
- Read the asset planning guide
- Review the outline from Step 2
- Determine visual style and artistic direction
- Choose color palette
- Create tone prefix and style suffix for prompts
- Create `[adventure-name]_assets.md` file with:
  - Cover art prompt
  - Background image prompts (20-40 based on outline)
  - Scene illustration prompts (15-30 based on outline)
  - Character portrait prompts (5-15 based on outline)
  - Map prompts (0-5 if needed)
  - Music requirements (1-4 tracks)
- **CRITICAL:** Sanity check asset file against outline
  - Verify all scenes have required backgrounds
  - Ensure character portraits match dialogue scenes
  - Confirm scene illustrations align with narrative beats
- Prioritize asset generation phases

**At this point, inform user:**
"Asset planning complete. You can now begin generating assets using the prompts in `[adventure-name]_assets.md`. I will continue with theme configuration and chapter development while you work on assets in parallel."

**Automatically proceed to Step 4 when complete.**

---

#### Step 4: Theme Configuration
**INSTRUCTION:** Create a comprehensive todo list with all tasks for Step 4. Read and follow `04_theme_configuration.md`.

**Todo items should include:**
- Read the theme configuration guide
- Use color palette from asset planning (Step 3)
- Select font family appropriate for adventure
- Configure `theme.ts` with colors and fonts
- Set up music playlist structure (placeholder paths)
- Update `index.ts` with theme reference and adventure metadata

**Automatically proceed to Step 5 when complete.**

---

#### Step 5: Chapter Development
**INSTRUCTION:** Create comprehensive todo lists for ALL chapters. Read and follow `05_chapter_development.md`.

**CRITICAL:** Create separate task for EACH chapter to enable parallel execution.

**For EACH chapter, todo items should include:**
- Read the chapter development guide (once, shared across all tasks)
- Review chapter outline from Step 2
- Implement all 8-15 scenes:
  - Write scene content (narrative text, decision context, dialogue trees, etc.)
  - Add learning points (1-3 per scene)
  - Link to appropriate asset placeholders from Step 3
  - Add inline annotations where appropriate
  - Implement scene-specific mechanics (mini-games, maps, etc.)
- Add quiz trigger to final scene
- Create chapter file in `chapters/chapter-[X]-[name].ts`

**Execute all chapter tasks IN PARALLEL for maximum efficiency.**

**Automatically proceed to Step 6 when all chapters complete.**

---

#### Step 6: Structure Review
**INSTRUCTION:** Create a comprehensive todo list for structure review. Read and follow `06_structure_review.md`.

**Todo items should include:**
- Read the structure review guide
- For each chapter, verify:
  - Scene sequence is logical
  - Narrative scenes provide context before interactive scenes
  - Mini-games have adequate narrative setup
  - No jarring transitions between scene types
  - Learning points build progressively
  - Pacing is appropriate (not too many narratives in a row)
- Fix any structural issues found
- Document any changes made

**Automatically proceed to Step 7 when complete.**

---

#### Step 7: Quiz Creation
**INSTRUCTION:** Create comprehensive todo lists for ALL quizzes. Read and follow `07_quiz_creation.md`.

**Todo items for EACH quiz should include:**
- Read the quiz creation guide (once, shared across all tasks)
- Review chapter content and learning objectives
- Create quiz file in `quizzes/chapter-[X]-quiz.ts`
- Write 8-15 questions with correct distribution:
  - 60-70% multiple-choice
  - 10-20% true-false
  - 5-10% short-answer (ONLY for exact word/phrase matching)
  - 5-10% matching
  - 5-10% self-assessment (1-2 questions)
- Ensure ALL questions have `relatedLearningPoints: []` field (REQUIRED)
- Link quiz to chapter in chapter file

**After all chapter quizzes:**
- Create comprehensive final quiz (15-20 questions)
- Link final quiz to adventure in `index.ts`

**Then verify question types:**
- Review all questions to ensure correct types used
- Check that NO short-answer questions ask for reasoning/analysis
- Verify self-assessment questions have proper criteria
- Fix any question type mismatches

**Automatically proceed to Step 8 when complete.**

---

#### Step 8: Type & Lint Checking
**INSTRUCTION:** Create a comprehensive todo list for automated checking. Read and follow `08_type_lint_checking.md`.

**Todo items should include:**
- Read the type & lint checking guide
- Run TypeScript type checker: `npx tsc -b --force`
- Fix any TypeScript errors found:
  - Missing `relatedLearningPoints` in quiz questions
  - Incorrect dialogue response structures
  - Duplicate IDs
  - Invalid type assignments
- Run linter: `npm run lint`
- Fix any linter errors (warnings acceptable)
- Run build: `npm run build`
- Fix any build errors
- Verify build succeeds completely

**Automatically proceed to Step 9 when all checks pass.**

---

#### Step 9: Asset Integration
**INSTRUCTION:** Wait for user to provide asset URLs/files. Then create todo list and follow `09_asset_integration.md`.

**Inform user:**
"Development complete! All chapters, quizzes, and code are ready. Please:
1. Generate/commission all assets using `[adventure-name]_assets.md`
2. Upload assets to `public/assets/[adventure-name]/` following the folder structure
3. Add music files to `public/assets/[adventure-name]/music/`
4. Update `[adventure-name]_assets.md` with actual file paths or URLs
5. Let me know when assets are ready for integration"

**When user returns with assets:**
- Read the asset integration guide
- Review updated asset file with URLs/paths
- Update all asset references in chapter files
- Update music paths in theme.ts
- Update cover art in index.ts
- Verify all asset paths are correct
- Run build to ensure no broken references

**After integration complete, inform user:**
"Asset integration complete! The adventure is ready for play testing. Please test thoroughly and report any issues."

**Guide workflow ends here. User performs play testing and provides feedback for any fixes needed.**

---

## Important Reminders for AI Assistants

### Context Management
- **Load one guide at a time** to maintain focus
- After reading a guide, create todos BEFORE starting work
- Mark todos as complete as you finish each task
- Don't skip ahead - complete each step fully before moving on

### Common Pitfalls to Avoid
1. **Missing `relatedLearningPoints`** - ALL quiz questions MUST have this field (can be empty array)
2. **Terminal dialogue responses** - Omit `nextNodeId` field entirely for end-of-dialogue responses
3. **Misusing `short-answer`** - Only use for exact word/phrase matching, NOT for reasoning questions
4. **Skipping testing** - Always run type-check and build before declaring complete

### Type Safety Checklist
Before declaring a step complete, verify:
- [ ] All IDs are unique
- [ ] All quiz questions have `relatedLearningPoints` field
- [ ] Dialogue responses are correctly structured
- [ ] All asset paths are valid
- [ ] TypeScript compiles without errors (`npx tsc -b --force`)
- [ ] Build succeeds (`npm run build`)

---

## Guide Structure

Each step has its own detailed guide:

- **[01_file_structure.md](01_file_structure.md)** - Directory setup, placeholder files
- **[02_adventure_outline.md](02_adventure_outline.md)** - Source selection, learning objectives, chapter structure
- **[03_asset_planning.md](03_asset_planning.md)** - Visual style, asset documentation, generation prompts
- **[04_theme_configuration.md](04_theme_configuration.md)** - Colors, fonts, styling
- **[05_chapter_development.md](05_chapter_development.md)** - Scene writing, learning points, content creation
- **[06_structure_review.md](06_structure_review.md)** - Scene sequence verification, narrative flow
- **[07_quiz_creation.md](07_quiz_creation.md)** - Question writing, type selection, validation
- **[08_type_lint_checking.md](08_type_lint_checking.md)** - Automated error checking
- **[09_asset_integration.md](09_asset_integration.md)** - Integrating user-provided assets

**Additional Resources:**
- **[appendices.md](appendices.md)** - Reference materials, tools, glossary
- **[common_type_errors.md](common_type_errors.md)** - TypeScript gotchas and how to avoid them

---

## Quick Reference

**For scene types:** See `docs/SCENE_TYPES_REFERENCE.md`
**For quiz system:** See `docs/QUIZ_SYSTEM_REFERENCE.md`
**For type definitions:** See `src/types/adventure.ts`
**For examples:** See `src/adventures/arabian-nights/` or `src/adventures/dantes-inferno/`

---

## Getting Started

**If you're ready to begin:**

1. Confirm you understand the 8-step process
2. Start with Step 1: Read `01_planning_and_concept.md`
3. Create your first todo list
4. Begin execution

**Good luck with your adventure! 🚀**

---

**Version:** 2.0
**Last Updated:** October 2025
**Contributors:** Johan Strömquist, Claude (Anthropic)
