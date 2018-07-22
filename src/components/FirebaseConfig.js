import React from "react";

import * as firebase from "firebase";

// Initialize firebase
const firebaseConfig = {
  apiKey: "AIzaSyCRicqaipHJTRD8SDXyZsJ8CQXPXkg7Lo8",
  authDomain: "tip-s-wotd.firebaseapp.com",
  databaseURL: "https://tip-s-wotd.firebaseio.com",
  storageBucket: "tip-s-wotd.appspot.com"
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default (FirebaseConfig = firebaseApp.database().ref());
