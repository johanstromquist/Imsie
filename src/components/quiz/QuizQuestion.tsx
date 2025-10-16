import React, { useState, useMemo } from 'react';
import type { QuizQuestion as QuizQuestionType, AdventureTheme } from '../../types';

interface QuizQuestionProps {
  question: QuizQuestionType;
  theme: AdventureTheme;
  onAnswer: (answer: string | string[] | Record<string, string>) => void;
  currentAnswer?: string | string[] | Record<string, string>;
  showFeedback: boolean;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  theme,
  onAnswer,
  currentAnswer,
  showFeedback,
}) => {
  const [localAnswer, setLocalAnswer] = useState<string | string[] | Record<string, string>>(
    currentAnswer || ''
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  // Check if answer is correct (for feedback display)
  const isCorrect = showFeedback && checkAnswer();

  function checkAnswer(): boolean {
    if (!localAnswer) return false;

    const correct = question.correctAnswer;

    // Handle different answer types
    if (typeof correct === 'string' && typeof localAnswer === 'string') {
      return correct.toLowerCase().trim() === localAnswer.toLowerCase().trim();
    }

    if (Array.isArray(correct) && Array.isArray(localAnswer)) {
      return (
        correct.length === localAnswer.length &&
        correct.every((item) => localAnswer.includes(item))
      );
    }

    if (
      typeof correct === 'object' &&
      !Array.isArray(correct) &&
      typeof localAnswer === 'object' &&
      !Array.isArray(localAnswer)
    ) {
      const correctEntries = Object.entries(correct);
      const answerEntries = Object.entries(localAnswer);
      return (
        correctEntries.length === answerEntries.length &&
        correctEntries.every(([key, value]) => localAnswer[key] === value)
      );
    }

    return false;
  }

  function handleMultipleChoice(option: string) {
    setLocalAnswer(option);
    onAnswer(option);
  }

  function handleTrueFalse(value: string) {
    setLocalAnswer(value);
    onAnswer(value);
  }

  function handleShortAnswer(value: string) {
    setLocalAnswer(value);
    onAnswer(value);
  }

  function handleMatching(item: string, match: string) {
    const newAnswer = {
      ...(typeof localAnswer === 'object' && !Array.isArray(localAnswer) ? localAnswer : {}),
      [item]: match,
    };
    setLocalAnswer(newAnswer);
    onAnswer(newAnswer);
  }

  // Get feedback styling
  const getFeedbackStyle = () => {
    if (!showFeedback) return {};
    return {
      borderColor: isCorrect ? '#22c55e' : '#ef4444',
      backgroundColor: isCorrect ? 'rgba(34, 197, 94, 0.1)' : 'rgba(239, 68, 68, 0.1)',
    };
  };

  // Render based on question type
  function renderQuestionInput() {
    switch (question.type) {
      case 'multiple-choice':
        return renderMultipleChoice();
      case 'true-false':
        return renderTrueFalse();
      case 'short-answer':
        return renderShortAnswer();
      case 'matching':
        return renderMatching();
      case 'self-assessment':
        return renderSelfAssessmentInput();
      default:
        return <div>Unknown question type</div>;
    }
  }

  function renderMultipleChoice() {
    if (!question.options) return null;

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        {question.options.map((option, index) => {
          const isSelected = localAnswer === option;
          return (
            <button
              key={index}
              onClick={() => handleMultipleChoice(option)}
              disabled={showFeedback}
              style={{
                padding: '1rem 1.5rem',
                fontSize: '1rem',
                textAlign: 'left',
                backgroundColor: isSelected
                  ? `${theme.secondaryColor}40`
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: `2px solid ${isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.3)'}`,
                borderRadius: '0.75rem',
                cursor: showFeedback ? 'default' : 'pointer',
                transition: 'all 0.2s',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                if (!showFeedback) {
                  e.currentTarget.style.transform = 'translateX(8px)';
                  e.currentTarget.style.borderColor = theme.secondaryColor;
                }
              }}
              onMouseLeave={(e) => {
                if (!showFeedback) {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.borderColor = isSelected
                    ? theme.secondaryColor
                    : 'rgba(255, 255, 255, 0.3)';
                }
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.secondaryColor}40`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    border: `2px solid ${isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.5)'}`,
                    backgroundColor: isSelected ? theme.secondaryColor : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  {isSelected && (
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: 'white',
                      }}
                    />
                  )}
                </div>
                <span style={{ flex: 1 }}>{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  function renderTrueFalse() {
    return (
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {['True', 'False'].map((value) => {
          const isSelected = localAnswer === value;
          return (
            <button
              key={value}
              onClick={() => handleTrueFalse(value)}
              disabled={showFeedback}
              style={{
                padding: '1.5rem 3rem',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                backgroundColor: isSelected
                  ? theme.secondaryColor
                  : 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                border: `2px solid ${isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.3)'}`,
                borderRadius: '0.75rem',
                cursor: showFeedback ? 'default' : 'pointer',
                transition: 'all 0.2s',
                outline: 'none',
                minWidth: '150px',
              }}
              onMouseEnter={(e) => {
                if (!showFeedback) {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.borderColor = theme.secondaryColor;
                }
              }}
              onMouseLeave={(e) => {
                if (!showFeedback) {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = isSelected
                    ? theme.secondaryColor
                    : 'rgba(255, 255, 255, 0.3)';
                }
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.secondaryColor}40`;
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {value}
            </button>
          );
        })}
      </div>
    );
  }

  function renderShortAnswer() {
    return (
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <input
          type="text"
          value={typeof localAnswer === 'string' ? localAnswer : ''}
          onChange={(e) => handleShortAnswer(e.target.value)}
          disabled={showFeedback}
          placeholder="Type your answer here..."
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '0.75rem',
            outline: 'none',
            transition: 'all 0.2s',
          }}
          onFocus={(e) => {
            if (!showFeedback) {
              e.currentTarget.style.borderColor = theme.secondaryColor;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.secondaryColor}40`;
            }
          }}
          onBlur={(e) => {
            if (!showFeedback) {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        />
      </div>
    );
  }

  function renderMatching() {
    // For matching questions, we expect correctAnswer to be a Record<string, string>
    // where keys are items and values are their correct matches
    if (typeof question.correctAnswer !== 'object' || Array.isArray(question.correctAnswer)) {
      return <div>Invalid matching question configuration</div>;
    }

    const correctAnswer = question.correctAnswer as Record<string, string>;
    const items = Object.keys(correctAnswer);
    const matches = [...new Set(Object.values(correctAnswer))]; // unique matches

    // Helper function to shuffle array with a seed (for consistent randomization per item)
    const shuffleWithSeed = (array: string[], seed: string): string[] => {
      const arr = [...array];
      let currentIndex = arr.length;

      // Simple seeded random number generator
      const seedNum = seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
      let random = seedNum;

      const seededRandom = () => {
        random = (random * 9301 + 49297) % 233280;
        return random / 233280;
      };

      while (currentIndex !== 0) {
        const randomIndex = Math.floor(seededRandom() * currentIndex);
        currentIndex--;
        [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
      }

      return arr;
    };

    // Create shuffled versions for each item (using useMemo to keep stable across renders)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const shuffledMatches = useMemo(() => {
      const result: Record<string, string[]> = {};
      items.forEach((item) => {
        result[item] = shuffleWithSeed(matches, item + question.id);
      });
      return result;
    }, [items.join(','), matches.join(','), question.id]);

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {items.map((item) => {
            const currentMatch =
              typeof localAnswer === 'object' && !Array.isArray(localAnswer)
                ? localAnswer[item]
                : '';
            const isOpen = openDropdown === item;

            return (
              <div
                key={item}
                style={{
                  display: 'flex',
                  alignItems: 'stretch',
                  gap: '1rem',
                  padding: '1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.75rem',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  transition: 'all 0.2s',
                }}
              >
                {/* Left side - Item name */}
                <div
                  style={{
                    flex: '1',
                    fontSize: '1.05rem',
                    color: 'white',
                    fontWeight: '600',
                    display: 'flex',
                    alignItems: 'center',
                    paddingRight: '1rem',
                  }}
                >
                  {item}
                </div>

                {/* Arrow */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    color: theme.secondaryColor,
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                  }}
                >
                  →
                </div>

                {/* Right side - Custom dropdown */}
                <div style={{ flex: '1', position: 'relative' }}>
                  <button
                    onClick={() => {
                      if (!showFeedback) {
                        setOpenDropdown(isOpen ? null : item);
                      }
                    }}
                    disabled={showFeedback}
                    style={{
                      width: '100%',
                      padding: '0.875rem 1.25rem',
                      fontSize: '1rem',
                      textAlign: 'left',
                      backgroundColor: currentMatch
                        ? 'rgba(255, 255, 255, 0.15)'
                        : 'rgba(255, 255, 255, 0.08)',
                      color: currentMatch ? 'white' : 'rgba(255, 255, 255, 0.5)',
                      border: `2px solid ${
                        currentMatch ? theme.secondaryColor : 'rgba(255, 255, 255, 0.2)'
                      }`,
                      borderRadius: '0.5rem',
                      cursor: showFeedback ? 'default' : 'pointer',
                      outline: 'none',
                      transition: 'all 0.2s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      fontWeight: currentMatch ? '500' : '400',
                    }}
                    onMouseEnter={(e) => {
                      if (!showFeedback) {
                        e.currentTarget.style.borderColor = theme.secondaryColor;
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!showFeedback && !isOpen) {
                        e.currentTarget.style.borderColor = currentMatch
                          ? theme.secondaryColor
                          : 'rgba(255, 255, 255, 0.2)';
                        e.currentTarget.style.backgroundColor = currentMatch
                          ? 'rgba(255, 255, 255, 0.15)'
                          : 'rgba(255, 255, 255, 0.08)';
                      }
                    }}
                  >
                    <span>{currentMatch || 'Select a match...'}</span>
                    <span
                      style={{
                        marginLeft: '0.5rem',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s',
                        fontSize: '1.2rem',
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {/* Dropdown menu */}
                  {isOpen && !showFeedback && (
                    <div
                      style={{
                        position: 'absolute',
                        top: 'calc(100% + 0.5rem)',
                        left: 0,
                        right: 0,
                        backgroundColor: 'rgba(20, 20, 20, 0.98)',
                        border: `2px solid ${theme.secondaryColor}`,
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        zIndex: 100,
                        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <div
                        style={{
                          maxHeight: '300px',
                          overflowY: 'auto',
                        }}
                      >
                        {shuffledMatches[item].map((match) => {
                          const isSelected = currentMatch === match;
                          return (
                            <button
                              key={match}
                              onClick={() => {
                                handleMatching(item, match);
                                setOpenDropdown(null);
                              }}
                              style={{
                                width: '100%',
                                padding: '1rem 1.25rem',
                                fontSize: '1rem',
                                textAlign: 'left',
                                backgroundColor: isSelected
                                  ? `${theme.secondaryColor}30`
                                  : 'transparent',
                                color: 'white',
                                border: 'none',
                                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                                cursor: 'pointer',
                                outline: 'none',
                                transition: 'all 0.15s',
                                fontWeight: isSelected ? '600' : '400',
                              }}
                              onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = `${theme.secondaryColor}40`;
                              }}
                              onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = isSelected
                                  ? `${theme.secondaryColor}30`
                                  : 'transparent';
                              }}
                            >
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div
                                  style={{
                                    width: '18px',
                                    height: '18px',
                                    borderRadius: '50%',
                                    border: `2px solid ${
                                      isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.3)'
                                    }`,
                                    backgroundColor: isSelected
                                      ? theme.secondaryColor
                                      : 'transparent',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                  }}
                                >
                                  {isSelected && (
                                    <div
                                      style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white',
                                      }}
                                    />
                                  )}
                                </div>
                                <span>{match}</span>
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Click outside to close dropdown */}
        {openDropdown && !showFeedback && (
          <div
            onClick={() => setOpenDropdown(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 99,
            }}
          />
        )}
      </div>
    );
  }

  function renderSelfAssessmentInput() {
    // During quiz, just show a text area for the student's answer
    // Self-assessment happens on the results screen
    return (
      <div style={{ maxWidth: '700px', margin: '0 auto' }}>
        <div
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            backgroundColor: 'rgba(255, 200, 0, 0.1)',
            border: '1px solid rgba(255, 200, 0, 0.3)',
            borderRadius: '0.5rem',
            color: 'rgba(255, 200, 0, 0.9)',
            fontSize: '0.9rem',
          }}
        >
          ℹ️ This is a reflection question. You'll compare your answer to a model answer and self-assess after submitting the quiz.
        </div>
        <textarea
          value={typeof localAnswer === 'string' ? localAnswer : ''}
          onChange={(e) => handleShortAnswer(e.target.value)}
          disabled={showFeedback}
          placeholder="Type your answer here. Be thorough - you'll evaluate your own response later."
          rows={6}
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            fontSize: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.3)',
            borderRadius: '0.75rem',
            outline: 'none',
            transition: 'all 0.2s',
            resize: 'vertical',
            fontFamily: 'inherit',
          }}
          onFocus={(e) => {
            if (!showFeedback) {
              e.currentTarget.style.borderColor = theme.secondaryColor;
              e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.secondaryColor}40`;
            }
          }}
          onBlur={(e) => {
            if (!showFeedback) {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              e.currentTarget.style.boxShadow = 'none';
            }
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        padding: '2rem',
        borderRadius: '1rem',
        border: '2px solid rgba(255, 255, 255, 0.2)',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        backdropFilter: 'blur(10px)',
        transition: 'all 0.3s',
        ...getFeedbackStyle(),
      }}
    >
      {/* Question text */}
      <div
        style={{
          fontSize: '1.5rem',
          fontWeight: '600',
          color: 'white',
          marginBottom: '2rem',
          lineHeight: '1.6',
        }}
      >
        {question.question}
      </div>

      {/* Question input */}
      {renderQuestionInput()}

      {/* Feedback section */}
      {showFeedback && (
        <div style={{ marginTop: '2rem' }}>
          {/* Correct/Incorrect badge */}
          <div
            style={{
              display: 'inline-block',
              padding: '0.5rem 1rem',
              borderRadius: '0.5rem',
              backgroundColor: isCorrect ? '#22c55e' : '#ef4444',
              color: 'white',
              fontWeight: '600',
              fontSize: '1rem',
              marginBottom: '1rem',
            }}
          >
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </div>

          {/* Explanation */}
          <div
            style={{
              padding: '1rem',
              borderRadius: '0.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderLeft: `4px solid ${isCorrect ? '#22c55e' : '#ef4444'}`,
            }}
          >
            <div
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.7)',
                marginBottom: '0.5rem',
              }}
            >
              Explanation:
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: 'white',
                lineHeight: '1.6',
              }}
            >
              {question.explanation}
            </div>
          </div>

          {/* Show correct answer if incorrect */}
          {!isCorrect && (
            <div
              style={{
                marginTop: '1rem',
                padding: '1rem',
                borderRadius: '0.5rem',
                backgroundColor: 'rgba(34, 197, 94, 0.1)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
              }}
            >
              <div
                style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#22c55e',
                  marginBottom: '0.5rem',
                }}
              >
                Correct Answer:
              </div>
              <div
                style={{
                  fontSize: '1rem',
                  color: 'white',
                }}
              >
                {typeof question.correctAnswer === 'string'
                  ? question.correctAnswer
                  : Array.isArray(question.correctAnswer)
                  ? question.correctAnswer.join(', ')
                  : JSON.stringify(question.correctAnswer, null, 2)}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizQuestion;
