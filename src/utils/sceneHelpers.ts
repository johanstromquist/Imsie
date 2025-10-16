/**
 * Shared helper utilities for scene components
 * Used across multiple scene types for common operations
 */

/**
 * Shuffles an array using the Fisher-Yates algorithm
 * @param array - The array to shuffle
 * @returns A new shuffled array (does not modify original)
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

/**
 * Calculates a percentage score
 * @param correct - Number of correct answers
 * @param total - Total number of items
 * @returns Percentage rounded to nearest integer
 */
export const calculateScore = (correct: number, total: number): number => {
  if (total === 0) return 0;
  return Math.round((correct / total) * 100);
};

/**
 * Checks if two arrays are equal (shallow comparison)
 * @param a - First array
 * @param b - Second array
 * @returns True if arrays have same length and same elements in same order
 */
export const arraysEqual = <T>(a: T[], b: T[]): boolean => {
  if (a.length !== b.length) return false;
  return a.every((val, index) => val === b[index]);
};

/**
 * Normalizes a string for comparison (lowercase, trimmed)
 * @param str - String to normalize
 * @returns Normalized string
 */
export const normalizeString = (str: string): string => {
  return str.toLowerCase().trim();
};

/**
 * Checks if two strings are equal (case-insensitive, trimmed)
 * @param a - First string
 * @param b - Second string
 * @returns True if strings are equal after normalization
 */
export const stringsEqualIgnoreCase = (a: string, b: string): boolean => {
  return normalizeString(a) === normalizeString(b);
};

/**
 * Formats a time duration in seconds to MM:SS format
 * @param seconds - Time in seconds
 * @returns Formatted time string (e.g., "05:30")
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
};

/**
 * Gets a random subset of items from an array
 * @param array - Source array
 * @param count - Number of items to select
 * @returns Array of randomly selected items (no duplicates)
 */
export const getRandomItems = <T>(array: T[], count: number): T[] => {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, Math.min(count, array.length));
};

/**
 * Removes duplicates from an array
 * @param array - Array with potential duplicates
 * @returns Array with unique items only
 */
export const uniqueArray = <T>(array: T[]): T[] => {
  return [...new Set(array)];
};

/**
 * Checks if a score passes a threshold
 * @param score - Score percentage (0-100)
 * @param threshold - Required threshold percentage (0-100)
 * @returns True if score meets or exceeds threshold
 */
export const passesThreshold = (score: number, threshold: number): boolean => {
  return score >= threshold;
};

/**
 * Gets a color based on score performance
 * @param score - Score percentage (0-100)
 * @returns Color string (green, yellow, or red)
 */
export const getScoreColor = (score: number): string => {
  if (score >= 80) return '#4ade80'; // green
  if (score >= 60) return '#fbbf24'; // yellow
  return '#ef4444'; // red
};

/**
 * Validates that all required items in a list are selected
 * @param required - Array of required item IDs
 * @param selected - Set of selected item IDs
 * @returns True if all required items are selected
 */
export const allRequiredSelected = (required: string[], selected: Set<string>): boolean => {
  return required.every(id => selected.has(id));
};

/**
 * Generates letter labels for multiple choice options (A, B, C, D, ...)
 * @param index - Zero-based index
 * @returns Letter label (A-Z)
 */
export const getLetterLabel = (index: number): string => {
  return String.fromCharCode(65 + index);
};

/**
 * Splits text into paragraphs (double newline separated)
 * @param text - Text content with paragraph breaks
 * @returns Array of paragraph strings
 */
export const splitIntoParagraphs = (text: string): string[] => {
  return text.split('\n\n').filter(p => p.trim().length > 0);
};
