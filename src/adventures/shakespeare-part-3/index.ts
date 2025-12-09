import type { Adventure } from '../../types';
import { shakespearePart3Theme, musicPlaylist } from './theme';
import { chapter1Hamlet } from './chapters/chapter-1-hamlet';
import { chapter2JuliusCaesar } from './chapters/chapter-2-julius-caesar';
import { chapter3Tempest } from './chapters/chapter-3-tempest';
import { chapter4Epilogue } from './chapters/chapter-4-epilogue';
import { finalQuiz } from './quizzes/final-quiz';

export const shakespearePart3: Adventure = {
  id: 'shakespeare-part-3',
  slug: 'shakespeare-part-3',
  title: 'Shakespeare Part III: Betrayal, Revenge, Justice & Reconciliation',
  author: 'William Shakespeare',
  originalTitle: 'Selected Plays (Hamlet, Julius Caesar, The Tempest)',
  description:
    'The epic conclusion to the Shakespeare trilogy. Experience Hamlet\'s philosophical revenge, Julius Caesar\'s political betrayal, and The Tempest\'s magical reconciliation. From darkness to forgiveness, this is Shakespeare\'s final synthesis.',
  estimatedTime: 300, // 5 hours total (60-75 min per chapter + epilogue)
  effort: 1.8, // Higher difficulty - complex philosophical themes
  authoringDate: 1611, // The Tempest's approximate date
  period: 'Early Modern (1600 - 1800)',
  coverArt: '/assets/shakespeare-part-3/cover.png',

  theme: shakespearePart3Theme,
  musicPlaylist,

  chapters: [
    chapter1Hamlet,
    chapter2JuliusCaesar,
    chapter3Tempest,
    chapter4Epilogue,
  ],

  finalQuiz: finalQuiz,
};
