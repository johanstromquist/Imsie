import type { AdventureTheme } from '../../types';

/**
 * Shakespeare Part III: Betrayal, Revenge, Justice & Reconciliation - Adventure Theme
 *
 * Visual Style: Transitioning from darkness to light - Renaissance meets cosmic philosophy
 * - Deep purples suggesting tragedy and philosophical depth
 * - Silver and moonlight suggesting reflection and wisdom
 * - Transitioning to blues suggesting resolution and peace
 * - Ethereal quality suggesting Shakespeare's timeless legacy
 *
 * Color Palette:
 * - Primary: Deep royal purple (#2E1A47) - tragedy, philosophy, depth
 * - Secondary: Silver/moonlight (#C0C0C0) - reflection, wisdom, timelessness
 * - Accent: Twilight blue (#4A5F8F) - resolution, peace, understanding
 *
 * The palette evokes the progression from darkness (Hamlet's tragedy) through
 * conflict (Julius Caesar's betrayal) to resolution (The Tempest's forgiveness),
 * culminating in reflection on Shakespeare's eternal influence.
 */
export const shakespearePart3Theme: AdventureTheme = {
  primaryColor: '#2E1A47',      // Deep royal purple (tragedy, philosophy, depth)
  secondaryColor: '#C0C0C0',    // Silver/moonlight (wisdom, reflection, timelessness)
  fontFamily: '"Cinzel", "Trajan Pro", serif', // Classical Renaissance font
  backgroundMusic: '/assets/shakespeare-part-3/music/theme.mp3',
};

/**
 * Music Playlist
 *
 * Orchestral with Renaissance instruments transitioning to more ethereal sounds
 * to evoke tragedy, philosophy, and ultimate resolution
 *
 * Themes:
 * - Tragic Philosophy: Deep, contemplative pieces for Hamlet
 * - Conflict & Betrayal: Tense, dramatic pieces for Julius Caesar
 * - Resolution & Forgiveness: Peaceful, ethereal pieces for The Tempest
 * - Legacy & Timelessness: Reflective pieces for the epilogue
 */
export const musicPlaylist = [
  '/assets/shakespeare-part-3/music/theme.mp3',
  // Additional tracks to be added
];
