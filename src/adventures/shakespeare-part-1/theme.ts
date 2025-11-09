import type { AdventureTheme } from '../../types';

/**
 * Shakespeare Part I: Love, Identity & Disguise Theme
 *
 * Color palette inspired by Elizabethan theater and Renaissance art:
 * - Primary: Rich burgundy (theater curtains, Renaissance velvet, romantic atmosphere)
 * - Secondary: Renaissance gold (theater lighting, noble costume accents, warmth)
 *
 * Font selection reflects Shakespearean drama with theatrical elegance.
 * Visual aesthetic evokes the Globe Theatre era and Renaissance England
 * (lighter, more romantic than the darker tragedies of Parts II & III).
 */
export const shakespearePart1Theme: AdventureTheme = {
  primaryColor: '#7e1e3e',      // Rich burgundy (theater, romance, Renaissance)
  secondaryColor: '#d4a82e',    // Renaissance gold (warmth, theater lights, costumes)
  fontFamily: '"Crimson Text", serif',  // Elegant traditional font for dramatic text
  backgroundMusic: '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Romance.mp3',
};

/**
 * Music Playlist
 *
 * Renaissance instrumentation with theatrical atmosphere.
 * Lighter and more romantic than Parts II & III, reflecting comedic themes.
 *
 * Themes focus on:
 * - Love and romance (Romeo & Juliet, Twelfth Night)
 * - Playful comedy and disguise (Much Ado, Midsummer)
 * - Elizabethan theater atmosphere (Globe Theatre ambiance)
 *
 * Playlist designed for extended study sessions with varied moods.
 * All tracks suitable for 30-45 minute chapter sessions.
 *
 * Tracks are interleaved by theme to provide variety and prevent
 * consecutive repetition of the same musical mood.
 */
export const musicPlaylist = [
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Romance.mp3',      // Romance theme (Romeo & Juliet)
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Comedy.mp3',       // Comedy theme (Much Ado / Twelfth Night)
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Dream.mp3',        // Dream theme (Midsummer)
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Romance-2.mp3',    // Romance variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Tragedy.mp3',      // Tragedy theme (dramatic contrast)
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Comedy-2.mp3',     // Comedy variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Dream-2.mp3',      // Dream variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Romance-3.mp3',    // Romance variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Comedy-3.mp3',     // Comedy variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Tragedy-2.mp3',    // Tragedy variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Dream-3.mp3',      // Dream variation
  '/Imsie/assets/shakespeare-part-1/music/Shakespeare  - The Romance-4.mp3',    // Romance variation
];
