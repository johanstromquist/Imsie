import { useEffect, useState, useRef } from 'react';
import type { Adventure, GlobalProgress } from '../../types';
import { adventures } from '../../adventures/adventure-registry';
import { progressManager } from '../../services/progressManager';

interface AdventureChooserProps {
  onAdventureSelect: (adventure: Adventure) => void;
}

const AdventureChooser: React.FC<AdventureChooserProps> = ({ onAdventureSelect }) => {
  const [globalProgress, setGlobalProgress] = useState<GlobalProgress | null>(null);

  useEffect(() => {
    const loadProgress = async () => {
      await progressManager.init();
      let progress = await progressManager.getGlobalProgress();
      if (!progress) {
        progress = await progressManager.initializeGlobalProgress();
      }
      setGlobalProgress(progress);
    };

    loadProgress();
  }, []);

  const handleExportProgress = async () => {
    try {
      await progressManager.downloadProgress();
    } catch (error) {
      console.error('Failed to export progress:', error);
      alert('Failed to export progress');
    }
  };

  const handleImportProgress = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      await progressManager.uploadProgress(file);
      const progress = await progressManager.getGlobalProgress();
      setGlobalProgress(progress);
      alert('Progress imported successfully!');
    } catch (error) {
      console.error('Failed to import progress:', error);
      alert('Failed to import progress. Make sure the file is valid.');
    }
  };

  const handleRestartAdventure = async (adventureId: string, adventureTitle: string, event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent card click

    const confirmed = window.confirm(
      `Are you sure you want to restart "${adventureTitle}"? This will delete all your progress for this adventure.`
    );

    if (confirmed) {
      try {
        await progressManager.clearAdventureProgress(adventureId);
        const progress = await progressManager.getGlobalProgress();
        setGlobalProgress(progress);
      } catch (error) {
        console.error('Failed to restart adventure:', error);
        alert('Failed to restart adventure.');
      }
    }
  };

  const getAdventureProgress = (adventureId: string) => {
    return globalProgress?.adventures.find((a) => a.adventureId === adventureId);
  };

  const formatPlayTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0f2e 0%, #0a0515 100%)',
        padding: '2rem',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: '3rem', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', margin: '0 0 1rem 0', fontWeight: 'bold' }}>
          Imsie
        </h1>
        <p style={{ fontSize: '1.25rem', color: '#ccc', margin: 0 }}>
          Interactive Adventures in History and Literature
        </p>
      </header>

      {/* Progress Management */}
      {globalProgress && (
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto 2rem auto',
            padding: '1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '0.5rem',
            color: 'white',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div>
            <p style={{ margin: 0, fontSize: '0.875rem', color: '#aaa' }}>
              Total Play Time: {formatPlayTime(globalProgress.totalPlayTime)}
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={handleExportProgress}
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#4a9eff',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Export Progress
            </button>
            <label
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#6ec94a',
                color: 'white',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
              }}
            >
              Import Progress
              <input
                type="file"
                accept=".json"
                onChange={handleImportProgress}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
      )}

      {/* Adventures Grid */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '2rem',
        }}
      >
        {adventures.map((adventure) => {
          const progress = getAdventureProgress(adventure.id);
          const progressPercent = progress
            ? Math.round((progress.completedChapters.length / adventure.chapters.length) * 100)
            : 0;

          const videoRef = useRef<HTMLVideoElement>(null);
          const [isHovered, setIsHovered] = useState(false);

          const handleMouseEnter = () => {
            setIsHovered(true);
            if (videoRef.current && adventure.coverVideo) {
              videoRef.current.play();
            }
          };

          const handleMouseLeave = () => {
            setIsHovered(false);
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          };

          return (
            <div
              key={adventure.id}
              onClick={() => onAdventureSelect(adventure)}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '1rem',
                overflow: 'hidden',
                cursor: 'pointer',
                transition: 'transform 0.2s, box-shadow 0.2s',
                border: '2px solid transparent',
                transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                boxShadow: isHovered ? '0 8px 24px rgba(0, 0, 0, 0.4)' : 'none',
                borderColor: isHovered ? adventure.theme.secondaryColor : 'transparent',
              }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Cover Image/Video */}
              <div
                style={{
                  width: '100%',
                  height: '400px',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Static Image */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${adventure.coverArt})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: isHovered && adventure.coverVideo ? 0 : 1,
                    transition: 'opacity 0.3s ease',
                  }}
                />

                {/* Video (if available) */}
                {adventure.coverVideo && (
                  <video
                    ref={videoRef}
                    src={adventure.coverVideo}
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
                      opacity: isHovered ? 1 : 0,
                      transition: 'opacity 0.3s ease',
                    }}
                  />
                )}

                {/* Title overlay */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    padding: '2rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'white' }}>
                    {adventure.title}
                  </div>
                </div>
              </div>

              {/* Info */}
              <div style={{ padding: '1.5rem', color: 'white' }}>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
                  {adventure.title}
                </h3>
                <p style={{ margin: '0 0 1rem 0', color: '#ccc', fontSize: '0.875rem' }}>
                  {adventure.description}
                </p>

                {/* Stats */}
                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
                  <span style={{ color: '#aaa' }}>
                    ⏱️ {adventure.estimatedTime} min
                  </span>
                  <span style={{ color: '#aaa' }}>
                    📚 {adventure.chapters.length} {adventure.chapters.length === 1 ? 'chapter' : 'chapters'}
                  </span>
                </div>

                {/* Progress Bar */}
                {progress && progressPercent > 0 && (
                  <div>
                    <div style={{ marginBottom: '0.5rem', fontSize: '0.875rem', color: '#aaa' }}>
                      Progress: {progressPercent}%
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: '8px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${progressPercent}%`,
                          height: '100%',
                          backgroundColor: adventure.theme.secondaryColor,
                          transition: 'width 0.3s ease',
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Status */}
                <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span
                    style={{
                      display: 'inline-block',
                      padding: '0.25rem 0.75rem',
                      backgroundColor: progress ? adventure.theme.secondaryColor : 'rgba(255, 255, 255, 0.1)',
                      borderRadius: '1rem',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {progress ? (progressPercent === 100 ? 'Completed' : 'In Progress') : 'Not Started'}
                  </span>

                  {/* Restart button - only show if there's progress */}
                  {progress && (
                    <button
                      onClick={(e) => handleRestartAdventure(adventure.id, adventure.title, e)}
                      style={{
                        padding: '0.25rem 0.5rem',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        borderRadius: '0.25rem',
                        cursor: 'pointer',
                        fontSize: '0.75rem',
                        transition: 'background-color 0.2s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      }}
                      title="Restart this adventure"
                    >
                      🔄 Restart
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <footer style={{ textAlign: 'center', marginTop: '4rem', color: '#666', fontSize: '0.875rem' }}>
        <p>Imsie - Learn through adventure</p>
      </footer>
    </div>
  );
};

export default AdventureChooser;
