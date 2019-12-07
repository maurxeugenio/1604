import React from 'react';
import { Container, Row, Col } from 'react-grid-system';



function Index() {
  return (

      <div className="section">
        <Container style={{display: 'flex', zIndex: 1, flexDirection: 'column', height: '100vh', justifyContent: 'center', alignContent: 'center'}}>
          <Row >
            <Col sm={5} style={{display: 'flex', zIndex: 1, flexDirection: 'column', justifyContent: 'center', alignContent: 'center'}} >
              <h1 className="init">1604</h1>
              <h1 className="init">Intelligence</h1>
            </Col>
            <Col sm={7}>
              <img className="brenda-imagem"alt="brenda" width="100%" height="auto" src={require('../assets/img/brenda.jpg')}/>
            </Col>
          </Row>
        </Container>
      </div>
  );
}

export default Index;
