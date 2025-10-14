import { useState, useEffect, useRef, type ReactElement } from 'react';

interface SceneTransitionProps {
  children: ReactElement;
  sceneKey: string;
  duration?: number; // milliseconds
  type?: 'fade' | 'slide' | 'zoom';
}

const SceneTransition: React.FC<SceneTransitionProps> = ({
  children,
  sceneKey,
  duration = 500,
  type = 'fade',
}) => {
  const [displayedScene, setDisplayedScene] = useState(children);
  const [nextScene, setNextScene] = useState<ReactElement | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const previousSceneKey = useRef(sceneKey);

  // CSS class names for transitions
  const [currentSceneClass, setCurrentSceneClass] = useState('scene-visible');
  const [nextSceneClass, setNextSceneClass] = useState('scene-hidden');

  useEffect(() => {
    if (sceneKey !== previousSceneKey.current) {
      // Start transition
      setNextScene(children);
      setIsTransitioning(true);
      setNextSceneClass('scene-entering'); // Start with opacity 0

      // Next frame: trigger CSS transition
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurrentSceneClass('scene-exiting'); // Fade to opacity 0
          setNextSceneClass('scene-entering-active'); // Fade to opacity 1
        });
      });

      // After transition: cleanup
      const timer = setTimeout(() => {
        setDisplayedScene(children);
        setNextScene(null);
        setIsTransitioning(false);
        setCurrentSceneClass('scene-visible');
        setNextSceneClass('scene-hidden');
        previousSceneKey.current = sceneKey;
      }, duration + 20);

      return () => clearTimeout(timer);
    }
  }, [sceneKey, children, duration]);

  const getSceneStyles = (isExiting: boolean): React.CSSProperties => {
    const isActive = isExiting ? currentSceneClass === 'scene-exiting' : nextSceneClass === 'scene-entering-active';
    const isEntering = !isExiting && nextSceneClass === 'scene-entering';

    const baseStyles: React.CSSProperties = {
      position: isTransitioning ? 'absolute' : 'relative',
      top: 0,
      left: 0,
      width: '100%',
      minHeight: '100vh',
      transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
    };

    // Determine opacity and transform based on state
    let opacity = 1;
    let transform = 'none';

    if (isExiting) {
      opacity = isActive ? 0 : 1;
      if (type === 'slide' && isActive) transform = 'translateX(-20%)';
      if (type === 'zoom' && isActive) transform = 'scale(0.95)';
    } else {
      opacity = isEntering ? 0 : isActive ? 1 : 0;
      if (type === 'slide') transform = isEntering ? 'translateX(20%)' : 'translateX(0)';
      if (type === 'zoom') transform = isEntering ? 'scale(0.95)' : 'scale(1)';
    }

    return { ...baseStyles, opacity, transform };
  };

  return (
    <div style={{
      position: 'relative',
      width: '100%',
      minHeight: '100vh',
    }}>
      {/* Current scene - fading out */}
      {isTransitioning && (
        <div key="current" style={getSceneStyles(true)}>
          {displayedScene}
        </div>
      )}

      {/* Next scene - fading in or visible */}
      {isTransitioning && nextScene && (
        <div key="next" style={getSceneStyles(false)}>
          {nextScene}
        </div>
      )}

      {/* Visible scene when not transitioning */}
      {!isTransitioning && (
        <div key="visible" style={{ position: 'relative', width: '100%', minHeight: '100vh' }}>
          {displayedScene}
        </div>
      )}
    </div>
  );
};

export default SceneTransition;
