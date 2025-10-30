import { useState } from 'react';
import { customGameRegistry } from '../customGameRegistry';
import type { CustomGameProps } from '../customGameRegistry';
import { assetLoader } from '../../../services/assetLoader';

interface ImageChoiceOption {
  id: string;
  label: string;
  image?: string;
  description?: string;
}

interface ImageChoiceScenario {
  id: string;
  question: string;
  image?: string;
  options: ImageChoiceOption[];
  correctAnswerId: string;
  explanation: string;
}

interface ImageChoiceConfig {
  prompt: string;
  title: string;
  description: string;
  scenarios: ImageChoiceScenario[];
  backgroundImage?: string;
}

function isImageChoiceConfig(config: unknown): config is ImageChoiceConfig {
  if (!config || typeof config !== 'object') return false;
  const c = config as Record<string, unknown>;
  return (
    typeof c.prompt === 'string' &&
    typeof c.title === 'string' &&
    typeof c.description === 'string' &&
    Array.isArray(c.scenarios) &&
    c.scenarios.length > 0
  );
}

const ImageChoiceGame: React.FC<CustomGameProps> = ({
  config,
  theme,
  onComplete,
}) => {
  // Always call hooks before any conditional returns
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  // Type guard to ensure config matches expected structure
  if (!isImageChoiceConfig(config)) {
    return (
      <div style={{ padding: '2rem', color: 'white', textAlign: 'center' }}>
        <h2>Invalid Image Choice Configuration</h2>
        <p>The configuration provided does not match the expected format.</p>
      </div>
    );
  }

  const gameConfig = config;

  const currentScenario = gameConfig.scenarios[currentScenarioIndex];
  const isLastScenario = currentScenarioIndex === gameConfig.scenarios.length - 1;
  const isCorrect = selectedOptionId === currentScenario.correctAnswerId;

  const backgroundImage = gameConfig.backgroundImage
    ? assetLoader.getImage(gameConfig.backgroundImage)
    : null;

  const scenarioImage = currentScenario.image
    ? assetLoader.getImage(currentScenario.image)
    : null;

  const handleOptionSelect = (optionId: string) => {
    if (showExplanation) return; // Already answered

    setSelectedOptionId(optionId);
    setShowExplanation(true);

    if (optionId === currentScenario.correctAnswerId) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (isLastScenario) {
      onComplete();
    } else {
      setCurrentScenarioIndex(currentScenarioIndex + 1);
      setSelectedOptionId(null);
      setShowExplanation(false);
    }
  };

  const progress = ((currentScenarioIndex + 1) / gameConfig.scenarios.length) * 100;
  const finalScore = Math.round((score / gameConfig.scenarios.length) * 100);

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
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          borderRadius: '1rem',
          padding: '2rem',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              color: theme.secondaryColor,
              marginBottom: '0.5rem',
            }}
          >
            {gameConfig.title}
          </h1>
          <p style={{ fontSize: '1rem', color: '#aaa', marginBottom: '1rem' }}>
            {gameConfig.description}
          </p>

          {/* Progress bar */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span style={{ fontSize: '0.875rem', color: '#ccc' }}>
              {currentScenarioIndex + 1} / {gameConfig.scenarios.length}
            </span>
            <div
              style={{
                flex: 1,
                height: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '3px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${progress}%`,
                  backgroundColor: theme.secondaryColor,
                  transition: 'width 0.3s ease',
                }}
              />
            </div>
          </div>
        </div>

        {/* Scenario Image */}
        {scenarioImage && (
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <img
              src={scenarioImage.src}
              alt="Scenario"
              style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '0.5rem',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>
        )}

        {/* Question */}
        <h2
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          {currentScenario.question}
        </h2>

        {/* Options Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fit, minmax(${
              currentScenario.options.length <= 2 ? '300px' : '200px'
            }, 1fr))`,
            gap: '1.5rem',
            marginBottom: '2rem',
          }}
        >
          {currentScenario.options.map((option) => {
            const optionImage = option.image ? assetLoader.getImage(option.image) : null;
            const isSelected = selectedOptionId === option.id;
            const isCorrectOption = option.id === currentScenario.correctAnswerId;
            const showCorrect = showExplanation && isCorrectOption;
            const showIncorrect = showExplanation && isSelected && !isCorrect;

            return (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={showExplanation}
                style={{
                  padding: '1.5rem',
                  backgroundColor: showCorrect
                    ? 'rgba(74, 222, 128, 0.2)'
                    : showIncorrect
                    ? 'rgba(239, 68, 68, 0.2)'
                    : isSelected
                    ? 'rgba(255, 255, 255, 0.1)'
                    : 'rgba(255, 255, 255, 0.05)',
                  border: `3px solid ${
                    showCorrect
                      ? '#4ade80'
                      : showIncorrect
                      ? '#ef4444'
                      : isSelected
                      ? theme.secondaryColor
                      : 'rgba(255, 255, 255, 0.2)'
                  }`,
                  borderRadius: '0.75rem',
                  cursor: showExplanation ? 'default' : 'pointer',
                  transition: 'all 0.2s',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  position: 'relative',
                }}
                onMouseEnter={(e) => {
                  if (!showExplanation) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = theme.secondaryColor;
                    e.currentTarget.style.transform = 'translateY(-4px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!showExplanation) {
                    e.currentTarget.style.backgroundColor = isSelected
                      ? 'rgba(255, 255, 255, 0.1)'
                      : 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = isSelected
                      ? theme.secondaryColor
                      : 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }
                }}
              >
                {/* Checkmark/X indicator */}
                {showExplanation && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      backgroundColor: showCorrect ? '#4ade80' : showIncorrect ? '#ef4444' : 'transparent',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {showCorrect ? '✓' : showIncorrect ? '✗' : ''}
                  </div>
                )}

                {/* Option Image */}
                {optionImage && (
                  <img
                    src={optionImage.src}
                    alt={option.label}
                    style={{
                      width: '100%',
                      maxHeight: '150px',
                      objectFit: 'cover',
                      borderRadius: '0.5rem',
                    }}
                  />
                )}

                {/* Option Label */}
                <div
                  style={{
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    color: 'white',
                    textAlign: 'center',
                  }}
                >
                  {option.label}
                </div>

                {/* Option Description */}
                {option.description && (
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: '#ccc',
                      textAlign: 'center',
                      lineHeight: '1.4',
                    }}
                  >
                    {option.description}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: isCorrect
                ? 'rgba(74, 222, 128, 0.1)'
                : 'rgba(239, 68, 68, 0.1)',
              border: `2px solid ${isCorrect ? '#4ade80' : '#ef4444'}`,
              borderRadius: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <div
              style={{
                fontSize: '1.125rem',
                fontWeight: 'bold',
                color: isCorrect ? '#4ade80' : '#ef4444',
                marginBottom: '0.75rem',
              }}
            >
              {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
            </div>
            <div style={{ fontSize: '1rem', color: '#ddd', lineHeight: '1.6' }}>
              {currentScenario.explanation}
            </div>
          </div>
        )}

        {/* Next/Complete Button */}
        {showExplanation && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={handleNext}
              style={{
                padding: '1rem 3rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {isLastScenario ? `Complete (Score: ${finalScore}%)` : 'Next →'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// Register the game
customGameRegistry.register('image-choice', ImageChoiceGame);

export default ImageChoiceGame;
