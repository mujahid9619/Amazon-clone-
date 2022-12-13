// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD0E4C35bIwLdZdGPpHquq7A5zKdTgZDBw",
  authDomain: "clone-2be4b.firebaseapp.com",
  projectId: "clone-2be4b",
  storageBucket: "clone-2be4b.appspot.com",
  messagingSenderId: "655256245055",
  appId: "1:655256245055:web:23426cce6c4fd4039bb98a",
  measurementId: "G-V170DCEWN1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
