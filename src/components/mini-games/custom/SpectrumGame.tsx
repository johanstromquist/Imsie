import React, { useState } from 'react';
import type { CustomGameProps } from '../customGameRegistry';
import { customGameRegistry } from '../customGameRegistry';

// Position types for spectrum
type SpectrumPosition = 'farLeft' | 'left' | 'center' | 'right' | 'farRight';

interface PositionDefinition {
  name: string;
  description: string;
}

interface FeedbackBlock {
  summary: string;
  analysis: string;
  advice?: string;
  relatedConcepts?: string[];
}

interface SpectrumConcept {
  id: string;
  label: string;
  question: string;

  // Slider labels
  leftLabel: string;
  middleLabel: string;
  rightLabel: string;

  // Position names and descriptions
  positions: {
    farLeft: PositionDefinition;
    left: PositionDefinition;
    center: PositionDefinition;
    right: PositionDefinition;
    farRight: PositionDefinition;
  };

  // Feedback for each position
  feedback: {
    farLeft: FeedbackBlock;
    left: FeedbackBlock;
    center: FeedbackBlock;
    right: FeedbackBlock;
    farRight: FeedbackBlock;
  };
}

interface OverallSummaryTemplate {
  id: string;
  text: string;
}

interface SpectrumGameConfig {
  // Core configuration
  title: string;
  description: string;
  instructorName?: string;
  instructorPortrait?: string;

  // Concepts to evaluate
  concepts: SpectrumConcept[];

  // Overall summary templates
  summaryTemplates: OverallSummaryTemplate[];

  // Visual customization
  backgroundImage?: string;

  // Result screen config
  resultScreenConfig?: {
    showVisualization?: boolean;
    individualFeedbackFirst?: boolean;
    overallSummaryAfter?: boolean;
  };

  // Text customization
  continueButtonText?: string;
  backButtonText?: string;
}

