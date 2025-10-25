import type { Adventure } from '../../types';
import { theIliadTheme, musicPlaylist } from './theme';

// Import chapters
import { chapter0 } from './chapters/chapter-0-prologue';
import { chapter1 } from './chapters/chapter-1-wrath';
import { chapter2 } from './chapters/chapter-2-hector';
import { chapter3 } from './chapters/chapter-3-patroclus';
import { chapter4 } from './chapters/chapter-4-achilles-unleashed';
import { chapter5 } from './chapters/chapter-5-hectors-death';
import { epilogue } from './chapters/chapter-6-epilogue';

// Import final quiz
import { finalQuiz } from './quizzes/final-quiz';

/**
 * The Iliad Adventure
 *
 * Homer's epic tale of the Trojan War. Experience the rage of Achilles,
 * the tragedy of Hector, and the brutal glory of ancient Greek warfare
 * in this timeless story of heroism, honor, and the devastating human
 * cost of war.
 *
 * Structure:
 * - Chapter 0: Prologue - Before the Wrath (optional context, 25-30 min)
 * - Chapter 1: The Wrath of Achilles (35-40 min)
 * - Chapter 2: Hector and the Trojan Defense (40-45 min)
 * - Chapter 3: The Death of Patroclus (45-50 min)
 * - Chapter 4: The Rage of Achilles Unleashed (45-50 min)
 * - Chapter 5: Hector's Death and Priam's Plea (40-45 min)
 * - Epilogue: The Fall of Troy (20-25 min) - covers events after the Iliad ends
 * - Final Quiz (25-30 min)
 *
 * Total Duration: ~5 hours (7 chapters including optional prologue)
 */
export const theIliad: Adventure = {
  id: 'the-iliad',
  slug: 'the-iliad',
  title: 'The Iliad',
  author: 'Homer',
  originalTitle: 'Ἰλιάς (Iliás)',
  description: 'Experience Homer\'s epic tale of the Trojan War. Witness the rage of Achilles, the tragedy of Hector, and the devastating human cost of glory in ancient Greece\'s greatest story.',
  authoringDate: -750,  // Approximate date, around 8th century BCE
  period: 'Ancient Greece & Rome (800 BCE - 476 CE)',
  estimatedTime: 300,  // minutes (5 hours including optional prologue and epilogue)
  coverArt: 'https://cdn.midjourney.com/1bc0db5f-60b0-4b1c-9b11-d8700c9a672d/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/a5e48034-422d-4bd3-8519-3fc88f5e5996/3.mp4',

  searchKeywords: [
    // Author and work
    'Homer', 'Greek Epic', 'Ancient Greece',

    // Main characters
    'Achilles', 'Hector', 'Agamemnon', 'Patroclus', 'Priam',
    'Helen', 'Paris', 'Menelaus', 'Ajax', 'Odysseus',

    // Gods
    'Zeus', 'Apollo', 'Athena', 'Thetis', 'Hera', 'Aphrodite',

    // Places
    'Troy', 'Trojan War', 'Greece', 'Mount Olympus', 'Sparta',

    // Themes and elements
    'War', 'Epic', 'Hero', 'Tragedy', 'Wrath', 'Rage', 'Glory',
    'Honor', 'Fate', 'Revenge', 'Grief', 'Heroism', 'Battle',

    // Famous elements
    'Trojan Horse', 'Helen of Troy', 'Face that Launched a Thousand Ships',
    'Shield of Achilles', 'Achilles Heel', 'Myrmidons',

    // Era and style
    'Bronze Age', 'Ancient Epic', 'Classical Literature',
  ],

  effort: 1.5,  // Higher effort due to complex themes and longer chapters

  theme: theIliadTheme,
  musicPlaylist,

  chapters: [
    chapter0,  // Optional prologue
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    epilogue,  // Covers Achilles' death, Trojan Horse, and Troy's fall
  ],

  finalQuiz,
};
