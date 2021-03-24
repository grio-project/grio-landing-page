import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import GrioLogo from '../assets/logos/logo_grio_square_color.resized.png';

class Cover extends Component {
  render() {
    return (
      <div className="cover-image">
        <Container className='cover'>
          <Row>
          <Col  >
            <p>
              <img src={GrioLogo} alt="Grio Logo"/>
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