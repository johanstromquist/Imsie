import React from 'react';

interface LoadingScreenProps {
  progress: number;
  adventureName: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ progress, adventureName }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <h1 style={{ marginBottom: '2rem', fontSize: '2rem' }}>
        {adventureName}
      </h1>

      <div style={{
        width: '300px',
        height: '20px',
        backgroundColor: '#333',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '1rem',
      }}>
        <div style={{
          width: `${progress}%`,
          height: '100%',
          backgroundColor: '#4a9eff',
          transition: 'width 0.3s ease',
        }} />
      </div>

      <p style={{ color: '#888' }}>
        Loading assets... {progress}%
      </p>
    </div>
  );
};

export default LoadingScreen;
