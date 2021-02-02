import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import Cover from './Cover';
import About from './About';
import Team from './Team';
import Forms from './Forms';
import NextSteps from './NextSteps';
import Profiles from './Profiles';
class LandingPage extends Component {
  render() {
    return (
      <Container fluid>
        <Cover />
        <About />
        <Team />
        <Forms />
        <NextSteps />
        <Profiles />
      </Container>
    );
  }
}

export default LandingPage;