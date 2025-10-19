import { Fragment } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import type { Components } from 'react-markdown';
import type { InlineAnnotation, AdventureTheme } from '../../types';
import AnnotatedText from './AnnotatedText';

interface ContentWithAnnotationsProps {
  content: string;
  annotations?: InlineAnnotation[];
  theme: AdventureTheme;
  style?: React.CSSProperties;
  enableMarkdown?: boolean; // New prop to enable markdown rendering
}

/**
 * Renders text content with inline annotations and optional markdown support.
 * Replaces annotated phrases with AnnotatedText components that show tooltips on hover.
 */
const ContentWithAnnotations: React.FC<ContentWithAnnotationsProps> = ({
  content,
  annotations,
  theme,
  style,
  enableMarkdown = false,
}) => {
  // Helper function to process children and apply annotations
  const processChildren = (children: React.ReactNode): React.ReactNode => {
    if (!children) return children;

    // If children is a string, apply annotations to it
    if (typeof children === 'string') {
      return applyAnnotationsToText(children);
    }

    // If children is an array, process each child
    if (Array.isArray(children)) {
      return children.map((child, index) => {
        if (typeof child === 'string') {
          return <Fragment key={index}>{applyAnnotationsToText(child)}</Fragment>;
        }
        return child;
      });
    }

    return children;
  };

  // Helper function to apply annotations to text
  const applyAnnotationsToText = (text: string): React.ReactNode => {
    if (!annotations || annotations.length === 0) {
      return text;
    }

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
        const index = text.indexOf(annotation.text);
        if (index === -1) {
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

    let currentPos = 0;

    for (const { annotation, start, end } of annotationPositions) {
      // Add text before annotation
      if (currentPos < start) {
        segments.push({
          type: 'text',
          content: text.slice(currentPos, start),
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
    if (currentPos < text.length) {
      segments.push({
        type: 'text',
        content: text.slice(currentPos),
        start: currentPos,
        end: text.length,
      });
    }

    return (
      <>
        {segments.map((segment, index) => {
          if (segment.type === 'text') {
            return <Fragment key={`text-${index}-${segment.start}`}>{segment.content}</Fragment>;
          } else {
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
      </>
    );
  };

  if (!annotations || annotations.length === 0) {
    // No annotations, render with or without markdown
    if (enableMarkdown) {
      return (
        <div style={style}>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>{content}</ReactMarkdown>
        </div>
      );
    }
    return <div style={style}>{content}</div>;
  }

  // With markdown enabled, use custom renderers to apply annotations to text nodes
  if (enableMarkdown) {
    const components: Components = {
      // Process all text-containing elements to apply annotations to their string children
      p: ({ children, ...props }) => {
        return <p {...props}>{processChildren(children)}</p>;
      },
      em: ({ children, ...props }) => {
        return <em {...props}>{processChildren(children)}</em>;
      },
      strong: ({ children, ...props }) => {
        return <strong {...props}>{processChildren(children)}</strong>;
      },
      li: ({ children, ...props }) => {
        return <li {...props}>{processChildren(children)}</li>;
      },
      h1: ({ children, ...props }) => {
        return <h1 {...props}>{processChildren(children)}</h1>;
      },
      h2: ({ children, ...props }) => {
        return <h2 {...props}>{processChildren(children)}</h2>;
      },
      h3: ({ children, ...props }) => {
        return <h3 {...props}>{processChildren(children)}</h3>;
      },
    };

    return (
      <div style={style}>
        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} components={components}>
          {content}
        </ReactMarkdown>
      </div>
    );
  }

  // Default: plain text rendering (no markdown)
  // Build segments for plain text
  const segments: Array<{
    type: 'text' | 'annotation';
    content: string;
    annotation?: InlineAnnotation;
    start: number;
    end: number;
  }> = [];

  const annotationPositions = annotations
    .map((annotation) => {
      const index = content.indexOf(annotation.text);
      if (index === -1) {
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

  let currentPos = 0;

  for (const { annotation, start, end } of annotationPositions) {
    if (currentPos < start) {
      segments.push({
        type: 'text',
        content: content.slice(currentPos, start),
        start: currentPos,
        end: start,
      });
    }

    segments.push({
      type: 'annotation',
      content: annotation.text,
      annotation,
      start,
      end,
    });

    currentPos = end;
  }

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
          return <Fragment key={`text-${index}-${segment.start}`}>{segment.content}</Fragment>;
        } else {
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
