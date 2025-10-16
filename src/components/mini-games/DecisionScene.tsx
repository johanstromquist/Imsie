import { useState, useEffect } from 'react';
import type { DecisionScene as DecisionSceneType, AdventureTheme, Choice } from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface DecisionSceneProps {
  scene: DecisionSceneType;
  theme: AdventureTheme;
  onComplete: (choiceId: string, nextSceneId?: string) => void;
  onBack: () => void;
  canGoBack: boolean;
}

const DecisionScene: React.FC<DecisionSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [selectedChoice, setSelectedChoice] = useState<Choice | null>(null);
  const [showConsequence, setShowConsequence] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(
    scene.timeLimit || null
  );

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  // Timer countdown
  useEffect(() => {
    if (timeRemaining === null || timeRemaining <= 0 || selectedChoice) return;

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          // Time's up - select first choice automatically
          const firstChoice = scene.choices[0];
          setSelectedChoice(firstChoice);
          setShowConsequence(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, selectedChoice, scene.choices]);

  const handleChoiceClick = (choice: Choice) => {
    if (selectedChoice) return; // Already selected

    setSelectedChoice(choice);
    if (choice.consequence) {
      setShowConsequence(true);
    } else {
      // No consequence, proceed immediately
      onComplete(choice.id, choice.nextSceneId);
    }
  };

  const handleContinue = () => {
    if (selectedChoice) {
      onComplete(selectedChoice.id, selectedChoice.nextSceneId);
    }
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
      {/* Content container */}
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2.5rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
        }}
      >
        {/* Timer display */}
        {timeRemaining !== null && timeRemaining > 0 && !selectedChoice && (
          <div
            style={{
              position: 'absolute',
              top: '1.5rem',
              right: '1.5rem',
              padding: '0.75rem 1.5rem',
              backgroundColor:
                timeRemaining <= 10 ? 'rgba(239, 68, 68, 0.9)' : 'rgba(0, 0, 0, 0.6)',
              borderRadius: '2rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              animation: timeRemaining <= 10 ? 'pulse 1s infinite' : 'none',
            }}
          >
            <span>⏱</span>
            <span>{timeRemaining}s</span>
          </div>
        )}

        {/* Scene Image */}
        {sceneImage && (
          <div
            style={{
              marginBottom: '2rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={sceneImage.src}
              alt={scene.prompt}
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                borderRadius: '0.75rem',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
              }}
            />
          </div>
        )}

        {/* Prompt and context */}
        <div style={{ marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              marginBottom: '1rem',
              color: theme.secondaryColor,
            }}
          >
            {scene.prompt}
          </h2>
          {scene.context && (
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75',
                color: '#ddd',
              }}
            >
              {scene.context}
            </p>
          )}
        </div>

        {/* Show consequence or choices */}
        {showConsequence && selectedChoice?.consequence ? (
          <div
            style={{
              marginBottom: '2rem',
              animation: 'fadeIn 0.5s ease-in',
            }}
          >
            <div
              style={{
                padding: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '0.75rem',
                borderLeft: `4px solid ${theme.secondaryColor}`,
                marginBottom: '1.5rem',
              }}
            >
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '0.75rem',
                  color: theme.secondaryColor,
                }}
              >
                Your Choice:
              </h3>
              <p style={{ fontSize: '1rem', color: 'white', marginBottom: '1rem' }}>
                {selectedChoice.text}
              </p>
              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                  margin: '1rem 0',
                }}
              />
              <h4
                style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#ccc',
                }}
              >
                Consequence:
              </h4>
              <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#ddd' }}>
                {selectedChoice.consequence}
              </p>
            </div>

            {/* Learning points from choice */}
            {selectedChoice.learningPoints && selectedChoice.learningPoints.length > 0 && (
              <div
                style={{
                  borderLeft: `4px solid ${theme.secondaryColor}`,
                  paddingLeft: '1rem',
                  marginBottom: '1.5rem',
                  fontStyle: 'italic',
                  color: '#ccc',
                }}
              >
                {selectedChoice.learningPoints.map((lp) => (
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
        ) : (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            {scene.choices.map((choice, index) => {
              const isSelected = selectedChoice?.id === choice.id;
              return (
                <button
                  key={choice.id}
                  onClick={() => handleChoiceClick(choice)}
                  disabled={!!selectedChoice}
                  style={{
                    padding: '1.5rem',
                    fontSize: '1.125rem',
                    textAlign: 'left',
                    backgroundColor: isSelected
                      ? `${theme.secondaryColor}80`
                      : 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: `2px solid ${
                      isSelected ? theme.secondaryColor : 'rgba(255, 255, 255, 0.3)'
                    }`,
                    borderRadius: '0.75rem',
                    cursor: selectedChoice ? 'default' : 'pointer',
                    transition: 'all 0.2s',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                  onMouseEnter={(e) => {
                    if (!selectedChoice) {
                      e.currentTarget.style.transform = 'translateX(8px)';
                      e.currentTarget.style.borderColor = theme.secondaryColor;
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!selectedChoice) {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow = `0 0 0 3px ${theme.secondaryColor}40`;
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: isSelected
                        ? theme.secondaryColor
                        : 'rgba(255, 255, 255, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 'bold',
                      fontSize: '1rem',
                      flexShrink: 0,
                    }}
                  >
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span style={{ flex: 1 }}>{choice.text}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Learning points */}
        {scene.learningPoints && scene.learningPoints.length > 0 && !showConsequence && (
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
        {canGoBack && !selectedChoice && (
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

          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
        `}
      </style>
    </div>
  );
};

export default DecisionScene;
