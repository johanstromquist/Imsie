import type { NarrativeScene as NarrativeSceneType, AdventureTheme } from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface NarrativeSceneProps {
  scene: NarrativeSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const NarrativeScene: React.FC<NarrativeSceneProps> = ({ scene, theme, onComplete, onBack, canGoBack }) => {
  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image ? assetLoader.getImage(scene.image) : null;

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
      {/* Content container */}
      <div
        style={{
          maxWidth: '800px',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
        }}
      >
        {/* Scene image */}
        {sceneImage && (
          <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
            <img
              src={sceneImage.src}
              alt="Scene illustration"
              style={{
                maxWidth: '100%',
                maxHeight: '300px',
                borderRadius: '0.5rem',
              }}
            />
          </div>
        )}

        {/* Narrative content */}
        <div
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            marginBottom: '2rem',
            whiteSpace: 'pre-wrap',
          }}
        >
          {scene.content}
        </div>

        {/* Learning points */}
        {scene.learningPoints && scene.learningPoints.length > 0 && (
          <div
            style={{
              borderLeft: `4px solid ${theme.secondaryColor}`,
              paddingLeft: '1rem',
              marginBottom: '2rem',
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

        {/* Navigation buttons - Round edge buttons */}
        {canGoBack && (
          <button
            onClick={onBack}
            style={{
              position: 'absolute',
              left: '-30px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: theme.secondaryColor,
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
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
            right: '-30px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: theme.secondaryColor,
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.5rem',
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
          aria-label={scene.continueButtonText || 'Continue'}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default NarrativeScene;
