import React from 'react';
import logo from './logo.svg';
import './App.css';
import './styles/styles.css'
import { Timer } from "./components/timer";
import { HealthTips } from "./components/healthTips";
import { slide as Menu } from "react-burger-menu";
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div>
      <Menu>
        <a id="About" className="menu-item">About</a>
        <a id="Exercises" className="menu-item">Exercises</a>
      </Menu>
      <div className="settings-btn">
      <Button>&#9881;</Button>
      </div>
      </div>
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
