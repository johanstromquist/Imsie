import { useState } from 'react';
import type {
  MapExplorationScene as MapExplorationSceneType,
  AdventureTheme,
  MapLocation,
} from '../../types';
import { assetLoader } from '../../services/assetLoader';

interface MapExplorationSceneProps {
  scene: MapExplorationSceneType;
  theme: AdventureTheme;
  onComplete: () => void;
  onBack: () => void;
  canGoBack: boolean;
}

const MapExplorationScene: React.FC<MapExplorationSceneProps> = ({
  scene,
  theme,
  onComplete,
  onBack,
  canGoBack,
}) => {
  const [visitedLocations, setVisitedLocations] = useState<Set<string>>(new Set());
  const [selectedLocation, setSelectedLocation] = useState<MapLocation | null>(null);

  const mapImage = assetLoader.getImage(scene.mapImage);
  const backgroundImage = scene.backgroundImage
    ? assetLoader.getImage(scene.backgroundImage)
    : null;

  const handleLocationClick = (location: MapLocation) => {
    // Check if location has unlock condition
    if (location.unlockCondition) {
      // For now, we'll just allow clicking - in the future this could check progress
      // You could implement condition checking here
    }

    setVisitedLocations((prev) => new Set([...prev, location.id]));
    setSelectedLocation(location);
  };

  const handleCloseLocationDetail = () => {
    setSelectedLocation(null);
  };

  const handleContinue = () => {
    // Check if all required locations have been visited
    if (scene.requiredLocations) {
      const allRequiredVisited = scene.requiredLocations.every((locId) =>
        visitedLocations.has(locId)
      );
      if (!allRequiredVisited) {
        return; // Don't allow continue until all required locations are visited
      }
    }
    onComplete();
  };

  // Calculate if all required locations are visited
  const canProceed = scene.requiredLocations
    ? scene.requiredLocations.every((locId) => visitedLocations.has(locId))
    : visitedLocations.size > 0;

  const requiredCount = scene.requiredLocations?.length || 0;
  const visitedRequiredCount = scene.requiredLocations
    ? scene.requiredLocations.filter((locId) => visitedLocations.has(locId)).length
    : visitedLocations.size;

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
          maxWidth: '1200px',
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.85)',
          padding: '2rem',
          borderRadius: '1rem',
          color: 'white',
          backdropFilter: 'blur(10px)',
          position: 'relative',
        }}
      >
        {/* Header with prompt and progress */}
        <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
          <h2
            style={{
              fontSize: '1.75rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              color: theme.secondaryColor,
            }}
          >
            {scene.prompt}
          </h2>
          {scene.requiredLocations && (
            <div
              style={{
                fontSize: '1rem',
                color: '#ccc',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
              }}
            >
              <span>Locations Explored:</span>
              <span style={{ fontWeight: 'bold', color: theme.secondaryColor }}>
                {visitedRequiredCount}/{requiredCount}
              </span>
            </div>
          )}
        </div>

        {/* Map container */}
        {mapImage && (
          <div
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '900px',
              margin: '0 auto',
              borderRadius: '0.75rem',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Map image */}
            <img
              src={mapImage.src}
              alt="Map"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />

          {/* Location hotspots */}
          {scene.locations.map((location) => {
            const isVisited = visitedLocations.has(location.id);
            const isRequired = scene.requiredLocations?.includes(location.id);

            return (
              <button
                key={location.id}
                onClick={() => handleLocationClick(location)}
                style={{
                  position: 'absolute',
                  left: `${location.x}%`,
                  top: `${location.y}%`,
                  transform: 'translate(-50%, -50%)',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  backgroundColor: isVisited
                    ? theme.secondaryColor
                    : isRequired
                    ? 'rgba(255, 200, 0, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  border: `3px solid ${isVisited ? 'white' : theme.secondaryColor}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  color: isVisited ? 'white' : '#333',
                  transition: 'all 0.3s',
                  zIndex: 10,
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1.3)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.5)';
                  e.currentTarget.style.zIndex = '20';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translate(-50%, -50%) scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.3)';
                  e.currentTarget.style.zIndex = '10';
                }}
                aria-label={location.name}
                title={location.name}
              >
                {isVisited ? '✓' : '?'}
              </button>
            );
          })}
        </div>
        )}

        {/* Location legend */}
        <div
          style={{
            marginTop: '1.5rem',
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            fontSize: '0.875rem',
            color: '#ccc',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 200, 0, 0.8)',
                border: `2px solid ${theme.secondaryColor}`,
              }}
            />
            <span>Required Location</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: theme.secondaryColor,
                border: '2px solid white',
              }}
            />
            <span>Explored</span>
          </div>
        </div>

        {/* Continue button */}
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button
            onClick={handleContinue}
            disabled={!canProceed}
            style={{
              padding: '1rem 3rem',
              fontSize: '1.125rem',
              fontWeight: 'bold',
              backgroundColor: canProceed ? theme.secondaryColor : '#555',
              color: 'white',
              border: 'none',
              borderRadius: '0.75rem',
              cursor: canProceed ? 'pointer' : 'not-allowed',
              transition: 'transform 0.2s, box-shadow 0.2s',
              opacity: canProceed ? 1 : 0.5,
            }}
            onMouseEnter={(e) => {
              if (canProceed) {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
              }
            }}
            onMouseLeave={(e) => {
              if (canProceed) {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }
            }}
          >
            {canProceed ? 'Continue →' : 'Explore All Required Locations'}
          </button>
        </div>

        {/* Learning points */}
        {scene.learningPoints && scene.learningPoints.length > 0 && (
          <div
            style={{
              borderLeft: `4px solid ${theme.secondaryColor}`,
              paddingLeft: '1rem',
              marginTop: '2rem',
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

        {/* Back button */}
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
      </div>

      {/* Location detail modal */}
      {selectedLocation && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            padding: '2rem',
            animation: 'fadeIn 0.3s ease-in',
          }}
          onClick={handleCloseLocationDetail}
        >
          <div
            style={{
              maxWidth: '600px',
              width: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.95)',
              borderRadius: '1rem',
              padding: '2rem',
              border: `2px solid ${theme.secondaryColor}`,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3
              style={{
                fontSize: '1.75rem',
                fontWeight: 'bold',
                marginBottom: '1rem',
                color: theme.secondaryColor,
              }}
            >
              {selectedLocation.name}
            </h3>

            {selectedLocation.image && (() => {
              const locationImage = assetLoader.getImage(selectedLocation.image);
              return locationImage ? (
                <div style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                  <img
                    src={locationImage.src}
                    alt={selectedLocation.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '250px',
                      borderRadius: '0.5rem',
                    }}
                  />
                </div>
              ) : null;
            })()}

            <div style={{ marginBottom: '1.5rem' }}>
              {selectedLocation.content.split('\n\n').map((paragraph, index) => (
                <div
                  key={index}
                  style={{
                    fontSize: '1.125rem',
                    lineHeight: '1.75',
                    color: '#ddd',
                    marginBottom: index < selectedLocation.content.split('\n\n').length - 1 ? '0.75rem' : '0',
                    whiteSpace: 'pre-wrap',
                  }}
                >
                  {paragraph}
                </div>
              ))}
            </div>

            <button
              onClick={handleCloseLocationDetail}
              style={{
                width: '100%',
                padding: '1rem',
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
                e.currentTarget.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS Animation */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
};

export default MapExplorationScene;
