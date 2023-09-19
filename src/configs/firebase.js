import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {

  apiKey: "AIzaSyBL9LCvB2vyMkJF-z-nP5-ZS4Ivm6tKDaA",

  authDomain: "imoney-42c47.firebaseapp.com",

  projectId: "imoney-42c47",

  storageBucket: "imoney-42c47.appspot.com",

  messagingSenderId: "486237526056",

  appId: "1:486237526056:web:c03a9d7dcca8ed446d3d1d",

  measurementId: "G-BR71PXNXP9"

};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectAuth, projectFirestore, timestamp};