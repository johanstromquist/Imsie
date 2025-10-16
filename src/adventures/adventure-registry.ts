import type { Adventure } from '../types';
import { arabianNights } from './arabian-nights';
import { dantesInferno } from './dantes-inferno';

// Registry of all available adventures
export const adventures: Adventure[] = [
  arabianNights,
  dantesInferno,
];

// Helper function to get adventure by ID
export const getAdventureById = (id: string): Adventure | undefined => {
  return adventures.find((adventure) => adventure.id === id);
};
