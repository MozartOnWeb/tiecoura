import firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtEDCSFYOrBIRQPkgwRoRyYO-Nh7bSt20",
  authDomain: "tiecoura-01.firebaseapp.com",
  databaseURL: "https://tiecoura-01-default-rtdb.firebaseio.com",
  projectId: "tiecoura-01",
  storageBucket: "tiecoura-01.appspot.com",
  messagingSenderId: "35805829651",
  appId: "1:35805829651:web:863393b26af8300b34fde6",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, projectStorage, timestamp };
