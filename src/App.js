import React from 'react';
import './App.css';

function App() {
  const games = ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'];

  return (
    <div className="app-container">
      <header className="glitch-title" data-text="Cozy Arcade">
        Cozy Arcade
      </header>

      <div className="game-icons">
        {games.map((game, index) => (
          <div key={index} className="game-icon">
            <span>{game}</span>
          </div>
        ))}
      </div>

      <footer className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: '40%' }}></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
