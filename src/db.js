import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";

firebase.initializeApp({
  apiKey: "",
  authDomain: "reactjst3h2212.firebaseapp.com",
  projectId: "reactjst3h2212",
});

export const database = firebase.database();
export const firestore = firebase.firestore();