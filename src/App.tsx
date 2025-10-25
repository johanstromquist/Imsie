import { Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom';
import AdventureChooser from './components/ui/AdventureChooser';
import AdventurePlayer from './components/adventure-engine/AdventurePlayer';
import { adventures } from './adventures/adventure-registry';

function AdventureRoute() {
  const { adventureSlug } = useParams();
  const navigate = useNavigate();

  const adventure = adventures.find(a => a.slug === adventureSlug);

  if (!adventure) {
    return <Navigate to="/" replace />;
  }

  return <AdventurePlayer adventure={adventure} onExit={() => navigate('/')} />;
}

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AdventureChooser />} />
        <Route path="/:adventureSlug" element={<AdventureRoute />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

export default App;
