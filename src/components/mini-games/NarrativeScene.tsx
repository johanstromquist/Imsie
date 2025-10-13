import type { NarrativeScene as NarrativeSceneType, AdventureTheme } from '../../types';
import { assetLoader } from '../../services/assetLoader';
import ContentWithAnnotations from '../common/ContentWithAnnotations';

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

  const backgroundVideo = scene.backgroundVideo;
  const sceneImage = scene.image ? assetLoader.getImage(scene.image) : null;
  const sceneVideo = scene.imageVideo;

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: !backgroundVideo && backgroundImage ? `url(${backgroundImage.src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: theme.primaryColor,
        padding: '2rem',
        position: 'relative',
      }}
    >
      {/* Background video if available */}
      {backgroundVideo && (
        <video
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        />
      )}
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
          zIndex: 1,
        }}
      >
        {/* Scene image or video */}
        {(sceneImage || sceneVideo) && (
          <div
            style={{
              marginBottom: '1.5rem',
              textAlign: 'center',
              position: 'relative',
              minHeight: '300px',
              maxHeight: '300px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundImage: sceneImage ? `url(${sceneImage.src})` : 'none',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              borderRadius: '0.5rem',
              overflow: 'hidden',
            }}
          >
            {sceneVideo && (
              <video
                src={sceneVideo}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  maxWidth: '100%',
                  maxHeight: '300px',
                  borderRadius: '0.5rem',
                  position: 'relative',
                  zIndex: 1,
                }}
              />
            )}
          </div>
        )}

        {/* Narrative content with annotations */}
        <ContentWithAnnotations
          content={scene.content}
          annotations={scene.inlineAnnotations}
          theme={theme}
          style={{
            fontSize: '1.125rem',
            lineHeight: '1.75',
            marginBottom: '2rem',
            whiteSpace: 'pre-wrap',
          }}
        />

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
          aria-label={scene.continueButtonText || 'Continue'}
        >
          →
        </button>
      </div>
    </div>
  );
};

export default NarrativeScene;
