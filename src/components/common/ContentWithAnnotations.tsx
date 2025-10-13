import { Fragment } from 'react';
import type { InlineAnnotation, AdventureTheme } from '../../types';
import AnnotatedText from './AnnotatedText';

interface ContentWithAnnotationsProps {
  content: string;
  annotations?: InlineAnnotation[];
  theme: AdventureTheme;
  style?: React.CSSProperties;
}

/**
 * Renders text content with inline annotations.
 * Replaces annotated phrases with AnnotatedText components that show tooltips on hover.
 */
const ContentWithAnnotations: React.FC<ContentWithAnnotationsProps> = ({
  content,
  annotations,
  theme,
  style,
}) => {
  if (!annotations || annotations.length === 0) {
    // No annotations, just render the content
    return <div style={style}>{content}</div>;
  }

  // Build a list of all text segments and annotations
  interface Segment {
    type: 'text' | 'annotation';
    content: string;
    annotation?: InlineAnnotation;
    start: number;
    end: number;
  }

  const segments: Segment[] = [];

  // Find all annotation positions in the text
  const annotationPositions = annotations
    .map((annotation) => {
      const index = content.indexOf(annotation.text);
      if (index === -1) {
        console.warn(`Annotation text "${annotation.text}" not found in content`);
        return null;
      }
      return {
        annotation,
        start: index,
        end: index + annotation.text.length,
      };
    })
    .filter((pos): pos is NonNullable<typeof pos> => pos !== null)
    .sort((a, b) => a.start - b.start);

  // Check for overlapping annotations
  for (let i = 0; i < annotationPositions.length - 1; i++) {
    const current = annotationPositions[i];
    const next = annotationPositions[i + 1];
    if (current.end > next.start) {
      console.warn(
        `Overlapping annotations detected: "${current.annotation.text}" and "${next.annotation.text}"`
      );
    }
  }

  // Build segments
  let currentPos = 0;

  for (const { annotation, start, end } of annotationPositions) {
    // Add text before annotation
    if (currentPos < start) {
      segments.push({
        type: 'text',
        content: content.slice(currentPos, start),
        start: currentPos,
        end: start,
      });
    }

    // Add annotation
    segments.push({
      type: 'annotation',
      content: annotation.text,
      annotation,
      start,
      end,
    });

    currentPos = end;
  }

  // Add remaining text
  if (currentPos < content.length) {
    segments.push({
      type: 'text',
      content: content.slice(currentPos),
      start: currentPos,
      end: content.length,
    });
  }

  return (
    <div style={style}>
      {segments.map((segment, index) => {
        if (segment.type === 'text') {
          // Preserve whitespace and line breaks
          return <Fragment key={`text-${index}-${segment.start}`}>{segment.content}</Fragment>;
        } else {
          // Render annotated text
          return (
            <AnnotatedText
              key={`annotation-${segment.annotation!.id}-${index}`}
              id={segment.annotation!.id}
              text={segment.content}
              tooltip={segment.annotation!.tooltip}
              theme={theme}
            />
          );
        }
      })}
    </div>
  );
};

export default ContentWithAnnotations;
