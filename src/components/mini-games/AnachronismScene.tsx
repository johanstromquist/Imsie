import { useState } from 'react';
import type {
  AnachronismScene as AnachronismSceneType,
  AdventureTheme,
  AnachronismItem,
} from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface AnachronismSceneProps {
  scene: AnachronismSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

type ResultType = 'correct' | 'incorrect' | 'missed' | null;

const AnachronismScene: React.FC<AnachronismSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [results, setResults] = useState<Record<string, ResultType>>({});
  const [score, setScore] = useState<{ correct: number; total: number } | null>(null);

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  const toggleItem = (itemId: string) => {
    if (isSubmitted) return; // Can't change after submission

    setSelectedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
    const newResults: Record<string, ResultType> = {};
    let correctCount = 0;

    // Check selected items
    selectedItems.forEach((itemId) => {
      const isAnachronism = scene.correctAnswers.includes(itemId);
      newResults[itemId] = isAnachronism ? 'correct' : 'incorrect';
      if (isAnachronism) correctCount++;
    });

    // Check missed anachronisms
    scene.correctAnswers.forEach((correctId) => {
      if (!selectedItems.has(correctId)) {
        newResults[correctId] = 'missed';
      }
    });

    setResults(newResults);
    setScore({
      correct: correctCount,
      total: scene.correctAnswers.length,
    });
    setIsSubmitted(true);
  };

  const getItemBorderColor = (itemId: string, isSelected: boolean): string => {
    if (!isSubmitted) {
      return isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.2)';
    }
    const result = results[itemId];
    switch (result) {
      case 'correct':
        return '#4ade80';
      case 'incorrect':
        return '#ef4444';
      case 'missed':
        return '#fb923c';
      default:
        return 'rgba(255, 255, 255, 0.1)';
    }
  };

  const getResultIcon = (result: ResultType): string => {
    switch (result) {
      case 'correct':
        return '✓';
      case 'incorrect':
        return '✗';
      case 'missed':
        return '!';
      default:
        return '';
    }
  };

  const getResultIconColor = (result: ResultType): string => {
    switch (result) {
      case 'correct':
        return '#4ade80';
      case 'incorrect':
        return '#ef4444';
      case 'missed':
        return '#fb923c';
      default:
        return 'transparent';
    }
  };

  const canSubmit = selectedItems.size > 0;
  const scorePercentage = score
    ? Math.round((score.correct / score.total) * 100)
    : 0;

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
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: '#ddd',
              marginBottom: '0.5rem',
            }}
          >
            {scene.scenario}
          </p>
          {!isSubmitted && (
            <p
              style={{
                fontSize: '1rem',
                color: '#aaa',
                fontStyle: 'italic',
              }}
            >
              Click all items that don't belong in this time period
            </p>
          )}
        </div>

        {/* Score display (after submission) */}
        {isSubmitted && score && (
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
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <div>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: theme.secondaryColor,
                    marginBottom: '0.5rem',
                  }}
                >
                  Results
                </h3>
                <p style={{ fontSize: '1rem', color: '#ddd' }}>
                  You found {score.correct} out of {score.total} anachronisms
                </p>
              </div>
              <div
                style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: scorePercentage >= 70 ? '#4ade80' : '#fb923c',
                }}
              >
                {scorePercentage}%
              </div>
            </div>
          </div>
        )}

        {/* Items grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {scene.items.map((item) => {
            const isSelected = selectedItems.has(item.id);
            const result = results[item.id];
            const borderColor = getItemBorderColor(item.id, isSelected);

            return (
              <div
                key={item.id}
                onClick={() => toggleItem(item.id)}
                style={{
                  padding: '1rem',
                  border: `3px solid ${borderColor}`,
                  borderRadius: '0.75rem',
                  cursor: isSubmitted ? 'default' : 'pointer',
                  backgroundColor: isSelected
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'transparent',
                  transition: 'all 0.2s',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitted) {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitted) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {/* Item image */}
                {item.image && (() => {
                  const itemImage = assetLoader.getImage(item.image);
                  return itemImage ? (
                    <div style={{ marginBottom: '0.75rem', textAlign: 'center' }}>
                      <img
                        src={itemImage.src}
                        alt={item.name}
                        style={{
                          width: '100%',
                          height: '120px',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                        }}
                      />
                    </div>
                  ) : null;
                })()}

                {/* Item name */}
                <div
                  style={{
                    fontWeight: 'bold',
                    textAlign: 'center',
                    fontSize: '1.125rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  {item.name}
                </div>

                {/* Item description (shown after submission) */}
                {isSubmitted && (
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#ccc',
                      textAlign: 'center',
                      lineHeight: '1.4',
                      marginTop: 'auto',
                    }}
                  >
                    {item.description}
                  </div>
                )}

                {/* Result indicator */}
                {isSubmitted && result && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: getResultIconColor(result),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {getResultIcon(result)}
                  </div>
                )}

                {/* Selection indicator (before submission) */}
                {!isSubmitted && isSelected && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: theme.secondaryColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: 'white',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Explanations section (after submission) */}
        {isSubmitted && (
          <div
            style={{
              marginBottom: '2rem',
              animation: 'fadeIn 0.5s ease-in 0.3s backwards',
            }}
          >
            <h3
              style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme.secondaryColor,
              }}
            >
              Explanations
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {scene.items.map((item) => {
                const isAnachronism = scene.correctAnswers.includes(item.id);
                return (
                  <details
                    key={item.id}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '0.5rem',
                      overflow: 'hidden',
                    }}
                  >
                    <summary
                      style={{
                        cursor: 'pointer',
                        padding: '1rem',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontWeight: '600',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <span>
                        {item.name}{' '}
                        <span
                          style={{
                            color: isAnachronism ? '#fb923c' : '#4ade80',
                            fontWeight: 'normal',
                            fontSize: '0.875rem',
                          }}
                        >
                          {isAnachronism ? '(Anachronism)' : '(Belongs)'}
                        </span>
                      </span>
                      <span style={{ fontSize: '0.875rem', color: '#aaa' }}>
                        Click to expand
                      </span>
                    </summary>
                    <div
                      style={{
                        padding: '1rem',
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                      }}
                    >
                      <p
                        style={{
                          fontSize: '1rem',
                          lineHeight: '1.6',
                          color: '#ddd',
                          marginBottom: '0.75rem',
                        }}
                      >
                        {item.description}
                      </p>
                      <div
                        style={{
                          borderLeft: `4px solid ${theme.secondaryColor}`,
                          paddingLeft: '1rem',
                          fontStyle: 'italic',
                          color: '#ccc',
                        }}
                      >
                        {item.explanation}
                      </div>
                    </div>
                  </details>
                );
              })}
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div style={{ textAlign: 'center' }}>
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={!canSubmit}
              style={{
                padding: '1rem 3rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor: canSubmit ? theme.secondaryColor : '#555',
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: canSubmit ? 'pointer' : 'not-allowed',
                transition: 'transform 0.2s, box-shadow 0.2s',
                opacity: canSubmit ? 1 : 0.5,
              }}
              onMouseEnter={(e) => {
                if (canSubmit) {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
                }
              }}
              onMouseLeave={(e) => {
                if (canSubmit) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              {canSubmit ? 'Submit Answers' : 'Select at least one item'}
            </button>
          ) : (
            <button
              onClick={onComplete}
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
        {scene.learningPoints && scene.learningPoints.length > 0 && (
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

export default AnachronismScene;
