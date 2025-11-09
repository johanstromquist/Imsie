import type { Adventure } from '../../types';
import { shakespearePart1Theme, musicPlaylist } from './theme';
import { chapter1 } from './chapters/chapter-1-prologue';
import { chapter2 } from './chapters/chapter-2-romeo-juliet';
import { chapter3 } from './chapters/chapter-3-twelfth-night';
import { chapter4 } from './chapters/chapter-4-much-ado';
import { chapter5 } from './chapters/chapter-5-midsummer';
import { finalQuiz } from './quizzes/final-quiz';

/**
 * Shakespeare Part I: Love, Identity & Disguise
 *
 * An educational journey through Shakespeare's comedies and romantic tragedy,
 * serving as the PROLOGUE to the three-part Shakespeare series. This adventure
 * introduces William Shakespeare, his theater, Elizabethan England, and explores
 * foundational themes of love, identity, and disguise through four iconic plays.
 *
 * Part I of III:
 * - Part I: Love, Identity & Disguise (this adventure)
 * - Part II: Power, Ambition, Jealousy & Guilt
 * - Part III: Betrayal, Revenge, Justice & Reconciliation
 *
 * This adventure features 5 comprehensive chapters exploring Romeo and Juliet,
 * Twelfth Night, Much Ado About Nothing, and A Midsummer Night's Dream.
 */
export const shakespearePart1: Adventure = {
  id: 'shakespeare-part-1',
  slug: 'shakespeare-part-1',
  title: 'Shakespeare Part I: Love, Identity & Disguise',
  author: 'William Shakespeare',
  originalTitle: 'Selected Plays',
  description: 'Enter the world of William Shakespeare through his comedies and romantic tragedy. Explore the Globe Theatre, Elizabethan England, and timeless themes of love, identity, and disguise in Romeo and Juliet, Twelfth Night, Much Ado About Nothing, and A Midsummer Night\'s Dream. Part I of the Shakespeare series.',
  estimatedTime: 180,  // 3 hours (5 chapters)
  effort: 1.5,  // Medium difficulty
  authoringDate: 1595,  // Approximate middle of the plays covered (1594-1599)
  period: 'Renaissance (1450 - 1600)',
  coverArt: 'https://cdn.midjourney.com/cddb0c8f-d48c-4128-ab6c-d7fe7f494afa/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/89897019-6273-49d4-acd3-73d478a92083/1.mp4',

  searchKeywords: [
    'shakespeare',
    'elizabethan',
    'renaissance',
    'theater',
    'globe theatre',
    'romeo and juliet',
    'twelfth night',
    'much ado about nothing',
    'midsummer night\'s dream',
    'comedy',
    'romance',
    'love',
    'identity',
    'disguise',
    'drama',
    'elizabethan england',
    'william shakespeare',
    'english literature',
    'classic literature',
    'poetry',
  ],

  theme: shakespearePart1Theme,
  musicPlaylist,

  chapters: [
    chapter1,  // Prologue: Welcome to Shakespeare's World
    chapter2,  // Romeo and Juliet
    chapter3,  // Twelfth Night
    chapter4,  // Much Ado About Nothing
    chapter5,  // A Midsummer Night's Dream
  ],

  finalQuiz: finalQuiz
};