const SpectrumGame: React.FC<CustomGameProps> = ({
  config,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const gameConfig = config as unknown as SpectrumGameConfig;

  // Default values
  const continueButtonText = gameConfig.continueButtonText || 'Continue →';
  const resultConfig = gameConfig.resultScreenConfig || {
    showVisualization: true,
    individualFeedbackFirst: true,
    overallSummaryAfter: true,
  };

  // State
  const [currentConceptIndex, setCurrentConceptIndex] = useState(0);
  const [responses, setResponses] = useState<Record<string, SpectrumPosition>>({});
  const [sliderValue, setSliderValue] = useState(2); // Start at center (0-4 scale)
  const [gameState, setGameState] = useState<'intro' | 'questions' | 'results'>('intro');

  // Helper to convert slider value (0-4) to position
  const sliderToPosition = (value: number): SpectrumPosition => {
    const positions: SpectrumPosition[] = ['farLeft', 'left', 'center', 'right', 'farRight'];
    return positions[value];
  };

  // Helper to convert position to slider value
  const positionToSlider = (position: SpectrumPosition): number => {
    const positions: SpectrumPosition[] = ['farLeft', 'left', 'center', 'right', 'farRight'];
    return positions.indexOf(position);
  };

  // Calculate metrics for summary selection
  const calculateMetrics = () => {
    const values = Object.values(responses).map(pos => positionToSlider(pos));
    const avgPosition = values.reduce((sum, val) => sum + val, 0) / values.length;
    const spread = Math.max(...values) - Math.min(...values);
    const extremeCount = values.filter(v => v === 0 || v === 4).length;

    return { avgPosition, spread, extremeCount };
  };

  // Select overall summary based on metrics
  const selectSummary = (): string => {
    const metrics = calculateMetrics();

    // Priority order: Check most specific patterns first, then general patterns

    // 1. BALANCED: Mostly centered with low variance
    // Example: All responses at center (2) → avg=2.0, spread=0
    if (metrics.avgPosition >= 1.8 && metrics.avgPosition <= 2.2 && metrics.spread < 2) {
      return gameConfig.summaryTemplates.find(t => t.id === 'balanced')?.text || '';
    }

    // 2. EXTREMES: Multiple responses at far ends (farLeft=0 or farRight=4)
    // Example: 3+ responses at position 0 or 4
    if (metrics.extremeCount >= 3) {
      return gameConfig.summaryTemplates.find(t => t.id === 'extremes')?.text || '';
    }

    // 3. DEFICIENCY: Tendency toward left side (holding back)
    // Example: Mostly at left (1) and farLeft (0) → avg < 1.5
    if (metrics.avgPosition < 1.5 && metrics.extremeCount < 3) {
      return gameConfig.summaryTemplates.find(t => t.id === 'deficiency')?.text || '';
    }

    // 4. EXCESS: Tendency toward right side (overabundance)
    // Example: Mostly at right (3) and farRight (4) → avg > 2.5
    if (metrics.avgPosition > 2.5 && metrics.extremeCount < 3) {
      return gameConfig.summaryTemplates.find(t => t.id === 'excess')?.text || '';
    }

    // 5. VARIED: High variance (inconsistent across concepts)
    // Example: Mix of farLeft (0) and farRight (4) → spread > 2
    if (metrics.spread > 2) {
      return gameConfig.summaryTemplates.find(t => t.id === 'varied')?.text || '';
    }

    // 6. DEVELOPING: Default for mixed/moderate responses that don't fit above
    // Example: Some left (1), some center (2), some right (3) → avg ~2, spread ~2
    return gameConfig.summaryTemplates.find(t => t.id === 'developing')?.text || gameConfig.summaryTemplates[0]?.text || '';
  };

  // Generate cross-reference text
  const generateCrossReference = (
    currentPosition: SpectrumPosition,
    relatedConceptId: string
  ): string => {
    const relatedConcept = gameConfig.concepts.find(c => c.id === relatedConceptId);
    const relatedPosition = responses[relatedConceptId];

    if (!relatedConcept || !relatedPosition) return '';

    const relatedPositionName = relatedConcept.positions[relatedPosition].name;
    const currentValue = positionToSlider(currentPosition);
    const relatedValue = positionToSlider(relatedPosition);
    const difference = Math.abs(currentValue - relatedValue);

    // Generate natural language connector
    let connector = '';
    if (relatedPosition === 'center') {
      connector = 'could help ground this tendency';
    } else if (difference > 2) {
      connector = 'shows an interesting contrast in your character';
    } else if (difference < 1) {
      connector = 'aligns with this pattern';
    } else {
      connector = 'provides balance to this aspect';
    }

    return `Your ${relatedConcept.label} (${relatedPositionName}) ${connector}.`;
  };

  // Handlers
  const handleStart = () => {
    setGameState('questions');
  };

  const handleNext = () => {
    const currentConcept = gameConfig.concepts[currentConceptIndex];
    const position = sliderToPosition(sliderValue);

    setResponses(prev => ({
      ...prev,
      [currentConcept.id]: position,
    }));

    if (currentConceptIndex < gameConfig.concepts.length - 1) {
      setCurrentConceptIndex(prev => prev + 1);
      setSliderValue(2); // Reset to center for next question
    } else {
      setGameState('results');
    }
  };

  const handlePrevious = () => {
    if (currentConceptIndex > 0) {
      const previousConcept = gameConfig.concepts[currentConceptIndex - 1];
      const previousPosition = responses[previousConcept.id];

      setCurrentConceptIndex(prev => prev - 1);
      setSliderValue(positionToSlider(previousPosition));
    }
  };

  // Current concept
  const currentConcept = gameConfig.concepts[currentConceptIndex];
  const currentPosition = sliderToPosition(sliderValue);
  const positionInfo = currentConcept?.positions[currentPosition];

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: gameConfig.backgroundImage
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${gameConfig.backgroundImage}')`
          : `linear-gradient(135deg, ${theme.primaryColor}20, ${theme.secondaryColor}20)`,
        backgroundColor: theme.primaryColor || '#0a0a0a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Back button */}
      {canGoBack && (
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: theme.secondaryColor,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.3,
            transition: 'all 0.3s',
            zIndex: 100,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.3';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ←
        </button>
      )}

      {/* Main content */}
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          padding: '3rem',
          borderRadius: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: `2px solid ${theme.secondaryColor}40`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Intro Screen */}
        {gameState === 'intro' && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: theme.secondaryColor,
              fontFamily: theme.fontFamily || 'inherit',
            }}>
              {gameConfig.title}
            </h1>

            {gameConfig.instructorPortrait && (
              <img
                src={gameConfig.instructorPortrait}
                alt={gameConfig.instructorName || 'Instructor'}
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  marginBottom: '1.5rem',
                  border: `3px solid ${theme.secondaryColor}`,
                }}
              />
            )}

            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6, color: '#ccc' }}>
              {gameConfig.description}
            </p>

            <p style={{ fontSize: '1rem', marginBottom: '3rem', color: '#aaa' }}>
              You will be asked {gameConfig.concepts.length} questions about your character and preferences.
              There are no right or wrong answers—just reflect honestly.
            </p>

            <button
              onClick={handleStart}
              style={{
                padding: '1.5rem 3rem',
                fontSize: '1.5rem',
                background: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: theme.fontFamily || 'inherit',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Begin Reflection
            </button>
          </div>
        )}

        {/* Questions Screen */}
        {gameState === 'questions' && currentConcept && (
          <div style={{ color: 'white' }}>
            {/* Progress indicator */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '0.5rem',
              }}>
                <span style={{ fontSize: '0.9rem', color: '#aaa' }}>
                  Question {currentConceptIndex + 1} of {gameConfig.concepts.length}
                </span>
                <span style={{ fontSize: '0.9rem', color: theme.secondaryColor, fontWeight: 'bold' }}>
                  {currentConcept.label}
                </span>
              </div>
              <div style={{
                width: '100%',
                height: '4px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}>
                <div style={{
                  width: `${((currentConceptIndex + 1) / gameConfig.concepts.length) * 100}%`,
                  height: '100%',
                  backgroundColor: theme.secondaryColor,
                  transition: 'width 0.3s',
                }} />
              </div>
            </div>

            {/* Question */}
            <h2 style={{
              fontSize: '1.8rem',
              marginBottom: '2rem',
              color: theme.secondaryColor,
              fontFamily: theme.fontFamily || 'inherit',
              lineHeight: 1.4,
            }}>
              {currentConcept.question}
            </h2>

            {/* Slider */}
            <div style={{ marginBottom: '2rem' }}>
              {/* Labels */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                color: '#aaa',
              }}>
                <span>{currentConcept.leftLabel}</span>
                <span style={{ color: theme.secondaryColor }}>{currentConcept.middleLabel}</span>
                <span>{currentConcept.rightLabel}</span>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="0"
                max="4"
                step="1"
                value={sliderValue}
                onChange={(e) => setSliderValue(parseInt(e.target.value))}
                style={{
                  width: '100%',
                  height: '8px',
                  borderRadius: '4px',
                  outline: 'none',
                  opacity: 0.9,
                  WebkitAppearance: 'none',
                  appearance: 'none',
                  background: `linear-gradient(to right,
                    ${theme.secondaryColor}40 0%,
                    ${theme.secondaryColor} 50%,
                    ${theme.secondaryColor}40 100%)`,
                }}
              />

              {/* Position markers */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '0.5rem',
                padding: '0 2px',
              }}>
                {[0, 1, 2, 3, 4].map(val => (
                  <div
                    key={val}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: sliderValue === val ? theme.secondaryColor : 'rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s',
                      boxShadow: sliderValue === val ? `0 0 10px ${theme.secondaryColor}` : 'none',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Current position info */}
            {positionInfo && (
              <div style={{
                padding: '1.5rem',
                backgroundColor: `${theme.secondaryColor}15`,
                borderRadius: '0.75rem',
                border: `1px solid ${theme.secondaryColor}40`,
                marginBottom: '2rem',
              }}>
                <div style={{
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  marginBottom: '0.5rem',
                  color: theme.secondaryColor,
                }}>
                  {positionInfo.name}
                </div>
                <div style={{
                  fontSize: '0.95rem',
                  color: '#ccc',
                  lineHeight: 1.5,
                }}>
                  {positionInfo.description}
                </div>
              </div>
            )}

            {/* Navigation buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'space-between',
            }}>
              <button
                onClick={handlePrevious}
                disabled={currentConceptIndex === 0}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  background: currentConceptIndex === 0 ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.2)',
                  color: currentConceptIndex === 0 ? '#666' : 'white',
                  border: 'none',
                  borderRadius: '0.75rem',
                  cursor: currentConceptIndex === 0 ? 'not-allowed' : 'pointer',
                  fontWeight: 'bold',
                  fontFamily: theme.fontFamily || 'inherit',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (currentConceptIndex > 0) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }
                }}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                ← Previous
              </button>

              <button
                onClick={handleNext}
                style={{
                  padding: '1rem 2rem',
                  fontSize: '1.1rem',
                  background: theme.secondaryColor,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: theme.fontFamily || 'inherit',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {currentConceptIndex === gameConfig.concepts.length - 1 ? 'See Results' : 'Next →'}
              </button>
            </div>
          </div>
        )}

        {/* Results Screen */}
        {gameState === 'results' && (
          <div style={{ color: 'white' }}>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: theme.secondaryColor,
              fontFamily: theme.fontFamily || 'inherit',
              textAlign: 'center',
            }}>
              Your Character Profile
            </h1>

            {gameConfig.instructorName && (
              <p style={{
                textAlign: 'center',
                fontSize: '1.1rem',
                color: '#ccc',
                marginBottom: '2rem',
              }}>
                {gameConfig.instructorName}'s Assessment
              </p>
            )}

            {/* Individual concept feedback */}
            {resultConfig.individualFeedbackFirst && (
              <div style={{ marginBottom: '2rem' }}>
                {gameConfig.concepts.map(concept => {
                  const position = responses[concept.id];
                  if (!position) return null;

                  const feedback = concept.feedback[position];
                  const positionDef = concept.positions[position];

                  return (
                    <div
                      key={concept.id}
                      style={{
                        marginBottom: '2rem',
                        padding: '1.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '0.75rem',
                        border: `1px solid ${theme.secondaryColor}40`,
                      }}
                    >
                      <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',
                      }}>
                        <h3 style={{
                          fontSize: '1.4rem',
                          color: theme.secondaryColor,
                          fontFamily: theme.fontFamily || 'inherit',
                          margin: 0,
                        }}>
                          {concept.label}
                        </h3>
                        <span style={{
                          fontSize: '1.1rem',
                          color: '#aaa',
                          fontStyle: 'italic',
                        }}>
                          {positionDef.name}
                        </span>
                      </div>

                      <p style={{
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        marginBottom: '0.75rem',
                        color: '#eee',
                      }}>
                        {feedback.summary}
                      </p>

                      <p style={{
                        fontSize: '0.95rem',
                        lineHeight: 1.6,
                        color: '#ccc',
                        marginBottom: feedback.advice || feedback.relatedConcepts ? '0.75rem' : 0,
                      }}>
                        {feedback.analysis}
                      </p>

                      {/* Cross-references */}
                      {feedback.relatedConcepts && feedback.relatedConcepts.length > 0 && (
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#aaa',
                          fontStyle: 'italic',
                          marginBottom: feedback.advice ? '0.75rem' : 0,
                        }}>
                          {feedback.relatedConcepts.map(relatedId => (
                            <div key={relatedId} style={{ marginTop: '0.5rem' }}>
                              → {generateCrossReference(position, relatedId)}
                            </div>
                          ))}
                        </div>
                      )}

                      {feedback.advice && (
                        <div style={{
                          fontSize: '0.95rem',
                          color: theme.secondaryColor,
                          backgroundColor: `${theme.secondaryColor}10`,
                          padding: '0.75rem',
                          borderRadius: '0.5rem',
                          borderLeft: `3px solid ${theme.secondaryColor}`,
                        }}>
                          💡 {feedback.advice}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Overall summary */}
            {resultConfig.overallSummaryAfter && (
              <div style={{
                padding: '2rem',
                backgroundColor: `${theme.secondaryColor}20`,
                borderRadius: '0.75rem',
                border: `2px solid ${theme.secondaryColor}`,
                marginBottom: '2rem',
              }}>
                <h3 style={{
                  fontSize: '1.4rem',
                  marginBottom: '1rem',
                  color: theme.secondaryColor,
                  fontFamily: theme.fontFamily || 'inherit',
                }}>
                  Overall Assessment
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: '#eee',
                }}>
                  {selectSummary()}
                </p>
              </div>
            )}

            <div style={{ textAlign: 'center' }}>
              <button
                onClick={onComplete}
                style={{
                  padding: '1.5rem 3rem',
                  fontSize: '1.5rem',
                  background: theme.secondaryColor,
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.75rem',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontFamily: theme.fontFamily || 'inherit',
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {continueButtonText}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* CSS for slider styling */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: ${theme.secondaryColor};
          cursor: pointer;
          box-shadow: 0 0 10px ${theme.secondaryColor}80;
        }

        input[type="range"]::-moz-range-thumb {
          width: 24px;
          height: 24px;
          border-radius: 50%;
          background: ${theme.secondaryColor};
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px ${theme.secondaryColor}80;
        }
      `}</style>
    </div>
  );
};

// Register the game
customGameRegistry.register('spectrum', SpectrumGame);

export default SpectrumGame;
