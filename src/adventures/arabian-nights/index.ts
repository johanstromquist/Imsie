import type { Adventure } from '../../types';
import { chapter1 } from './chapters/chapter-1-scheherazade';
import { chapter2 } from './chapters/chapter-2-merchant';
import { chapter3 } from './chapters/chapter-3-aladdin';
import { chapter4 } from './chapters/chapter-4-ali-baba';
import { chapter5 } from './chapters/chapter-5-sinbad';
import { finalQuiz } from './quizzes/final-quiz';

export const arabianNights: Adventure = {
  id: 'arabian-nights',
  title: 'Tales from the Arabian Nights',
  description: 'Journey through the legendary stories of Scheherazade, exploring the rich tapestry of Middle Eastern folklore, culture, and wisdom.',
  estimatedTime: 35,
  coverArt: 'https://cdn.midjourney.com/7f87418a-b7df-4ae3-bf22-10f51023d75d/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/6a157fbc-21d2-4c3c-8904-ce38f0114ab5/2.mp4',
  theme: {
    primaryColor: '#1a0f2e',
    secondaryColor: '#d4af37',
    fontFamily: '"Crimson Text", serif',
    backgroundMusic: '/Imsie/assets/arabian-nights/music/Arabian%20Nights.mp3',
  },
  musicPlaylist: [
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights.mp3',
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights-2.mp3',
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights-3.mp3',
    '/Imsie/assets/arabian-nights/music/Arabian%20Nights-4.mp3',
  ],
  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
  ],
  finalQuiz,
};
