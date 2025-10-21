import { useEffect, useRef, useState, useCallback } from 'react';

interface UseMusicPlayerProps {
  playlist: string[];
}

export const useMusicPlayer = ({ playlist }: UseMusicPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [needsUserInteraction, setNeedsUserInteraction] = useState(true);

  // Initialize audio element
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio();
      audioRef.current.volume = 0.3; // Set default volume to 30%
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Load track when index changes
  useEffect(() => {
    if (!audioRef.current || playlist.length === 0) return;

    const audio = audioRef.current;

    // Load the track
    audio.src = playlist[currentTrackIndex];
    audio.load(); // Explicitly load the audio

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          // Ignore AbortError - it happens when switching tracks
          if (error.name !== 'AbortError') {
            console.warn('Audio play failed:', error);
          }
          setIsPlaying(false);
        });
      }
    }

    // Handle track ending - move to next track
    const handleEnded = () => {
      const nextIndex = (currentTrackIndex + 1) % playlist.length;
      setCurrentTrackIndex(nextIndex);
    };

    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrackIndex, playlist, isPlaying]);

  // Start playing music (must be called from user interaction)
  const startMusic = useCallback(() => {
    if (!audioRef.current || playlist.length === 0) {
      return;
    }

    audioRef.current.src = playlist[0];
    audioRef.current.load();

    const playPromise = audioRef.current.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
          setNeedsUserInteraction(false);
          setIsMuted(false);
        })
        .catch((error) => {
          if (error.name !== 'AbortError') {
            console.error('Failed to start music:', error);
          }
        });
    }
  }, [playlist]);

  // Handle mute/unmute
  const toggleMute = useCallback(() => {
    if (!audioRef.current) return;

    if (isMuted) {
      // Unmute - start playing
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          if (error.name !== 'AbortError') {
            console.warn('Audio play failed:', error);
          }
        });
      }
      setIsPlaying(true);
      setIsMuted(false);
    } else {
      // Mute - pause
      audioRef.current.pause();
      setIsPlaying(false);
      setIsMuted(true);
    }
  }, [isMuted]);

  // Fade volume smoothly over a duration
  const fadeVolume = useCallback((targetVolume: number, duration: number) => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    const startVolume = audio.volume;
    const volumeChange = targetVolume - startVolume;
    const startTime = performance.now();

    const fade = (currentTime: number) => {
      if (!audioRef.current) return;

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-in-out cubic for smoother fade
      const easedProgress = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      audioRef.current.volume = Math.max(0, Math.min(1, startVolume + volumeChange * easedProgress));

      if (progress < 1) {
        requestAnimationFrame(fade);
      }
    };

    requestAnimationFrame(fade);
  }, []);

  return {
    isMuted,
    isPlaying,
    needsUserInteraction,
    currentTrackIndex,
    startMusic,
    toggleMute,
    fadeVolume,
  };
};
