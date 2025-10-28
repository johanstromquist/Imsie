import type { AdventureTheme } from '../../types';

/**
 * Heroes of Greek Myth - Adventure Theme
 *
 * Visual Style: Frank Miller's 300 aesthetic
 * - High-contrast dramatic lighting with stark black shadows
 * - Bronze and gold accents emphasizing heroic elements
 * - Graphic novel aesthetic for epic, visceral storytelling
 *
 * Color Palette:
 * - Primary: Deep shadow black/bronze (#1A0F2E) - backgrounds, dramatic shadows
 * - Secondary: Bronze/copper (#CD7F32) - armor, heroic elements, UI accents
 * - Accent: Rich gold (#FFD700) - divine elements, glory, triumph
 *
 * The palette evokes ancient Greek bronze armor, Mediterranean sunlight,
 * and the timeless quality of classical mythology rendered in bold,
 * dramatic graphic novel style.
 */
export const greekMythsTheme: AdventureTheme = {
  primaryColor: '#1A0F2E',      // Deep shadow black (backgrounds, dramatic shadows)
  secondaryColor: '#CD7F32',    // Bronze (Greek armor, heroic UI elements)
  fontFamily: '"Cinzel", "Trajan Pro", serif', // Classical inscription-style font
  backgroundMusic: '/Imsie/assets/greek-myths/music/Greek Myths - Heroic Journey .mp3',
};

/**
 * Music Playlist
 *
 * Epic orchestral with ancient Greek instrumentation
 * to evoke the heroic age of myth and legend
 *
 * 15 tracks across 4 themes, randomized order for variety:
 * - Heroic Journey (4 versions): Epic heroic adventures
 * - Tragic Fate (3 versions): Somber, tragic moments
 * - Olympian Power (4 versions): Divine, majestic themes
 * - Mediterranean Adventure (4 versions): Upbeat, adventurous
 */
export const musicPlaylist = [
  '/Imsie/assets/greek-myths/music/Greek Myths - Heroic Journey -3.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Mediterranean Adventure-2.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Olympian Power.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Tragic Fate-2.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Heroic Journey .mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Mediterranean Adventure.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Olympian Power-3.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Heroic Journey -2.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Tragic Fate-3.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Mediterranean Adventure-4.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Olympian Power-2.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Heroic Journey -4.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Tragic Fate.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Mediterranean Adventure-3.mp3',
  '/Imsie/assets/greek-myths/music/Greek Myths - Olympian Power-4.mp3',
];
