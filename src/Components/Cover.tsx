import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import GrioLogo from '../assets/logos/LOGOTIPO_GRIOÌ__Prancheta 1_600x600-cropped.png';

class Cover extends Component {
  render() {
    return (
      <div className="std-slide ">
        <Container fluid>

          <Row>

          <Col xs={8} >
            <p>
              <img src={GrioLogo}/>
            </p>
          </Col>
          <Col >
            <p className="special-font cover-title">
              PLATAFORMA
            </p>
            <p className="title-font cover-title">
              DE CONEXÕES DE PESSOAS
            </p>
          </Col>
        </Row>    
        </Container>
      </div>
    );
  }
}

export default Cover;