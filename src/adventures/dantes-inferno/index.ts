import type { Adventure } from '../../types';
import { dantesInfernoTheme, musicPlaylist } from './theme';
import { prologue } from './chapters/prologue-dark-wood';
import { chapter1 } from './chapters/chapter-1-limbo';
import { chapter2 } from './chapters/chapter-2-incontinence';
import { chapter3 } from './chapters/chapter-3-city-of-dis';
import { chapter4 } from './chapters/chapter-4-malebolge';
import { chapter5 } from './chapters/chapter-5-cocytus';
import { finalQuiz } from './quizzes/final-quiz';
import { calculateAdventureTime } from '../../utils/sceneHelpers';

const chapters = [
  prologue,      // The Dark Wood
  chapter1,      // Limbo & The Virtuous Pagans
  chapter2,      // Circles of Incontinence (II-V)
  chapter3,      // The City of Dis (VI-VII)
  chapter4,      // Fraud - Malebolge (VIII)
  chapter5,      // Treachery - Cocytus & Satan (IX)
];

/**
 * Dante's Inferno Adventure
 *
 * An educational journey through Dante Alighieri's Inferno,
 * exploring medieval literature, theology, and the historical
 * context of 14th-century Florence.
 *
 * This adventure adapts the Nine Circles of Hell into an
 * interactive learning experience combining narrative,
 * primary source analysis, and educational mini-games.
 */
export const dantesInferno: Adventure = {
  id: 'dantes-inferno',
  title: "Dante's Inferno",
  description: 'Journey through the Nine Circles of Hell with Dante and Virgil in this epic exploration of medieval literature, theology, and Renaissance Italy.',
  searchKeywords: [
    'Divine Comedy', 'Dante Alighieri', 'Virgil', 'Beatrice',
    'Hell', 'Inferno', 'Nine Circles', 'Underworld',
    'Satan', 'Devil', 'Lucifer', 'Demons',
    'Sin', 'Punishment', 'Damnation', 'Eternal',
    'Medieval', 'Italian', 'Renaissance', 'Florence',
    'Limbo', 'Lust', 'Gluttony', 'Greed', 'Wrath',
    'Heresy', 'Violence', 'Fraud', 'Treachery',
    'River Styx', 'Acheron', 'Cocytus', 'Malebolge',
    'Dark Wood', 'Journey', 'Afterlife', 'Christianity',
    'Epic Poetry', 'Allegory', 'Theology'
  ],

  effort: 1.5,
  estimatedTime: calculateAdventureTime(1.5, chapters),

  coverArt: 'https://cdn.midjourney.com/edb819f2-53f4-4130-93c9-55aae19f5762/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/dc1cb960-822e-48f8-87fa-475720dcac1a/0.mp4', // Optional

  theme: dantesInfernoTheme,
  musicPlaylist,

  chapters,

  finalQuiz,
};
