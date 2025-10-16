import { useEffect, useState, useCallback } from 'react';
import type { Adventure, Chapter, Scene, AdventureProgress, QuizAnswer, QuizScore, SceneTrigger, Quiz } from '../../types';
import { progressManager } from '../../services/progressManager';
import { assetLoader } from '../../services/assetLoader';
import { useMusicPlayer } from '../../hooks/useMusicPlayer';
import { getActiveTriggers, resolveQuizData } from '../../services/triggerHandler';
import SceneRenderer from './SceneRenderer';
import SceneTransition from './SceneTransition';
import LoadingScreen from './LoadingScreen';
import ChapterNavigation from './ChapterNavigation';
import QuizRenderer from '../quiz/QuizRenderer';
import QuizResults from '../quiz/QuizResults';

interface AdventurePlayerProps {
  adventure: Adventure;
  onExit: () => void;
}

const AdventurePlayer: React.FC<AdventurePlayerProps> = ({ adventure, onExit }) => {
  const [progress, setProgress] = useState<AdventureProgress | null>(null);
  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null);
  const [currentScene, setCurrentScene] = useState<Scene | null>(null);
  const [sceneHistory, setSceneHistory] = useState<string[]>([]); // Track scene IDs
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [playStartTime] = useState<number>(Date.now());

  // Trigger state (event-driven system)
  const [triggeredIds, setTriggeredIds] = useState<Set<string>>(new Set());

  // Quiz state
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [showQuizResults, setShowQuizResults] = useState(false);
  const [quizScore, setQuizScore] = useState<number>(0);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);

  // Chapter navigation state
  const [showChapterNavigation, setShowChapterNavigation] = useState(false);

  // Initialize music player if playlist is available
  const { isMuted, needsUserInteraction, startMusic, toggleMute } = useMusicPlayer({
    playlist: adventure.musicPlaylist || [],
  });
  const [showStartOverlay, setShowStartOverlay] = useState(true);

  // Initialize or load progress
  useEffect(() => {
    const initProgress = async () => {
      await progressManager.init();
      let prog = await progressManager.getAdventureProgress(adventure.id);

      if (!prog) {
        // Start new adventure
        prog = await progressManager.initializeAdventureProgress(
          adventure.id,
          adventure.chapters[0].id,
          adventure.chapters[0].scenes[0].id
        );
      }

      setProgress(prog);

      // Find current chapter and scene
      const chapter = adventure.chapters.find((c) => c.id === prog!.currentChapterId);
      const scene = chapter?.scenes.find((s) => s.id === prog!.currentSceneId);

      setCurrentChapter(chapter || adventure.chapters[0]);
      setCurrentScene(scene || adventure.chapters[0].scenes[0]);
    };

    initProgress();
  }, [adventure]);

  // Preload assets when chapter changes
  useEffect(() => {
    if (!currentChapter) return;

    const preloadChapterAssets = async () => {
      setIsLoading(true);

      const assetsToLoad: Array<{ url: string; type: 'image' | 'audio' }> = [];

      // Collect all assets from scenes in current chapter
      currentChapter.scenes.forEach((scene) => {
        if ('backgroundImage' in scene && scene.backgroundImage) {
          assetsToLoad.push({ url: scene.backgroundImage, type: 'image' });
        }
        if ('image' in scene && scene.image) {
          assetsToLoad.push({ url: scene.image, type: 'image' });
        }
        if ('backgroundMusic' in scene && scene.backgroundMusic) {
          assetsToLoad.push({ url: scene.backgroundMusic, type: 'audio' });
        }
        if ('narration' in scene && scene.narration) {
          assetsToLoad.push({ url: scene.narration, type: 'audio' });
        }
        // Preload character portraits for dialogue scenes
        if (scene.type === 'dialogue' && 'character' in scene) {
          // Main character portrait
          if (scene.character.portrait) {
            assetsToLoad.push({ url: scene.character.portrait, type: 'image' });
          }
          // Additional characters' portraits
          if ('characters' in scene && scene.characters) {
            scene.characters.forEach((char) => {
              if (char.portrait) {
                assetsToLoad.push({ url: char.portrait, type: 'image' });
              }
            });
          }
        }
        // Preload map images for map-exploration scenes
        if (scene.type === 'map-exploration' && 'mapImage' in scene && scene.mapImage) {
          assetsToLoad.push({ url: scene.mapImage, type: 'image' });
        }
      });

      // Add adventure theme music
      if (adventure.theme.backgroundMusic) {
        assetsToLoad.push({ url: adventure.theme.backgroundMusic, type: 'audio' });
      }

      // Preload all assets
      await assetLoader.preloadAssets(assetsToLoad, (prog) => {
        setLoadingProgress(prog.percentage);
      });

      setIsLoading(false);
    };

    preloadChapterAssets();
  }, [currentChapter, adventure.theme]);

  // Track play time on unmount
  useEffect(() => {
    return () => {
      const playTime = Math.floor((Date.now() - playStartTime) / 1000);
      if (progress) {
        progressManager.addPlayTime(adventure.id, playTime);
      }
    };
  }, [adventure.id, progress, playStartTime]);

  // Check for onEnter triggers when scene changes
  useEffect(() => {
    if (!currentScene || !progress) return;

    const events = currentScene.events;
    if (!events?.onEnter || events.onEnter.length === 0) return;

    // Get triggers that should fire
    const triggers = getActiveTriggers(events.onEnter, progress, adventure, triggeredIds);

    if (triggers.length > 0) {
      // Process first trigger (could be extended to handle multiple)
      processTrigger(triggers[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentScene, progress]);

  // Process a trigger (show quiz, mini-game, etc.)
  const processTrigger = useCallback((trigger: SceneTrigger) => {
    // Mark as triggered
    setTriggeredIds((prev) => new Set(prev).add(trigger.componentId));

    // Handle based on trigger type
    switch (trigger.type) {
      case 'quiz': {
        const quiz = resolveQuizData(trigger.componentId, adventure);
        if (quiz) {
          setCurrentQuiz(quiz);
          setShowQuiz(true);
        }
        break;
      }

      case 'mini-game':
        // Future: Handle mini-games
        console.warn('Mini-game triggers not yet implemented');
        break;

      case 'cutscene':
        // Future: Handle cutscenes
        console.warn('Cutscene triggers not yet implemented');
        break;

      case 'custom':
        // Future: Handle custom triggers
        console.warn('Custom triggers not yet implemented');
        break;
    }
  }, [adventure]);

  const handleSceneComplete = useCallback(async (sceneId: string) => {
    if (!progress || !currentChapter) return;

    // Mark scene as complete
    await progressManager.markSceneComplete(adventure.id, sceneId);

    // Add learning points from scene
    const scene = currentChapter.scenes.find((s) => s.id === sceneId);
    if (scene && scene.learningPoints) {
      const learningPointIds = scene.learningPoints.map((lp) => lp.id);
      await progressManager.addLearningPoints(adventure.id, learningPointIds);
    }

    // Add current scene to history
    setSceneHistory(prev => [...prev, sceneId]);

    // Check for onExit triggers
    if (scene?.events?.onExit && scene.events.onExit.length > 0) {
      const triggers = getActiveTriggers(scene.events.onExit, progress, adventure, triggeredIds);

      if (triggers.length > 0) {
        // Process first trigger
        processTrigger(triggers[0]);
        return; // Don't advance to next scene yet
      }
    }

    // Move to next scene
    const currentSceneIndex = currentChapter.scenes.findIndex((s) => s.id === sceneId);
    const nextScene = currentChapter.scenes[currentSceneIndex + 1];

    if (nextScene) {
      setCurrentScene(nextScene);
      await progressManager.updateCurrentScene(adventure.id, currentChapter.id, nextScene.id);
      setProgress(await progressManager.getAdventureProgress(adventure.id));
    } else {
      // Chapter complete - no more scenes
      // Move to next chapter or exit
      handleChapterComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [progress, currentChapter, adventure.id, processTrigger, triggeredIds]);

  const handleSceneBack = useCallback(() => {
    if (!currentChapter || !currentScene) return;

    // Find current scene index
    const currentSceneIndex = currentChapter.scenes.findIndex((s) => s.id === currentScene.id);

    // Can't go back if we're on the first scene
    if (currentSceneIndex <= 0) return;

    // Get the previous scene
    const previousScene = currentChapter.scenes[currentSceneIndex - 1];

    if (previousScene) {
      // Remove last scene from history if it exists
      if (sceneHistory.length > 0) {
        setSceneHistory(prev => prev.slice(0, -1));
      }
      setCurrentScene(previousScene);
    }
  }, [currentChapter, currentScene, sceneHistory]);

  const handleChapterComplete = useCallback(() => {
    // Find next chapter
    const currentChapterIndex = adventure.chapters.findIndex((c) => c.id === currentChapter?.id);
    const nextChapter = adventure.chapters[currentChapterIndex + 1];

    if (nextChapter) {
      // Move to next chapter
      setCurrentChapter(nextChapter);
      setCurrentScene(nextChapter.scenes[0]);
      progressManager.updateCurrentScene(adventure.id, nextChapter.id, nextChapter.scenes[0].id);
    } else {
      // Adventure complete! Exit to adventure chooser
      onExit();
    }
  }, [adventure, currentChapter, onExit]);

  const handleChoiceSelected = useCallback(async (sceneId: string, choiceId: string) => {
    if (!progress) return;
    await progressManager.recordChoice(adventure.id, sceneId, choiceId);
  }, [progress, adventure.id]);

  const handleStartAdventure = useCallback(() => {
    startMusic();
    setShowStartOverlay(false);
  }, [startMusic]);

  const handleQuizComplete = useCallback(async (passed: boolean, score: number, answers: QuizAnswer[]) => {
    if (!progress || !currentQuiz) return;

    console.log('Quiz completed:', { passed, score, quizId: currentQuiz.id, currentChapter: currentChapter?.id });

    setQuizScore(score);
    setQuizAnswers(answers);

    // Save quiz score to progress
    const quizScoreData: QuizScore = {
      quizId: currentQuiz.id,
      score,
      answers,
      completedAt: new Date(),
    };

    await progressManager.saveQuizScore(adventure.id, quizScoreData);

    // Mark chapter as complete if passed (for chapter-end quizzes)
    if (passed && currentChapter) {
      console.log('Marking chapter as complete:', currentChapter.id);
      await progressManager.markChapterComplete(adventure.id, currentChapter.id);
    }

    const updatedProgress = await progressManager.getAdventureProgress(adventure.id);
    console.log('Updated progress after quiz:', {
      completedChapters: updatedProgress?.completedChapters,
      totalChapters: adventure.chapters.length
    });

    setProgress(updatedProgress);
    setShowQuiz(false);
    setShowQuizResults(true);
  }, [progress, currentQuiz, currentChapter, adventure.id, adventure.chapters.length]);

  const handleQuizRetry = useCallback(() => {
    setShowQuizResults(false);
    setShowQuiz(true);
  }, []);

  const handleQuizContinue = useCallback(() => {
    console.log('handleQuizContinue called - showing chapter navigation');
    setShowQuizResults(false);

    // After any quiz (chapter or final), show chapter navigation
    // This allows non-linear progression where user can choose their next chapter
    setShowChapterNavigation(true);
  }, []);

  const handleFinalQuizSelect = useCallback(() => {
    setCurrentQuiz(adventure.finalQuiz);
    setShowQuiz(true);
  }, [adventure]);

  const handleChapterSelect = useCallback((chapterId: string) => {
    if (!progress) return;

    // Close modal and show loading screen immediately (synchronously)
    setShowChapterNavigation(false);
    setIsLoading(true);

    // Use setTimeout to ensure state updates are applied before continuing
    setTimeout(async () => {
      // Find the selected chapter
      const selectedChapter = adventure.chapters.find((c) => c.id === chapterId);
      if (!selectedChapter) {
        setIsLoading(false);
        return;
      }

      // Check if chapter is unlocked using the same logic as ChapterNavigation
      const chapterIndex = adventure.chapters.findIndex((c) => c.id === chapterId);

      // Determine if chapter is unlocked
      let isUnlocked = true;

      if (chapterIndex === 0 && !selectedChapter.prerequisites) {
        isUnlocked = true; // First chapter with no prerequisites is always unlocked
      } else if (!selectedChapter.prerequisites) {
        // Default to sequential (backward compatible)
        if (chapterIndex > 0) {
          const previousChapter = adventure.chapters[chapterIndex - 1];
          isUnlocked = progress.completedChapters.includes(previousChapter.id);
        }
      } else {
        // Check prerequisites based on type
        const { type, chapterIds } = selectedChapter.prerequisites;

        switch (type) {
          case 'sequential':
            if (chapterIndex > 0) {
              const previousChapter = adventure.chapters[chapterIndex - 1];
              isUnlocked = progress.completedChapters.includes(previousChapter.id);
            }
            break;

          case 'any':
            if (chapterIds && chapterIds.length > 0) {
              isUnlocked = chapterIds.some(id => progress.completedChapters.includes(id));
            }
            break;

          case 'all':
            if (chapterIds && chapterIds.length > 0) {
              isUnlocked = chapterIds.every(id => progress.completedChapters.includes(id));
            }
            break;

          default:
            isUnlocked = false;
        }
      }

      if (!isUnlocked) {
        // Chapter is locked
        setIsLoading(false);
        return;
      }

      // Find the furthest completed scene in this chapter, or start from the beginning
      let startingScene = selectedChapter.scenes[0];

      // If this is the current chapter, stay on the current scene
      if (selectedChapter.id === currentChapter?.id && currentScene) {
        startingScene = currentScene;
      } else {
        // For other chapters, find the first incomplete scene or use the first scene
        const lastCompletedIndex = selectedChapter.scenes.findIndex(
          (scene, idx) => {
            const nextScene = selectedChapter.scenes[idx + 1];
            return progress.completedScenes.includes(scene.id) &&
                   (!nextScene || !progress.completedScenes.includes(nextScene.id));
          }
        );

        if (lastCompletedIndex >= 0 && lastCompletedIndex < selectedChapter.scenes.length - 1) {
          // Start from the scene after the last completed one
          startingScene = selectedChapter.scenes[lastCompletedIndex + 1];
        }
      }

      // Update current chapter and scene
      setCurrentChapter(selectedChapter);
      setCurrentScene(startingScene);
      setSceneHistory([]);

      // Update progress
      await progressManager.updateCurrentScene(adventure.id, selectedChapter.id, startingScene.id);
      const updatedProgress = await progressManager.getAdventureProgress(adventure.id);
      setProgress(updatedProgress);

      // Loading will be set to false by the asset preloading useEffect
    }, 0);
  }, [progress, adventure, currentChapter, currentScene]);

  if (!progress || !currentChapter || isLoading) {
    return <LoadingScreen progress={loadingProgress} adventureName={adventure.title} />;
  }

  // Show quiz if triggered
  if (showQuiz && currentQuiz) {
    return (
      <div className="adventure-player" style={{
        backgroundColor: adventure.theme.primaryColor,
        minHeight: '100vh',
        fontFamily: adventure.theme.fontFamily || 'inherit',
      }}>
        <QuizRenderer
          quiz={currentQuiz}
          theme={adventure.theme}
          onComplete={handleQuizComplete}
        />
        {/* Controls */}
        <div style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '0.5rem',
        }}>
          {adventure.musicPlaylist && adventure.musicPlaylist.length > 0 && (
            <button
              onClick={toggleMute}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
              title={isMuted ? 'Unmute music' : 'Mute music'}
            >
              {isMuted ? '🔇' : '🎵'}
            </button>
          )}
          <button
            onClick={() => setShowChapterNavigation(true)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            Chapters
          </button>
          <button
            onClick={onExit}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            Exit Adventure
          </button>
        </div>
      </div>
    );
  }

  // Show quiz results
  if (showQuizResults && currentQuiz) {
    return (
      <div className="adventure-player" style={{
        backgroundColor: adventure.theme.primaryColor,
        minHeight: '100vh',
        fontFamily: adventure.theme.fontFamily || 'inherit',
      }}>
        <QuizResults
          quiz={currentQuiz}
          score={quizScore}
          answers={quizAnswers}
          theme={adventure.theme}
          onRetry={currentQuiz.allowRetry ? handleQuizRetry : undefined}
          onContinue={handleQuizContinue}
        />
        {/* Controls */}
        <div style={{
          position: 'fixed',
          top: '1rem',
          right: '1rem',
          display: 'flex',
          gap: '0.5rem',
        }}>
          {adventure.musicPlaylist && adventure.musicPlaylist.length > 0 && (
            <button
              onClick={toggleMute}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '1.2rem',
              }}
              title={isMuted ? 'Unmute music' : 'Mute music'}
            >
              {isMuted ? '🔇' : '🎵'}
            </button>
          )}
          <button
            onClick={() => setShowChapterNavigation(true)}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            Chapters
          </button>
          <button
            onClick={onExit}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
            }}
          >
            Exit Adventure
          </button>
        </div>
      </div>
    );
  }

  // Render scenes
  if (!currentScene) {
    return <LoadingScreen progress={loadingProgress} adventureName={adventure.title} />;
  }

  // Determine if we can go back - check if we're not on the first scene
  const currentSceneIndex = currentChapter.scenes.findIndex((s) => s.id === currentScene.id);
  const canGoBack = currentSceneIndex > 0;

  return (
    <div className="adventure-player" style={{
      backgroundColor: adventure.theme.primaryColor,
      minHeight: '100vh',
      fontFamily: adventure.theme.fontFamily || 'inherit',
    }}>
      <SceneTransition
        sceneKey={currentScene.id}
        duration={adventure.theme.transitionDuration}
        type={adventure.theme.transitionType}
      >
        <SceneRenderer
          scene={currentScene}
          theme={adventure.theme}
          onSceneComplete={handleSceneComplete}
          onSceneBack={handleSceneBack}
          canGoBack={canGoBack}
          onChoiceSelected={handleChoiceSelected}
        />
      </SceneTransition>

      {/* Start overlay (for Safari audio autoplay) */}
      {showStartOverlay && needsUserInteraction && adventure.musicPlaylist && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          gap: '2rem',
        }}>
          <div style={{
            fontSize: '2rem',
            color: 'white',
            textAlign: 'center',
            maxWidth: '600px',
            padding: '0 2rem',
          }}>
            <h2 style={{ margin: '0 0 1rem 0', color: adventure.theme.secondaryColor }}>
              {adventure.title}
            </h2>
            <p style={{ margin: 0, fontSize: '1rem', color: '#ccc' }}>
              Click below to begin your adventure with music
            </p>
          </div>
          <button
            onClick={handleStartAdventure}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.5rem',
              backgroundColor: adventure.theme.secondaryColor,
              color: 'white',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              fontWeight: 'bold',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Begin Adventure
          </button>
        </div>
      )}

      {/* Controls */}
      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        gap: '0.5rem',
      }}>
        {/* Music control */}
        {adventure.musicPlaylist && adventure.musicPlaylist.length > 0 && (
          <button
            onClick={toggleMute}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              border: 'none',
              borderRadius: '0.25rem',
              cursor: 'pointer',
              fontSize: '1.2rem',
            }}
            title={isMuted ? 'Unmute music' : 'Mute music'}
          >
            {isMuted ? '🔇' : '🎵'}
          </button>
        )}

        {/* Chapters button */}
        <button
          onClick={() => setShowChapterNavigation(true)}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
          }}
        >
          Chapters
        </button>

        {/* Exit button */}
        <button
          onClick={onExit}
          style={{
            padding: '0.5rem 1rem',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            color: 'white',
            border: 'none',
            borderRadius: '0.25rem',
            cursor: 'pointer',
          }}
        >
          Exit Adventure
        </button>
      </div>

      {/* Chapter Navigation Modal */}
      {showChapterNavigation && progress && (
        <ChapterNavigation
          chapters={adventure.chapters}
          currentChapterId={currentChapter.id}
          progress={progress}
          theme={adventure.theme}
          finalQuiz={adventure.finalQuiz}
          onChapterSelect={handleChapterSelect}
          onFinalQuizSelect={handleFinalQuizSelect}
          onClose={() => setShowChapterNavigation(false)}
        />
      )}
    </div>
  );
};

export default AdventurePlayer;
