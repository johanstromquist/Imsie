import { useState, useEffect, Fragment } from 'react';
import type {
  DialogueScene as DialogueSceneType,
  AdventureTheme,
  DialogueNode,
  DialogueResponse,
  InlineAnnotation,
} from '../../types';
import { assetLoader } from '../../services/assetLoader';
import AnnotatedText from '../common/AnnotatedText';

interface DialogueSceneProps {
  scene: DialogueSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const DialogueScene: React.FC<DialogueSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [currentNode, setCurrentNode] = useState<DialogueNode>(scene.dialogueTree);
  const [dialogueHistory, setDialogueHistory] = useState<DialogueNode[]>([
    scene.dialogueTree,
  ]);
  const [showText, setShowText] = useState(false);

  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const sceneImage = scene.image
    ? assetLoader.getImage(scene.image)
    : null;

  // Build a map of all characters (main character + optional additional characters)
  const allCharacters = scene.characters
    ? [scene.character, ...scene.characters]
    : [scene.character];

  const characterMap = Object.fromEntries(
    allCharacters.map(char => [char.id, char])
  );

  // Get the current speaker's character info
  const currentSpeaker = characterMap[currentNode.speaker];

  const characterPortrait = currentSpeaker
    ? assetLoader.getImage(currentSpeaker.portrait)
    : null;
  const characterPortraitVideo = currentSpeaker?.portraitVideo;

  // Fade in text animation
  useEffect(() => {
    setShowText(false);
    const timer = setTimeout(() => setShowText(true), 50);
    return () => clearTimeout(timer);
  }, [currentNode]);

  const handleResponseClick = (response: DialogueResponse) => {
    // Find next node
    const nextNode = findNodeById(scene.dialogueTree, response.nextNodeId);
    if (nextNode) {
      setCurrentNode(nextNode);
      setDialogueHistory([...dialogueHistory, nextNode]);
    } else {
      // End of dialogue tree
      onComplete();
    }
  };

  const handleLinearContinue = () => {
    if (currentNode.nextNodeId) {
      const nextNode = findNodeById(scene.dialogueTree, currentNode.nextNodeId);
      if (nextNode) {
        setCurrentNode(nextNode);
        setDialogueHistory([...dialogueHistory, nextNode]);
      } else {
        onComplete();
      }
    } else {
      onComplete();
    }
  };

  const handleBackInDialogue = () => {
    if (dialogueHistory.length > 1) {
      const newHistory = dialogueHistory.slice(0, -1);
      setDialogueHistory(newHistory);
      setCurrentNode(newHistory[newHistory.length - 1]);
    }
  };

  // Helper to find a node by ID in the dialogue tree
  const findNodeById = (node: DialogueNode, id: string): DialogueNode | null => {
    if (node.id === id) return node;

    // Check allNodes array if available (flat structure)
    if (node.allNodes) {
      const found = node.allNodes.find(n => n.id === id);
      if (found) return found;
    }

    return null;
  };

  // Helper to render text with inline annotations (using ContentWithAnnotations logic)
  const renderTextWithAnnotations = (text: string) => {
    if (!scene.inlineAnnotations || scene.inlineAnnotations.length === 0) {
      return text;
    }

    interface Segment {
      type: 'text' | 'annotation';
      content: string;
      annotation?: InlineAnnotation;
      start: number;
      end: number;
    }

    const segments: Segment[] = [];

    // Find all annotation positions in the text
    const annotationPositions = scene.inlineAnnotations
      .map((annotation) => {
        const index = text.indexOf(annotation.text);
        if (index === -1) {
          return null;
        }
        return {
          annotation,
          start: index,
          end: index + annotation.text.length,
        };
      })
      .filter((pos): pos is NonNullable<typeof pos> => pos !== null)
      .sort((a, b) => a.start - b.start);

    // Build segments
    let currentPos = 0;

    for (const { annotation, start, end } of annotationPositions) {
      // Add text before annotation
      if (currentPos < start) {
        segments.push({
          type: 'text',
          content: text.slice(currentPos, start),
          start: currentPos,
          end: start,
        });
      }

      // Add annotation
      segments.push({
        type: 'annotation',
        content: annotation.text,
        annotation,
        start,
        end,
      });

      currentPos = end;
    }

    // Add remaining text
    if (currentPos < text.length) {
      segments.push({
        type: 'text',
        content: text.slice(currentPos),
        start: currentPos,
        end: text.length,
      });
    }

    return (
      <>
        {segments.map((segment, index) => {
          if (segment.type === 'text') {
            return <Fragment key={`text-${index}-${segment.start}`}>{segment.content}</Fragment>;
          } else {
            return (
              <AnnotatedText
                key={`annotation-${segment.annotation!.id}-${index}`}
                id={segment.annotation!.id}
                text={segment.content}
                tooltip={segment.annotation!.tooltip}
                theme={theme}
              />
            );
          }
        })}
      </>
    );
  };

  const isCharacter = currentSpeaker !== undefined && currentNode.speaker !== 'player';

