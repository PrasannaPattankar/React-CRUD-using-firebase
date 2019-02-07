import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const config = {
  apiKey: "AIzaSyBqZaNy0x8QF49YibtjSJOu0Elp4fFpZHQ",
  authDomain: "reactusingfirebase.firebaseapp.com",
  databaseURL: "https://reactusingfirebase.firebaseio.com",
  projectId: "reactusingfirebase",
  storageBucket: "reactusingfirebase.appspot.com",
  messagingSenderId: "136693259937"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;
