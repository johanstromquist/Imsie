# Feature: Inline Annotations (Contextual Learning Tooltips)

## Overview

Inline annotations allow content creators to add contextual learning "nuggets" directly within narrative text. Words or phrases can be marked for annotation, and when users hover over (desktop) or tap (mobile) these marked elements, a tooltip appears with additional context, historical information, or literary analysis.

This feature was created to address the "China" paradox in Aladdin - the story says "China" but depicts a Middle Eastern setting. Rather than changing the text, we preserve literary authenticity while explaining the discrepancy.

## User Experience

### Visual Design
- **Underline**: Annotated text has a subtle dotted underline in the theme's secondary color
- **Cursor**: Changes to a help cursor (`cursor: help`) on hover
- **Tooltip**: Appears above the text on hover with:
  - **Title**: Bold, clear heading
  - **Content**: Explanation or context (1-3 sentences)
  - **Category badge**: Color-coded by type
  - **Dismissible**: Click outside or press Escape to close

### Interaction Patterns

**Desktop:**
- Hover to reveal tooltip
- Tooltip persists while hovering over it (for selecting text)
- Click outside or move away to dismiss

**Mobile:**
- Tap to reveal tooltip
- Tap outside or on close button to dismiss
- Tooltip positioned to avoid covering content

**Accessibility:**
- Screen readers announce "annotated text, press Enter for more information"
- Keyboard navigation: Tab to annotated text, Enter to open tooltip
- ARIA labels and roles properly implemented

## Technical Implementation

### Type Definitions

Already added to `src/types/adventure.ts`:

```typescript
export interface InlineAnnotation {
  id: string;
  text: string; // The word or phrase to underline
  tooltip: AnnotationTooltip;
}

export interface AnnotationTooltip {
  title: string;
  content: string;
  category: 'historical-context' | 'literary-context' | 'cultural-context' | 'vocabulary' | 'reference';
  relatedLearningPoints?: string[];
}
```

### Component Architecture

#### 1. NarrativeScene Enhancement

The `NarrativeScene` component needs to:
1. Parse the `inlineAnnotations` array
2. Render annotated text with special markup
3. Handle tooltip display logic

**Rendering Logic:**
```tsx
// Pseudocode
function renderContentWithAnnotations(content: string, annotations: InlineAnnotation[]) {
  // Sort annotations by first occurrence in text
  // Replace each annotated phrase with <AnnotatedText> component
  // Return JSX with mixed plain text and AnnotatedText components
}
```

#### 2. AnnotatedText Component

**Props:**
```typescript
interface AnnotatedTextProps {
  id: string;
  text: string;
  tooltip: AnnotationTooltip;
  theme: AdventureTheme;
}
```

**Features:**
- Renders the text with dotted underline styling
- Manages tooltip open/close state
- Positions tooltip dynamically (above, below, left, right based on viewport)
- Handles click outside / escape key

#### 3. AnnotationTooltip Component

**Props:**
```typescript
interface AnnotationTooltipProps {
  title: string;
  content: string;
  category: string;
  isOpen: boolean;
  position: { x: number; y: number };
  onClose: () => void;
}
```

**Styling:**
- Card-style with subtle shadow
- Category-specific color accent (border-left or badge)
- Smooth fade-in animation (200ms)
- Max width: 400px
- Responsive padding

### Usage Example

```typescript
{
  id: 'scene-1',
  type: 'narrative',
  content: `In a city in China, there once lived a poor boy named Aladdin...`,
  inlineAnnotations: [
    {
      id: 'china-setting',
      text: 'China',
      tooltip: {
        title: 'Why "China"?',
        content: 'The story says "China," but everything about it is Middle Eastern. To medieval audiences, "China" meant "far-off exotic land." It was fantasy worldbuilding, not geography.',
        category: 'literary-context',
      },
    },
    {
      id: 'aladdin-origin',
      text: 'Aladdin',
      tooltip: {
        title: 'Aladdin\'s Surprising Origin',
        content: 'Aladdin wasn\'t in the original Arabic manuscripts! French translator Antoine Galland added it around 1709 from Syrian storyteller Hanna Diyab.',
        category: 'historical-context',
      },
    },
  ],
}
```

