// Import all custom mini-games to ensure they register themselves
import './MemoryMatchGame';
import './RhythmGame';
import './GalleryGame';
import './SpectrumGame';

// Re-export registry for convenience
export { customGameRegistry } from '../customGameRegistry';
