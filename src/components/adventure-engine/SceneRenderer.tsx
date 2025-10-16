import type { Scene, AdventureTheme } from '../../types';
import NarrativeScene from '../mini-games/NarrativeScene';
import DecisionScene from '../mini-games/DecisionScene';
import DialogueScene from '../mini-games/DialogueScene';
import MapExplorationScene from '../mini-games/MapExplorationScene';
import QuoteAttributionScene from '../mini-games/QuoteAttributionScene';
import TimelineGameScene from '../mini-games/TimelineGameScene';
import PrimarySourceScene from '../mini-games/PrimarySourceScene';
import CauseEffectScene from '../mini-games/CauseEffectScene';
import AnachronismScene from '../mini-games/AnachronismScene';
import CustomMiniGameScene from '../mini-games/CustomMiniGameScene';

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

    case 'map-exploration':
      return (
        <MapExplorationScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'quote-attribution':
      return (
        <QuoteAttributionScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'timeline-game':
      return (
        <TimelineGameScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'primary-source':
      return (
        <PrimarySourceScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'cause-effect':
      return (
        <CauseEffectScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'anachronism':
      return (
        <AnachronismScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
      );

    case 'custom-mini-game':
      return (
        <CustomMiniGameScene
          scene={scene}
          theme={theme}
          onComplete={() => onSceneComplete(scene.id)}
          onBack={onSceneBack}
          canGoBack={canGoBack}
        />
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
