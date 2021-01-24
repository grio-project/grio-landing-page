import React, { Component } from 'react';
import Cover from './Cover';
import About from './About';
import Team from './Team';
import Forms from './Forms';
import NextSteps from './NextSteps';
import Profiles from './Profiles';
class LandingPage extends Component {
  render() {
    return (
      <div className='large-space'>
        <Cover />
        <About />
        <Team />
        <Forms />
        <NextSteps />
        <Profiles />
      </div>
    );
  }
}

export default LandingPage;