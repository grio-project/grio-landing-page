import React, { Component } from 'react';
import './styles/App.css';
import Header from './Components/Header'
import { Container } from 'react-bootstrap'

import Cover from './Components/Cover';
import LandingPage from './Components/LandingPage'
import Footer from './Components/Footer'
import { initializeApp } from 'firebase/app';

import { getFirestore, getDocs, collection } from 'firebase/firestore/lite';
import { getAnalytics} from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDv-nyeH2lmdGy0fU9FJTrCaaf4wMnZD9g",
  authDomain: "grio-53e46.firebaseapp.com",
  projectId: "grio-53e46",
  storageBucket: "grio-53e46.appspot.com",
  messagingSenderId: "141665876430",
  appId: "1:141665876430:web:cffe0876202547ebdf539f",
  measurementId: "G-Y3M71N3PHX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const areasCol = collection(db, 'areas');

async function getAreas(db: any) {
  const areasCol = collection(db, 'areas');
  const areaSnapshot = await getDocs(areasCol);
  const areasList = areaSnapshot.docs.map(doc => doc.data());
  return areasList;
}

class App extends Component {
  render() {
    getAreas(db)
    console.log(getAreas(db))
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

