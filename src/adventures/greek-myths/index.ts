import type { Adventure } from '../../types';
import { greekMythsTheme, musicPlaylist } from './theme';

// Import chapters
import { prologue } from './chapters/prologue-age-of-heroes';
import { chapter1 } from './chapters/chapter-1-perseus';
import { chapter2 } from './chapters/chapter-2-theseus';
import { chapter3 } from './chapters/chapter-3-jason';
import { chapter4 } from './chapters/chapter-4-heracles-labors';
import { chapter5 } from './chapters/chapter-5-heracles-man';
import { chapter6 } from './chapters/chapter-6-tragedy-hubris';
import { epilogue } from './chapters/epilogue-echoes';

// Import final quiz
import { finalQuiz } from './quizzes/final-quiz';

/**
 * Heroes of Greek Myth Adventure
 *
 * An 8-chapter epic journey through the legendary tales of Greek heroes:
 * Perseus, Theseus, Jason, Heracles, and tragic figures like Icarus and Orpheus.
 *
 * This adventure blends immersive heroic storytelling with literary analysis,
 * exploring how these ancient myths became the foundation for Western narratives
 * and continue to influence contemporary literature and media.
 *
 * Target Audience: Ages 16-20
 * Educational Focus: Classical literature, mythology, narrative archetypes,
 *                    comparative analysis with modern storytelling
 *
 * Visual Style: Frank Miller's 300 aesthetic - dramatic, high-contrast,
 *               graphic novel-inspired with bronze and gold accents
 */
export const greekMyths: Adventure = {
  id: 'greek-myths',
  slug: 'greek-myths',
  title: 'Heroes of Greek Myth',
  author: 'Homer, Hesiod, Apollodorus, Ovid',
  originalTitle: 'Various Greek Mythological Sources',
  description: 'Journey through the legendary tales of Perseus, Theseus, Jason, Heracles, and other mythic heroes. Discover how their stories shaped Western literature and continue to inspire contemporary narratives from Star Wars to the Marvel Universe.',
  authoringDate: -1000,  // Oral traditions from late Bronze Age/early Iron Age
  period: 'Ancient Greece & Rome (800 BCE - 476 CE)',
  searchKeywords: [
    'Greek Mythology', 'Greek Heroes', 'Greek Gods',
    'Perseus', 'Theseus', 'Jason', 'Heracles', 'Hercules',
    'Medusa', 'Minotaur', 'Golden Fleece', 'Labyrinth',
    'Zeus', 'Athena', 'Hera', 'Poseidon', 'Apollo',
    'Mount Olympus', 'Olympian Gods', 'Demi-gods',
    'Achilles', 'Trojan War', 'Odysseus', 'Homer',
    'Icarus', 'Orpheus', 'Eurydice', 'Bellerophon',
    'Hero\'s Journey', 'Joseph Campbell', 'Kleos',
    'Hubris', 'Nemesis', 'Fate', 'Prophecy',
    'Ancient Greece', 'Athens', 'Sparta', 'Delphi',
  ],
  effort: 1.2,  // Slightly more complex than Arabian Nights
  estimatedTime: 420,  // minutes (~7 hours for 8 chapters with interludes)
  coverArt: 'https://cdn.midjourney.com/cf5e25cd-b1b1-488e-abdc-4a6c8df1d1b7/0_0.png',
  coverVideo: 'https://cdn.midjourney.com/video/bc1045ff-89b6-4fc9-8c70-f8269bbe489d/0.mp4',

  theme: greekMythsTheme,
  musicPlaylist,

  chapters: [
    prologue,   // The Age of Heroes
    chapter1,   // Perseus - The Monster Slayer
    chapter2,   // Theseus - The Civilizing Hero
    chapter3,   // Jason - The Flawed Leader
    chapter4,   // Heracles Part I - The Labors
    chapter5,   // Heracles Part II - The Man Behind the Myth
    chapter6,   // Tragedy & Hubris (Icarus, Orpheus, Bellerophon)
    epilogue,   // Echoes Through Time
  ],

  finalQuiz,  // Placeholder - will be completed after all chapters are developed
};