  // Check if dialogue can continue (has responses or nextNodeId)
  const canContinue = !!currentNode.nextNodeId || (currentNode.responses && currentNode.responses.length > 0);

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundImage: backgroundImage ? `url(${backgroundImage.src})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: theme.primaryColor,
        padding: '2rem',
        position: 'relative',
      }}
    >
      {/* Scene Image */}
      {sceneImage && (
        <div
          style={{
            marginBottom: '2rem',
            display: 'flex',
            justifyContent: 'center',
            maxWidth: '1000px',
            width: '100%',
          }}
        >
          <img
            src={sceneImage.src}
            alt="Scene illustration"
            style={{
              maxWidth: '100%',
              maxHeight: '400px',
              borderRadius: '0.75rem',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      )}

      {/* Dialogue box container */}
      <div
        style={{
          width: '100%',
          maxWidth: '1000px',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          borderRadius: '1rem',
          overflow: 'visible', // Changed from 'hidden' to allow tooltips to extend outside
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.5)',
          marginBottom: '2rem',
        }}
      >
        {/* Character info bar */}
        {isCharacter && (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              borderBottom: '2px solid ' + theme.secondaryColor,
            }}
          >
            {/* Character portrait */}
            {characterPortrait && (
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: `3px solid ${theme.secondaryColor}`,
                  flexShrink: 0,
                  backgroundImage: `url(${characterPortrait.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  position: 'relative',
                }}
              >
                {characterPortraitVideo && (
                  <video
                    src={characterPortraitVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                    }}
                  />
                )}
              </div>
            )}
            <div>
              <div
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: theme.secondaryColor,
                }}
              >
                {currentSpeaker?.name}
              </div>
              <div style={{ fontSize: '0.875rem', color: '#aaa' }}>
                {currentSpeaker?.description}
              </div>
            </div>
          </div>
        )}

        {/* Dialogue text */}
        <div
          style={{
            padding: '2rem',
            minHeight: '120px',
            overflow: 'visible', // Allow tooltips to extend outside
          }}
        >
          <div
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: 'white',
              opacity: showText ? 1 : 0,
              transition: 'opacity 0.3s ease-in',
              overflow: 'visible', // Allow tooltips to extend outside
            }}
          >
            {renderTextWithAnnotations(currentNode.text)}
          </div>

          {/* Linear continuation button */}
          {currentNode.nextNodeId && !currentNode.responses && (
            <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
              <button
                onClick={handleLinearContinue}
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
                Continue →
              </button>
            </div>
          )}
        </div>

        {/* Player response options */}
        {currentNode.responses && currentNode.responses.length > 0 && (
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <div
              style={{
                fontSize: '0.875rem',
                color: '#aaa',
                marginBottom: '1rem',
                fontWeight: '600',
              }}
            >
              Your Response:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {currentNode.responses.map((response, index) => (
                <button
                  key={response.id}
                  onClick={() => handleResponseClick(response)}
                  style={{
                    padding: '1rem 1.5rem',
                    fontSize: '1rem',
                    textAlign: 'left',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = theme.secondaryColor;
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      backgroundColor: theme.secondaryColor,
                      color: 'white',
                      fontSize: '0.875rem',
                      fontWeight: 'bold',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    {index + 1}
                  </span>
                  <span style={{ flex: 1 }}>{response.text}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* End of dialogue - complete button */}
        {!canContinue && (
          <div
            style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              textAlign: 'center',
            }}
          >
            <button
              onClick={onComplete}
              style={{
                padding: '1rem 3rem',
                fontSize: '1.125rem',
                fontWeight: 'bold',
                backgroundColor: theme.secondaryColor,
                color: 'white',
                border: 'none',
                borderRadius: '0.75rem',
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
              End Conversation
            </button>
          </div>
        )}
      </div>

      {/* Learning points overlay */}
      {scene.learningPoints && scene.learningPoints.length > 0 && (
        <div
          style={{
            width: '100%',
            maxWidth: '1000px',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            padding: '1rem 1.5rem',
            borderRadius: '0.75rem',
            marginBottom: '1rem',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div
            style={{
              borderLeft: `4px solid ${theme.secondaryColor}`,
              paddingLeft: '1rem',
              fontStyle: 'italic',
              color: '#ccc',
            }}
          >
            {scene.learningPoints.map((lp) => (
              <div key={lp.id} style={{ marginBottom: '0.5rem', fontSize: '0.95rem' }}>
                {lp.content}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Navigation buttons */}
      {canGoBack && dialogueHistory.length === 1 && (
        <button
          onClick={onBack}
          style={{
            position: 'absolute',
            left: '2rem',
            bottom: '2rem',
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
            opacity: 0.3,
            transition: 'opacity 0.3s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.3';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Go back"
        >
          ←
        </button>
      )}

      {dialogueHistory.length > 1 && (
        <button
          onClick={handleBackInDialogue}
          style={{
            position: 'absolute',
            left: '2rem',
            bottom: '2rem',
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
            opacity: 0.3,
            transition: 'opacity 0.3s, transform 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.3';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          aria-label="Previous dialogue"
        >
          ←
        </button>
      )}
    </div>
  );
};

export default DialogueScene;
