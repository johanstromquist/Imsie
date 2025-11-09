import type { Adventure } from '../../types';
import { shakespearePart2Theme, musicPlaylist } from './theme';

/**
 * Shakespeare Part II: Power, Ambition, Jealousy & Guilt
 *
 * The middle (and darkest) installment of the Shakespeare trilogy.
 * Focuses on internal psychological corruption rather than external betrayal.
 *
 * Trilogy Structure:
 * - Part I: Love, Identity & Disguise (4 plays - comedies/romance) - THE PROLOGUE
 * - Part II: Power, Ambition, Jealousy & Guilt (3 plays - tragedies) - THE DARK MIDDLE
 * - Part III: Betrayal, Revenge, Justice & Reconciliation (3 plays) - THE EPILOGUE
 *
 * Part II examines how internal forces (ambition, jealousy) lead to moral collapse
 * and psychological destruction. These are tragedies of character, not fate.
 *
 * Educational Level: Grades 10-12, Ages 16-18
 * Prerequisites: Completion of Shakespeare Part I recommended but not required
 */
export const shakespearePart2: Adventure = {
  id: 'shakespeare-part-2',
  title: 'Shakespeare Part II: Power, Ambition, Jealousy & Guilt',
  description: 'Explore Shakespeare\'s darkest tragedies: Macbeth, Othello, and King Lear. Journey into the psychology of corruption, jealousy, and the destructive nature of unchecked ambition.',
  estimatedTime: 180,  // 3 hours total (3 chapters × ~45-60 minutes each)
  coverArt: '/Imsie/assets/shakespeare-part-2/cover.png',

  theme: shakespearePart2Theme,
  musicPlaylist,

  chapters: [
    // Chapters will be added as they are created:
    // 1. Macbeth: Ambition and Guilt
    // 2. Othello: Jealousy and Manipulation
    // 3. King Lear: Power, Madness, and Nothing
  ],

  finalQuiz: undefined,  // Optional comprehensive assessment after all chapters
};
