import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyACxWolZopP1Tq0bpqpSww43c-haGKkNbw",
  authDomain: "km-ef2c8.firebaseapp.com",
  projectId: "km-ef2c8",
  storageBucket: "km-ef2c8.appspot.com",
  messagingSenderId: "533250898253",
  appId: "1:533250898253:web:bfc216770d3a6da828df04",
};

let app = null;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

export const db = app.firestore();
export const auth = app.auth();
export const storage = app.storage();
