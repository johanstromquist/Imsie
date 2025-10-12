import { useState, useCallback } from 'react';
import type { Quiz, QuizQuestion, QuizAnswer, QuizScore, AdventureTheme } from '../../types';
import QuizQuestionComponent from './QuizQuestionComponent';
import QuizResults from './QuizResults';

interface QuizPlayerProps {
  quiz: Quiz;
  theme: AdventureTheme;
  onComplete: (score: QuizScore) => void;
  onRetry?: () => void;
}

const QuizPlayer: React.FC<QuizPlayerProps> = ({ quiz, theme, onComplete, onRetry }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quiz.questions[currentQuestionIndex];

  const handleAnswerSubmit = useCallback((questionId: string, answer: string | string[] | Record<string, string>) => {
    const question = quiz.questions.find((q) => q.id === questionId);
    if (!question) return;

    // Check if answer is correct
    const isCorrect = checkAnswer(question, answer);
    const pointsEarned = isCorrect ? question.points : 0;

    const quizAnswer: QuizAnswer = {
      questionId,
      answer,
      correct: isCorrect,
      pointsEarned,
    };

    const newAnswers = [...answers, quizAnswer];
    setAnswers(newAnswers);

    // Move to next question or show results
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate final score
      const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
      const earnedPoints = newAnswers.reduce((sum, a) => sum + a.pointsEarned, 0);
      const percentage = Math.round((earnedPoints / totalPoints) * 100);

      const quizScore: QuizScore = {
        quizId: quiz.id,
        score: percentage,
        answers: newAnswers,
        completedAt: new Date(),
      };

      setShowResults(true);
      onComplete(quizScore);
    }
  }, [quiz, currentQuestionIndex, answers, onComplete]);

  const checkAnswer = (question: QuizQuestion, answer: string | string[] | Record<string, string>): boolean => {
    switch (question.type) {
      case 'multiple-choice':
      case 'true-false':
        return answer === question.correctAnswer;

      case 'short-answer':
        // Simple case-insensitive comparison
        const userAnswer = (answer as string).toLowerCase().trim();
        const correct = (question.correctAnswer as string).toLowerCase().trim();
        return userAnswer === correct;

      case 'matching':
        // Compare all key-value pairs
        const userMatching = answer as Record<string, string>;
        const correctMatching = question.correctAnswer as Record<string, string>;
        return Object.keys(correctMatching).every(
          (key) => userMatching[key] === correctMatching[key]
        );

      default:
        return false;
    }
  };

  if (showResults) {
    const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
    const earnedPoints = answers.reduce((sum, a) => sum + a.pointsEarned, 0);
    const percentage = Math.round((earnedPoints / totalPoints) * 100);

    return (
      <QuizResults
        quiz={quiz}
        answers={answers}
        percentage={percentage}
        passed={percentage >= quiz.passingScore}
        theme={theme}
        onRetry={quiz.allowRetry ? onRetry : undefined}
      />
    );
  }

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
        }}
      >
        {/* Quiz header */}
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ margin: 0, marginBottom: '0.5rem' }}>{quiz.title}</h2>
          {quiz.description && (
            <p style={{ margin: 0, color: '#ccc' }}>{quiz.description}</p>
          )}
          <p style={{ margin: 0, marginTop: '1rem', color: '#888' }}>
            Question {currentQuestionIndex + 1} of {quiz.questions.length}
          </p>
        </div>

        {/* Progress bar */}
        <div
          style={{
            width: '100%',
            height: '8px',
            backgroundColor: '#333',
            borderRadius: '4px',
            marginBottom: '2rem',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${((currentQuestionIndex + 1) / quiz.questions.length) * 100}%`,
              height: '100%',
              backgroundColor: theme.secondaryColor,
              transition: 'width 0.3s ease',
            }}
          />
        </div>

        {/* Current question */}
        <QuizQuestionComponent
          question={currentQuestion}
          theme={theme}
          onSubmit={(answer) => handleAnswerSubmit(currentQuestion.id, answer)}
        />
      </div>
    </div>
  );
};

export default QuizPlayer;
