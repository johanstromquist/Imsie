import type { AdventureTheme } from '../../types';

export const theOdysseyTheme: AdventureTheme = {
  primaryColor: '#1a0f0a',      // Deep bronze-black (Frank Miller 300 style)
  secondaryColor: '#c4793b',     // Burnished bronze/copper
  fontFamily: '"Cinzel", serif', // Classical, bold serif font
  backgroundMusic: '/Imsie/assets/the-odyssey/music/The Odyssey_ Hero\'s Journey.mp3',
};

// Main theme tracks (Hero's Journey) - Epic orchestral with Mediterranean instruments
export const mainThemeTracks = [
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Hero\'s Journey.mp3',
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Hero\'s Journey-2.mp3',
];

// Battle theme tracks (Primal) - Intense percussive battle music
export const battleThemeTracks = [
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Primal.mp3',
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Primal-2.mp3',
];

// Journey theme tracks (On the Waves) - Contemplative traveling music
export const journeyThemeTracks = [
  '/Imsie/assets/the-odyssey/music/The Odyssey_ On the Waves.mp3',
  '/Imsie/assets/the-odyssey/music/The Odyssey_ On the Waves-2.mp3',
  '/Imsie/assets/the-odyssey/music/The Odyssey_ On the Waves-3.mp3',
];

// Homecoming theme tracks (Return of a Hero) - Emotional reunion theme
export const homecomingThemeTracks = [
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Return of a Hero.mp3',
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Return of a Hero-2.mp3',
  '/Imsie/assets/the-odyssey/music/The Odyssey_ Return of a Hero-3.mp3',
];

// Complete playlist with all tracks
export const musicPlaylist = [
  ...mainThemeTracks,
  ...battleThemeTracks,
  ...journeyThemeTracks,
  ...homecomingThemeTracks,
];
