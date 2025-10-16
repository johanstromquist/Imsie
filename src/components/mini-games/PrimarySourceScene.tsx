import { useState, useEffect } from 'react';
import type {
  PrimarySourceScene as PrimarySourceSceneType,
  AdventureTheme,
} from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface PrimarySourceSceneProps {
  scene: PrimarySourceSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const PrimarySourceScene: React.FC<PrimarySourceSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);
  const [currentAnswer, setCurrentAnswer] = useState<string>('');

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  const currentQuestion = scene.questions[currentQuestionIndex];

  // Check if all questions have been answered
  useEffect(() => {
    const allAnswered = scene.questions.every(q => answers[q.id]);
    setAllQuestionsAnswered(allAnswered);
  }, [answers, scene.questions]);

  // Reset current answer when question changes
  useEffect(() => {
    if (currentQuestion) {
      setCurrentAnswer(answers[currentQuestion.id] || '');
    }
  }, [currentQuestionIndex, currentQuestion, answers]);

  const renderSource = () => {
    switch (scene.source.type) {
      case 'text':
        return (
          <div
            style={{
              whiteSpace: 'pre-wrap',
              lineHeight: '1.75',
              fontSize: '1rem',
              color: '#ddd',
            }}
          >
            {scene.source.content}
          </div>
        );
      case 'image': {
        const img = assetLoader.getImage(scene.source.content);
        return img ? (
          <img
            src={img.src}
            alt={scene.source.title}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '0.5rem',
            }}
          />
        ) : null;
      }
      case 'audio':
        return (
          <audio
            controls
            src={scene.source.content}
            style={{
              width: '100%',
              marginTop: '1rem',
            }}
          />
        );
      case 'video':
        return (
          <video
            controls
            src={scene.source.content}
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '0.5rem',
            }}
          />
        );
    }
  };

  const handleAnswerSelect = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const handleSubmitAnswer = () => {
    if (!currentAnswer.trim()) return;

    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: currentAnswer,
    }));
    setShowExplanation(prev => ({
      ...prev,
      [currentQuestion.id]: true,
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < scene.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer('');
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const checkAnswer = (questionId: string): boolean => {
    const question = scene.questions.find(q => q.id === questionId);
    if (!question || !answers[questionId]) return false;

    const userAnswer = answers[questionId].toLowerCase().trim();
    const correctAnswer = question.correctAnswer;

    if (Array.isArray(correctAnswer)) {
      return correctAnswer.some(ans => ans.toLowerCase().trim() === userAnswer);
    } else {
      return correctAnswer.toLowerCase().trim() === userAnswer;
    }
  };

  const isAnswered = answers[currentQuestion?.id];
  const isCorrect = isAnswered && checkAnswer(currentQuestion?.id);
  const showCurrentExplanation = showExplanation[currentQuestion?.id];

  const progress = ((currentQuestionIndex + 1) / scene.questions.length) * 100;

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
            maxWidth: '1400px',
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

      {/* Main container with split layout */}
      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          borderRadius: '1rem',
          overflow: 'hidden',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '1.5rem 2rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            borderBottom: `2px solid ${theme.secondaryColor}`,
          }}
        >
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: theme.secondaryColor,
            }}
          >
            {scene.prompt}
          </h2>
          <div
            style={{
              fontSize: '0.875rem',
              color: '#ccc',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <span>
              Question {currentQuestionIndex + 1} of {scene.questions.length}
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

        {/* Split content area */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem',
            padding: '2rem',
            minHeight: '500px',
          }}
        >
          {/* Left side: Source document */}
          <div
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              padding: '1.5rem',
              borderRadius: '0.75rem',
              overflowY: 'auto',
              maxHeight: '600px',
            }}
          >
            <div style={{ marginBottom: '1rem' }}>
              <h3
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  color: theme.secondaryColor,
                  marginBottom: '0.5rem',
                }}
              >
                {scene.source.title}
              </h3>
              {scene.source.author && (
                <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '0.25rem' }}>
                  By {scene.source.author}
                </p>
              )}
              {scene.source.date && (
                <p style={{ fontSize: '0.9rem', color: '#aaa', marginBottom: '0.25rem' }}>
                  {scene.source.date}
                </p>
              )}
            </div>
            {renderSource()}
            {scene.source.citation && (
              <p
                style={{
                  fontSize: '0.75rem',
                  fontStyle: 'italic',
                  color: '#999',
                  marginTop: '1.5rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {scene.source.citation}
              </p>
            )}
          </div>

          {/* Right side: Questions */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            {/* Question card */}
            <div
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
              }}
            >
              <h4
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: 'white',
                }}
              >
                {currentQuestion.question}
              </h4>

              {/* Multiple choice options */}
              {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {currentQuestion.options.map((option, index) => {
                    const isSelected = currentAnswer === option;
                    const isThisCorrect =
                      showCurrentExplanation &&
                      (Array.isArray(currentQuestion.correctAnswer)
                        ? currentQuestion.correctAnswer.includes(option)
                        : currentQuestion.correctAnswer === option);
                    const isThisWrong = showCurrentExplanation && isSelected && !isThisCorrect;

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(option)}
                        disabled={showCurrentExplanation}
                        style={{
                          padding: '1rem 1.25rem',
                          fontSize: '1rem',
                          textAlign: 'left',
                          backgroundColor: isSelected
                            ? 'rgba(255, 255, 255, 0.1)'
                            : 'rgba(255, 255, 255, 0.05)',
                          color: 'white',
                          border: `2px solid ${
                            isThisCorrect
                              ? '#4ade80'
                              : isThisWrong
                              ? '#ef4444'
                              : isSelected
                              ? theme.secondaryColor
                              : 'rgba(255, 255, 255, 0.2)'
                          }`,
                          borderRadius: '0.5rem',
                          cursor: showCurrentExplanation ? 'default' : 'pointer',
                          transition: 'all 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                        }}
                        onMouseEnter={(e) => {
                          if (!showCurrentExplanation) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            e.currentTarget.style.borderColor = theme.secondaryColor;
                          }
                        }}
                        onMouseLeave={(e) => {
                          if (!showCurrentExplanation && !isSelected) {
                            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                          }
                        }}
                      >
                        <span
                          style={{
                            width: '24px',
                            height: '24px',
                            borderRadius: '50%',
                            backgroundColor: isThisCorrect
                              ? '#4ade80'
                              : isThisWrong
                              ? '#ef4444'
                              : isSelected
                              ? theme.secondaryColor
                              : 'rgba(255, 255, 255, 0.3)',
                            color: 'white',
                            fontSize: '0.875rem',
                            fontWeight: 'bold',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {isThisCorrect ? '✓' : isThisWrong ? '✗' : String.fromCharCode(65 + index)}
                        </span>
                        <span style={{ flex: 1 }}>{option}</span>
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Short answer input */}
              {currentQuestion.type === 'short-answer' && (
                <div>
                  <textarea
                    value={currentAnswer}
                    onChange={(e) => setCurrentAnswer(e.target.value)}
                    disabled={showCurrentExplanation}
                    placeholder="Type your answer here..."
                    style={{
                      width: '100%',
                      minHeight: '100px',
                      padding: '1rem',
                      fontSize: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'white',
                      border: `2px solid ${
                        showCurrentExplanation
                          ? isCorrect
                            ? '#4ade80'
                            : '#ef4444'
                          : 'rgba(255, 255, 255, 0.2)'
                      }`,
                      borderRadius: '0.5rem',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                    }}
                  />
                  {showCurrentExplanation && (
                    <div
                      style={{
                        marginTop: '0.75rem',
                        padding: '0.75rem',
                        backgroundColor: isCorrect ? 'rgba(74, 222, 128, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        border: `2px solid ${isCorrect ? '#4ade80' : '#ef4444'}`,
                        borderRadius: '0.5rem',
                        fontSize: '0.9rem',
                        color: isCorrect ? '#4ade80' : '#ef4444',
                      }}
                    >
                      {isCorrect ? '✓ Correct!' : '✗ Incorrect'}
                    </div>
                  )}
                </div>
              )}

              {/* Submit answer button */}
              {!showCurrentExplanation && (
                <button
                  onClick={handleSubmitAnswer}
                  disabled={!currentAnswer.trim()}
                  style={{
                    marginTop: '1.5rem',
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: currentAnswer.trim() ? theme.secondaryColor : '#555',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: currentAnswer.trim() ? 'pointer' : 'not-allowed',
                    opacity: currentAnswer.trim() ? 1 : 0.5,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (currentAnswer.trim()) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (currentAnswer.trim()) {
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  Submit Answer
                </button>
              )}
            </div>

            {/* Explanation card */}
            {showCurrentExplanation && (
              <div
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  padding: '1.5rem',
                  borderRadius: '0.75rem',
                  borderLeft: `4px solid ${theme.secondaryColor}`,
                }}
              >
                <h5
                  style={{
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    marginBottom: '0.75rem',
                    color: theme.secondaryColor,
                  }}
                >
                  Explanation
                </h5>
                <p
                  style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.6',
                    color: '#ddd',
                  }}
                >
                  {currentQuestion.explanation}
                </p>
              </div>
            )}

            {/* Navigation buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'space-between',
                marginTop: 'auto',
              }}
            >
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                style={{
                  padding: '0.75rem 1.5rem',
                  fontSize: '1rem',
                  backgroundColor: currentQuestionIndex > 0 ? 'rgba(255, 255, 255, 0.1)' : '#555',
                  color: 'white',
                  border: 'none',
                  borderRadius: '0.5rem',
                  cursor: currentQuestionIndex > 0 ? 'pointer' : 'not-allowed',
                  opacity: currentQuestionIndex > 0 ? 1 : 0.5,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (currentQuestionIndex > 0) {
                    e.currentTarget.style.transform = 'translateX(-2px)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentQuestionIndex > 0) {
                    e.currentTarget.style.transform = 'translateX(0)';
                  }
                }}
              >
                ← Previous
              </button>

              {currentQuestionIndex < scene.questions.length - 1 ? (
                <button
                  onClick={handleNextQuestion}
                  disabled={!showCurrentExplanation}
                  style={{
                    padding: '0.75rem 1.5rem',
                    fontSize: '1rem',
                    backgroundColor: showCurrentExplanation ? theme.secondaryColor : '#555',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: showCurrentExplanation ? 'pointer' : 'not-allowed',
                    opacity: showCurrentExplanation ? 1 : 0.5,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (showCurrentExplanation) {
                      e.currentTarget.style.transform = 'translateX(2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (showCurrentExplanation) {
                      e.currentTarget.style.transform = 'translateX(0)';
                    }
                  }}
                >
                  Next →
                </button>
              ) : (
                <button
                  onClick={onComplete}
                  disabled={!allQuestionsAnswered}
                  style={{
                    padding: '0.75rem 2rem',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    backgroundColor: allQuestionsAnswered ? theme.secondaryColor : '#555',
                    color: 'white',
                    border: 'none',
                    borderRadius: '0.5rem',
                    cursor: allQuestionsAnswered ? 'pointer' : 'not-allowed',
                    opacity: allQuestionsAnswered ? 1 : 0.5,
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (allQuestionsAnswered) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (allQuestionsAnswered) {
                      e.currentTarget.style.transform = 'scale(1)';
                    }
                  }}
                >
                  Complete Analysis
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Learning points */}
        {scene.learningPoints && scene.learningPoints.length > 0 && (
          <div
            style={{
              padding: '1.5rem 2rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                borderLeft: `4px solid ${theme.secondaryColor}`,
                paddingLeft: '1rem',
                fontStyle: 'italic',
                color: '#ccc',
              }}
            >
              {scene.learningPoints.map((lp) => (
                <div key={lp.id} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                  {lp.content}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Back button */}
      {canGoBack && (
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '2rem',
            bottom: '2rem',
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
            opacity: 0.3,
            transition: 'opacity 0.3s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.3';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Go back"
        >
          ←
        </button>
      )}
    </div>
  );
};

export default PrimarySourceScene;
