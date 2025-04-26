import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Level1 from './components/Level1/Level1';
import Level2 from './components/Level2/Level2';
import Level3 from './components/Level3/Level3';
import Level4 from './components/Level4/Level4';
import Level5 from './components/Level5/Level5';


function App() {
  const levels = [
    { name: 'Level 1', path: '/level1' },
    { name: 'Level 2', path: '/level2' },
    { name: 'Level 3', path: '/level3' },
    { name: 'Level 4', path: '/level4' },
    { name: 'Level 5', path: '/level5' },
  ];

  return (
    <div className="app-container">
      <header className="glitch-title" data-text="Cozy Arcade">
        Cozy Arcade
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <div className="game-icons">
              {levels.map((level, index) => (
                <Link key={index} to={level.path} className="game-icon">
                  <span>{level.name}</span>
                </Link>
              ))}
            </div>
          }
        />

        <Route path="/level1" element={<Level1 />} />
        <Route path="/level2" element={<Level2 />} />
        <Route path="/level3" element={<Level3 />} />
        <Route path="/level4" element={<Level4 />} />
        <Route path="/level5" element={<Level5 />} />
      </Routes>

      <footer className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '0%' }}></div>
        </div>
      </footer>
    </div>
  );
}

export default App;