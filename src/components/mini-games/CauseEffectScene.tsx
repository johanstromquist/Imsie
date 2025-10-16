import { useState, useEffect } from 'react';
import type {
  CauseEffectScene as CauseEffectSceneType,
  AdventureTheme,
  CauseEffectPair,
} from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface CauseEffectSceneProps {
  scene: CauseEffectSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

interface EffectOption {
  id: string;
  text: string;
  isPair: boolean; // true if from pairs, false if distractor
  pairId?: string; // ID of the pair this effect belongs to
}

const CauseEffectScene: React.FC<CauseEffectSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [causes, setCauses] = useState<CauseEffectPair[]>([]);
  const [effects, setEffects] = useState<EffectOption[]>([]);
  const [matches, setMatches] = useState<Record<string, string>>({}); // causeId -> effectId
  const [selectedCause, setSelectedCause] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, boolean>>({});

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  // Initialize causes and effects
  useEffect(() => {
    // Set causes (keep original order for consistency)
    setCauses(scene.pairs);

    // Create effect options from pairs
    const effectOptions: EffectOption[] = scene.pairs.map((pair) => ({
      id: `effect-${pair.id}`,
      text: pair.effect,
      isPair: true,
      pairId: pair.id,
    }));

    // Add distractors if provided
    if (scene.distractors) {
      const distractorOptions: EffectOption[] = scene.distractors.map((distractor, index) => ({
        id: `distractor-${index}`,
        text: distractor,
        isPair: false,
      }));
      effectOptions.push(...distractorOptions);
    }

    // Shuffle effects
    const shuffled = [...effectOptions].sort(() => Math.random() - 0.5);
    setEffects(shuffled);
  }, [scene.pairs, scene.distractors]);

  const handleCauseClick = (causeId: string) => {
    if (isSubmitted) return;

    // If this cause is already selected, deselect it
    if (selectedCause === causeId) {
      setSelectedCause(null);
      return;
    }

    setSelectedCause(causeId);
  };

  const handleEffectClick = (effectId: string) => {
    if (isSubmitted || !selectedCause) return;

    // Check if this effect is already matched to the selected cause
    if (matches[selectedCause] === effectId) {
      // Unmatch
      const newMatches = { ...matches };
      delete newMatches[selectedCause];
      setMatches(newMatches);
      setSelectedCause(null);
      return;
    }

    // Check if this effect is already matched to another cause
    const existingCause = Object.entries(matches).find(([, effId]) => effId === effectId)?.[0];
    if (existingCause) {
      // Remove the existing match
      const newMatches = { ...matches };
      delete newMatches[existingCause];
      setMatches(newMatches);
    }

    // Create new match
    setMatches({
      ...matches,
      [selectedCause]: effectId,
    });
    setSelectedCause(null);
  };

  const handleSubmit = () => {
    const validationResults: Record<string, boolean> = {};

    // Check each match
    Object.entries(matches).forEach(([causeId, effectId]) => {
      const cause = causes.find((c) => c.id === causeId);
      const effect = effects.find((e) => e.id === effectId);

      if (cause && effect) {
        // Check if the effect is the correct one for this cause
        const isCorrect = effect.isPair && effect.pairId === causeId;
        validationResults[causeId] = isCorrect;
      }
    });

    setResults(validationResults);
    setIsSubmitted(true);
  };

  const handleContinue = () => {
    onComplete();
  };

  // Calculate score
  const correctCount = Object.values(results).filter((r) => r).length;
  const totalPairs = scene.pairs.length;
  const scorePercent = Math.round((correctCount / totalPairs) * 100);

  // Check if effect is matched
  const isEffectMatched = (effectId: string) => {
    return Object.values(matches).includes(effectId);
  };

  // Get cause ID for an effect
  const getCauseForEffect = (effectId: string) => {
    return Object.entries(matches).find(([, effId]) => effId === effectId)?.[0];
  };

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
            maxWidth: '1200px',
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

      {/* Content container */}
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2.5rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              marginBottom: '0.75rem',
              color: theme.secondaryColor,
            }}
          >
            {scene.prompt}
          </h2>
          <p style={{ fontSize: '1rem', color: '#ccc' }}>
            {isSubmitted
              ? 'Review your matches below'
              : 'Click a cause, then click its matching effect'}
          </p>
        </div>

        {/* Results display after submission */}
        {isSubmitted && (
          <div
            style={{
              marginBottom: '2rem',
              padding: '1.5rem',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '0.75rem',
              borderLeft: `4px solid ${theme.secondaryColor}`,
              animation: 'fadeIn 0.5s ease-in',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <div style={{ fontSize: '2rem' }}>{scorePercent >= 70 ? '✓' : '✗'}</div>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme.secondaryColor }}>
                  Score: {correctCount}/{totalPairs} ({scorePercent}%)
                </div>
                <div style={{ fontSize: '1rem', color: '#ccc' }}>
                  {scorePercent >= 70 ? 'Great work!' : 'Review the explanations below'}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Matching interface */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            marginBottom: '2rem',
          }}
        >
          {/* Causes column */}
          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme.secondaryColor,
                textAlign: 'center',
              }}
            >
              Causes
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {causes.map((cause) => {
                const isSelected = selectedCause === cause.id;
                const isMatched = matches[cause.id] !== undefined;
                const isCorrect = results[cause.id];
                const isIncorrect = isSubmitted && matches[cause.id] && !isCorrect;

                return (
                  <div
                    key={cause.id}
                    onClick={() => handleCauseClick(cause.id)}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: isSelected
                        ? `${theme.secondaryColor}40`
                        : 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${
                        isSubmitted
                          ? isCorrect
                            ? '#4ade80'
                            : isIncorrect
                            ? '#ef4444'
                            : 'rgba(255, 255, 255, 0.2)'
                          : isSelected
                          ? theme.secondaryColor
                          : 'rgba(255, 255, 255, 0.2)'
                      }`,
                      borderRadius: '0.75rem',
                      cursor: isSubmitted ? 'default' : 'pointer',
                      transition: 'all 0.2s',
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitted) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitted) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{ fontSize: '1rem', lineHeight: '1.5', color: 'white' }}>
                      {cause.cause}
                    </div>
                    {isMatched && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isSubmitted
                            ? isCorrect
                              ? '#4ade80'
                              : '#ef4444'
                            : theme.secondaryColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {isSubmitted ? (isCorrect ? '✓' : '✗') : '🔗'}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Effects column */}
          <div>
            <h3
              style={{
                fontSize: '1.25rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme.secondaryColor,
                textAlign: 'center',
              }}
            >
              Effects
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {effects.map((effect) => {
                const isMatched = isEffectMatched(effect.id);
                const matchedCauseId = getCauseForEffect(effect.id);
                const isSelected = matchedCauseId === selectedCause;
                const isCorrect = matchedCauseId ? results[matchedCauseId] : false;
                const isIncorrect = isSubmitted && isMatched && !isCorrect;

                return (
                  <div
                    key={effect.id}
                    onClick={() => handleEffectClick(effect.id)}
                    style={{
                      padding: '1.25rem',
                      backgroundColor: isSelected
                        ? `${theme.secondaryColor}40`
                        : isMatched
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(255, 255, 255, 0.1)',
                      border: `2px solid ${
                        isSubmitted
                          ? isCorrect
                            ? '#4ade80'
                            : isIncorrect
                            ? '#ef4444'
                            : 'rgba(255, 255, 255, 0.2)'
                          : isMatched
                          ? theme.secondaryColor
                          : 'rgba(255, 255, 255, 0.2)'
                      }`,
                      borderRadius: '0.75rem',
                      cursor: isSubmitted ? 'default' : 'pointer',
                      transition: 'all 0.2s',
                      opacity: isSubmitted
                        ? 1
                        : !selectedCause || isMatched
                        ? 1
                        : 0.7,
                      position: 'relative',
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitted && (selectedCause || isMatched)) {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitted) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }
                    }}
                  >
                    <div style={{ fontSize: '1rem', lineHeight: '1.5', color: 'white' }}>
                      {effect.text}
                    </div>
                    {isMatched && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.75rem',
                          right: '0.75rem',
                          width: '28px',
                          height: '28px',
                          borderRadius: '50%',
                          backgroundColor: isSubmitted
                            ? isCorrect
                              ? '#4ade80'
                              : '#ef4444'
                            : theme.secondaryColor,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1rem',
                          fontWeight: 'bold',
                        }}
                      >
                        {isSubmitted ? (isCorrect ? '✓' : '✗') : '🔗'}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Explanations section (shown after submission) */}
        {isSubmitted && (
          <div
            style={{
              marginBottom: '2rem',
              animation: 'fadeIn 0.5s ease-in 0.2s both',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1.5rem',
                color: theme.secondaryColor,
                textAlign: 'center',
              }}
            >
              Explanations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {causes.map((pair) => {
                const userMatchedEffectId = matches[pair.id];
                const userMatchedEffect = effects.find((e) => e.id === userMatchedEffectId);
                const isCorrect = results[pair.id];

                return (
                  <div
                    key={pair.id}
                    style={{
                      padding: '1.5rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.75rem',
                      borderLeft: `4px solid ${
                        isCorrect ? '#4ade80' : userMatchedEffect ? '#ef4444' : '#fb923c'
                      }`,
                    }}
                  >
                    <div style={{ marginBottom: '1rem' }}>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          color: '#aaa',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Cause
                      </div>
                      <div style={{ fontSize: '1rem', color: 'white', marginBottom: '0.75rem' }}>
                        {pair.cause}
                      </div>
                      <div
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 'bold',
                          textTransform: 'uppercase',
                          color: '#aaa',
                          marginBottom: '0.5rem',
                        }}
                      >
                        Correct Effect
                      </div>
                      <div style={{ fontSize: '1rem', color: '#4ade80' }}>{pair.effect}</div>
                    </div>

                    {userMatchedEffect && !isCorrect && (
                      <div
                        style={{
                          marginBottom: '1rem',
                          padding: '0.75rem',
                          backgroundColor: 'rgba(239, 68, 68, 0.1)',
                          borderRadius: '0.5rem',
                        }}
                      >
                        <div
                          style={{
                            fontSize: '0.875rem',
                            fontWeight: 'bold',
                            color: '#ef4444',
                            marginBottom: '0.5rem',
                          }}
                        >
                          Your Answer
                        </div>
                        <div style={{ fontSize: '1rem', color: '#fca5a5' }}>
                          {userMatchedEffect.text}
                        </div>
                      </div>
                    )}

                    <div
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        borderRadius: '0.5rem',
                        fontStyle: 'italic',
                        color: '#ddd',
                        fontSize: '0.95rem',
                        lineHeight: '1.6',
                      }}
                    >
                      {pair.explanation}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Action button */}
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={Object.keys(matches).length === 0}
              style={{
                padding: '1rem 3rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor:
                  Object.keys(matches).length > 0 ? theme.secondaryColor : '#555',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: Object.keys(matches).length > 0 ? 'pointer' : 'not-allowed',
                transition: 'transform 0.2s, box-shadow 0.2s',
                opacity: Object.keys(matches).length > 0 ? 1 : 0.5,
              }}
              onMouseEnter={(e) => {
                if (Object.keys(matches).length > 0) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (Object.keys(matches).length > 0) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              Submit Matches
            </button>
          ) : (
            <button
              onClick={handleContinue}
              style={{
                padding: '1rem 3rem',
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
          )}
        </div>

        {/* Learning points */}
        {scene.learningPoints && scene.learningPoints.length > 0 && !isSubmitted && (
          <div
            style={{
              borderLeft: `4px solid ${theme.secondaryColor}`,
              paddingLeft: '1rem',
              marginTop: '2rem',
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
        {canGoBack && !isSubmitted && (
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

export default CauseEffectScene;
