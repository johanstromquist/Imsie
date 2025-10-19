import type { AdventureTheme } from '../../types';

/**
 * The Iliad Adventure Theme
 *
 * Visual Style: Frank Miller's 300 aesthetic - high contrast black and bronze,
 * dramatic shadows, stylized violence, graphic novel composition
 *
 * Color palette inspired by ancient Greek pottery (black-figure and red-figure),
 * bronze armor, and the dark, brutal realism of 300's visual style
 */
export const theIliadTheme: AdventureTheme = {
  primaryColor: '#1a0f0a',      // Deep bronze-black (300's dark aesthetic, shadows, backgrounds)
  secondaryColor: '#c9a961',     // Spartan gold/bronze (armor, highlights, divine light)
  fontFamily: '"Cinzel", serif', // Classical Roman-inspired font (formal, epic, monumental)
  backgroundMusic: '/Imsie/assets/the-iliad/music/The Iliad_ The Wrath.mp3', // Main theme for the adventure
};

/**
 * Music Tracks by Theme
 *
 * All tracks are available in multiple variations to provide variety
 * throughout the adventure while maintaining thematic consistency.
 */

// Chapter 1: The Wrath (Opening, establishing Achilles' rage)
export const wrathThemes = [
  '/Imsie/assets/the-iliad/music/The Iliad_ The Wrath.mp3',
  '/Imsie/assets/the-iliad/music/The Iliad_ The Wrath-2.mp3',
  '/Imsie/assets/the-iliad/music/The Iliad_ The Wrath-3.mp3',
];

// Chapters 2 & 4: Bronze and Blood (Battle scenes, combat, aristeia)
export const battleThemes = [
  '/Imsie/assets/the-iliad/music/The Iliad_ Bronze and Blood.mp3',
  '/Imsie/assets/the-iliad/music/The Iliad_ Bronze and Blood-2.mp3',
];

// Chapter 3: Grief of Heroes (Patroclus's death, mourning, emotional scenes)
export const griefThemes = [
  '/Imsie/assets/the-iliad/music/The Iliad_ Grief of Heroes.mp3',
  '/Imsie/assets/the-iliad/music/The Iliad_ Grief of Heroes-2.mp3',
];

// Divine intervention, fate, gods (can be used across all chapters)
export const divineThemes = [
  '/Imsie/assets/the-iliad/music/The Iliad_ Will of Olympus.mp3',
  '/Imsie/assets/the-iliad/music/The Iliad_ Will of Olympus-2.mp3',
  '/Imsie/assets/the-iliad/music/The Iliad_ Will of Olympus-3.mp3',
];

/**
 * Complete Music Playlist (all tracks)
 * Can be used for random selection or chapter-specific assignment
 */
export const musicPlaylist = [
  ...wrathThemes,
  ...battleThemes,
  ...griefThemes,
  ...divineThemes,
];

/**
 * Recommended Chapter Music Assignment
 *
 * To assign music to specific chapters, add backgroundMusic to individual scenes
 * in the chapter files, or set it at the chapter level if supported.
 *
 * Suggested assignments:
 *
 * Chapter 1 (The Wrath): Use wrathThemes
 *   - Scenes 1-3: wrathThemes[0] (main theme)
 *   - Scenes 4-6: wrathThemes[1] (variation)
 *   - Scenes 7+: wrathThemes[2] or divineThemes[0] (for divine scenes)
 *
 * Chapter 2 (The Duel of Paris & Menelaus): Use battleThemes or divineThemes
 *   - Battle scenes: battleThemes[0]
 *   - Quieter moments: divineThemes[1]
 *
 * Chapter 3 (The Death of Patroclus): Use griefThemes
 *   - Early scenes: battleThemes[1] (Patroclus fighting)
 *   - Death scene: griefThemes[0]
 *   - Mourning scenes: griefThemes[1]
 *
 * Chapter 4 (Achilles Unleashed): Use battleThemes and divineThemes
 *   - Armor forging: divineThemes[2]
 *   - Battle rampage: battleThemes[0] or battleThemes[1]
 *
 * Chapter 5 (Hector's Death): Mix of all themes
 *   - Duel preparation: wrathThemes[1]
 *   - The duel: battleThemes[0]
 *   - Priam's plea: griefThemes[1]
 *   - Resolution: divineThemes[0]
 */