## Design Specifications

### Colors by Category

```css
--annotation-historical: #8B7355 (warm brown)
--annotation-literary: #4A5568 (slate gray)
--annotation-cultural: #2C5282 (deep blue)
--annotation-vocabulary: #276749 (forest green)
--annotation-reference: #744210 (burnt orange)
```

### Typography

- **Title**: Bold, 1rem, theme font
- **Content**: Regular, 0.875rem, line-height 1.5
- **Annotated text**: Inherit from parent, dotted underline 2px

### Animation

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.tooltip {
  animation: fadeIn 200ms ease-out;
}
```

## Content Guidelines

### When to Use Annotations

**Good use cases:**
- Historical paradoxes (like the "China" example)
- Cultural context that enhances understanding
- Literary techniques being demonstrated
- References that modern readers might miss
- Vocabulary that's archaic or specialized

**Avoid:**
- Over-annotation (max 3-4 per scene)
- Obvious information
- Content that belongs in main learning points
- Breaking immersion unnecessarily

### Writing Annotation Content

**Best practices:**
- Keep it SHORT (1-3 sentences max)
- Start with the most interesting insight
- Use active voice
- Make it feel like a discovery, not a lecture
- Connect to the main narrative

**Good example:**
> "The story says 'China,' but everything—the sultan, bazaars, architecture—is Middle Eastern. To medieval audiences, 'China' meant 'far-off exotic land.' Fantasy worldbuilding, not geography!"

**Bad example:**
> "China is a country in East Asia. In this story, it refers to a setting that is actually based on Middle Eastern culture and geography, which may seem confusing to modern readers."

## Progressive Enhancement

### Phase 1 (MVP)
- [x] Type definitions added
- [ ] Basic AnnotatedText component
- [ ] Tooltip rendering
- [ ] Desktop hover interaction
- [ ] First implementation in Aladdin Chapter 3

### Phase 2
- [ ] Mobile tap interaction
- [ ] Keyboard navigation
- [ ] Screen reader support
- [ ] Analytics tracking (which annotations are clicked)

### Phase 3
- [ ] Annotation history / "already seen" state
- [ ] Link annotations to full learning points
- [ ] "View all annotations" panel
- [ ] Export annotations as study notes

## Related Features

### Video Enhancements

Also added support for optional video versions:
- `backgroundVideo` (BaseScene)
- `imageVideo` (NarrativeScene)
- `portraitVideo` (Character in DialogueScene)

These work alongside static images, playing on hover or as animated alternatives.

## Example Implementation

See **Chapter 3: Aladdin, Scene 1** for the first live example:
- `/src/adventures/arabian-nights/chapters/chapter-3-aladdin.ts`
- Lines 43-62: inlineAnnotations array with 2 annotations

## Testing Checklist

- [ ] Annotations render correctly in narrative text
- [ ] Tooltips appear on hover (desktop)
- [ ] Tooltips appear on tap (mobile)
- [ ] Multiple annotations don't overlap
- [ ] Tooltips don't go off-screen
- [ ] Keyboard navigation works
- [ ] Screen readers announce properly
- [ ] Theme colors apply correctly
- [ ] Category badges display
- [ ] No performance issues with 3-4 annotations per scene

## Future Enhancements

1. **Glossary Integration**: Link annotations to a running glossary
2. **Progressive Disclosure**: Track which annotations user has seen
3. **Search**: Find scenes by annotation keywords
4. **Export**: Generate study guide from all annotations
5. **Multimedia**: Support images/diagrams in tooltips
6. **Cross-references**: Link related annotations across chapters

---

**Status**: Types defined, first example implemented, component development needed
**Priority**: Medium (enhances learning but not blocking)
**Estimated effort**: 1-2 days for MVP implementation
