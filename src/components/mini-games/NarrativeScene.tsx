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

        {/* Navigation buttons */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          {canGoBack && (
            <button
              onClick={onBack}
              style={{
                padding: '0.75rem 2rem',
                fontSize: '1rem',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
              ← Back
            </button>
          )}
          <button
            onClick={onComplete}
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
            {scene.continueButtonText || 'Continue'} →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NarrativeScene;
