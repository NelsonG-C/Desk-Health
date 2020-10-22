import React from "react";
import { Row, Col } from "react-bootstrap";


export const SettingsScreen = (props: any) => {

    const saveSettings = () => {

    }

    return (
        <div>
            <Row>
                <Col><h3>Name</h3></Col>
                <Col><h3>Duration</h3></Col>
                <Col></Col>
            </Row>
            <Row>
                <Col><p>Stand Desk</p> </Col>  
            </Row>
        </div>
    )
}