import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Editor from './pages/Editor';
import Viewer from './pages/Viewer';
import './index.css';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="/view/:docId" element={<Viewer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
