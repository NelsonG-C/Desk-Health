import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'
import { Timer } from "./components/timer"

function App() {
  return (
    <div className="App">
      <div className="timer">
        <Timer/>
      </div>
    </div>
  );
}

export default App;
