import React, { Component } from 'react';
<<<<<<< HEAD
import './styles/App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'
import { Container, Row } from 'react-bootstrap'




class App extends Component {
  render() {
    return (
      <div className='App'>
        <Container>       
          <Header />
          <LandingPage />
          <Footer />  
        </Container>
=======
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import LandingPage from './Components/LandingPage'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingPage />
        <Footer />
        
>>>>>>> feat(React App): Implements basic app structure
      </div>
    );
  }
}

export default App;

