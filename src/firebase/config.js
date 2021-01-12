import firebase from 'firebase/app'
import 'firebase/storage';
import 'firebase/firestore';
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBdQks02GlTaixLJZIewF10r2EN2I02vEU",
  authDomain: "rocky-mountain-displays.firebaseapp.com",
  databaseURL: "https://rocky-mountain-displays-default-rtdb.firebaseio.com",
  projectId: "rocky-mountain-displays",
  storageBucket: "rocky-mountain-displays.appspot.com",
  messagingSenderId: "775421512893",
  appId: "1:775421512893:web:5732af88871c62baa9bbd4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};