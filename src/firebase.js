// Firebase App (the core Firebase SDK) is always required and must be listed first
// import firebase from "firebase/app";

// import * as firebase from "firebase/app";

import firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyARnlQxjXAGNdUzgCZtRxeOlmeEuIe5tro",
    authDomain: "zilla-22191.firebaseapp.com",
    projectId: "zilla-22191",
    storageBucket: "zilla-22191.appspot.com",
    messagingSenderId: "270016157956",
    appId: "1:270016157956:web:9b3fce79816a3233c21851",
    measurementId: "G-FDSJ121Z3C"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const firebaseauth = firebase.auth();
export const firestore = firebase.firestore();

export {firebaseConfig};


export default firebase;