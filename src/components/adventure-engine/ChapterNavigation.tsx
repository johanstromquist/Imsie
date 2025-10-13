import type { Chapter, AdventureTheme, AdventureProgress, Quiz } from '../../types';

interface ChapterNavigationProps {
  chapters: Chapter[];
  currentChapterId: string;
  progress: AdventureProgress;
  theme: AdventureTheme;
  finalQuiz?: Quiz;
  onChapterSelect: (chapterId: string) => void;
  onFinalQuizSelect?: () => void;
  onClose: () => void;
}

const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  chapters,
  currentChapterId,
  progress,
  theme,
  finalQuiz,
  onChapterSelect,
  onFinalQuizSelect,
  onClose,
}) => {
  // Determine which chapters are unlocked
  const isChapterUnlocked = (chapterIndex: number): boolean => {
    const chapter = chapters[chapterIndex];

    // First chapter is always unlocked (unless it has explicit prerequisites)
    if (chapterIndex === 0 && !chapter.prerequisites) return true;

    // If no prerequisites specified, default to sequential (backward compatible)
    if (!chapter.prerequisites) {
      const previousChapter = chapters[chapterIndex - 1];
      return progress.completedChapters.includes(previousChapter.id);
    }

    // Check prerequisites based on type
    const { type, chapterIds } = chapter.prerequisites;

    switch (type) {
      case 'sequential':
        // Requires previous chapter to be completed
        if (chapterIndex === 0) return true; // First chapter with sequential is always unlocked
        const previousChapter = chapters[chapterIndex - 1];
        return progress.completedChapters.includes(previousChapter.id);

      case 'any':
        // Requires ANY of the specified chapters to be completed (one-to-many merge point)
        if (!chapterIds || chapterIds.length === 0) return true;
        return chapterIds.some(id => progress.completedChapters.includes(id));

      case 'all':
        // Requires ALL of the specified chapters to be completed (many-to-one)
        if (!chapterIds || chapterIds.length === 0) return true;
        return chapterIds.every(id => progress.completedChapters.includes(id));

      default:
        return false;
    }
  };

  const getChapterStatus = (chapter: Chapter, index: number): 'locked' | 'current' | 'completed' | 'unlocked' => {
    if (!isChapterUnlocked(index)) return 'locked';
    if (progress.completedChapters.includes(chapter.id)) return 'completed';
    if (chapter.id === currentChapterId) return 'current';
    return 'unlocked';
  };

  const handleChapterClick = (chapter: Chapter, index: number) => {
    if (!isChapterUnlocked(index)) return; // Can't select locked chapters
    onChapterSelect(chapter.id);
    onClose();
  };

  // Get descriptive lock message based on prerequisites
  const getLockedMessage = (chapter: Chapter, chapterIndex: number): string => {
    if (!chapter.prerequisites) {
      // Default sequential
      return 'Complete previous chapter to unlock';
    }

    const { type, chapterIds } = chapter.prerequisites;

    switch (type) {
      case 'sequential':
        return 'Complete previous chapter to unlock';

      case 'any': {
        if (!chapterIds || chapterIds.length === 0) return 'Locked';
        // Find chapter titles for required chapters
        const requiredTitles = chapterIds
          .map(id => chapters.find(c => c.id === id)?.title)
          .filter(Boolean);
        if (requiredTitles.length === 1) {
          return `Complete ${requiredTitles[0]} to unlock`;
        }
        return `Complete any: ${requiredTitles.join(' or ')}`;
      }

      case 'all': {
        if (!chapterIds || chapterIds.length === 0) return 'Locked';
        // Find chapter titles for required chapters
        const requiredTitles = chapterIds
          .map(id => chapters.find(c => c.id === id)?.title)
          .filter(Boolean);
        // Show which ones are still needed
        const incompleteTitles = chapterIds
          .filter(id => !progress.completedChapters.includes(id))
          .map(id => chapters.find(c => c.id === id)?.title)
          .filter(Boolean);

        if (incompleteTitles.length === 0) return 'Locked';
        if (incompleteTitles.length === 1) {
          return `Complete ${incompleteTitles[0]} to unlock`;
        }
        return `Complete all: ${incompleteTitles.join(', ')}`;
      }

      default:
        return 'Locked';
    }
  };

  // Check if final quiz is unlocked (all chapters completed)
  const isFinalQuizUnlocked = () => {
    if (!finalQuiz) return false;
    return chapters.every(chapter => progress.completedChapters.includes(chapter.id));
  };

  // Check if final quiz is already completed
  const isFinalQuizCompleted = () => {
    if (!finalQuiz) return false;
    return progress.quizScores.some(score => score.quizId === finalQuiz.id);
  };

  const handleFinalQuizClick = () => {
    if (!isFinalQuizUnlocked() || !onFinalQuizSelect) return;
    onFinalQuizSelect();
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '2rem',
        animation: 'fadeIn 0.3s ease-in',
      }}
      onClick={onClose}
    >
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          borderRadius: '1rem',
          padding: '2.5rem',
          border: `2px solid ${theme.secondaryColor}`,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
          maxHeight: '80vh',
          overflowY: 'auto',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
          <h2
            style={{
              margin: 0,
              fontSize: '2rem',
              fontWeight: 'bold',
              color: theme.secondaryColor,
              marginBottom: '0.5rem',
            }}
          >
            Chapter Selection
          </h2>
          <p style={{ margin: 0, color: '#aaa', fontSize: '1rem' }}>
            Choose a chapter to continue your adventure
          </p>
        </div>

        {/* Chapter list */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {chapters.map((chapter, index) => {
            const status = getChapterStatus(chapter, index);
            const isLocked = status === 'locked';
            const isCurrent = status === 'current';
            const isCompleted = status === 'completed';

            // Count completed scenes in this chapter
            const chapterSceneIds = chapter.scenes.map(s => s.id);
            const completedSceneCount = chapterSceneIds.filter(id =>
              progress.completedScenes.includes(id)
            ).length;
            const totalSceneCount = chapter.scenes.length;

            return (
              <button
                key={chapter.id}
                onClick={() => handleChapterClick(chapter, index)}
                disabled={isLocked}
                style={{
                  padding: '1.5rem',
                  backgroundColor: isCurrent
                    ? `${theme.secondaryColor}30`
                    : isCompleted
                    ? 'rgba(34, 197, 94, 0.15)'
                    : isLocked
                    ? 'rgba(255, 255, 255, 0.05)'
                    : 'rgba(255, 255, 255, 0.1)',
                  border: `2px solid ${
                    isCurrent
                      ? theme.secondaryColor
                      : isCompleted
                      ? '#22c55e'
                      : isLocked
                      ? '#555'
                      : 'rgba(255, 255, 255, 0.2)'
                  }`,
                  borderRadius: '0.75rem',
                  cursor: isLocked ? 'not-allowed' : 'pointer',
                  transition: 'all 0.2s',
                  textAlign: 'left',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.5rem',
                  opacity: isLocked ? 0.5 : 1,
                }}
                onMouseEnter={(e) => {
                  if (!isLocked) {
                    e.currentTarget.style.transform = 'translateX(8px)';
                    e.currentTarget.style.borderColor = theme.secondaryColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isLocked) {
                    e.currentTarget.style.transform = 'translateX(0)';
                    e.currentTarget.style.borderColor = isCurrent
                      ? theme.secondaryColor
                      : isCompleted
                      ? '#22c55e'
                      : 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                {/* Chapter number badge */}
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: isLocked
                      ? '#333'
                      : isCurrent
                      ? theme.secondaryColor
                      : isCompleted
                      ? '#22c55e'
                      : 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  {isLocked ? '🔒' : isCompleted ? '✓' : index + 1}
                </div>

                {/* Chapter info */}
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: isLocked ? '#888' : 'white',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {chapter.title}
                  </div>
                  {chapter.description && (
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: isLocked ? '#666' : '#aaa',
                        marginBottom: '0.5rem',
                      }}
                    >
                      {chapter.description}
                    </div>
                  )}

                  {/* Progress bar */}
                  {!isLocked && completedSceneCount > 0 && (
                    <div style={{ marginTop: '0.75rem' }}>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          fontSize: '0.75rem',
                          color: '#888',
                          marginBottom: '0.25rem',
                        }}
                      >
                        <span>Progress</span>
                        <span>
                          {completedSceneCount}/{totalSceneCount} scenes
                        </span>
                      </div>
                      <div
                        style={{
                          width: '100%',
                          height: '6px',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '3px',
                          overflow: 'hidden',
                        }}
                      >
                        <div
                          style={{
                            width: `${(completedSceneCount / totalSceneCount) * 100}%`,
                            height: '100%',
                            backgroundColor: isCompleted ? '#22c55e' : theme.secondaryColor,
                            transition: 'width 0.3s ease',
                          }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Status badge */}
                  <div style={{ marginTop: '0.5rem' }}>
                    {isLocked && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: '#888',
                        }}
                      >
                        {getLockedMessage(chapter, index)}
                      </span>
                    )}
                    {isCurrent && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: theme.secondaryColor,
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        Currently Playing
                      </span>
                    )}
                    {isCompleted && !isCurrent && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#22c55e',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        Completed
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Final Quiz Section */}
        {finalQuiz && (
          <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: `2px solid ${theme.secondaryColor}` }}>
            <h3 style={{
              margin: '0 0 1rem 0',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: theme.secondaryColor,
              textAlign: 'center',
            }}>
              Final Assessment
            </h3>
            <button
              onClick={handleFinalQuizClick}
              disabled={!isFinalQuizUnlocked()}
              style={{
                width: '100%',
                padding: '1.5rem',
                backgroundColor: isFinalQuizCompleted()
                  ? 'rgba(34, 197, 94, 0.15)'
                  : !isFinalQuizUnlocked()
                  ? 'rgba(255, 255, 255, 0.05)'
                  : `${theme.secondaryColor}30`,
                border: `2px solid ${
                  isFinalQuizCompleted()
                    ? '#22c55e'
                    : !isFinalQuizUnlocked()
                    ? '#555'
                    : theme.secondaryColor
                }`,
                borderRadius: '0.75rem',
                cursor: !isFinalQuizUnlocked() ? 'not-allowed' : 'pointer',
                transition: 'all 0.2s',
                textAlign: 'center',
                opacity: !isFinalQuizUnlocked() ? 0.5 : 1,
              }}
              onMouseEnter={(e) => {
                if (isFinalQuizUnlocked()) {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = theme.secondaryColor;
                  e.currentTarget.style.boxShadow = `0 8px 16px rgba(0, 0, 0, 0.3)`;
                }
              }}
              onMouseLeave={(e) => {
                if (isFinalQuizUnlocked()) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = isFinalQuizCompleted() ? '#22c55e' : theme.secondaryColor;
                  e.currentTarget.style.boxShadow = 'none';
                }
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: !isFinalQuizUnlocked()
                      ? '#333'
                      : isFinalQuizCompleted()
                      ? '#22c55e'
                      : theme.secondaryColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    color: 'white',
                    flexShrink: 0,
                  }}
                >
                  {!isFinalQuizUnlocked() ? '🔒' : isFinalQuizCompleted() ? '✓' : '🏆'}
                </div>
                <div style={{ flex: 1, textAlign: 'left' }}>
                  <div
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 'bold',
                      color: !isFinalQuizUnlocked() ? '#888' : 'white',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {finalQuiz.title}
                  </div>
                  <div
                    style={{
                      fontSize: '0.875rem',
                      color: !isFinalQuizUnlocked() ? '#666' : '#aaa',
                    }}
                  >
                    {finalQuiz.description}
                  </div>
                  <div style={{ marginTop: '0.5rem' }}>
                    {!isFinalQuizUnlocked() && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: 'rgba(255, 255, 255, 0.1)',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: '#888',
                        }}
                      >
                        Complete all chapters to unlock
                      </span>
                    )}
                    {isFinalQuizCompleted() && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: '#22c55e',
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        Completed
                      </span>
                    )}
                    {isFinalQuizUnlocked() && !isFinalQuizCompleted() && (
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0.25rem 0.75rem',
                          backgroundColor: theme.secondaryColor,
                          borderRadius: '0.25rem',
                          fontSize: '0.75rem',
                          color: 'white',
                          fontWeight: 'bold',
                        }}
                      >
                        Available Now!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </button>
          </div>
        )}

        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            marginTop: '2rem',
            width: '100%',
            padding: '1rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: 'white',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '0.75rem',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
            e.currentTarget.style.borderColor = theme.secondaryColor;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
          }}
        >
          Close
        </button>
      </div>

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          /* Scrollbar styling */
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

export default ChapterNavigation;
