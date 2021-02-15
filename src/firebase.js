// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyA-35WroVfwMsAoUS-1ZZqER2aI63rjqD4",
    authDomain: "clone-edbd9.firebaseapp.com",
    projectId: "clone-edbd9",
    storageBucket: "clone-edbd9.appspot.com",
    messagingSenderId: "254021836919",
    appId: "1:254021836919:web:c8276e16050a754160e672",
    measurementId: "G-9CZG2FW4JE"
  };

  const firebaseApp =firebase.initializeApp(firebaseConfig);
  
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};