import * as firebase from 'firebase'
require('@firebase/firestore')
 var firebaseConfig = {
    apiKey: "AIzaSyBn7F8jmZxTIHiOr1rduOGIa5wugJ9B9pA",
    authDomain: "wily-app-5e8aa.firebaseapp.com",
    projectId: "wily-app-5e8aa",
    storageBucket: "wily-app-5e8aa.appspot.com",
    messagingSenderId: "229650618812",
    appId: "1:229650618812:web:01b635085283bf3c5073b9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()