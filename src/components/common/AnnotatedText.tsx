import { useState, useRef, useEffect } from 'react';
import type { AnnotationTooltip, AdventureTheme } from '../../types';

interface AnnotatedTextProps {
  id: string;
  text: string;
  tooltip: AnnotationTooltip;
  theme: AdventureTheme;
}

const CATEGORY_COLORS: Record<string, string> = {
  'historical-context': '#8B7355',
  'literary-context': '#4A5568',
  'cultural-context': '#2C5282',
  'vocabulary': '#276749',
  'reference': '#744210',
};

const AnnotatedText: React.FC<AnnotatedTextProps> = ({ id, text, tooltip, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<'top' | 'bottom'>('top');
  const textRef = useRef<HTMLSpanElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Calculate tooltip position
  useEffect(() => {
    if (isOpen && textRef.current) {
      const rect = textRef.current.getBoundingClientRect();
      const spaceAbove = rect.top;
      const spaceBelow = window.innerHeight - rect.bottom;

      // Show below if not enough space above
      setPosition(spaceAbove < 200 && spaceBelow > spaceAbove ? 'bottom' : 'top');
    }
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        textRef.current &&
        tooltipRef.current &&
        !textRef.current.contains(e.target as Node) &&
        !tooltipRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const categoryColor = CATEGORY_COLORS[tooltip.category] || theme.secondaryColor;

  return (
    <span style={{ position: 'relative', display: 'inline' }}>
      <span
        ref={textRef}
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => {
          // Don't close immediately - user might want to hover over tooltip
          setTimeout(() => {
            if (tooltipRef.current && !tooltipRef.current.matches(':hover')) {
              setIsOpen(false);
            }
          }, 100);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
        }}
        tabIndex={0}
        role="button"
        aria-label={`Learn more about ${text}`}
        aria-expanded={isOpen}
        aria-describedby={isOpen ? `tooltip-${id}` : undefined}
        style={{
          textDecoration: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationColor: categoryColor,
          textDecorationThickness: '2px',
          textUnderlineOffset: '3px',
          cursor: 'help',
          transition: 'all 0.2s ease',
        }}
      >
        {text}
      </span>

      {isOpen && (
        <div
          ref={tooltipRef}
          id={`tooltip-${id}`}
          role="tooltip"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            ...(position === 'top'
              ? { bottom: '100%', marginBottom: '8px' }
              : { top: '100%', marginTop: '8px' }),
            width: 'max-content',
            maxWidth: '400px',
            backgroundColor: 'rgba(0, 0, 0, 0.95)',
            color: 'white',
            padding: '1rem',
            borderRadius: '0.5rem',
            borderLeft: `4px solid ${categoryColor}`,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
            zIndex: 1000,
            animation: 'fadeIn 200ms ease-out',
            pointerEvents: 'auto',
          }}
        >
          {/* Title */}
          <div
            style={{
              fontWeight: 'bold',
              fontSize: '1rem',
              marginBottom: '0.5rem',
              fontFamily: theme.fontFamily || 'inherit',
            }}
          >
            {tooltip.title}
          </div>

          {/* Content */}
          <div
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.5',
              marginBottom: '0.5rem',
            }}
          >
            {tooltip.content}
          </div>

          {/* Category badge */}
          <div
            style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: categoryColor,
              backgroundColor: `${categoryColor}20`,
              padding: '0.25rem 0.5rem',
              borderRadius: '0.25rem',
              marginTop: '0.5rem',
            }}
          >
            {tooltip.category.replace('-', ' ')}
          </div>
        </div>
      )}

      {/* CSS animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(${position === 'top' ? '4px' : '-4px'});
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
        `}
      </style>
    </span>
  );
};

export default AnnotatedText;
