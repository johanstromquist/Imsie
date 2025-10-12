import type { Adventure } from '../types';
import { arabianNights } from './arabian-nights';

// Registry of all available adventures
export const adventures: Adventure[] = [
  arabianNights,
  // Add more adventures here as they're created
  // dantesInferno,
];

// Helper function to get adventure by ID
export const getAdventureById = (id: string): Adventure | undefined => {
  return adventures.find((adventure) => adventure.id === id);
};
