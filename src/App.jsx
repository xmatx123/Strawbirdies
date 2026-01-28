import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lobby from './pages/Lobby';
// Placeholder for Game page
import Game from './pages/Game';
import TidalCallback from './pages/TidalCallback';
import TidalDemo from './pages/TidalDemo';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lobby/:roomId" element={<Lobby />} />
      <Route path="/game/:roomId" element={<Game />} />
      <Route path="/tidal-callback" element={<TidalCallback />} />
      <Route path="/tidal-demo" element={<TidalDemo />} />
    </Routes>
  );
}

export default App;
