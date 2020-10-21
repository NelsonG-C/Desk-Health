import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'
import { Timer } from "./components/timer";
import { HealthTips } from "./components/healthTips";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="timer">
        <Timer/>
        </div>
        <div>
        <HealthTips/>
      </div>
    </div>
  );
}

export default App;
