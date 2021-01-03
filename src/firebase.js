import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyABFS-6Av2HfnxSCL8-G-TGp6VBWGhexBI",
  authDomain: "linkedin-b96c3.firebaseapp.com",
  projectId: "linkedin-b96c3",
  storageBucket: "linkedin-b96c3.appspot.com",
  messagingSenderId: "472452383999",
  appId: "1:472452383999:web:0d07ab950b5d1797e9f8ca"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export {db, auth};