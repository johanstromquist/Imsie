import type { Adventure } from '../../types';
import { theClassicalThinkersTheme, musicPlaylist } from './theme';

// Import chapters
import { prologue } from './chapters/prologue-birth-of-philosophy';
import { chapter1 } from './chapters/chapter-1-pre-socratics';
import { chapter2 } from './chapters/chapter-2-sophists';
import { chapter3 } from './chapters/chapter-3-socrates';
import { chapter4 } from './chapters/chapter-4-plato';
import { chapter5 } from './chapters/chapter-5-aristotle';
import { chapter6 } from './chapters/chapter-6-hellenistic';
import { epilogue } from './chapters/epilogue-importance-influence';

// Import final quiz
import { finalQuiz } from './quizzes/final-quiz';

export const theClassicalThinkers: Adventure = {
  id: 'the-classical-thinkers',
  slug: 'the-classical-thinkers',
  title: 'The Classical Thinkers',
  author: 'Various (Plato, Aristotle, and other ancient sources)',
  description: 'Journey through ancient Greece to discover the philosophers who shaped Western thought, from the Pre-Socratics to the Hellenistic schools.',
  estimatedTime: 240,  // minutes (4 hours)
  effort: 1.5,  // Moderate complexity
  authoringDate: -400,  // Classical Greek period (5th-4th century BCE)
  period: 'Ancient Greece & Rome (800 BCE - 476 CE)',
  coverArt: 'https://cdn.midjourney.com/dfc9881f-9fc4-4e59-9b0f-f2b583519d79/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/09e16a11-7b1e-4845-8f0a-9b265ed4c3fd/1.mp4',

  theme: theClassicalThinkersTheme,
  musicPlaylist,

  chapters: [
    prologue,
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    epilogue,
  ],

  finalQuiz,
};
