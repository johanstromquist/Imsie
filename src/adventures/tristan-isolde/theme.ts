import type { AdventureTheme } from '../../types';

/**
 * Tristan & Isolde Adventure Theme
 *
 * Visual Style: Medieval manuscript illumination meets Pre-Raphaelite romanticism
 * Color Palette: Deep forest greens, royal blues, antique gold
 * Typography: Cinzel - formal medieval aesthetic
 */

export const tristanIsoldeTheme: AdventureTheme = {
  // Deep forest green - primary color representing Celtic nature
  primaryColor: '#1a4d2e',

  // Antique gold - secondary color representing courtly romance and nobility
  secondaryColor: '#c9a961',

  // Cinzel - elegant serif with medieval manuscript feel
  fontFamily: '"Cinzel", serif',

  // Background music - Celtic romantic theme
  backgroundMusic: "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Celtic Theme.mp3",
};

/**
 * Music Playlist
 *
 * Multiple tracks to vary mood across the adventure:
 * - Celtic theme (2 variations): Main romantic/mysterious theme for early chapters
 * - Court life (2 variations): Noble, formal atmosphere for court scenes
 * - Tragic theme (4 variations): Melancholic for final chapters and sorrowful moments
 *
 * Track Assignment Suggestion:
 * - Celtic Theme: Chapters 1-2 (Hero's Origins & Fateful Potion)
 * - Court Life: Chapter 3 (Secret Love & Discovery)
 * - Tragic Theme: Chapters 4-5 (Exile & The Tragic End)
 */
export const musicPlaylist = [
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Celtic Theme.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Celtic Theme-2.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Court Life.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Court Life-2.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Tragedy.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Tragedy-2.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Tragedy-3.mp3",
  "/Imsie/assets/tristan-isolde/music/Tristan & Isolde_ Tragedy-4.mp3",
];

/**
 * Color Palette Reference
 *
 * For consistent styling across custom components:
 *
 * Primary Colors:
 * - Forest Green: #1a4d2e (main theme color)
 * - Royal Blue: #1f3a5f (alternative primary for variety)
 *
 * Secondary Colors:
 * - Antique Gold: #c9a961 (accents, highlights)
 * - Deep Red: #7a2828 (passion, danger)
 *
 * Neutral Colors:
 * - Cream: #f4e8d0 (backgrounds, text areas)
 * - Silver: #b8c5d6 (borders, subtle accents)
 */
