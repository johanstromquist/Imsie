import type { Adventure } from '../types';
import { arabianNights } from './arabian-nights';
import { dantesInferno } from './dantes-inferno';
import { tristanIsolde } from './tristan-isolde';
import { donQuixote } from './don-quixote';
import { theIliad } from './the-iliad';
import { theOdyssey } from './the-odyssey';
import { theClassicalThinkers } from './the-classical-thinkers';
import { greekMyths } from './greek-myths';
import { theEdda } from './the-edda';

// Registry of all available adventures
export const adventures: Adventure[] = [
  arabianNights,
  dantesInferno,
  tristanIsolde,
  donQuixote,
  theIliad,
  theOdyssey,
  theClassicalThinkers,
  greekMyths,
  theEdda,
];

// Helper function to get adventure by ID
export const getAdventureById = (id: string): Adventure | undefined => {
  return adventures.find((adventure) => adventure.id === id);
};
