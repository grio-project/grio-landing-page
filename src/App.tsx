import React, { Component } from 'react';
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import { Container } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className='App'>
              
        <Header />
          <Container> 
            <LandingPage />
          </Container>
        <Footer />  
        
      </div>
    );
  }
}

export default App;

