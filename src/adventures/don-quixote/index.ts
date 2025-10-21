import type { Adventure } from '../../types';
import { donQuixoteTheme, musicPlaylist } from './theme';
import { chapter1 } from './chapters/chapter-1-knight-errant';
import { chapter2 } from './chapters/chapter-2-windmills-reality';
import { chapter3 } from './chapters/chapter-3-dulcinea-idealism';
import { chapter4 } from './chapters/chapter-4-sanchos-wisdom';
import { chapter5 } from './chapters/chapter-5-final-journey';
import { finalQuiz } from './quizzes/final-quiz';
import { calculateAdventureTime } from '../../utils/sceneHelpers';

const chapters = [
  chapter1,
  chapter2,
  chapter3,
  chapter4,
  chapter5,
];

export const donQuixote: Adventure = {
  id: 'don-quixote',
  title: 'Don Quixote',
  author: 'Miguel de Cervantes',
  originalTitle: 'El ingenioso hidalgo don Quijote de la Mancha',
  description: 'Journey through the adventures of the ingenious nobleman Don Quixote de la Mancha as he tilts at windmills and pursues chivalric ideals in Golden Age Spain.',
  authoringDate: 1605,
  period: 'Early Modern (1600 - 1800)',
  searchKeywords: [
    'Cervantes', 'Miguel de Cervantes', 'Don Quijote',
    'Sancho Panza', 'Dulcinea', 'Rocinante', 'Dapple',
    'La Mancha', 'Spain', 'Spanish', 'Golden Age',
    'Windmills', 'Giants', 'Tilting at Windmills',
    'Knight', 'Knight Errant', 'Chivalry', 'Armor',
    'Idealism', 'Realism', 'Delusion', 'Madness',
    'Adventure', 'Quest', 'Honor', 'Nobility',
    'Squire', 'Donkey', 'Horse', 'Inn',
    'Satire', 'Parody', 'Comedy', 'Humor',
    'Reality vs Illusion', 'Dreams', 'Fantasy',
    'Renaissance', 'Literature', 'Novel'
  ],
  effort: 1.0,
  estimatedTime: calculateAdventureTime(1.0, chapters),
  coverArt: 'https://cdn.midjourney.com/02b7eff8-bb30-478a-a1da-71e408713e79/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/eca5aad4-008e-45ff-b745-13d32cad90a9/0.mp4',

  theme: donQuixoteTheme,
  musicPlaylist,

  chapters,

  finalQuiz
};
