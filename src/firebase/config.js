import firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuzj4w18bTNtNmYhdkMQau5cBArKn3lwA",
  authDomain: "tiecoura-58f91.firebaseapp.com",
  projectId: "tiecoura-58f91",
  storageBucket: "tiecoura-58f91.appspot.com",
  messagingSenderId: "149579281985",
  appId: "1:149579281985:web:6566b6447143560920f8c0",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const sr = firebase.storage();
const fs = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { sr, fs, timestamp };
