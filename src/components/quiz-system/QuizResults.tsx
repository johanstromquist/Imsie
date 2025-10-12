import type { Quiz, QuizAnswer, AdventureTheme } from '../../types';

interface QuizResultsProps {
  quiz: Quiz;
  answers: QuizAnswer[];
  percentage: number;
  passed: boolean;
  theme: AdventureTheme;
  onRetry?: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({ quiz, answers, percentage, passed, theme, onRetry }) => {
  const correctCount = answers.filter((a) => a.correct).length;
  const totalQuestions = quiz.questions.length;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.primaryColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          textAlign: 'center',
        }}
      >
        {/* Result header */}
        <h2 style={{ fontSize: '2.5rem', margin: 0, marginBottom: '1rem' }}>
          {passed ? 'Congratulations!' : 'Keep Learning!'}
        </h2>

        {/* Score circle */}
        <div
          style={{
            width: '200px',
            height: '200px',
            margin: '2rem auto',
            borderRadius: '50%',
            backgroundColor: passed ? '#2d5016' : '#501616',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            border: `8px solid ${passed ? '#4a8020' : '#803030'}`,
          }}
        >
          <div style={{ fontSize: '4rem', fontWeight: 'bold' }}>
            {percentage}%
          </div>
          <div style={{ fontSize: '1rem', color: '#ccc' }}>
            {correctCount}/{totalQuestions} correct
          </div>
        </div>

        {/* Pass/Fail message */}
        <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
          {passed
            ? `You passed! (Passing score: ${quiz.passingScore}%)`
            : `You need ${quiz.passingScore}% to pass. You got ${percentage}%.`}
        </p>

        {/* Question breakdown */}
        <div style={{ textAlign: 'left', marginTop: '2rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Question Breakdown:</h3>
          {quiz.questions.map((question, index) => {
            const answer = answers[index];
            return (
              <div
                key={question.id}
                style={{
                  padding: '1rem',
                  marginBottom: '1rem',
                  backgroundColor: answer.correct ? '#2d5016' : '#501616',
                  borderRadius: '0.5rem',
                }}
              >
                <div style={{ marginBottom: '0.5rem', fontWeight: 'bold' }}>
                  Question {index + 1}: {question.question}
                </div>
                <div style={{ color: '#ccc', fontSize: '0.875rem' }}>
                  {answer.correct ? 'Correct' : 'Incorrect'} - {answer.pointsEarned}/{question.points} points
                </div>
              </div>
            );
          })}
        </div>

        {/* Retry button */}
        {!passed && onRetry && (
          <button
            onClick={onRetry}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              marginTop: '2rem',
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
            Retry Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default QuizResults;
