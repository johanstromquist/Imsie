import React, { useState } from 'react';
import type { Quiz, QuizAnswer, AdventureTheme } from '../../types';
import QuizQuestion from './QuizQuestion';

interface QuizRendererProps {
  quiz: Quiz;
  theme: AdventureTheme;
  onComplete: (passed: boolean, score: number, answers: QuizAnswer[]) => void;
}

const QuizRenderer: React.FC<QuizRendererProps> = ({ quiz, theme, onComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<QuizAnswer[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // Check if current question has been answered
  const currentAnswer = userAnswers.find(
    (answer) => answer.questionId === currentQuestion.id
  );

  const handleAnswerChange = (answer: string | string[] | Record<string, string>) => {
    setValidationError(null);

    // Determine if answer is correct
    const isCorrect = checkAnswer(currentQuestion.correctAnswer, answer);
    const pointsEarned = isCorrect ? currentQuestion.points : 0;

    const newAnswer: QuizAnswer = {
      questionId: currentQuestion.id,
      answer,
      correct: isCorrect,
      pointsEarned,
    };

    // Update or add answer
    setUserAnswers((prev) => {
      const filtered = prev.filter((a) => a.questionId !== currentQuestion.id);
      return [...filtered, newAnswer];
    });
  };

  const checkAnswer = (
    correctAnswer: string | string[] | Record<string, string>,
    userAnswer: string | string[] | Record<string, string>
  ): boolean => {
    // Handle different answer types
    if (Array.isArray(correctAnswer)) {
      if (!Array.isArray(userAnswer)) return false;
      if (correctAnswer.length !== userAnswer.length) return false;
      const sortedCorrect = [...correctAnswer].sort();
      const sortedUser = [...userAnswer].sort();
      return sortedCorrect.every((val, idx) => val === sortedUser[idx]);
    } else if (typeof correctAnswer === 'object' && correctAnswer !== null) {
      if (typeof userAnswer !== 'object' || userAnswer === null) return false;
      if (Array.isArray(userAnswer)) return false;
      const correctKeys = Object.keys(correctAnswer).sort();
      const userKeys = Object.keys(userAnswer).sort();
      if (correctKeys.length !== userKeys.length) return false;
      return correctKeys.every(
        (key) => correctAnswer[key] === userAnswer[key]
      );
    } else {
      // Simple string comparison
      return correctAnswer === userAnswer;
    }
  };

  const handleNext = () => {
    if (!currentAnswer) {
      setValidationError('Please answer the question before continuing.');
      return;
    }

    setValidationError(null);

    if (isLastQuestion) {
      // Calculate final score and complete quiz
      completeQuiz();
    } else {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setValidationError(null);
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const completeQuiz = () => {
    // Calculate total points earned and total possible points
    const totalPointsEarned = userAnswers.reduce(
      (sum, answer) => sum + answer.pointsEarned,
      0
    );
    const totalPossiblePoints = quiz.questions.reduce(
      (sum, question) => sum + question.points,
      0
    );

    // Calculate percentage score
    const percentageScore = totalPossiblePoints > 0
      ? (totalPointsEarned / totalPossiblePoints) * 100
      : 0;

    // Determine pass/fail
    const passed = percentageScore >= quiz.passingScore;

    setIsCompleted(true);
    onComplete(passed, percentageScore, userAnswers);
  };

  const handleSubmit = () => {
    if (!currentAnswer) {
      setValidationError('Please answer the question before submitting.');
      return;
    }

    completeQuiz();
  };

  if (isCompleted) {
    return null; // Parent component will handle showing results
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.primaryColor,
        padding: '2rem',
        position: 'relative',
      }}
    >
      {/* Content container */}
      <div
        style={{
          width: '100%',
          maxWidth: '900px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2.5rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
        }}
      >
        {/* Quiz header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h1
            style={{
              fontSize: '2rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: theme.secondaryColor,
            }}
          >
            {quiz.title}
          </h1>
          {quiz.description && (
            <p
              style={{
                fontSize: '1rem',
                color: '#ccc',
                marginBottom: '1rem',
              }}
            >
              {quiz.description}
            </p>
          )}
          {/* Progress indicator */}
          <div
            style={{
              fontSize: '1rem',
              color: theme.secondaryColor,
              fontWeight: 'bold',
            }}
          >
            Question {currentQuestionIndex + 1} of {totalQuestions}
          </div>
        </div>

        {/* Current question */}
        <QuizQuestion
          question={currentQuestion}
          currentAnswer={currentAnswer?.answer}
          onAnswer={handleAnswerChange}
          showFeedback={false}
          theme={theme}
        />

        {/* Validation error */}
        {validationError && (
          <div
            style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: 'rgba(239, 68, 68, 0.2)',
              border: '1px solid rgb(239, 68, 68)',
              borderRadius: '0.5rem',
              color: 'rgb(254, 202, 202)',
              textAlign: 'center',
            }}
          >
            {validationError}
          </div>
        )}

        {/* Navigation buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '2rem',
          }}
        >
          {/* Previous button */}
          <button
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
            style={{
              padding: '0.75rem 2rem',
              fontSize: '1rem',
              backgroundColor:
                currentQuestionIndex === 0
                  ? 'rgba(255, 255, 255, 0.1)'
                  : 'rgba(255, 255, 255, 0.2)',
              color: currentQuestionIndex === 0 ? '#666' : 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: currentQuestionIndex === 0 ? 'not-allowed' : 'pointer',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              if (currentQuestionIndex > 0) {
                e.currentTarget.style.transform = 'scale(1.05)';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            ← Previous
          </button>

          {/* Next or Submit button */}
          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                backgroundColor: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'transform 0.2s',
                fontWeight: 'bold',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={handleNext}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
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
              Next →
            </button>
          )}
        </div>

        {/* Progress bar */}
        <div
          style={{
            marginTop: '2rem',
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`,
              backgroundColor: theme.secondaryColor,
              transition: 'width 0.3s ease',
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuizRenderer;
