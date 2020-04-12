import React from 'react';
import cvicon from './cvicon.svg';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <a href="https://alexeyqu.github.io/AQ_CV.pdf" itemprop="sameAs">
            <img src={cvicon} alt="CV icon" />
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
