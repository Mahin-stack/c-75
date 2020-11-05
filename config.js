import firebase from 'firebase';
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyAS3-M3ddPTF83Jlr8gcQo0tBfUJWrpZAY",
    authDomain: "story-app-b1652.firebaseapp.com",
    databaseURL: "https://story-app-b1652.firebaseio.com",
    projectId: "story-app-b1652",
    storageBucket: "story-app-b1652.appspot.com",
    messagingSenderId: "413808970004",
    appId: "1:413808970004:web:a6464e0fc320fe9ac99a01"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();