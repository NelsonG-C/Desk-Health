import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export const SettingsScreen = (props: any) => {
  const saveSettings = () => {};
  return (
    <div>
      <Row className="settings-titles">
        <Col>
          <h3>Name</h3>
        </Col>
        <Col>
          <h3>Duration</h3>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <p>Stand Desk</p>{" "}
        </Col>
        <Col>
          <input type="text"></input>
        </Col>
        <Col>
          <BootstrapSwitchButton
            checked={false}
            onlabel="On"
            onstyle="danger"
            offlabel="Off"
            offstyle="success"
            style="w-50 mx-3"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Work Break</p>
        </Col>
        <Col>
          <input type="text"></input>
        </Col>
        <Col>
          <BootstrapSwitchButton
            checked={false}
            onlabel="On"
            onstyle="danger"
            offlabel="Off"
            offstyle="success"
            style="w-50 mx-3"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Eye Break</p>
        </Col>
        <Col>
          <input type="text"></input>
        </Col>
        <Col>
          <BootstrapSwitchButton
            checked={false}
            onlabel="On"
            onstyle="danger"
            offlabel="Off"
            offstyle="success"
            style="w-50 mx-3"
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Work Day Settings</h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Day Start Time</h3>
        </Col>
        <Col>
          <input type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Day End Time</h3>
        </Col>
        <Col>
          <input type="text" />
        </Col>
      </Row>
      <Row>
        <Col>
          <h3>Main work break</h3>
        </Col>
        <Col>
          <input type="text" />
        </Col>
      </Row>
    </div>
  );
};
