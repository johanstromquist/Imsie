import { useState } from 'react';
import type { QuizQuestion, AdventureTheme } from '../../types';

interface QuizQuestionComponentProps {
  question: QuizQuestion;
  theme: AdventureTheme;
  onSubmit: (answer: string | string[] | Record<string, string>) => void;
}

const QuizQuestionComponent: React.FC<QuizQuestionComponentProps> = ({ question, theme, onSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [showExplanation, setShowExplanation] = useState(false);

  const handleSubmit = () => {
    if (!selectedAnswer) return;
    setShowExplanation(true);
    setTimeout(() => {
      onSubmit(selectedAnswer);
      setSelectedAnswer('');
      setShowExplanation(false);
    }, 3000); // Show explanation for 3 seconds
  };

  const renderQuestionInput = () => {
    switch (question.type) {
      case 'multiple-choice':
        return (
          <div style={{ marginBottom: '2rem' }}>
            {question.options?.map((option, index) => (
              <label
                key={index}
                style={{
                  display: 'block',
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  backgroundColor: selectedAnswer === option ? theme.secondaryColor : '#333',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (selectedAnswer !== option) {
                    e.currentTarget.style.backgroundColor = '#444';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedAnswer !== option) {
                    e.currentTarget.style.backgroundColor = '#333';
                  }
                }}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  style={{ marginRight: '0.75rem' }}
                  disabled={showExplanation}
                />
                {option}
              </label>
            ))}
          </div>
        );

      case 'true-false':
        return (
          <div style={{ marginBottom: '2rem' }}>
            {['True', 'False'].map((option) => (
              <label
                key={option}
                style={{
                  display: 'block',
                  padding: '1rem',
                  marginBottom: '0.5rem',
                  backgroundColor: selectedAnswer === option ? theme.secondaryColor : '#333',
                  borderRadius: '0.5rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s',
                }}
              >
                <input
                  type="radio"
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={(e) => setSelectedAnswer(e.target.value)}
                  style={{ marginRight: '0.75rem' }}
                  disabled={showExplanation}
                />
                {option}
              </label>
            ))}
          </div>
        );

      case 'short-answer':
        return (
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              value={selectedAnswer}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              placeholder="Type your answer..."
              disabled={showExplanation}
              style={{
                width: '100%',
                padding: '1rem',
                fontSize: '1rem',
                backgroundColor: '#333',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
              }}
            />
          </div>
        );

      case 'matching':
        // TODO: Implement matching question type
        return (
          <div style={{ marginBottom: '2rem', color: '#ccc' }}>
            <p>Matching questions not yet implemented</p>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div>
      {/* Question */}
      <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>
        {question.question}
      </h3>

      {/* Points */}
      <p style={{ color: '#888', marginBottom: '1.5rem' }}>
        Worth {question.points} {question.points === 1 ? 'point' : 'points'}
      </p>

      {/* Input */}
      {renderQuestionInput()}

      {/* Explanation (shown after submit) */}
      {showExplanation && (
        <div
          style={{
            padding: '1rem',
            backgroundColor: selectedAnswer === question.correctAnswer ? '#2d5016' : '#501616',
            borderRadius: '0.5rem',
            marginBottom: '1rem',
          }}
        >
          <p style={{ margin: 0, marginBottom: '0.5rem', fontWeight: 'bold' }}>
            {selectedAnswer === question.correctAnswer ? 'Correct!' : 'Incorrect'}
          </p>
          <p style={{ margin: 0 }}>{question.explanation}</p>
        </div>
      )}

      {/* Submit button */}
      {!showExplanation && (
        <button
          onClick={handleSubmit}
          disabled={!selectedAnswer}
          style={{
            padding: '0.75rem 2rem',
            fontSize: '1rem',
            backgroundColor: selectedAnswer ? theme.secondaryColor : '#555',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            cursor: selectedAnswer ? 'pointer' : 'not-allowed',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => {
            if (selectedAnswer) {
              e.currentTarget.style.transform = 'scale(1.05)';
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Submit Answer
        </button>
      )}
    </div>
  );
};

export default QuizQuestionComponent;
