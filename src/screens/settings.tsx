import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import BootstrapSwitchButton from "bootstrap-switch-button-react";

export const SettingsScreen = (props: any) => {
  const saveSettings = () => {};
  return (
    <div>
      <Row>
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
          <input id="chkSwitch" type="checkbox" data-toggle="switchbutton" />
          <BootstrapSwitchButton
            checked={false}
            onlabel="Admin User"
            onstyle="danger"
            offlabel="Regular User"
            offstyle="success"
            style="w-100 mx-3"
          />
        </Col>
      </Row>
    </div>
  );
};
