import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD-6aAhK612MwoCVNaBsO9bp6778jISJyU",
    authDomain: "santa-e4470.firebaseapp.com",
    databaseURL: "https://santa-e4470.firebaseio.com",
    projectId: "santa-e4470",
    storageBucket: "santa-e4470.appspot.com",
    messagingSenderId: "687345567808",
    appId: "1:687345567808:web:a81f5dd2916af08d34f7a5"
  };
  // Initialize Firebase
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  

  export default firebase.firestore();