import { Component } from 'react';
import './styles/App.css';
import { Container } from 'react-bootstrap'

import Cover from './Components/Cover';
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'


class App extends Component {
  render() {
    return (
      <div className='App'>
          <Cover />
          <Container> 
            <LandingPage />
          </Container>
        <Footer />  
        
      </div>
    );
  }
}

export default App;

