import React, { useState, useEffect, useCallback, useRef } from 'react';
import type { AdventureTheme, GalleryGameConfig, GalleryItem } from '../../../types';
import { customGameRegistry, type CustomGameProps } from '../customGameRegistry';

interface GalleryGameProps {
  config: GalleryGameConfig;
  theme: AdventureTheme;
  onComplete: (passed: boolean, score: number) => void;
  onBack: () => void;
  canGoBack: boolean;
}

interface ActiveItem extends GalleryItem {
  displayId: string; // unique ID for this display instance
  position: { x: number; y: number };
  spawnTime: number;
  clicked: boolean;
}

const GalleryGame: React.FC<GalleryGameProps> = ({ config, theme, onComplete, onBack, canGoBack }) => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(config.timePerRound);
  const [score, setScore] = useState(0);
  const [activeItems, setActiveItems] = useState<ActiveItem[]>([]);
  const [clickedItems, setClickedItems] = useState<{ displayId: string; itemId: string; label: string; correct: boolean; points: number }[]>([]);
  const [gameState, setGameState] = useState<'instructions' | 'countdown' | 'playing' | 'round-end' | 'game-end'>('instructions');
  const [roundScore, setRoundScore] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [maxPossibleScore, setMaxPossibleScore] = useState(0); // Track theoretical max score

  const spawnTimerRef = useRef<number | null>(null);
  const displayTimerRefs = useRef<Map<string, number>>(new Map());
  const countdownTimerRef = useRef<number | null>(null);
  const itemDisplayIdCounter = useRef(0);

  const currentRound = config.rounds[currentRoundIndex];
  const isLastRound = currentRoundIndex === config.rounds.length - 1;

  // Generate random position for item
  const getRandomPosition = useCallback(() => {
    const padding = 80; // pixels from edge
    const itemSize = 120; // approximate item size
    return {
      x: padding + Math.random() * (window.innerWidth - 2 * padding - itemSize),
      y: 200 + Math.random() * (window.innerHeight - 400 - itemSize), // Keep away from top (target) and bottom (score)
    };
  }, []);

  // Shuffle array utility
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Handle countdown
  useEffect(() => {
    if (gameState !== 'countdown') return;

    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          setGameState('playing');
          return 3;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameState]);

  // Spawn items continuously until time runs out
  useEffect(() => {
    if (gameState !== 'playing') return;

    // Randomize item pool
    const itemPool = shuffleArray([...currentRound.items]);
    let poolIndex = 0;
    let isActive = true;
    const startTime = Date.now();
    const roundDuration = config.timePerRound * 1000; // in milliseconds
    const stopSpawningBuffer = 2000; // Stop spawning 2 seconds before end

    const spawnNextItem = () => {
      if (!isActive) return;

      // Check if we should stop spawning (2 seconds before round ends)
      const elapsed = Date.now() - startTime;
      if (elapsed >= roundDuration - stopSpawningBuffer) {
        if (spawnTimerRef.current) {
          clearTimeout(spawnTimerRef.current);
          spawnTimerRef.current = null;
        }
        return;
      }

      // Get next item from pool, cycling back to start if needed
      const item = itemPool[poolIndex % itemPool.length];
      poolIndex++;

      const displayId = `item-${currentRoundIndex}-${itemDisplayIdCounter.current++}`;

      const activeItem: ActiveItem = {
        ...item,
        displayId,
        position: getRandomPosition(),
        spawnTime: Date.now(),
        clicked: false,
      };

      setActiveItems(prev => [...prev, activeItem]);

      // Track max possible score for this item (assuming instant click)
      if (item.isCorrect) {
        const maxPointsForThisItem = config.correctPoints + Math.floor(config.speedBonusMultiplier * currentRound.itemDisplayTime);
        setMaxPossibleScore(prev => prev + maxPointsForThisItem);
      }

      // Set timer to remove this item after displayTime
      const removeTimer = setTimeout(() => {
        setActiveItems(prev => prev.filter(i => i.displayId !== displayId));
        displayTimerRefs.current.delete(displayId);
      }, currentRound.itemDisplayTime * 1000);

      displayTimerRefs.current.set(displayId, removeTimer);

      // Continue spawning items at intervals
      spawnTimerRef.current = setTimeout(spawnNextItem, currentRound.spawnInterval * 1000);
    };

    spawnNextItem();

    return () => {
      isActive = false;
      if (spawnTimerRef.current) {
        clearTimeout(spawnTimerRef.current);
      }
      displayTimerRefs.current.forEach(timer => clearTimeout(timer));
      displayTimerRefs.current.clear();
    };
  }, [currentRoundIndex, gameState, currentRound, getRandomPosition, config.timePerRound]);

  // Countdown timer
  useEffect(() => {
    if (gameState !== 'playing') return;

    countdownTimerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0.1) {
          endRound();
          return 0;
        }
        return prev - 0.1;
      });
    }, 100);

    return () => {
      if (countdownTimerRef.current) {
        clearInterval(countdownTimerRef.current);
      }
    };
  }, [gameState, currentRoundIndex]);

  const handleItemClick = (item: ActiveItem) => {
    if (item.clicked) return;

    // Mark as clicked
    setActiveItems(prev =>
      prev.map(i => i.displayId === item.displayId ? { ...i, clicked: true } : i)
    );

    // Calculate points
    const timeElapsed = (Date.now() - item.spawnTime) / 1000;
    const timeBonus = Math.max(0, currentRound.itemDisplayTime - timeElapsed);

    let points = 0;
    if (item.isCorrect) {
      points = config.correctPoints + Math.floor(config.speedBonusMultiplier * timeBonus);
    } else {
      points = -config.wrongPenalty;
    }

    setScore(prev => prev + points);
    setRoundScore(prev => prev + points);
    setClickedItems(prev => [...prev, {
      displayId: item.displayId,
      itemId: item.id,
      label: item.label,
      correct: item.isCorrect,
      points: points
    }]);

    // Visual feedback then remove
    setTimeout(() => {
      setActiveItems(prev => prev.filter(i => i.displayId !== item.displayId));
      const timer = displayTimerRefs.current.get(item.displayId);
      if (timer) {
        clearTimeout(timer);
        displayTimerRefs.current.delete(item.displayId);
      }
    }, 300);
  };

  const endRound = () => {
    setGameState('round-end');

    // Clear all timers
    if (spawnTimerRef.current) {
      clearTimeout(spawnTimerRef.current);
    }
    if (countdownTimerRef.current) {
      clearInterval(countdownTimerRef.current);
    }
    displayTimerRefs.current.forEach(timer => clearTimeout(timer));
    displayTimerRefs.current.clear();

    setActiveItems([]);
  };

  const handleNextRound = () => {
    if (isLastRound) {
      // Game over - show final results screen
      setGameState('game-end');
    } else {
      // Next round
      setCurrentRoundIndex(prev => prev + 1);
      setTimeRemaining(config.timePerRound);
      setClickedItems([]);
      setRoundScore(0);
      setGameState('playing');
    }
  };

  const handleComplete = () => {
    const percentageScore = maxPossibleScore > 0 ? Math.round((score / maxPossibleScore) * 100) : 0;
    const passed = percentageScore >= config.passingScore;
    onComplete(passed, percentageScore);
  };

  // Instructions screen
  if (gameState === 'instructions') {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primaryColor,
          backgroundImage: config.backgroundImage ? `url(${config.backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '700px',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '3rem',
            borderRadius: '1rem',
            color: 'white',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Back button */}
          {canGoBack && (
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

          {/* Skip button */}
          <button
            onClick={() => onComplete(true, 100)}
            style={{
              position: 'absolute',
              right: '-40px',
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

          <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', color: theme.secondaryColor }}>
            How to Play
          </h1>

          <div style={{ textAlign: 'left', marginBottom: '2rem', fontSize: '1.125rem', lineHeight: '1.8' }}>
            <div style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: theme.secondaryColor }}>Your Goal:</strong>
              <p style={{ marginTop: '0.5rem' }}>{config.prompt}</p>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: theme.secondaryColor }}>How it Works:</strong>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>A target {config.targetLabel?.toLowerCase() || 'image'} will be shown at the top</li>
                <li>{config.itemLabel || 'Items'} will pop up across the screen</li>
                <li>Click the correct ones before they disappear!</li>
                <li>Avoid clicking the wrong ones—they cost you points</li>
              </ul>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: theme.secondaryColor }}>Scoring:</strong>
              <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
                <li>Correct clicks: +{config.correctPoints} points (+ speed bonus)</li>
                <li>Wrong clicks: -{config.wrongPenalty} points</li>
                <li>Click quickly for bonus points!</li>
              </ul>
            </div>

            <div>
              <strong style={{ color: theme.secondaryColor }}>Challenge:</strong>
              <p style={{ marginTop: '0.5rem' }}>
                {config.rounds.length} rounds • {config.timePerRound} seconds each • {config.passingScore}% to pass
              </p>
            </div>
          </div>

          <button
            onClick={() => setGameState('countdown')}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              width: '100%',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  // Countdown screen
  if (gameState === 'countdown') {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primaryColor,
          backgroundImage: config.backgroundImage ? `url(${config.backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          style={{
            fontSize: '15rem',
            fontWeight: 'bold',
            color: theme.secondaryColor,
            textShadow: '0 0 40px rgba(0, 0, 0, 0.5)',
            animation: 'pulse 1s ease-in-out',
          }}
        >
          {countdown}
        </div>
        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(0.5); opacity: 0; }
              50% { transform: scale(1.2); opacity: 1; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}
        </style>
      </div>
    );
  }

  // Game end screen
  if (gameState === 'game-end') {
    const percentageScore = maxPossibleScore > 0 ? Math.round((score / maxPossibleScore) * 100) : 0;
    const passed = percentageScore >= config.passingScore;

    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primaryColor,
          backgroundImage: config.backgroundImage ? `url(${config.backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            padding: '3rem',
            borderRadius: '1rem',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <h1 style={{
            fontSize: '3rem',
            marginBottom: '1rem',
            color: passed ? '#22c55e' : '#ffc107'
          }}>
            {passed ? 'Excellent Work!' : 'Good Try!'}
          </h1>

          <div style={{ fontSize: '5rem', fontWeight: 'bold', color: theme.secondaryColor, margin: '2rem 0' }}>
            {percentageScore}%
          </div>

          <div style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#ccc' }}>
            Final Score: <span style={{ color: 'white', fontWeight: 'bold' }}>{score}</span> / {maxPossibleScore}
          </div>

          {passed ? (
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#aaa' }}>
              {config.successMessage || "You've successfully completed the challenge!"}
            </p>
          ) : (
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#aaa' }}>
              {config.failureMessage || `You needed ${config.passingScore}% to pass. Try again!`}
            </p>
          )}

          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            padding: '1.5rem',
            borderRadius: '0.75rem',
            marginBottom: '2rem'
          }}>
            <div style={{ fontSize: '0.9rem', color: '#bbb', marginBottom: '0.75rem' }}>Game Statistics</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', fontSize: '1rem' }}>
              <div>
                <div style={{ color: '#aaa' }}>Rounds Completed</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme.secondaryColor }}>
                  {config.rounds.length}
                </div>
              </div>
              <div>
                <div style={{ color: '#aaa' }}>Total Clicks</div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: theme.secondaryColor }}>
                  {clickedItems.length}
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={handleComplete}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.25rem',
              fontWeight: 'bold',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              width: '100%',
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  // Round end screen
  if (gameState === 'round-end') {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primaryColor,
          backgroundImage: config.backgroundImage ? `url(${config.backgroundImage})` : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '2rem',
        }}
      >
        <div
          style={{
            maxWidth: '800px',
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: '2.5rem',
            borderRadius: '1rem',
            color: 'white',
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: theme.secondaryColor }}>
            Round {currentRoundIndex + 1} Complete!
          </h2>

          <div style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
            Round Score: <span style={{ color: theme.secondaryColor, fontWeight: 'bold' }}>{roundScore}</span>
          </div>

          <div style={{ marginBottom: '2rem' }}>
            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>
              Review: {clickedItems.length} click{clickedItems.length !== 1 ? 's' : ''}
            </h3>
            {clickedItems.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>
                No items clicked this round
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '0.75rem',
              }}>
                {clickedItems.map((clickedItem) => {
                  // SVG icons
                  const correctClickIcon = (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  );

                  const wrongClickIcon = (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  );

                  const icon = clickedItem.correct ? correctClickIcon : wrongClickIcon;
                  const pointsColor = clickedItem.points > 0 ? '#22c55e' : '#ef4444';

                  return (
                    <div
                      key={clickedItem.displayId}
                      style={{
                        padding: '0.75rem',
                        backgroundColor: clickedItem.correct ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                        borderRadius: '0.5rem',
                        border: `2px solid ${clickedItem.correct ? '#22c55e' : '#ef4444'}`,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                          {icon}
                          <span>{clickedItem.label}</span>
                        </div>
                        <span style={{ color: pointsColor, fontWeight: 'bold', fontSize: '0.9rem' }}>
                          {clickedItem.points > 0 ? '+' : ''}{clickedItem.points}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <button
            onClick={handleNextRound}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: 'pointer',
              width: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            {isLastRound ? 'See Final Results' : 'Next Round →'}
          </button>
        </div>
      </div>
    );
  }

  // Game end screen handled by parent

  // Main game screen
  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: theme.primaryColor,
        backgroundImage: config.backgroundImage ? `url(${config.backgroundImage})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Header with instructions and timer */}
      <div style={{ textAlign: 'center', marginBottom: '1rem', color: 'white' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{config.prompt}</h2>
        <div style={{ fontSize: '1rem', color: '#ccc' }}>
          Round {currentRoundIndex + 1} of {config.rounds.length} | Time: {Math.ceil(timeRemaining)}s | Score: {score}
        </div>
      </div>

      {/* Target display */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: '2rem',
          padding: '1.5rem',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '1rem',
          maxWidth: '600px',
          margin: '0 auto 2rem',
        }}
      >
        {config.targetLabel && (
          <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: theme.secondaryColor, marginBottom: '1rem' }}>
            {config.targetLabel}
          </div>
        )}
        <img
          src={currentRound.target.image || 'https://via.placeholder.com/400x300?text=Target+Image'}
          alt={currentRound.target.label}
          style={{
            maxWidth: '400px',
            maxHeight: '300px',
            borderRadius: '0.75rem',
            border: `3px solid ${theme.secondaryColor}`,
            marginBottom: '1rem',
          }}
        />
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
          {currentRound.target.label}
        </div>
        {currentRound.target.description && (
          <div style={{ fontSize: '1rem', color: '#ccc', marginTop: '0.5rem' }}>
            {currentRound.target.description}
          </div>
        )}
      </div>

      {/* Active items */}
      {activeItems.map(item => (
        <div
          key={item.displayId}
          onClick={() => handleItemClick(item)}
          style={{
            position: 'absolute',
            left: `${item.position.x}px`,
            top: `${item.position.y}px`,
            cursor: item.clicked ? 'default' : 'pointer',
            opacity: item.clicked ? 0.3 : 1,
            transform: item.clicked ? 'scale(0.8)' : 'scale(1)',
            transition: 'all 0.3s',
            animation: 'fadeIn 0.3s ease-out',
          }}
        >
          <div
            style={{
              width: '120px',
              backgroundColor: 'rgba(0, 0, 0, 0.9)',
              borderRadius: '0.75rem',
              border: `3px solid ${item.clicked ? (item.isCorrect ? '#22c55e' : '#ef4444') : 'rgba(255, 255, 255, 0.3)'}`,
              padding: '0.5rem',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            }}
          >
            <img
              src={item.image || 'https://via.placeholder.com/120?text=Item'}
              alt={item.label}
              style={{
                width: '100%',
                height: '100px',
                objectFit: 'contain',
                borderRadius: '0.5rem',
                marginBottom: '0.5rem',
              }}
            />
            <div style={{ fontSize: '0.75rem', color: 'white', textAlign: 'center' }}>
              {item.label}
            </div>
          </div>
        </div>
      ))}

      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.5);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

// Create a wrapper component that adapts CustomGameProps to GalleryGameProps
const GalleryGameAdapter: React.FC<CustomGameProps> = (props) => {
  return <GalleryGame {...props} config={props.config as unknown as GalleryGameConfig} />;
};

// Register the adapter
customGameRegistry.register('gallery', GalleryGameAdapter);

export default GalleryGame;
