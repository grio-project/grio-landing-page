import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

// Configure Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyDv-nyeH2lmdGy0fU9FJTrCaaf4wMnZD9g",
  authDomain: "grio-53e46.firebaseapp.com",
  projectId: "grio-53e46",
  storageBucket: "grio-53e46.appspot.com",
  messagingSenderId: "141665876430",
  appId: "1:141665876430:web:cffe0876202547ebdf539f",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {
  app as app,
  firestore as firestore,
};