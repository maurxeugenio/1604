import React from 'react';
import { Container, Row, Col } from 'react-grid-system';


class Component extends React.Component {
  render() {
    return (
          <div className="section">
            <Container>
              <Row>
                <Col sm={12} style={{height: '100vh', display: 'flex', justifyContent: 'center', alignContent: 'center',  flexDirection: 'column'}}>
                  <h1 className="logo top">1604</h1>
                  <h2 className="headline">{this.props.headline}</h2>
                  <h2 className="headlineComplement">{this.props.headlineComplement}</h2>
                  <h3 className="content">{this.props.content}</h3>
                  <h1 className="logo bottom">Intelligence</h1>
                </Col>

              </Row>
            </Container>
          </div>

    );
  }
}


export default Component;
