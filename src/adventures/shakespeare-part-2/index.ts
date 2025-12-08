import type { Adventure } from '../../types';
import { shakespearePart2Theme, musicPlaylist } from './theme';
import { chapter1 } from './chapters/chapter-1-macbeth';
import { chapter2 } from './chapters/chapter-2-othello';
import { chapter3 } from './chapters/chapter-3-king-lear';
import { finalQuiz } from './quizzes/final-quiz';

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
  slug: 'shakespeare-part-2',
  title: 'Shakespeare Part II: Power, Ambition, Jealousy & Guilt',
  author: 'William Shakespeare',
  originalTitle: 'Selected Tragedies',
  description: 'Explore Shakespeare\'s darkest tragedies: Macbeth, Othello, and King Lear. Journey into the psychology of corruption, jealousy, and the destructive nature of unchecked ambition.',
  estimatedTime: 180,  // 3 hours total (3 chapters × ~45-60 minutes each)
  effort: 2,  // Higher difficulty - complex psychological themes
  authoringDate: 1606,  // Approximate middle of the plays covered (1606-1608)
  period: 'Renaissance (1450 - 1600)',
  coverArt: 'https://cdn.midjourney.com/1e89039c-c972-4401-9aef-522ecd5237bd/0_1.png',
  coverVideo: 'https://cdn.midjourney.com/video/aaa9626d-d02b-42f4-ad23-fa1e107bdfc2/1.mp4',

  searchKeywords: [
    'shakespeare',
    'tragedy',
    'macbeth',
    'othello',
    'king lear',
    'ambition',
    'jealousy',
    'power',
    'guilt',
    'madness',
    'psychological',
    'renaissance',
    'elizabethan',
    'jacobean',
    'english literature',
    'classic literature',
    'drama',
  ],

  theme: shakespearePart2Theme,
  musicPlaylist,

  chapters: [
    chapter1,  // Macbeth: Ambition and Guilt
    chapter2,  // Othello: Jealousy and Manipulation
    chapter3,  // King Lear: Power, Madness, and Nothing
  ],

  finalQuiz: finalQuiz
};
