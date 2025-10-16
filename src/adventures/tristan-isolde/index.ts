import type { Adventure } from '../../types';
import { tristanIsoldeTheme, musicPlaylist } from './theme';
import { chapter1 } from './chapters/chapter-1-hero-origins';
import { chapter2 } from './chapters/chapter-2-fateful-potion';
import { chapter3 } from './chapters/chapter-3-secret-love';
import { chapter4 } from './chapters/chapter-4-exile-second-isolde';
import { chapter5 } from './chapters/chapter-5-tragic-end';
import { finalQuiz } from './quizzes/final-quiz';

/**
 * Tristan & Isolde: A Tale of Forbidden Love
 *
 * An interactive educational adventure exploring one of the greatest
 * medieval romances. Students will journey through the tragic love story
 * of Tristan and Isolde, learning about courtly love traditions, Celtic
 * mythology, and the literary techniques that made this tale endure for
 * centuries.
 *
 * Educational Focus:
 * - Medieval literature and Arthurian romance
 * - Courtly love tradition
 * - Tragic narrative structure
 * - Celtic cultural heritage
 * - Literary symbolism and motifs
 *
 * Recommended for: High school students (16-20 years old)
 * Duration: 4-5 hours across 5 chapters
 */

export const tristanIsolde: Adventure = {
  id: 'tristan-isolde',
  title: 'Tristan & Isolde: A Tale of Forbidden Love',

  description:
    'Experience the legendary medieval romance of Tristan and Isolde--a tale of forbidden love, ' +
    'duty versus desire, and tragic destiny. Explore Celtic traditions, courtly love, and the ' +
    'timeless themes that have captivated audiences for nearly a millennium.',

  // Estimated time: 4-5 hours total
  // Chapter 1: 35 min, Chapter 2: 40 min, Chapter 3: 45 min,
  // Chapter 4: 40 min, Chapter 5: 40 min, Final Quiz: 25 min
  estimatedTime: 265, // minutes (4 hours 25 minutes)

  coverArt: 'https://cdn.midjourney.com/36168fda-a608-42de-ab6f-e9e4a4284957/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/0fd26d2a-dbe9-4def-88ef-8115033f44f6/3.mp4',

  theme: tristanIsoldeTheme,
  musicPlaylist,

  chapters: [
    chapter1, // The Hero's Origins
    chapter2, // The Fateful Potion
    chapter3, // Secret Love and Discovery
    chapter4, // Exile and the Second Isolde
    chapter5, // The Tragic End
  ],

  finalQuiz,

  /**
   * Learning Objectives (Adventure-wide):
   *
   * 1. Understand the courtly love tradition and its influence on medieval literature
   * 2. Analyze the conflict between duty and desire as a central medieval theme
   * 3. Recognize tragic narrative structure and how inevitability creates dramatic tension
   * 4. Explore Celtic and Arthurian literary traditions and their cultural significance
   * 5. Examine the role of fate versus free will in medieval storytelling
   */
};
