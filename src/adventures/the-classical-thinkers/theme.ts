import type { AdventureTheme } from '../../types';

export const theClassicalThinkersTheme: AdventureTheme = {
  primaryColor: '#1a3a52',      // Deep blue (philosophy, wisdom)
  secondaryColor: '#d4a574',    // Warm gold (ancient Greece)
  fontFamily: '"Crimson Text", serif',
  backgroundMusic: '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Contemplation.mp3',
};

/**
 * Music Playlist
 *
 * Mediterranean acoustic with ancient Greek instrumentation
 * Contemplative and scholarly atmosphere for philosophical study
 *
 * Mixed rotation of all 10 tracks (3 themes, multiple variations each)
 * - Contemplation variations (3): Main contemplative theme
 * - Academy variations (4): Study and discussion theme (lighter, more melodic)
 * - Hellenistic Horizons variations (3): Cosmopolitan reflection (East-meets-West blend)
 *
 * Tracks are mixed to avoid playing variations of the same theme consecutively
 */
export const musicPlaylist = [
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Contemplation.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Academy.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Hellenistic Horizons.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Contemplation-2.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Academy-2.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Hellenistic Horizons-2.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Contemplation-3.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Academy-3.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Hellenistic Horizons-3.mp3',
  '/Imsie/assets/the-classical-thinkers/music/The Thinkers - Academy-4.mp3',
];
