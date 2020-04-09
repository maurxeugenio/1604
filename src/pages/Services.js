import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { FaCode, FaHandsHelping } from 'react-icons/fa';
import { GiComputing, GiThreePointedShuriken, GiSpeedometer } from 'react-icons/gi';
import { MdWeb } from 'react-icons/md';


function Services() {
    return (
        <div id="our-digital" className="section">
        <Container className="container">
        <h1 className="headline">our digital services</h1>

        <Row className="row-list">
        <Col xs={12} sm={6} m={6} >
            <div className="item">
                <FaCode size="40px" />
                <h4>code</h4>
            </div>
        </Col>
        <Col xs={12} sm={6} m={6} >
            <div className="item">
                <FaHandsHelping size="40px" />
                <h4>consulting</h4>
            </div>
        </Col>
        <Col xs={12} sm={6} m={6}>
            <div className="item">
                <GiComputing size="40px" />
                <h4>systems</h4>
            </div>
        </Col>
        <Col xs={12} sm={6} m={6}>
            <div className="item">
                <GiThreePointedShuriken size="40px" />
                <h4>integrations</h4>
            </div>
        </Col>
        <Col xs={12} sm={6} m={6}>
            <div className="item">
                <MdWeb size="40px" />
                <h4>blogs & sites</h4>
            </div>
        </Col>
        <Col xs={12} sm={6} m={6}>
            <div className="item">
                <GiSpeedometer size="40px" />
                <h4>performance & maintenance</h4>
            </div>
        </Col>
        </Row>

        </Container>
        </div>
    );
}

export default Services;
