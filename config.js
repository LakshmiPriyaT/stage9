import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAAmxRLgnh8G2L6M5Zxp-lGiQYE5Gu_VcQ",
    authDomain: "multi-player-game-a134a.firebaseapp.com",
    databaseURL: "https://multi-player-game-a134a.firebaseio.com",
    projectId: "multi-player-game-a134a",
    storageBucket: "multi-player-game-a134a.appspot.com",
    messagingSenderId: "633107009733",
    appId: "1:633107009733:web:5fb42b77c7fbf4665260ac"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
