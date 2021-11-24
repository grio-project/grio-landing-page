import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import About from './About';
import Team from './Team';
import Forms from './Forms'
import NextSteps from './NextSteps';
import Profiles from './Profiles';
import MailChecked from './MailChecked';

class LandingPage extends Component {
  render() {
    return (
      <Container fluid>
        
        <Forms />
        <MailChecked />
        
      </Container>
    );
  }
}

export default LandingPage;