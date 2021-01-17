import React, { Component } from 'react';
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
        
      </div>
    );
  }
}

export default App;

