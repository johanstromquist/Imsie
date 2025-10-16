import { useState, useEffect } from 'react';
import type {
  TimelineGameScene as TimelineGameSceneType,
  AdventureTheme,
  TimelineEvent,
} from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface TimelineGameSceneProps {
  scene: TimelineGameSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const TimelineGameScene: React.FC<TimelineGameSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [shuffledEvents, setShuffledEvents] = useState<TimelineEvent[]>([]);
  const [orderedEvents, setOrderedEvents] = useState<TimelineEvent[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  // Shuffle events on mount
  useEffect(() => {
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledEvents(shuffleArray(scene.timelineEvents));
  }, [scene.timelineEvents]);

  const handleEventClick = (event: TimelineEvent) => {
    if (isSubmitted) return;

    // Add event to ordered list
    setOrderedEvents((prev) => [...prev, event]);
    // Remove from shuffled list
    setShuffledEvents((prev) => prev.filter((e) => e.id !== event.id));
  };

  const handleRemoveEvent = (event: TimelineEvent) => {
    if (isSubmitted) return;

    // Remove from ordered list
    setOrderedEvents((prev) => prev.filter((e) => e.id !== event.id));
    // Add back to shuffled list
    setShuffledEvents((prev) => [...prev, event]);
  };

  const handleClearAll = () => {
    if (isSubmitted) return;

    setOrderedEvents([]);
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledEvents(shuffleArray(scene.timelineEvents));
  };

  const validateTimeline = () => {
    if (orderedEvents.length < 2) return 0;

    let correctPairs = 0;
    const totalPairs = orderedEvents.length - 1;

    // Check each adjacent pair
    for (let i = 0; i < orderedEvents.length - 1; i++) {
      if (orderedEvents[i].year <= orderedEvents[i + 1].year) {
        correctPairs++;
      }
    }

    const scorePercent = (correctPairs / totalPairs) * 100;
    return Math.round(scorePercent);
  };

  const handleSubmit = () => {
    if (orderedEvents.length !== scene.timelineEvents.length) {
      return; // Don't allow submit until all events are placed
    }

    const calculatedScore = validateTimeline();
    setScore(calculatedScore);
    setIsSubmitted(true);
    setShowExplanation(true);
  };

  const handleRetry = () => {
    setIsSubmitted(false);
    setScore(null);
    setShowExplanation(false);
    setOrderedEvents([]);
    const shuffleArray = <T,>(array: T[]): T[] => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    setShuffledEvents(shuffleArray(scene.timelineEvents));
  };

  const handleContinue = () => {
    onComplete();
  };

  const canSubmit = orderedEvents.length === scene.timelineEvents.length;
  const hasPassed = score !== null && score >= scene.successThreshold;

  // Get correct order for display
  const correctOrder = [...scene.timelineEvents].sort((a, b) => a.year - b.year);

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
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
        }}
      >
        {/* Header with prompt */}
        <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
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
          <p style={{ fontSize: '1rem', color: '#ccc' }}>
            Click events below to build your timeline in chronological order
          </p>
        </div>

        {!isSubmitted ? (
          <>
            {/* Available Events */}
            <div style={{ marginBottom: '2rem' }}>
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  marginBottom: '1rem',
                  color: theme.secondaryColor,
                }}
              >
                Available Events ({shuffledEvents.length})
              </h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                  gap: '1rem',
                }}
              >
                {shuffledEvents.map((event) => {
                  const eventImage = event.image
                    ? assetLoader.getImage(event.image)
                    : null;
                  return (
                    <button
                      key={event.id}
                      onClick={() => handleEventClick(event)}
                      style={{
                        padding: '1rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        border: `2px solid rgba(255, 255, 255, 0.3)`,
                        borderRadius: '0.75rem',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        textAlign: 'left',
                        color: 'white',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-4px)';
                        e.currentTarget.style.borderColor = theme.secondaryColor;
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {eventImage && (
                        <div style={{ marginBottom: '0.75rem' }}>
                          <img
                            src={eventImage.src}
                            alt={event.title}
                            style={{
                              width: '100%',
                              height: '120px',
                              objectFit: 'cover',
                              borderRadius: '0.5rem',
                            }}
                          />
                        </div>
                      )}
                      <h4
                        style={{
                          fontSize: '1rem',
                          fontWeight: 'bold',
                          marginBottom: '0.5rem',
                        }}
                      >
                        {event.title}
                      </h4>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Your Timeline */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '1rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    color: theme.secondaryColor,
                  }}
                >
                  Your Timeline ({orderedEvents.length}/{scene.timelineEvents.length})
                </h3>
                {orderedEvents.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    style={{
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'white',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      borderRadius: '0.5rem',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    Clear All
                  </button>
                )}
              </div>

              {orderedEvents.length === 0 ? (
                <div
                  style={{
                    padding: '3rem 2rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: `2px dashed ${theme.secondaryColor}40`,
                    borderRadius: '0.75rem',
                    textAlign: 'center',
                    color: '#999',
                    fontSize: '1rem',
                  }}
                >
                  Click events above to add them to your timeline
                </div>
              ) : (
                <div style={{ position: 'relative' }}>
                  {/* Timeline line */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '24px',
                      top: '20px',
                      bottom: '20px',
                      width: '3px',
                      backgroundColor: theme.secondaryColor,
                    }}
                  />

                  {/* Timeline events */}
                  {orderedEvents.map((event, index) => {
                    const eventImage = event.image
                      ? assetLoader.getImage(event.image)
                      : null;
                    return (
                      <div
                        key={event.id}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          marginBottom: index < orderedEvents.length - 1 ? '1.5rem' : '0',
                          position: 'relative',
                        }}
                      >
                        {/* Timeline marker */}
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            backgroundColor: theme.secondaryColor,
                            border: '4px solid rgba(0, 0, 0, 0.85)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.125rem',
                            fontWeight: 'bold',
                            flexShrink: 0,
                            zIndex: 2,
                          }}
                        >
                          {index + 1}
                        </div>

                        {/* Event card */}
                        <div
                          style={{
                            flex: 1,
                            marginLeft: '1rem',
                            padding: '1rem',
                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                            borderRadius: '0.75rem',
                            border: '2px solid rgba(255, 255, 255, 0.2)',
                            display: 'flex',
                            gap: '1rem',
                            alignItems: 'center',
                          }}
                        >
                          {eventImage && (
                            <img
                              src={eventImage.src}
                              alt={event.title}
                              style={{
                                width: '80px',
                                height: '80px',
                                objectFit: 'cover',
                                borderRadius: '0.5rem',
                                flexShrink: 0,
                              }}
                            />
                          )}
                          <div style={{ flex: 1 }}>
                            <h4
                              style={{
                                fontSize: '1.125rem',
                                fontWeight: 'bold',
                                marginBottom: '0.25rem',
                              }}
                            >
                              {event.title}
                            </h4>
                          </div>
                          <button
                            onClick={() => handleRemoveEvent(event)}
                            style={{
                              padding: '0.5rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              color: 'white',
                              border: 'none',
                              borderRadius: '0.5rem',
                              cursor: 'pointer',
                              fontSize: '1.25rem',
                              transition: 'all 0.2s',
                              flexShrink: 0,
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.3)';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                            }}
                            aria-label="Remove event"
                          >
                            ✕
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Submit button */}
            <div style={{ textAlign: 'center' }}>
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
                {canSubmit ? 'Submit Timeline' : `Add All Events (${orderedEvents.length}/${scene.timelineEvents.length})`}
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Results */}
            <div style={{ marginBottom: '2rem' }}>
              <div
                style={{
                  padding: '2rem',
                  backgroundColor:
                    hasPassed ? 'rgba(74, 222, 128, 0.15)' : 'rgba(239, 68, 68, 0.15)',
                  border: `2px solid ${hasPassed ? '#4ade80' : '#ef4444'}`,
                  borderRadius: '0.75rem',
                  textAlign: 'center',
                  marginBottom: '2rem',
                }}
              >
                <div
                  style={{
                    fontSize: '3rem',
                    marginBottom: '1rem',
                  }}
                >
                  {hasPassed ? '✓' : '✗'}
                </div>
                <h3
                  style={{
                    fontSize: '1.75rem',
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                    color: hasPassed ? '#4ade80' : '#ef4444',
                  }}
                >
                  {hasPassed ? 'Timeline Correct!' : 'Try Again'}
                </h3>
                <div style={{ fontSize: '1.25rem', color: '#ddd', marginBottom: '0.5rem' }}>
                  Your Score: <span style={{ fontWeight: 'bold' }}>{score}%</span>
                </div>
                <div style={{ fontSize: '1rem', color: '#ccc' }}>
                  Required: {scene.successThreshold}%
                </div>
              </div>

              {/* Show user's timeline vs correct */}
              {showExplanation && (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                  {/* User's timeline */}
                  <div>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: theme.secondaryColor,
                      }}
                    >
                      Your Timeline
                    </h3>
                    <div style={{ position: 'relative' }}>
                      {orderedEvents.map((event, index) => {
                        const isCorrectOrder =
                          index === orderedEvents.length - 1 ||
                          event.year <= orderedEvents[index + 1].year;
                        return (
                          <div
                            key={event.id}
                            style={{
                              padding: '1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderLeft: `4px solid ${isCorrectOrder ? '#4ade80' : '#ef4444'}`,
                              borderRadius: '0.5rem',
                              marginBottom: '1rem',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                              }}
                            >
                              <div>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                  {index + 1}. {event.title}
                                </div>
                                <div style={{ fontSize: '0.875rem', color: '#999' }}>
                                  {event.year}
                                </div>
                              </div>
                              <div style={{ fontSize: '1.5rem' }}>
                                {isCorrectOrder ? '✓' : '✗'}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Correct timeline */}
                  <div>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 'bold',
                        marginBottom: '1rem',
                        color: theme.secondaryColor,
                      }}
                    >
                      Correct Timeline
                    </h3>
                    <div>
                      {correctOrder.map((event, index) => {
                        const eventImage = event.image
                          ? assetLoader.getImage(event.image)
                          : null;
                        return (
                          <div
                            key={event.id}
                            style={{
                              padding: '1rem',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              border: '2px solid rgba(255, 255, 255, 0.1)',
                              borderRadius: '0.5rem',
                              marginBottom: '1rem',
                            }}
                          >
                            <div
                              style={{
                                display: 'flex',
                                gap: '1rem',
                                alignItems: 'flex-start',
                              }}
                            >
                              {eventImage && (
                                <img
                                  src={eventImage.src}
                                  alt={event.title}
                                  style={{
                                    width: '60px',
                                    height: '60px',
                                    objectFit: 'cover',
                                    borderRadius: '0.5rem',
                                    flexShrink: 0,
                                  }}
                                />
                              )}
                              <div style={{ flex: 1 }}>
                                <div style={{ fontWeight: 'bold', marginBottom: '0.25rem' }}>
                                  {index + 1}. {event.title}
                                </div>
                                <div
                                  style={{
                                    fontSize: '0.875rem',
                                    color: theme.secondaryColor,
                                    marginBottom: '0.5rem',
                                  }}
                                >
                                  Year: {event.year}
                                </div>
                                <div
                                  style={{
                                    fontSize: '0.875rem',
                                    color: '#ccc',
                                    lineHeight: '1.5',
                                  }}
                                >
                                  {event.description}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
              }}
            >
              {!hasPassed && (
                <button
                  onClick={handleRetry}
                  style={{
                    padding: '1rem 3rem',
                    fontSize: '1.125rem',
                    fontWeight: 'bold',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: `2px solid ${theme.secondaryColor}`,
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
                  Try Again
                </button>
              )}
              {hasPassed && (
                <button
                  onClick={handleContinue}
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
          </>
        )}

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
    </div>
  );
};

export default TimelineGameScene;
