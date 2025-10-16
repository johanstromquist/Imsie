import type { CustomMiniGameScene as CustomMiniGameSceneType, AdventureTheme } from '../../types/adventure';
import { customGameRegistry } from './customGameRegistry';

interface CustomMiniGameSceneProps {
  scene: CustomMiniGameSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const CustomMiniGameScene: React.FC<CustomMiniGameSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const GameComponent = customGameRegistry.get(scene.gameType);

  if (!GameComponent) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.primaryColor,
          padding: '2rem',
          position: 'relative',
        }}
      >
        <div
          style={{
            maxWidth: '600px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '2rem',
            borderRadius: '1rem',
            color: 'white',
            backdropFilter: 'blur(10px)',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <h2 style={{ marginBottom: '1rem', fontSize: '1.75rem' }}>
            Custom Game Not Found
          </h2>
          <p style={{ marginBottom: '1.5rem', fontSize: '1.125rem', color: '#ccc' }}>
            The custom game type "<strong>{scene.gameType}</strong>" has not been registered.
          </p>
          <p style={{ marginBottom: '2rem', fontSize: '0.95rem', color: '#aaa' }}>
            Please register this game type before using it in your adventure.
          </p>

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

          <button
            onClick={onComplete}
            style={{
              position: 'absolute',
              right: '-22.5px',
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
            aria-label="Skip"
          >
            →
          </button>
        </div>
      </div>
    );
  }

  return (
    <GameComponent
      config={scene.config}
      theme={theme}
      onComplete={onComplete}
      onBack={onBack}
      canGoBack={canGoBack}
    />
  );
};

export default CustomMiniGameScene;
