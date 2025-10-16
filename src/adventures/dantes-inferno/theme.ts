import type { AdventureTheme } from '../../types';

/**
 * Dante's Inferno Adventure Theme
 *
 * Color palette inspired by the medieval manuscript illuminations
 * and the descent through the circles of hell - dark, rich, dramatic
 */
export const dantesInfernoTheme: AdventureTheme = {
  primaryColor: '#1a0f2e',      // Deep purple-black (hell's darkness)
  secondaryColor: '#d4af37',    // Gold (divine light/guidance)
  fontFamily: '"Cinzel", "Trajan Pro", serif', // Classical, manuscript-inspired
  backgroundMusic: "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Descent.mp3",
};

/**
 * Music Playlist
 *
 * Medieval-inspired orchestral and choral music
 * to evoke the epic, spiritual journey through the afterlife
 *
 * Track Assignment:
 * - Descent Theme: Prologue & Chapter 1 (Limbo)
 * - Journey: Chapters 2-3 (Incontinence & City of Dis)
 * - Malebolge: Chapter 4 (Fraud/Malebolge)
 * - Treachery: Chapter 5 (Cocytus & Satan)
 */
export const musicPlaylist = [
  "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Descent.mp3",      // Prologue/Ch1
  "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Descent-2.mp3",    // Prologue/Ch1 (alt)
  "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Journey.mp3",      // Ch2-3
  "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Malebolge.mp3",    // Ch4
  "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Treachery.mp3",    // Ch5
  "/Imsie/assets/dantes-inferno/music/Dante's%20Inferno_%20Treachery-2.mp3",  // Ch5 (alt)
];
