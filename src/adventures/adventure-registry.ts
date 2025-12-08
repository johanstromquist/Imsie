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
import { shakespearePart1 } from './shakespeare-part-1';
import { shakespearePart2 } from './shakespeare-part-2';

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
  shakespearePart1,
  shakespearePart2,
];

// Helper function to get adventure by ID
export const getAdventureById = (id: string): Adventure | undefined => {
  return adventures.find((adventure) => adventure.id === id);
};
