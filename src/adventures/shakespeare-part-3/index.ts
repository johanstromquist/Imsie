import type { Adventure } from '../../types';
import { shakespearePart3Theme, musicPlaylist } from './theme';

// Import chapters (to be created)
// import { chapter1 } from './chapters/chapter-1-hamlet';
// import { chapter2 } from './chapters/chapter-2-julius-caesar';
// import { chapter3 } from './chapters/chapter-3-the-tempest';
// import { epilogue } from './chapters/epilogue-shakespeare-legacy';

// Import final quiz (to be created)
// import { finalQuiz } from './quizzes/final-quiz';

/**
 * Shakespeare Part III: Betrayal, Revenge, Justice & Reconciliation
 *
 * The concluding part of the Shakespeare trilogy, exploring his most
 * philosophically profound tragedies and his final farewell masterpiece.
 * This adventure examines how external wrongs (murder, betrayal, usurpation)
 * demand response, and how justice can transform into forgiveness.
 *
 * Structure:
 * - Chapter 1: Hamlet - The Melancholy Prince and philosophical revenge
 * - Chapter 2: Julius Caesar - Political betrayal and consequences
 * - Chapter 3: The Tempest - Reconciliation and forgiveness
 * - Epilogue: Shakespeare's Legacy - His lasting influence on literature and culture
 *
 * This adventure serves as the EPILOGUE to the entire trilogy, bringing
 * together themes from Parts I and II while exploring Shakespeare's final
 * statement on humanity, forgiveness, and the power of art.
 *
 * Target Audience: Ages 16-18, Grades 10-12
 * Educational Focus: Shakespearean tragedy, philosophical depth, revenge ethics,
 *                    political drama, reconciliation, literary legacy
 *
 * Visual Style: Transitioning from dark to light - deep purples, silvers, and
 *               twilight blues suggesting wisdom, resolution, and timelessness
 */
export const shakespearePart3: Adventure = {
  id: 'shakespeare-part-3',
  slug: 'shakespeare-part-3',
  title: 'Shakespeare Part III: Betrayal, Revenge, Justice & Reconciliation',
  author: 'William Shakespeare',
  originalTitle: 'Hamlet, Julius Caesar, The Tempest',
  description: 'The epic conclusion to the Shakespeare trilogy. Experience Hamlet\'s philosophical struggle with revenge, witness the political betrayal of Julius Caesar, and find peace in The Tempest\'s message of forgiveness. Conclude with a reflection on Shakespeare\'s enduring legacy.',
  authoringDate: 1600,  // Approximate middle of these three plays (1599-1611)
  period: 'English Renaissance (1558-1660 CE)',
  searchKeywords: [
    'William Shakespeare', 'Hamlet', 'Julius Caesar', 'The Tempest',
    'Tragedy', 'Revenge', 'Betrayal', 'Justice', 'Reconciliation',
    'To be or not to be', 'Et tu Brute', 'Prospero', 'Ariel', 'Caliban',
    'Ghost', 'Ophelia', 'Claudius', 'Polonius', 'Horatio',
    'Brutus', 'Cassius', 'Mark Antony', 'Caesar', 'Portia',
    'Miranda', 'Ferdinand', 'Antonio', 'Gonzalo', 'Sycorax',
    'Philosophical tragedy', 'Political drama', 'Romance',
    'Revenge tragedy', 'Forgiveness', 'Magic', 'Island',
    'Shakespeare legacy', 'Elizabethan theatre', 'Renaissance drama',
    'Soliloquy', 'Blank verse', 'Iambic pentameter',
  ],
  effort: 1.3,  // Most philosophically complex of the trilogy
  estimatedTime: 300,  // minutes (~5 hours for 4 chapters)
  coverArt: '/assets/shakespeare-part-3/cover.png',

  theme: shakespearePart3Theme,
  musicPlaylist,

  chapters: [
    // To be added as chapters are created
  ],

  finalQuiz: undefined,  // Will be added after all chapters are complete
};
