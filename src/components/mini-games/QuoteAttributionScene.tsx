import { useState, useMemo } from 'react';
import type { QuoteAttributionScene as QuoteAttributionSceneType, AdventureTheme } from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface QuoteAttributionSceneProps {
  scene: QuoteAttributionSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

interface QuoteResult {
  quoteId: string;
  selectedSpeaker: string;
  isCorrect: boolean;
}

const QuoteAttributionScene: React.FC<QuoteAttributionSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResult, setShowResult] = useState(false);
  const [allAnswered, setAllAnswered] = useState(false);

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  const currentQuote = scene.quotes[currentQuoteIndex];
  const hasAnswered = !!answers[currentQuote.id];

  // Generate speaker options for current quote
  const speakerOptions = useMemo(() => {
    if (!currentQuote) return [];

    // Get all unique speakers
    const allSpeakers = [...new Set(scene.quotes.map((q) => q.speaker))];

    // Ensure correct speaker is included
    const options = [currentQuote.speaker];

    // Add 3 other speakers randomly
    const others = allSpeakers
      .filter((s) => s !== currentQuote.speaker)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    options.push(...others);

    // Shuffle final options
    return options.sort(() => Math.random() - 0.5);
  }, [currentQuote, scene.quotes]);

  const handleSpeakerSelect = (speaker: string) => {
    if (hasAnswered) return; // Already answered this quote

    // Save answer
    setAnswers((prev) => ({
      ...prev,
      [currentQuote.id]: speaker,
    }));

    // Show immediate feedback
    setShowResult(true);
  };

  const handleNextQuote = () => {
    setShowResult(false);

    if (currentQuoteIndex < scene.quotes.length - 1) {
      // Move to next quote
      setCurrentQuoteIndex((prev) => prev + 1);
    } else {
      // All quotes answered, show final results
      setAllAnswered(true);
    }
  };

  const handleContinue = () => {
    onComplete();
  };

  // Calculate final score
  const results: QuoteResult[] = scene.quotes.map((quote) => {
    const selectedSpeaker = answers[quote.id] || '';
    const isCorrect = selectedSpeaker === quote.speaker;
    return {
      quoteId: quote.id,
      selectedSpeaker,
      isCorrect,
    };
  });

  const score = results.filter((r) => r.isCorrect).length;
  const percentage = Math.round((score / scene.quotes.length) * 100);

  // Final results screen
  if (allAnswered) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: theme.primaryColor,
          padding: '2rem',
          position: 'relative',
        }}
      >
        {/* Scene Image */}
        {sceneImage && (
          <div
            style={{
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center',
              maxWidth: '900px',
              width: '100%',
            }}
          >
            <img
              src={sceneImage.src}
              alt="Scene illustration"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                borderRadius: '0.75rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        )}

        <div
          style={{
            maxWidth: '900px',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '2.5rem',
            borderRadius: '1rem',
            color: 'white',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {/* Final Score */}
          <div
            style={{
              textAlign: 'center',
              marginBottom: '2rem',
              paddingBottom: '2rem',
              borderBottom: `2px solid ${theme.secondaryColor}`,
            }}
          >
            <h2
              style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme.secondaryColor,
              }}
            >
              Quote Attribution Complete!
            </h2>
            <div
              style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                marginBottom: '0.5rem',
                color: percentage >= 70 ? '#4ade80' : '#fb923c',
              }}
            >
              {score} / {scene.quotes.length}
            </div>
            <div style={{ fontSize: '1.25rem', color: '#ccc' }}>
              {percentage}% Correct
            </div>
          </div>

          {/* Results breakdown */}
          <div style={{ marginBottom: '2rem' }}>
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: theme.secondaryColor,
              }}
            >
              Review Your Answers
            </h3>
            {scene.quotes.map((quote, index) => {
              const result = results[index];
              return (
                <div
                  key={quote.id}
                  style={{
                    marginBottom: '1.5rem',
                    padding: '1.5rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    borderRadius: '0.75rem',
                    borderLeft: `4px solid ${
                      result.isCorrect ? '#4ade80' : '#ef4444'
                    }`,
                  }}
                >
                  {/* Quote text */}
                  <div
                    style={{
                      fontSize: '1.125rem',
                      fontStyle: 'italic',
                      marginBottom: '1rem',
                      color: '#fff',
                      lineHeight: '1.6',
                    }}
                  >
                    "{quote.text}"
                  </div>

                  {/* Result indicator */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '0.75rem',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '1.5rem',
                        color: result.isCorrect ? '#4ade80' : '#ef4444',
                      }}
                    >
                      {result.isCorrect ? '✓' : '✗'}
                    </span>
                    <span
                      style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        color: result.isCorrect ? '#4ade80' : '#ef4444',
                      }}
                    >
                      {result.isCorrect ? 'Correct!' : 'Incorrect'}
                    </span>
                  </div>

                  {/* Speaker info */}
                  <div style={{ marginBottom: '0.75rem' }}>
                    <strong style={{ color: theme.secondaryColor }}>
                      Correct Answer:
                    </strong>{' '}
                    {quote.speaker}
                  </div>
                  {!result.isCorrect && (
                    <div style={{ marginBottom: '0.75rem', color: '#ef4444' }}>
                      <strong>Your Answer:</strong> {result.selectedSpeaker}
                    </div>
                  )}

                  {/* Context */}
                  <div
                    style={{
                      padding: '1rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderRadius: '0.5rem',
                      marginBottom: quote.explanation ? '0.75rem' : '0',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 'bold',
                        color: theme.secondaryColor,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Context:
                    </div>
                    <div style={{ fontSize: '0.875rem', color: '#ddd' }}>
                      {quote.context}
                    </div>
                  </div>

                  {/* Optional explanation */}
                  {quote.explanation && (
                    <div
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        borderRadius: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          color: theme.secondaryColor,
                          marginBottom: '0.5rem',
                        }}
                      >
                        Explanation:
                      </div>
                      <div style={{ fontSize: '0.875rem', color: '#ddd' }}>
                        {quote.explanation}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Learning points */}
          {scene.learningPoints && scene.learningPoints.length > 0 && (
            <div
              style={{
                borderLeft: `4px solid ${theme.secondaryColor}`,
                paddingLeft: '1rem',
                marginBottom: '2rem',
                fontStyle: 'italic',
                color: '#ccc',
              }}
            >
              {scene.learningPoints.map((lp) => (
                <div key={lp.id} style={{ marginBottom: '0.5rem' }}>
                  {lp.content}
                </div>
              ))}
            </div>
          )}

          {/* Continue button */}
          <button
            onClick={handleContinue}
            style={{
              width: '100%',
              padding: '1rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  // Main quiz interface
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: theme.primaryColor,
        padding: '2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2.5rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
        }}
      >
        {/* Progress indicator */}
        <div
          style={{
            position: 'absolute',
            top: '1.5rem',
            right: '1.5rem',
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            borderRadius: '2rem',
            fontSize: '0.875rem',
            fontWeight: 'bold',
            color: theme.secondaryColor,
          }}
        >
          Quote {currentQuoteIndex + 1} of {scene.quotes.length}
        </div>

        {/* Prompt */}
        <div style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: theme.secondaryColor,
            }}
          >
            {scene.prompt}
          </h2>
        </div>

        {/* Quote display */}
        <div
          style={{
            padding: '2rem',
            textAlign: 'center',
            marginBottom: '2rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '0.75rem',
          }}
        >
          <div
            style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              marginBottom: '1.5rem',
              lineHeight: '1.8',
              color: '#fff',
            }}
          >
            "{currentQuote.text}"
          </div>
          <div style={{ fontSize: '1rem', color: '#aaa', fontWeight: '500' }}>
            Who said this?
          </div>
        </div>

        {/* Show result or speaker options */}
        {showResult ? (
          <div
            style={{
              marginBottom: '2rem',
              animation: 'fadeIn 0.5s ease-in',
            }}
          >
            {/* Feedback */}
            <div
              style={{
                padding: '1.5rem',
                backgroundColor:
                  answers[currentQuote.id] === currentQuote.speaker
                    ? 'rgba(74, 222, 128, 0.15)'
                    : 'rgba(239, 68, 68, 0.15)',
                borderRadius: '0.75rem',
                borderLeft: `4px solid ${
                  answers[currentQuote.id] === currentQuote.speaker
                    ? '#4ade80'
                    : '#ef4444'
                }`,
                marginBottom: '1.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1rem',
                }}
              >
                <span style={{ fontSize: '2rem' }}>
                  {answers[currentQuote.id] === currentQuote.speaker ? '✓' : '✗'}
                </span>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color:
                      answers[currentQuote.id] === currentQuote.speaker
                        ? '#4ade80'
                        : '#ef4444',
                  }}
                >
                  {answers[currentQuote.id] === currentQuote.speaker
                    ? 'Correct!'
                    : 'Incorrect'}
                </span>
              </div>

              {answers[currentQuote.id] !== currentQuote.speaker && (
                <div style={{ marginBottom: '1rem', fontSize: '1rem' }}>
                  The correct answer was <strong>{currentQuote.speaker}</strong>
                </div>
              )}

              {/* Context */}
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '0.5rem',
                  marginBottom: currentQuote.explanation ? '1rem' : '0',
                }}
              >
                <div
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    color: theme.secondaryColor,
                    marginBottom: '0.5rem',
                  }}
                >
                  Context:
                </div>
                <div style={{ fontSize: '0.875rem', color: '#ddd' }}>
                  {currentQuote.context}
                </div>
              </div>

              {/* Optional explanation */}
              {currentQuote.explanation && (
                <div
                  style={{
                    padding: '1rem',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    borderRadius: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      color: theme.secondaryColor,
                      marginBottom: '0.5rem',
                    }}
                  >
                    Explanation:
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#ddd' }}>
                    {currentQuote.explanation}
                  </div>
                </div>
              )}
            </div>

            {/* Next button */}
            <button
              onClick={handleNextQuote}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {currentQuoteIndex < scene.quotes.length - 1
                ? 'Next Quote →'
                : 'View Results →'}
            </button>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '2rem',
            }}
          >
            {speakerOptions.map((speaker) => (
              <button
                key={speaker}
                onClick={() => handleSpeakerSelect(speaker)}
                disabled={hasAnswered}
                style={{
                  padding: '1.5rem',
                  fontSize: '1.125rem',
                  textAlign: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: 'white',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '0.75rem',
                  cursor: hasAnswered ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  fontWeight: '500',
                }}
                onMouseEnter={(e) => {
                  if (!hasAnswered) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.borderColor = theme.secondaryColor;
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!hasAnswered) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.secondaryColor}40`;
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'none';
                }}
                aria-label={`Select ${speaker}`}
              >
                {speaker}
              </button>
            ))}
          </div>
        )}

        {/* Learning points (only show before answering) */}
        {!showResult && scene.learningPoints && scene.learningPoints.length > 0 && (
          <div
            style={{
              borderLeft: `4px solid ${theme.secondaryColor}`,
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#ccc',
            }}
          >
            {scene.learningPoints.map((lp) => (
              <div key={lp.id} style={{ marginBottom: '0.5rem' }}>
                {lp.content}
              </div>
            ))}
          </div>
        )}

        {/* Back button */}
        {canGoBack && !showResult && currentQuoteIndex === 0 && (
          <button
            onClick={onBack}
            style={{
              position: 'absolute',
              left: '-22.5px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.2,
              transition: 'opacity 0.3s, transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.2';
              e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Go back"
          >
            ←
          </button>
        )}
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default QuoteAttributionScene;
