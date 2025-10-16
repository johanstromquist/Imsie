import { useState } from 'react';
import type { Quiz, AdventureTheme } from '../../types';

interface QuizResultsProps {
  quiz: Quiz;
  score: number; // percentage 0-100
  answers: Array<{
    questionId: string;
    answer: any;
    correct: boolean;
    pointsEarned: number;
  }>;
  theme: AdventureTheme;
  onRetry?: () => void;
  onContinue: () => void;
}

const QuizResults: React.FC<QuizResultsProps> = ({
  quiz,
  score,
  answers,
  theme,
  onRetry,
  onContinue,
}) => {
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set());

  // Self-assessment state: track selections for each criterion
  const [selfAssessments, setSelfAssessments] = useState<Record<string, Record<string, 'covered' | 'not-covered'>>>({});

  // Identify self-assessment questions
  const selfAssessmentQuestions = quiz.questions.filter(q => q.type === 'self-assessment');
  const haselfAssessments = selfAssessmentQuestions.length > 0;

  // Check if all self-assessments are complete
  const allSelfAssessmentsComplete = selfAssessmentQuestions.every(q => {
    const assessment = selfAssessments[q.id];
    if (!assessment || !q.assessmentCriteria) return false;
    return q.assessmentCriteria.every(criterion => assessment[criterion.id] !== undefined);
  });

  // Calculate self-assessment points
  const selfAssessmentPoints = selfAssessmentQuestions.reduce((total, q) => {
    const assessment = selfAssessments[q.id];
    if (!assessment || !q.assessmentCriteria) return total;

    return total + q.assessmentCriteria.reduce((sum, criterion) => {
      return sum + (assessment[criterion.id] === 'covered' ? criterion.points : 0);
    }, 0);
  }, 0);

  const correctCount = answers.filter((a) => a.correct).length;
  const totalQuestions = quiz.questions.length;
  const totalPoints = quiz.questions.reduce((sum, q) => sum + q.points, 0);
  const earnedPoints = answers.reduce((sum, a) => sum + a.pointsEarned, 0) + selfAssessmentPoints;

  // Recalculate percentage score including self-assessment points
  const actualScore = totalPoints > 0
    ? Math.round((earnedPoints / totalPoints) * 100)
    : 0;

  const passed = actualScore >= quiz.passingScore;

  const toggleQuestion = (questionId: string) => {
    const newExpanded = new Set(expandedQuestions);
    if (newExpanded.has(questionId)) {
      newExpanded.delete(questionId);
    } else {
      newExpanded.add(questionId);
    }
    setExpandedQuestions(newExpanded);
  };

  const handleSelfAssessment = (questionId: string, criterionId: string, value: 'covered' | 'not-covered') => {
    setSelfAssessments(prev => ({
      ...prev,
      [questionId]: {
        ...(prev[questionId] || {}),
        [criterionId]: value
      }
    }));
  };

  const formatAnswer = (answer: any): string => {
    if (typeof answer === 'string') return answer;
    if (Array.isArray(answer)) return answer.join(', ');
    if (typeof answer === 'object') return JSON.stringify(answer);
    return String(answer);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.primaryColor,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem 1rem',
        fontFamily: theme.fontFamily || 'system-ui, -apple-system, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        {/* Header Section - Score and Status */}
        <div
          style={{
            backgroundColor: passed ? 'rgba(34, 139, 34, 0.2)' : 'rgba(178, 34, 34, 0.2)',
            borderBottom: `4px solid ${passed ? '#228B22' : '#B22222'}`,
            padding: '3rem 2rem',
            textAlign: 'center',
          }}
        >
          {/* Pass/Fail Icon */}
          <div
            style={{
              fontSize: '4rem',
              marginBottom: '1rem',
              animation: 'fadeInScale 0.5s ease-out',
            }}
          >
            {passed ? '✓' : '✗'}
          </div>

          {/* Title Message */}
          <h1
            style={{
              margin: 0,
              fontSize: '2.5rem',
              fontWeight: 'bold',
              color: 'white',
              marginBottom: '0.5rem',
            }}
          >
            {passed ? 'Congratulations!' : 'Keep Trying!'}
          </h1>

          {/* Subtitle Message */}
          <p
            style={{
              margin: 0,
              fontSize: '1.25rem',
              color: '#ccc',
              marginBottom: '2rem',
            }}
          >
            {passed
              ? 'You have successfully completed this quiz!'
              : "Don't give up - learning is a journey!"}
          </p>

          {/* Large Score Display */}
          <div
            style={{
              display: 'inline-block',
              position: 'relative',
            }}
          >
            <div
              style={{
                fontSize: '6rem',
                fontWeight: 'bold',
                color: 'white',
                lineHeight: 1,
                textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              {actualScore}%
            </div>
            <div
              style={{
                fontSize: '1rem',
                color: '#aaa',
                marginTop: '0.5rem',
              }}
            >
              {passed ? 'PASSED' : 'NOT PASSED'} (Required: {quiz.passingScore}%)
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          style={{
            padding: '2rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          {/* Progress Bar */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                color: '#ccc',
                fontSize: '0.875rem',
              }}
            >
              <span>Your Score</span>
              <span>{actualScore}%</span>
            </div>
            <div
              style={{
                width: '100%',
                height: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '10px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Score Bar */}
              <div
                style={{
                  width: `${actualScore}%`,
                  height: '100%',
                  backgroundColor: passed ? '#228B22' : '#B22222',
                  transition: 'width 1s ease-out',
                  background: passed
                    ? 'linear-gradient(90deg, #228B22, #32CD32)'
                    : 'linear-gradient(90deg, #B22222, #DC143C)',
                }}
              />
              {/* Passing Score Marker */}
              <div
                style={{
                  position: 'absolute',
                  left: `${quiz.passingScore}%`,
                  top: 0,
                  bottom: 0,
                  width: '2px',
                  backgroundColor: 'white',
                  boxShadow: '0 0 5px rgba(255, 255, 255, 0.5)',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '-25px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    fontSize: '0.75rem',
                    color: 'white',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Pass: {quiz.passingScore}%
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
                {correctCount}/{totalQuestions}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#aaa', marginTop: '0.5rem' }}>
                Questions Correct
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
                {earnedPoints}/{totalPoints}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#aaa', marginTop: '0.5rem' }}>
                Points Earned
              </div>
            </div>

            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                padding: '1.5rem',
                borderRadius: '0.75rem',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>
                {totalQuestions}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#aaa', marginTop: '0.5rem' }}>
                Total Questions
              </div>
            </div>
          </div>
        </div>

        {/* Question Review Section */}
        <div
          style={{
            padding: '2rem',
            maxHeight: '500px',
            overflowY: 'auto',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h2
            style={{
              margin: 0,
              marginBottom: '1.5rem',
              fontSize: '1.5rem',
              color: 'white',
            }}
          >
            Question Review
          </h2>

          {quiz.questions.map((question, index) => {
            const answer = answers.find((a) => a.questionId === question.id);
            if (!answer) return null;

            const isExpanded = expandedQuestions.has(question.id);
            const isSelfAssessment = question.type === 'self-assessment';

            // For self-assessment, check if all criteria have been evaluated
            const selfAssessmentComplete = isSelfAssessment && question.assessmentCriteria
              ? question.assessmentCriteria.every(criterion =>
                  selfAssessments[question.id]?.[criterion.id] !== undefined
                )
              : true;

            // Calculate points earned from self-assessment for this question
            const selfAssessmentPointsForQuestion = isSelfAssessment && question.assessmentCriteria
              ? question.assessmentCriteria.reduce((sum, criterion) => {
                  return sum + (selfAssessments[question.id]?.[criterion.id] === 'covered' ? criterion.points : 0);
                }, 0)
              : 0;

            return (
              <div
                key={question.id}
                style={{
                  marginBottom: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden',
                  border: isSelfAssessment
                    ? `2px solid ${selfAssessmentComplete ? 'rgba(255, 200, 0, 0.5)' : 'rgba(255, 100, 100, 0.5)'}`
                    : `2px solid ${answer.correct ? '#228B22' : '#B22222'}`,
                }}
              >
                {/* Question Header - Always Visible */}
                <div
                  onClick={() => toggleQuestion(question.id)}
                  style={{
                    padding: '1rem 1.5rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: isSelfAssessment
                      ? 'rgba(255, 200, 0, 0.1)'
                      : answer.correct
                        ? 'rgba(34, 139, 34, 0.1)'
                        : 'rgba(178, 34, 34, 0.1)',
                    transition: 'background-color 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = isSelfAssessment
                      ? 'rgba(255, 200, 0, 0.2)'
                      : answer.correct
                        ? 'rgba(34, 139, 34, 0.2)'
                        : 'rgba(178, 34, 34, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isSelfAssessment
                      ? 'rgba(255, 200, 0, 0.1)'
                      : answer.correct
                        ? 'rgba(34, 139, 34, 0.1)'
                        : 'rgba(178, 34, 34, 0.1)';
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        marginBottom: '0.5rem',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '1.5rem',
                        }}
                      >
                        {isSelfAssessment ? '📝' : (answer.correct ? '✓' : '✗')}
                      </span>
                      <span
                        style={{
                          fontWeight: 'bold',
                          color: 'white',
                          fontSize: '1rem',
                        }}
                      >
                        Question {index + 1}
                        {isSelfAssessment && ' (Self-Assessment)'}
                      </span>
                      <span
                        style={{
                          fontSize: '0.875rem',
                          color: '#aaa',
                        }}
                      >
                        {isSelfAssessment
                          ? `${selfAssessmentPointsForQuestion}/${question.points} pts`
                          : `${answer.pointsEarned}/${question.points} pts`
                        }
                      </span>
                    </div>
                    <div
                      style={{
                        color: '#ccc',
                        fontSize: '0.95rem',
                      }}
                    >
                      {question.question}
                    </div>
                    {isSelfAssessment && !selfAssessmentComplete && (
                      <div
                        style={{
                          marginTop: '0.5rem',
                          fontSize: '0.875rem',
                          color: 'rgba(255, 100, 100, 0.9)',
                          fontWeight: 'bold',
                        }}
                      >
                        ⚠️ Please complete your self-assessment below
                      </div>
                    )}
                  </div>
                  <div
                    style={{
                      fontSize: '1.5rem',
                      color: '#888',
                      transition: 'transform 0.2s',
                      transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  >
                    ▼
                  </div>
                </div>

                {/* Question Details - Expandable */}
                {isExpanded && (
                  <div
                    style={{
                      padding: '1.5rem',
                      backgroundColor: 'rgba(0, 0, 0, 0.3)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {isSelfAssessment ? (
                      // Self-Assessment Section
                      <>
                        {/* Your Answer */}
                        <div style={{ marginBottom: '1.5rem' }}>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: '#888',
                              marginBottom: '0.5rem',
                              fontWeight: 'bold',
                            }}
                          >
                            Your Answer:
                          </div>
                          <div
                            style={{
                              padding: '1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '0.5rem',
                              color: 'white',
                              whiteSpace: 'pre-wrap',
                              lineHeight: 1.6,
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                            }}
                          >
                            {formatAnswer(answer.answer) || '(No answer provided)'}
                          </div>
                        </div>

                        {/* Model Answer */}
                        {question.modelAnswer && (
                          <div style={{ marginBottom: '1.5rem' }}>
                            <div
                              style={{
                                fontSize: '0.875rem',
                                color: '#888',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold',
                              }}
                            >
                              Model Answer:
                            </div>
                            <div
                              style={{
                                padding: '1rem',
                                backgroundColor: 'rgba(255, 200, 0, 0.1)',
                                borderRadius: '0.5rem',
                                color: 'rgba(255, 220, 100, 1)',
                                whiteSpace: 'pre-wrap',
                                lineHeight: 1.6,
                                border: '1px solid rgba(255, 200, 0, 0.3)',
                              }}
                            >
                              {question.modelAnswer}
                            </div>
                          </div>
                        )}

                        {/* Self-Assessment Criteria */}
                        {question.assessmentCriteria && question.assessmentCriteria.length > 0 && (
                          <div style={{ marginBottom: '1rem' }}>
                            <div
                              style={{
                                fontSize: '0.875rem',
                                color: '#888',
                                marginBottom: '1rem',
                                fontWeight: 'bold',
                              }}
                            >
                              Evaluate Your Answer:
                            </div>
                            <div
                              style={{
                                padding: '1rem',
                                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                                borderRadius: '0.5rem',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                              }}
                            >
                              {question.assessmentCriteria.map((criterion, critIndex) => {
                                const selection = selfAssessments[question.id]?.[criterion.id];
                                return (
                                  <div
                                    key={criterion.id}
                                    style={{
                                      marginBottom: critIndex < question.assessmentCriteria!.length - 1 ? '1.5rem' : '0',
                                      paddingBottom: critIndex < question.assessmentCriteria!.length - 1 ? '1.5rem' : '0',
                                      borderBottom: critIndex < question.assessmentCriteria!.length - 1
                                        ? '1px solid rgba(255, 255, 255, 0.1)'
                                        : 'none',
                                    }}
                                  >
                                    <div
                                      style={{
                                        color: 'white',
                                        marginBottom: '0.75rem',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.5,
                                      }}
                                    >
                                      {criterion.text}
                                      <span
                                        style={{
                                          marginLeft: '0.5rem',
                                          color: '#aaa',
                                          fontSize: '0.875rem',
                                        }}
                                      >
                                        ({criterion.points} pts)
                                      </span>
                                    </div>
                                    <div
                                      style={{
                                        display: 'flex',
                                        gap: '1.5rem',
                                        marginLeft: '0.5rem',
                                      }}
                                    >
                                      <label
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '0.5rem',
                                          cursor: 'pointer',
                                          color: selection === 'covered' ? '#90EE90' : '#ccc',
                                          fontWeight: selection === 'covered' ? 'bold' : 'normal',
                                          transition: 'color 0.2s',
                                        }}
                                      >
                                        <input
                                          type="radio"
                                          name={`${question.id}-${criterion.id}`}
                                          checked={selection === 'covered'}
                                          onChange={() => handleSelfAssessment(question.id, criterion.id, 'covered')}
                                          style={{
                                            cursor: 'pointer',
                                            width: '16px',
                                            height: '16px',
                                          }}
                                        />
                                        ✓ Covered in my answer
                                      </label>
                                      <label
                                        style={{
                                          display: 'flex',
                                          alignItems: 'center',
                                          gap: '0.5rem',
                                          cursor: 'pointer',
                                          color: selection === 'not-covered' ? '#FF6B6B' : '#ccc',
                                          fontWeight: selection === 'not-covered' ? 'bold' : 'normal',
                                          transition: 'color 0.2s',
                                        }}
                                      >
                                        <input
                                          type="radio"
                                          name={`${question.id}-${criterion.id}`}
                                          checked={selection === 'not-covered'}
                                          onChange={() => handleSelfAssessment(question.id, criterion.id, 'not-covered')}
                                          style={{
                                            cursor: 'pointer',
                                            width: '16px',
                                            height: '16px',
                                          }}
                                        />
                                        ✗ Not covered in my answer
                                      </label>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                        {/* Explanation */}
                        <div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: '#888',
                              marginBottom: '0.5rem',
                              fontWeight: 'bold',
                            }}
                          >
                            Additional Context:
                          </div>
                          <div
                            style={{
                              padding: '0.75rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '0.5rem',
                              color: '#ddd',
                              lineHeight: 1.6,
                            }}
                          >
                            {question.explanation}
                          </div>
                        </div>
                      </>
                    ) : (
                      // Regular Question Section
                      <>
                        {/* Your Answer */}
                        <div style={{ marginBottom: '1rem' }}>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: '#888',
                              marginBottom: '0.5rem',
                              fontWeight: 'bold',
                            }}
                          >
                            Your Answer:
                          </div>
                          <div
                            style={{
                              padding: '0.75rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '0.5rem',
                              color: 'white',
                            }}
                          >
                            {formatAnswer(answer.answer)}
                          </div>
                        </div>

                        {/* Correct Answer (if wrong) */}
                        {!answer.correct && (
                          <div style={{ marginBottom: '1rem' }}>
                            <div
                              style={{
                                fontSize: '0.875rem',
                                color: '#888',
                                marginBottom: '0.5rem',
                                fontWeight: 'bold',
                              }}
                            >
                              Correct Answer:
                            </div>
                            <div
                              style={{
                                padding: '0.75rem',
                                backgroundColor: 'rgba(34, 139, 34, 0.2)',
                                borderRadius: '0.5rem',
                                color: '#90EE90',
                                border: '1px solid rgba(34, 139, 34, 0.5)',
                              }}
                            >
                              {formatAnswer(question.correctAnswer)}
                            </div>
                          </div>
                        )}

                        {/* Explanation */}
                        <div>
                          <div
                            style={{
                              fontSize: '0.875rem',
                              color: '#888',
                              marginBottom: '0.5rem',
                              fontWeight: 'bold',
                            }}
                          >
                            Explanation:
                          </div>
                          <div
                            style={{
                              padding: '0.75rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderRadius: '0.5rem',
                              color: '#ddd',
                              lineHeight: 1.6,
                            }}
                          >
                            {question.explanation}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div
          style={{
            padding: '2rem',
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Retry Button (if allowed and not passed, or if passed and retry is available) */}
          {quiz.allowRetry && onRetry && (
            <button
              onClick={onRetry}
              style={{
                padding: '1rem 2.5rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                minWidth: '200px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
              }}
            >
              Retry Quiz
            </button>
          )}

          {/* Continue Button */}
          <button
            onClick={onContinue}
            disabled={haselfAssessments && !allSelfAssessmentsComplete}
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              backgroundColor: (haselfAssessments && !allSelfAssessmentsComplete)
                ? '#444'
                : (passed ? '#228B22' : '#666'),
              color: (haselfAssessments && !allSelfAssessmentsComplete) ? '#888' : 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: (haselfAssessments && !allSelfAssessmentsComplete) ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              minWidth: '200px',
              opacity: (haselfAssessments && !allSelfAssessmentsComplete) ? 0.6 : 1,
            }}
            onMouseEnter={(e) => {
              if (haselfAssessments && !allSelfAssessmentsComplete) return;
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(0, 0, 0, 0.4)';
              if (passed) {
                e.currentTarget.style.backgroundColor = '#32CD32';
              }
            }}
            onMouseLeave={(e) => {
              if (haselfAssessments && !allSelfAssessmentsComplete) return;
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.backgroundColor = passed ? '#228B22' : '#666';
            }}
          >
            {(haselfAssessments && !allSelfAssessmentsComplete)
              ? 'Complete Self-Assessments to Continue'
              : (passed ? 'Continue to Next Chapter' : 'Continue')
            }
          </button>
        </div>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeInScale {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          /* Scrollbar styling for review section */
          div::-webkit-scrollbar {
            width: 8px;
          }

          div::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 4px;
          }

          div::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 4px;
          }

          div::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.3);
          }
        `}
      </style>
    </div>
  );
};

export default QuizResults;
