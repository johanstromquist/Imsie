import { useState } from 'react';
import type { Adventure } from './types';
import AdventureChooser from './components/ui/AdventureChooser';
import AdventurePlayer from './components/adventure-engine/AdventurePlayer';

function App() {
  const [currentAdventure, setCurrentAdventure] = useState<Adventure | null>(null);

  const handleAdventureSelect = (adventure: Adventure) => {
    setCurrentAdventure(adventure);
  };

  const handleAdventureExit = () => {
    setCurrentAdventure(null);
  };

  return (
    <div className="app">
      {currentAdventure ? (
        <AdventurePlayer adventure={currentAdventure} onExit={handleAdventureExit} />
      ) : (
        <AdventureChooser onAdventureSelect={handleAdventureSelect} />
      )}
    </div>
  );
}

export default App;
