import type { Scene, AdventureTheme } from '../../types';
import NarrativeScene from '../mini-games/NarrativeScene';
import DecisionScene from '../mini-games/DecisionScene';
import DialogueScene from '../mini-games/DialogueScene';

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
  onChoiceSelected,
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

    case 'decision':
      return (
        <DecisionScene
          scene={scene}
          theme={theme}
          onComplete={(choiceId) => {
            onChoiceSelected(scene.id, choiceId);
            onSceneComplete(scene.id);
          }}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'dialogue':
      return (
        <DialogueScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    // TODO: Implement other scene types
    case 'timeline-game':
    case 'map-exploration':
    case 'primary-source':
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
