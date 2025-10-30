import type { Adventure } from '../../types';
import { theEddaTheme, musicPlaylist } from './theme';
import { chapter1 } from './chapters/chapter-1-beginning';
import { chapter2 } from './chapters/chapter-2-deeds';
import { chapter3 } from './chapters/chapter-3-wisdom';
import { chapter4 } from './chapters/chapter-4-baldr';
import { chapter5 } from './chapters/chapter-5-ragnarok';
import { chapter6 } from './chapters/chapter-6-epilogue';
import { finalQuiz } from './quizzes/final-quiz';

/**
 * The Edda by Snorri Sturluson
 *
 * An educational journey through Norse mythology following the structure
 * of the Prose Edda. Experience the creation of the cosmos, the deeds of
 * gods and giants, Odin's quest for wisdom, the tragedy of Baldr's death,
 * and the apocalyptic events of Ragnarök.
 *
 * This adventure explores Norse cosmology, mythology, and cultural values
 * through 6 comprehensive chapters featuring 79 interactive scenes.
 */
export const theEdda: Adventure = {
  id: 'the-edda',
  slug: 'the-edda',
  title: 'The Edda',
  author: 'Snorri Sturluson',
  originalTitle: 'Prose Edda',
  description: 'Journey through Norse mythology with Snorri Sturluson\'s epic tales of gods, heroes, and the nine worlds. Experience the creation of the cosmos, the heroic deeds of Thor, Odin\'s sacrifices for wisdom, the tragedy of Baldr\'s death, the apocalyptic drama of Ragnarök, and discover how these ancient myths continue to influence modern culture.',
  estimatedTime: 210,  // 3.5 hours (6 chapters)
  effort: 1.5,  // Medium difficulty
  authoringDate: 1220,  // Approximate date of composition (c. 1220 CE)
  period: 'Medieval Period (476 - 1450)',
  coverArt: 'https://cdn.midjourney.com/68d97331-ee08-48d5-b4a5-87140077e9e8/0_3.png',
  coverVideo: 'https://cdn.midjourney.com/video/d0798765-22bd-426f-a546-98ccb311f4a3/3.mp4',

  searchKeywords: [
    'norse',
    'mythology',
    'vikings',
    'scandinavian',
    'odin',
    'thor',
    'loki',
    'ragnarok',
    'yggdrasil',
    'asgard',
    'valhalla',
    'baldr',
    'fenrir',
    'nine worlds',
    'snorri sturluson',
    'iceland',
    'medieval',
    'epic',
    'cosmology',
    'creation myth',
  ],

  theme: theEddaTheme,
  musicPlaylist,

  chapters: [
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
  ],

  finalQuiz,
};
