
import firebase from "firebase";
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDc5jGUVjWaSRpLqgnJ7QokBC_ZIP2IhyY",
    authDomain: "rent-a-bike-atl.firebaseapp.com",
    databaseURL: "https://rent-a-bike-atl.firebaseio.com",
    projectId: "rent-a-bike-atl",
    storageBucket: "rent-a-bike-atl.appspot.com",
    messagingSenderId: "833667353459"
  };
  firebase.initializeApp(config);
export default firebase;
