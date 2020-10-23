import React, { useState } from "react";
import { Timer } from "../components/timer";
import { HealthTips } from "../components/healthTips";
import { SettingsScreen } from "../screens/settings";
import { slide as Menu } from "react-burger-menu";
import { Button, Modal } from "react-bootstrap";

export const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
      <div>
        <Menu>
          <a id="About" className="menu-item" href="/">
            About
          </a>
          <a id="Exercises" className="menu-item" href="/">
            Exercises
          </a>
        </Menu>
        <Modal show={show} onHide={handleClose}>
          <SettingsScreen />
        </Modal>
        <div className="settings-btn">
          <Button onClick={handleShow}>&#9881;</Button>
        </div>
      </div>
      <div className="timer">
        <Timer />
      </div>
      <div>
        <HealthTips />
      </div>
    </div>
  );
};
