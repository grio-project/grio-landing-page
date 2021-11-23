import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import About from './About';
import Team from './Team';
import Forms from './Forms'
import NextSteps from './NextSteps';
import Profiles from './Profiles';
import Step from './Step'
class LandingPage extends Component {
  render() {
    return (
      <Container fluid>
        
        <Forms />
        <Step/>
        
      </Container>
    );
  }
}

export default LandingPage;