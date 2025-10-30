import type { AdventureTheme } from '../../types';

/**
 * The Edda Theme
 *
 * Color palette inspired by Norwegian National Romanticism and Norse mythology:
 * - Primary: Deep twilight blue (night skies, mystical atmosphere of Norse cosmos)
 * - Secondary: Norse gold (divine elements, Asgard's halls, runic inscriptions)
 *
 * Font selection reflects medieval literature with readable elegance.
 * Visual aesthetic evokes early 20th century Scandinavian illustration
 * (Bauer, Munthe, Frølich).
 */
export const theEddaTheme: AdventureTheme = {
  primaryColor: '#1a2838',      // Deep twilight blue (backgrounds, night skies)
  secondaryColor: '#d4a82e',    // Norse gold (divine elements, highlights)
  fontFamily: '"Crimson Text", serif',  // Elegant traditional font for saga reading
  backgroundMusic: '/Imsie/assets/the-edda/music/The Edda - The Norse.mp3',
};

/**
 * Music Playlist
 *
 * Nordic folk instrumentation with modern cinematic production.
 * Epic but contemplative, suitable for extended study/reading.
 *
 * Three themes with multiple variations each:
 * - The Norse: Main theme (Tagelharpa, frame drums, male choir)
 * - Death of Baldr: Somber/mystical theme (Female kulning vocals)
 * - Ragnarök: Epic battle theme (Full ensemble)
 *
 * Playlist mixed to avoid consecutive versions of the same theme.
 * All tracks designed for seamless looping during 30-45 minute chapter sessions.
 */
export const musicPlaylist = [
  '/Imsie/assets/the-edda/music/The Edda - The Norse.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Death of Baldr.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Ragnarok.mp3',
  '/Imsie/assets/the-edda/music/The Edda - The Norse-2.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Death of Baldr-2.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Ragnarok-2.mp3',
  '/Imsie/assets/the-edda/music/The Edda - The Norse-3.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Death of Baldr-3.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Ragnarok-3.mp3',
  '/Imsie/assets/the-edda/music/The Edda - Ragnarok-4.mp3',
];
