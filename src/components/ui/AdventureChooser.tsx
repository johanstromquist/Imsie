import { useEffect, useState, useRef } from 'react';
import type { Adventure, GlobalProgress, AdventureProgress } from '../../types';
import { adventures } from '../../adventures/adventure-registry';
import { progressManager } from '../../services/progressManager';

interface AdventureChooserProps {
  onAdventureSelect: (adventure: Adventure) => void;
}

interface AdventureCardProps {
  adventure: Adventure;
  progress: AdventureProgress | undefined;
  onSelect: () => void;
  onRestart: (event: React.MouseEvent) => void;
  formatEstimatedTime: (minutes: number) => string;
}

const AdventureChooser: React.FC<AdventureChooserProps> = ({ onAdventureSelect }) => {
  const [globalProgress, setGlobalProgress] = useState<GlobalProgress | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showAbout, setShowAbout] = useState(false);
  const [showLicense, setShowLicense] = useState(false);
  const heroImageUrl = `${import.meta.env.BASE_URL}assets/cover.jpg`;

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

  const formatEstimatedTime = (minutes: number): string => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (hours > 0) {
      return mins > 0 ? `${hours}h ${mins}m` : `${hours}h`;
    }
    return `${mins}m`;
  };

  const filteredAdventures = adventures.filter((adventure) => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    return (
      adventure.title.toLowerCase().includes(query) ||
      adventure.description.toLowerCase().includes(query) ||
      (adventure.searchKeywords && adventure.searchKeywords.some(keyword =>
        keyword.toLowerCase().includes(query)
      ))
    );
  });

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #1a0f2e 0%, #0a0515 100%)',
      }}
    >
      {/* Hero Section with Header */}
      <div
        style={{
          position: 'relative',
          padding: '2rem 2rem 3rem 2rem',
          backgroundImage: `linear-gradient(to bottom, rgba(26, 15, 46, 0.1) 0%, rgba(10, 5, 21, 0.75) 95%, rgba(10, 5, 21, 0.75) 100%), url(${heroImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Title and Byline */}
          <header style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative' }}>
            <img
              src={`${import.meta.env.BASE_URL}assets/logo.png`}
              alt="Imsie - Immersive Adventures in History and Literature"
              style={{
                height: '10rem',
                margin: '0 auto',
                display: 'block',
                filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 1))',
              }}
            />
            <p
              style={{
                fontSize: '1.25rem',
                color: 'rgba(255, 255, 255, 0.9)',
                margin: 0,
                textShadow: '0 2px 6px rgba(0, 0, 0, 0.8)',
                position: 'absolute',
                bottom: '40px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '100%',
              }}
            >
              Immersive Adventures in History and Literature
            </p>
          </header>

          {/* Search Bar */}
          <div style={{ maxWidth: '600px', margin: '0 auto 2rem auto' }}>
            <div style={{ position: 'relative' }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255, 255, 255, 0.7)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  position: 'absolute',
                  left: '1rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  zIndex: 1,
                }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                type="text"
                placeholder="Search adventures..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem 0.875rem 3rem',
                  fontSize: '1rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.75rem',
                  color: 'white',
                  outline: 'none',
                  transition: 'all 0.2s',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.4)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              />
            </div>
          </div>

          {/* Progress Management */}
          {globalProgress && (
            <div
              style={{
                padding: '1rem 1.5rem',
                backgroundColor: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'white',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              }}
            >
              <div>
                <p style={{ margin: 0, fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                  Total Play Time: {formatPlayTime(globalProgress.totalPlayTime)}
                </p>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <button
                  onClick={handleExportProgress}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(74, 158, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#4a9eff',
                    border: '1px solid rgba(74, 158, 255, 0.4)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(74, 158, 255, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(74, 158, 255, 0.2)';
                  }}
                >
                  Export Progress
                </button>
                <label
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(110, 201, 74, 0.2)',
                    backdropFilter: 'blur(10px)',
                    color: '#6ec94a',
                    border: '1px solid rgba(110, 201, 74, 0.4)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s',
                    display: 'inline-block',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(110, 201, 74, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(110, 201, 74, 0.2)';
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

          {/* About and Support Buttons */}
          <div style={{ marginTop: '1.5rem', textAlign: 'center', display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => setShowAbout(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
              </svg>
              About Imsie
            </button>
            <a
              href="https://www.patreon.com/eldritchconcerns"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: 'rgba(255, 66, 77, 0.2)',
                backdropFilter: 'blur(10px)',
                color: '#ff424d',
                border: '1px solid rgba(255, 66, 77, 0.4)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                fontSize: '0.875rem',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.2s',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 66, 77, 0.3)';
                e.currentTarget.style.borderColor = 'rgba(255, 66, 77, 0.6)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 66, 77, 0.2)';
                e.currentTarget.style.borderColor = 'rgba(255, 66, 77, 0.4)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
              Show Your Support
            </a>
          </div>
        </div>
      </div>

      {/* About Modal */}
      {showAbout && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 1000,
          }}
          onClick={() => setShowAbout(false)}
        >
          <div
            style={{
              backgroundColor: '#1a0f2e',
              borderRadius: '1rem',
              maxWidth: '700px',
              maxHeight: '80vh',
              overflow: 'auto',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowAbout(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                padding: '0.5rem',
                lineHeight: 1,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
            >
              ×
            </button>

            <h2 style={{ color: 'white', marginTop: 0, marginBottom: '1.5rem', fontSize: '2rem' }}>
              About Imsie
            </h2>

            <div style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <p style={{ marginTop: 0, marginBottom: '1.5rem' }}>
                In a time when it seems so easy to get lost—in the marketplace, in the scrolling, in the search for attention—fundamental truths, explored for millennia, seem to have gotten lost. And yet they are right there.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                We've never been so rich in information and access to high-quality stories as we are today. We've never before in human history been blessed with technology that can work alongside us to produce more information. Yet it seems the fight for attention is the hill we choose to die on, not the mountain of enlightenment.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                I believe we are in the midst of—not on the cusp, but in the midst of—the most remarkable transformation of human ethics, purpose and value, that we've thus far ever encountered. The opportunity to reevaluate what it means to be human and what we all bring to the world.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                In that revolutionizing process, the wisdom of generations has never been more relevant, yet we glance over it, focus solely on the most novel findings, on the technical details and the mechanics of this new technology.
              </p>

              <h3 style={{ color: '#d4af37', marginTop: '2rem', marginBottom: '1rem' }}>
                Finding Meaning
              </h3>

              <p style={{ marginBottom: '1.5rem' }}>
                Finding meaning is the unifying theme of all the great classics, from the Iliad, through Dante's Divine Comedy to Steinbeck's Grapes of Wrath. What is worth fighting for? What is worth dying for? What makes us human? What does good look like?
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                In a world of fundamental plenty, how do we reimagine ourselves as agents of our own fate? What do we really, truly want? And finally, what is the meaning of life? Of the human condition?
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                The answers are in the classics—the combined and distilled human experience over millennia. They are not simple. They are not bite-sized. They are not TikTok friendly or highly Instagramable. Interestingly, they are also most likely different for me to what they are for you.
              </p>

              <h3 style={{ color: '#d4af37', marginTop: '2rem', marginBottom: '1rem' }}>
                The Mission
              </h3>

              <p style={{ marginBottom: '1.5rem' }}>
                Imsie is an open source project created to make the classics accessible through immersive and interactive experiences. These texts are both archaic, long and challenging reads; reads that take scholars years to penetrate. They are not easily accessible.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                I thought—maybe with this advanced technology I can build something that could help? The result is this platform where I've started to create immersive and interactive experiences of the classics.
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Listen to Scheherazade's tales, be Dante as he repeatedly faints his way through the upper circles of hell, suffer through the pains of love with Tristan & Isolde, and cry over the loss of idealism in Don Quixote.
              </p>

              <div style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                gap: '1rem',
                justifyContent: 'center',
                flexWrap: 'wrap',
              }}>
                <a
                  href="https://github.com/johanstromquist/Imsie"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View on GitHub
                </a>
                <a
                  href="https://www.patreon.com/eldritchconcerns"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    backgroundColor: 'rgba(255, 66, 77, 0.2)',
                    color: '#ff424d',
                    border: '1px solid rgba(255, 66, 77, 0.4)',
                    borderRadius: '0.5rem',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 66, 77, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 66, 77, 0.2)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                  </svg>
                  Support on Patreon
                </a>
                <button
                  onClick={() => {
                    setShowAbout(false);
                    setShowLicense(true);
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.25rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    cursor: 'pointer',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                    <line x1="9" y1="3" x2="9" y2="21"/>
                  </svg>
                  License
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* License Modal */}
      {showLicense && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem',
            zIndex: 1000,
          }}
          onClick={() => setShowLicense(false)}
        >
          <div
            style={{
              backgroundColor: '#1a0f2e',
              borderRadius: '1rem',
              maxWidth: '700px',
              maxHeight: '80vh',
              overflow: 'auto',
              padding: '2rem',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowLicense(false)}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                color: 'rgba(255, 255, 255, 0.6)',
                cursor: 'pointer',
                fontSize: '1.5rem',
                padding: '0.5rem',
                lineHeight: 1,
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
              }}
            >
              ×
            </button>

            <h2 style={{ color: 'white', marginTop: 0, marginBottom: '1.5rem', fontSize: '2rem' }}>
              MIT License
            </h2>

            <div style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.7', fontSize: '0.95rem' }}>
              <p style={{ marginTop: 0, marginBottom: '1.5rem' }}>
                Copyright (c) 2025 Sourcehill AB
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files (the "Software"), to deal
                in the Software without restriction, including without limitation the rights
                to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                copies of the Software, and to permit persons to whom the Software is
                furnished to do so, subject to the following conditions:
              </p>

              <p style={{ marginBottom: '1.5rem' }}>
                The above copyright notice and this permission notice shall be included in all
                copies or substantial portions of the Software.
              </p>

              <p style={{ marginBottom: 0 }}>
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                SOFTWARE.
              </p>
            </div>
          </div>
        </div>
      )}


      {/* Content Area */}
      <div style={{ padding: '2rem' }}>
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
          {filteredAdventures.length > 0 ? (
            filteredAdventures.map((adventure) => {
              const progress = getAdventureProgress(adventure.id);

              return (
                <AdventureCard
                  key={adventure.id}
                  adventure={adventure}
                  progress={progress}
                  onSelect={() => onAdventureSelect(adventure)}
                  onRestart={(e) => handleRestartAdventure(adventure.id, adventure.title, e)}
                  formatEstimatedTime={formatEstimatedTime}
                />
              );
            })
          ) : (
            <div
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '4rem 2rem',
                color: 'rgba(255, 255, 255, 0.6)',
              }}
            >
              <svg
                width="64"
                height="64"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ margin: '0 auto 1rem auto', opacity: 0.5 }}
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <p style={{ fontSize: '1.25rem', margin: '0 0 0.5rem 0' }}>No adventures found</p>
              <p style={{ fontSize: '0.875rem', margin: 0 }}>
                Try adjusting your search query
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={{ textAlign: 'center', marginTop: '4rem', color: '#666', fontSize: '0.875rem' }}>
          <p style={{ margin: '0 0 0.5rem 0' }}>Imsie - Learn through adventure</p>
          <button
            onClick={() => setShowLicense(true)}
            style={{
              background: 'none',
              border: 'none',
              color: '#888',
              cursor: 'pointer',
              fontSize: '0.75rem',
              textDecoration: 'underline',
              padding: 0,
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#aaa';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#888';
            }}
          >
            License
          </button>
        </footer>
      </div>
    </div>
  );
};

// Separate AdventureCard component to use hooks properly
const AdventureCard: React.FC<AdventureCardProps> = ({
  adventure,
  progress,
  onSelect,
  onRestart,
  formatEstimatedTime,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const progressPercent = progress
    ? Math.round((progress.completedChapters.length / adventure.chapters.length) * 100)
    : 0;

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
      onClick={onSelect}
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
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
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
              <div style={{ padding: '1.5rem', color: 'white', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div>
                  <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.5rem' }}>
                    {adventure.title}
                  </h3>
                  <p style={{ margin: '0 0 1rem 0', color: '#ccc', fontSize: '0.875rem' }}>
                    {adventure.description}
                  </p>
                </div>

                {/* Bottom section with stats and progress */}
                <div style={{ marginTop: 'auto' }}>
                  {/* Stats */}
                  <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem', fontSize: '0.875rem' }}>
                    <span style={{ color: '#aaa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {formatEstimatedTime(adventure.estimatedTime)}
                    </span>
                    <span style={{ color: '#aaa', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      </svg>
                      {adventure.chapters.length} {adventure.chapters.length === 1 ? 'chapter' : 'chapters'}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  {progress && progressPercent > 0 && (
                    <div style={{ marginBottom: '1rem' }}>
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
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
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
                        onClick={onRestart}
                        style={{
                          padding: '0.375rem 0.75rem',
                          backgroundColor: 'rgba(239, 68, 68, 0.15)',
                          color: '#ef4444',
                          border: '1px solid rgba(239, 68, 68, 0.3)',
                          borderRadius: '0.375rem',
                          cursor: 'pointer',
                          fontSize: '0.75rem',
                          fontWeight: '500',
                          transition: 'all 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.375rem',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.25)';
                          e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.15)';
                          e.currentTarget.style.borderColor = 'rgba(239, 68, 68, 0.3)';
                        }}
                        title="Restart this adventure"
                      >
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1 4 1 10 7 10" />
                          <polyline points="23 20 23 14 17 14" />
                          <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15" />
                        </svg>
                        Restart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
  );
};

export default AdventureChooser;
