import type { Scene, AdventureTheme } from '../../types';
import NarrativeScene from '../mini-games/NarrativeScene';

interface SceneRendererProps {
  scene: Scene;
  theme: AdventureTheme;
  onSceneComplete: (sceneId: string) => void;
  onSceneBack: () => void;
  canGoBack: boolean;
  onChoiceSelected: (sceneId: string, choiceId: string) => void;
}

const SceneRenderer: React.FC<SceneRendererProps> = ({
  scene,
  theme,
  onSceneComplete,
  onSceneBack,
  canGoBack,
}) => {
  switch (scene.type) {
    case 'narrative':
      return (
        <NarrativeScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    // TODO: Implement other scene types
    case 'decision':
    case 'timeline-game':
    case 'map-exploration':
    case 'primary-source':
    case 'dialogue':
    case 'cause-effect':
    case 'quote-attribution':
    case 'anachronism':
    case 'custom-mini-game':
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: 'white',
        }}>
          <p>Scene type "{scene.type}" not yet implemented</p>
        </div>
      );

    default:
      return (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          color: 'white',
        }}>
          <p>Unknown scene type</p>
        </div>
      );
  }
};

export default SceneRenderer;
