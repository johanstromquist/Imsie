import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { CustomGameProps } from '../customGameRegistry';
import { customGameRegistry } from '../customGameRegistry';

interface RhythmGameConfig {
  // Audio configuration
  audioFile: string;
  beats: number[];
  tolerance: number;

  // Visual customization
  backgroundImage?: string;
  introImage?: string;

  // Text customization
  title?: string;
  introText?: string;
  instructionsText?: string;
  startButtonText?: string;
  successTitle?: string;
  successText?: string;
  failureTitle?: string;
  failureText?: string;
  continueButtonText?: string;

  // Gameplay customization
  passingScore?: number; // Percentage (default 70)
  showAccuracyInResults?: boolean; // Default true
  showComboInResults?: boolean; // Default true
}

interface Beat {
  time: number;
  id: number;
  hit: boolean | null; // null = not yet, true = hit, false = missed
}

interface FeedbackMessage {
  id: number;
  text: string;
  timestamp: number;
}

const RhythmGame: React.FC<CustomGameProps> = ({
  config,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const gameConfig = config as unknown as RhythmGameConfig;

  // Default values
  const title = gameConfig.title || 'Rhythm Challenge';
  const introText = gameConfig.introText || 'Match the rhythm to succeed!';
  const instructionsText = gameConfig.instructionsText || 'Press SPACEBAR or click the button when you see the beat indicators.';
  const startButtonText = gameConfig.startButtonText || 'Begin';
  const successTitle = gameConfig.successTitle || 'Success!';
  const successText = gameConfig.successText || 'You completed the rhythm challenge!';
  const failureTitle = gameConfig.failureTitle || 'Try Again';
  const failureText = gameConfig.failureText || 'Keep practicing to improve your rhythm!';
  const continueButtonText = gameConfig.continueButtonText || 'Continue →';
  const passingScore = gameConfig.passingScore ?? 70;
  const showAccuracyInResults = gameConfig.showAccuracyInResults ?? true;
  const showComboInResults = gameConfig.showComboInResults ?? true;

  const [gameState, setGameState] = useState<'intro' | 'playing' | 'complete'>('intro');
  const [currentTime, setCurrentTime] = useState(0);
  const [beats, setBeats] = useState<Beat[]>([]);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [feedbackMessages, setFeedbackMessages] = useState<FeedbackMessage[]>([]);

  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number | null>(null);
  const feedbackIdRef = useRef(0);

  // Initialize beats
  useEffect(() => {
    if (gameConfig.beats) {
      const initialBeats = gameConfig.beats.map((time, index) => ({
        time,
        id: index,
        hit: null,
      }));
      setBeats(initialBeats);
    }
  }, [gameConfig.beats]);

  // Start game
  const startGame = () => {
    setGameState('playing');
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  // Handle skip - stop audio and complete scene
  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    onComplete();
  };

  // Show feedback
  const showFeedback = useCallback((text: string) => {
    const id = feedbackIdRef.current++;
    const newFeedback: FeedbackMessage = {
      id,
      text,
      timestamp: Date.now(),
    };

    setFeedbackMessages(prev => [...prev, newFeedback]);

    // Auto-remove after animation completes (1000ms)
    setTimeout(() => {
      setFeedbackMessages(prev => prev.filter(f => f.id !== id));
    }, 1000);
  }, []);

  // Update current time
  useEffect(() => {
    if (gameState === 'playing') {
      const updateTime = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);

          // Check for missed beats
          setBeats(prevBeats =>
            prevBeats.map(beat => {
              if (beat.hit === null && audioRef.current!.currentTime > beat.time + gameConfig.tolerance) {
                setCombo(0);
                showFeedback('MISS');
                return { ...beat, hit: false };
              }
              return beat;
            })
          );
        }
        animationRef.current = requestAnimationFrame(updateTime);
      };
      animationRef.current = requestAnimationFrame(updateTime);

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
      };
    }
  }, [gameState, gameConfig.tolerance, showFeedback]);

  // Handle audio end
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setGameState('complete');
      };
      audio.addEventListener('ended', handleEnded);
      return () => audio.removeEventListener('ended', handleEnded);
    }
  }, []);

  // Handle beat tap
  const handleTap = useCallback(() => {
    if (gameState !== 'playing' || !audioRef.current) return;

    const currentTime = audioRef.current.currentTime;

    // Find the closest unhit beat
    const closestBeat = beats.find(beat =>
      beat.hit === null &&
      Math.abs(beat.time - currentTime) <= gameConfig.tolerance
    );

    if (closestBeat) {
      // Calculate accuracy
      const accuracy = Math.abs(closestBeat.time - currentTime);
      const accuracyPercent = 1 - (accuracy / gameConfig.tolerance);

      let points = 100;
      let feedbackText = 'GOOD';

      if (accuracyPercent > 0.9) {
        points = 200;
        feedbackText = 'PERFECT!';
      } else if (accuracyPercent > 0.7) {
        points = 150;
        feedbackText = 'GREAT!';
      }

      // Update beat
      setBeats(prevBeats =>
        prevBeats.map(b => b.id === closestBeat.id ? { ...b, hit: true } : b)
      );

      // Update score and combo
      const newCombo = combo + 1;
      setCombo(newCombo);
      setMaxCombo(Math.max(maxCombo, newCombo));
      setScore(prev => prev + points * Math.min(newCombo, 4)); // Max 4x multiplier
      showFeedback(feedbackText);
    }
  }, [gameState, beats, combo, maxCombo, gameConfig.tolerance, showFeedback]);

  // Handle keyboard
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameState === 'playing' && e.code === 'Space') {
        e.preventDefault();
        handleTap();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [gameState, beats, combo, maxCombo, handleTap]);

  // Calculate results
  const totalBeats = gameConfig.beats?.length || 0;
  const hitBeats = beats.filter(b => b.hit === true).length;
  const accuracy = totalBeats > 0 ? Math.round((hitBeats / totalBeats) * 100) : 0;
  const passed = accuracy >= passingScore;

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundImage: gameConfig.backgroundImage
          ? `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('${gameConfig.backgroundImage}')`
          : `linear-gradient(135deg, ${theme.primaryColor}20, ${theme.secondaryColor}20)`,
        backgroundColor: theme.primaryColor || '#0a0a0a',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `radial-gradient(circle at 50% 50%, ${theme.primaryColor}10 0%, transparent 50%)`,
          animation: 'pulse 2s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />

      <audio ref={audioRef} src={gameConfig.audioFile} preload="auto" />

      {/* Back button */}
      {canGoBack && (
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: theme.secondaryColor,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.3,
            transition: 'all 0.3s',
            zIndex: 100,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.3';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
          }}
        >
          ←
        </button>
      )}

      {/* Skip button */}
      {gameState !== 'complete' && (
        <button
          onClick={handleSkip}
          style={{
            position: 'absolute',
            right: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            padding: '12px 24px',
            borderRadius: '8px',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: `2px solid ${theme.secondaryColor}40`,
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0.5,
            transition: 'all 0.3s',
            zIndex: 100,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1.05)';
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.5';
            e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
            e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          }}
        >
          Skip →
        </button>
      )}

      {/* Main content */}
      <div
        style={{
          maxWidth: '800px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '3rem',
          borderRadius: '1.5rem',
          backdropFilter: 'blur(10px)',
          border: `2px solid ${theme.secondaryColor}40`,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Intro Screen */}
        {gameState === 'intro' && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: theme.secondaryColor,
              fontFamily: theme.fontFamily || 'inherit',
            }}>
              {title}
            </h1>

            {gameConfig.introImage && (
              <img
                src={gameConfig.introImage}
                alt={title}
                style={{
                  maxWidth: '500px',
                  width: '100%',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem',
                  border: `3px solid ${theme.secondaryColor}`,
                }}
              />
            )}

            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              {introText}
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '3rem', color: '#ccc' }}>
              <strong>Tap in rhythm with the beats!</strong>
              <br />
              {instructionsText}
            </p>
            <button
              onClick={startGame}
              style={{
                padding: '1.5rem 3rem',
                fontSize: '1.5rem',
                background: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: theme.fontFamily || 'inherit',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {startButtonText}
            </button>
          </div>
        )}

        {/* Playing Screen */}
        {gameState === 'playing' && (
          <div style={{ color: 'white' }}>
            {/* Score Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '2rem',
              fontSize: '1.2rem',
              fontFamily: theme.fontFamily || 'inherit',
            }}>
              <div>
                <div style={{ color: theme.secondaryColor, fontSize: '2rem', fontWeight: 'bold' }}>
                  {score}
                </div>
                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>Score</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  color: combo > 0 ? theme.secondaryColor : '#888',
                  fontSize: '2rem',
                  fontWeight: 'bold',
                }}>
                  {combo > 0 ? `${combo}x` : '--'}
                </div>
                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>Combo</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ color: theme.secondaryColor, fontSize: '2rem', fontWeight: 'bold' }}>
                  {hitBeats}/{totalBeats}
                </div>
                <div style={{ color: '#ccc', fontSize: '0.9rem' }}>Beats</div>
              </div>
            </div>

            {/* Beat Track */}
            <div id="beat-track" style={{
              position: 'relative',
              height: '120px',
              backgroundColor: `${theme.primaryColor}20`,
              borderRadius: '0.75rem',
              marginBottom: '2rem',
              overflow: 'hidden',
              border: `2px solid ${theme.secondaryColor}40`,
            }}>
              {/* Target zone */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: '80px',
                height: '80px',
                border: `4px solid ${theme.secondaryColor}`,
                borderRadius: '50%',
                opacity: 0.5,
              }} />

              {/* Feedback messages - positioned over the center circle */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                pointerEvents: 'none',
                zIndex: 10,
              }}>
                {feedbackMessages.map((msg, index) => (
                  <div
                    key={msg.id}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      textAlign: 'center',
                      fontSize: '3rem',
                      fontWeight: 'bold',
                      fontFamily: theme.fontFamily || 'inherit',
                      color: theme.secondaryColor,
                      textShadow: `0 0 20px ${theme.secondaryColor}80`,
                      animation: 'floatAndFade 1s ease-out',
                      animationDelay: `${index * 0.05}s`,
                      pointerEvents: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Beat indicators */}
              {beats.map(beat => {
                const timeToHit = beat.time - currentTime;
                // Move left to right: negative timeToHit (future) = left side, 0 = center, positive = right side
                // Speed: 25% of width per second
                const position = 50 - (timeToHit * 25);

                // Show beats from left edge (-10%) to right edge (110%)
                if (position < -10 || position > 110) return null;

                // Don't render if already hit successfully
                if (beat.hit === true) return null;

                // Calculate opacity
                let opacity = 1;

                if (beat.hit === false) {
                  // Missed beat - fade out as it continues to the right
                  opacity = Math.max(0, 1 - ((position - 50) / 50));
                } else {
                  // Unhit beat - fade out as it passes center
                  opacity = position <= 50 ? 1 : Math.max(0, 1 - ((position - 50) / 50));
                }

                return (
                  <div
                    key={beat.id}
                    style={{
                      position: 'absolute',
                      left: `${position}%`,
                      top: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '60px',
                      height: '60px',
                      backgroundColor: theme.secondaryColor,
                      borderRadius: '50%',
                      border: `3px solid white`,
                      boxShadow: `0 4px 12px ${theme.secondaryColor}60`,
                      opacity,
                    }}
                  />
                );
              })}
            </div>

            {/* Tap Button */}
            <button
              onClick={handleTap}
              style={{
                width: '100%',
                padding: '2rem',
                fontSize: '1.8rem',
                background: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: theme.fontFamily || 'inherit',
                transition: 'transform 0.1s',
              }}
              onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.95)'}
              onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              TAP! (SPACE)
            </button>

            <p style={{ textAlign: 'center', marginTop: '1rem', color: '#ccc' }}>
              Press SPACEBAR or click the button in rhythm!
            </p>
          </div>
        )}

        {/* Complete Screen */}
        {gameState === 'complete' && (
          <div style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: '1rem',
              color: theme.secondaryColor,
              fontFamily: theme.fontFamily || 'inherit',
            }}>
              {passed ? successTitle : failureTitle}
            </h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              {passed ? successText : failureText}
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: showAccuracyInResults && showComboInResults ? '1fr 1fr' : '1fr',
              gap: '1.5rem',
              marginBottom: '2rem',
              padding: '1.5rem',
              backgroundColor: `${theme.primaryColor}20`,
              borderRadius: '0.75rem',
              border: `2px solid ${theme.secondaryColor}40`,
            }}>
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: theme.secondaryColor,
                  fontFamily: theme.fontFamily || 'inherit',
                }}>
                  {score}
                </div>
                <div style={{ color: '#ccc' }}>Final Score</div>
              </div>
              {showAccuracyInResults && (
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: theme.secondaryColor,
                    fontFamily: theme.fontFamily || 'inherit',
                  }}>
                    {accuracy}%
                  </div>
                  <div style={{ color: '#ccc' }}>Accuracy</div>
                </div>
              )}
              <div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  color: theme.secondaryColor,
                  fontFamily: theme.fontFamily || 'inherit',
                }}>
                  {hitBeats}/{totalBeats}
                </div>
                <div style={{ color: '#ccc' }}>Beats Hit</div>
              </div>
              {showComboInResults && (
                <div>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    color: theme.secondaryColor,
                    fontFamily: theme.fontFamily || 'inherit',
                  }}>
                    {maxCombo}
                  </div>
                  <div style={{ color: '#ccc' }}>Max Combo</div>
                </div>
              )}
            </div>

            <button
              onClick={onComplete}
              style={{
                padding: '1.5rem 3rem',
                fontSize: '1.5rem',
                background: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontFamily: theme.fontFamily || 'inherit',
                transition: 'transform 0.2s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              {continueButtonText}
            </button>
          </div>
        )}
      </div>

      {/* CSS animations */}
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes floatAndFade {
          0% {
            opacity: 1;
            transform: translate(-50%, 0) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -40px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -80px) scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

// Register the game
customGameRegistry.register('rhythm-game', RhythmGame);

export default RhythmGame;
