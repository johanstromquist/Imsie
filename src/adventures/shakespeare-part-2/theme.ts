import type { AdventureTheme } from '../../types';

/**
 * Shakespeare Part II: Power, Ambition, Jealousy & Guilt - Theme
 *
 * Visual Style: Dark Renaissance/Jacobean Tragedy Aesthetic
 * - Deep shadows and dramatic chiaroscuro lighting
 * - Rich, foreboding color palette emphasizing psychological darkness
 * - Theatrical and operatic visual language
 * - Emphasis on internal corruption and moral decay
 *
 * Color Palette:
 * - Primary: Deep crimson-black (#1A0000) - blood, guilt, darkness
 * - Secondary: Tarnished gold (#8B6914) - corrupted power, false glory
 * - Accent: Deep royal purple (#2E0854) - royalty, madness, tragic nobility
 *
 * This is the DARKEST section of the Shakespeare trilogy, focusing on:
 * - Internal psychological corruption (vs. external betrayal in Part III)
 * - The destructive nature of ambition and jealousy
 * - Guilt, madness, and the collapse of moral order
 * - Power that corrupts from within
 *
 * Font selection reflects Renaissance tragedy with dramatic gravitas.
 */
export const shakespearePart2Theme: AdventureTheme = {
  primaryColor: '#1A0000',        // Deep crimson-black (blood, guilt, shadows)
  secondaryColor: '#8B6914',      // Tarnished gold (corrupted power, false glory)
  fontFamily: '"Cormorant Garamond", "Cinzel", serif',  // Elegant Renaissance font with dramatic weight
  backgroundMusic: '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Tragic Power.mp3',
};

/**
 * Music Playlist
 *
 * Dark orchestral with Renaissance instrumentation
 * Emphasizes psychological tension, tragic inevitability, and moral collapse
 *
 * Three thematic movements (multiple variations each):
 * - Tragic Power: Dark, brooding themes of ambition and corruption
 * - Jealous Madness: Psychological tension, paranoia, mental unraveling
 * - Guilty Descent: Somber, remorseful themes of consequence and doom
 *
 * Musical style evokes:
 * - Renaissance/Baroque tragedy (lute, harpsichord, strings)
 * - Operatic drama (vocals echoing tragic choruses)
 * - Modern cinematic darkness (deep orchestral layers)
 *
 * Playlist designed for extended tragic narrative sessions (30-45 minutes per chapter).
 * Deliberately darker and more oppressive than Part I's romantic/comedic themes.
 */
export const musicPlaylist = [
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Tragic Power.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Jealous Madness.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Guilty Descent.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Tragic Power-2.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Jealous Madness-2.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Guilty Descent-2.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Tragic Power-3.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Jealous Madness-3.mp3',
  '/Imsie/assets/shakespeare-part-2/music/Shakespeare Part 2 - Guilty Descent-3.mp3',
];
