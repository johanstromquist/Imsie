import type { Adventure } from '../../types';
import { theOdysseyTheme, musicPlaylist } from './theme';

// Import all chapters
import { prologue } from './chapters/prologue-fall-of-troy';
import { chapter1 } from './chapters/chapter-1-lotus-cyclops';
import { chapter2 } from './chapters/chapter-2-circe-underworld';
import { chapter3 } from './chapters/chapter-3-sirens-scylla';
import { chapter4 } from './chapters/chapter-4-helios-calypso';
import { chapter5 } from './chapters/chapter-5-homecoming';
import { epilogue } from './chapters/epilogue-hero-legacy';

// Import final quiz
import { finalQuiz } from './quizzes/final-quiz';

// Import custom mini-games to trigger registration
import '../../components/mini-games/custom/RhythmGame';

export const theOdyssey: Adventure = {
  id: 'the-odyssey',
  title: 'The Odyssey',
  author: 'Homer',
  originalTitle: 'Ὀδύσσεια (Odýsseia)',
  description: 'Journey with Odysseus through epic trials and tribulations as he struggles to return home after the Trojan War.',
  authoringDate: -700,  // Approximate date (8th century BCE)
  period: 'Ancient Greece & Rome (800 BCE - 476 CE)',
  estimatedTime: 240,  // minutes (4 hours for 7 chapters)
  effort: 1.6,  // Complexity level (1.0 - 2.0) - Epic poetry with complex themes
  coverArt: 'https://cdn.midjourney.com/9c23e637-ee2d-45fa-81d4-fe799c6d05b6/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/7cf579f7-7be9-48bb-81c5-d4ffc27dd799/0.mp4',

  theme: theOdysseyTheme,
  musicPlaylist,

  chapters: [
    prologue,
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    epilogue,
  ],

  finalQuiz: finalQuiz,
};
