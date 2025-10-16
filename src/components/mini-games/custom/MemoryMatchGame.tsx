import { useState, useEffect } from 'react';
import { customGameRegistry, CustomGameProps } from '../customGameRegistry';
import { assetLoader } from '../../../services/assetLoader';

interface Card {
  id: string;
  value: string;
  image?: string;
  isFlipped: boolean;
  isMatched: boolean;
}

interface MemoryMatchConfig {
  pairs: Array<{ id: string; value: string; image?: string }>;
  timeLimit?: number; // in seconds
  showHints?: boolean;
}

const MemoryMatchGame: React.FC<CustomGameProps> = ({
  config,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const typedConfig = config as MemoryMatchConfig;
  const [cards, setCards] = useState<Card[]>([]);
  const [flippedCards, setFlippedCards] = useState<string[]>([]);
  const [moves, setMoves] = useState(0);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [timeElapsed, setTimeElapsed] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  // Initialize the game
  useEffect(() => {
    if (!typedConfig.pairs || typedConfig.pairs.length === 0) {
      console.error('MemoryMatchGame: No pairs provided in config');
      return;
    }

    // Create pairs of cards
    const gameCards: Card[] = [];
    typedConfig.pairs.forEach((pair) => {
      gameCards.push({
        id: `${pair.id}-1`,
        value: pair.value,
        image: pair.image,
        isFlipped: false,
        isMatched: false,
      });
      gameCards.push({
        id: `${pair.id}-2`,
        value: pair.value,
        image: pair.image,
        isFlipped: false,
        isMatched: false,
      });
    });

    // Shuffle the cards
    const shuffled = gameCards.sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, [typedConfig.pairs]);

  // Timer
  useEffect(() => {
    if (!isStarted || isComplete) return;

    const timer = setInterval(() => {
      setTimeElapsed((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isComplete]);

  // Check for match when two cards are flipped
  useEffect(() => {
    if (flippedCards.length === 2) {
      const [firstId, secondId] = flippedCards;
      const firstCard = cards.find((c) => c.id === firstId);
      const secondCard = cards.find((c) => c.id === secondId);

      if (firstCard && secondCard && firstCard.value === secondCard.value) {
        // Match found
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isMatched: true, isFlipped: true }
                : card
            )
          );
          setMatchedPairs((prev) => prev + 1);
          setFlippedCards([]);
        }, 600);
      } else {
        // No match
        setTimeout(() => {
          setCards((prev) =>
            prev.map((card) =>
              card.id === firstId || card.id === secondId
                ? { ...card, isFlipped: false }
                : card
            )
          );
          setFlippedCards([]);
        }, 1000);
      }

      setMoves((prev) => prev + 1);
    }
  }, [flippedCards, cards]);

  // Check for game completion
  useEffect(() => {
    if (matchedPairs === typedConfig.pairs.length && matchedPairs > 0) {
      setIsComplete(true);
    }
  }, [matchedPairs, typedConfig.pairs.length]);

  const handleCardClick = (cardId: string) => {
    if (!isStarted) setIsStarted(true);

    const card = cards.find((c) => c.id === cardId);
    if (!card || card.isMatched || card.isFlipped || flippedCards.length === 2) {
      return;
    }

    setCards((prev) =>
      prev.map((c) => (c.id === cardId ? { ...c, isFlipped: true } : c))
    );
    setFlippedCards((prev) => [...prev, cardId]);
  };

  const handleReset = () => {
    const shuffled = [...cards]
      .map((card) => ({ ...card, isFlipped: false, isMatched: false }))
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatchedPairs(0);
    setTimeElapsed(0);
    setIsComplete(false);
    setIsStarted(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

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
      <div
        style={{
          maxWidth: '900px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Header */}
        <div
          style={{
            marginBottom: '2rem',
            textAlign: 'center',
          }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Memory Match Game</h2>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              fontSize: '1.125rem',
              color: '#ccc',
            }}
          >
            <div>Moves: <strong>{moves}</strong></div>
            <div>Pairs: <strong>{matchedPairs}/{typedConfig.pairs.length}</strong></div>
            <div>Time: <strong>{formatTime(timeElapsed)}</strong></div>
          </div>
        </div>

        {/* Game board */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.min(4, Math.ceil(Math.sqrt(cards.length)))}, 1fr)`,
            gap: '1rem',
            marginBottom: '2rem',
          }}
        >
          {cards.map((card) => {
            const cardImage = card.image ? assetLoader.getImage(card.image) : null;

            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                style={{
                  aspectRatio: '1',
                  backgroundColor: card.isMatched
                    ? `${theme.secondaryColor}80`
                    : card.isFlipped
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.1)',
                  border: `2px solid ${
                    card.isMatched ? theme.secondaryColor : 'rgba(255, 255, 255, 0.2)'
                  }`,
                  borderRadius: '0.75rem',
                  cursor: card.isMatched || card.isFlipped ? 'default' : 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  fontWeight: 'bold',
                  transition: 'all 0.3s',
                  transform: card.isFlipped ? 'rotateY(180deg)' : 'rotateY(0)',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  backgroundImage:
                    card.isFlipped && cardImage ? `url(${cardImage.src})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                onMouseEnter={(e) => {
                  if (!card.isMatched && !card.isFlipped) {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.borderColor = theme.secondaryColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!card.isMatched && !card.isFlipped) {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }
                }}
              >
                {!card.isFlipped && !cardImage && (
                  <div
                    style={{
                      fontSize: '2rem',
                      color: theme.secondaryColor,
                    }}
                  >
                    ?
                  </div>
                )}
                {card.isFlipped && !cardImage && (
                  <div style={{ fontSize: '1.5rem' }}>{card.value}</div>
                )}
                {card.isMatched && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '0.5rem',
                      right: '0.5rem',
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: theme.secondaryColor,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      color: 'white',
                    }}
                  >
                    ✓
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Completion message */}
        {isComplete && (
          <div
            style={{
              textAlign: 'center',
              padding: '1.5rem',
              backgroundColor: `${theme.secondaryColor}20`,
              borderRadius: '0.75rem',
              border: `2px solid ${theme.secondaryColor}`,
              marginBottom: '1.5rem',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              Congratulations!
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#ccc' }}>
              You completed the game in {moves} moves and {formatTime(timeElapsed)}!
            </p>
          </div>
        )}

        {/* Action buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <button
            onClick={handleReset}
            style={{
              padding: '0.75rem 1.5rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              color: 'white',
              border: `2px solid ${theme.secondaryColor}`,
              borderRadius: '2rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = `${theme.secondaryColor}40`;
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Reset Game
          </button>

          {isComplete && (
            <button
              onClick={onComplete}
              style={{
                padding: '0.75rem 1.5rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '2rem',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '0.9';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Continue
            </button>
          )}
        </div>

        {/* Navigation buttons */}
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
      </div>
    </div>
  );
};

// Register the game
customGameRegistry.register('memory-match', MemoryMatchGame);

export default MemoryMatchGame;
