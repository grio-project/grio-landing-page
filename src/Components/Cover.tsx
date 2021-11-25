import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import GrioLogo from '../assets/logos/logo_grio_square_color.resized.png';

class Cover extends Component {
  render() {
    return (
      <div className="cover-image">
        
          <img src={GrioLogo} alt="Grio Logo"/> 
        
      </div>
    );
  }
}

export default Cover;