import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome in <code>Leave software </code>.
        </p>
        
          <Link to="/tags">tags</Link>
      </header>
    </div>
  );
}

export default App;
