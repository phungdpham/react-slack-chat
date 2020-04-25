import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";


var firebaseConfig = {
  apiKey: "AIzaSyCVCQpBxRkFvNL6PVEl0hleZAFTroaJ7Ls",
  authDomain: "react-slack-app-87.firebaseapp.com",
  databaseURL: "https://react-slack-app-87.firebaseio.com",
  projectId: "react-slack-app-87",
  storageBucket: "react-slack-app-87.appspot.com",
  messagingSenderId: "412435763344",
  appId: "1:412435763344:web:35e5bee68330167e4bc815",
  measurementId: "G-C0D90BT0PS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;