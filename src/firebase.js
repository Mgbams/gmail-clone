import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAZjmSvXXg4m29WT8SYHuRRPjbm8gBJsio",
  authDomain: "clone-b2712.firebaseapp.com",
  projectId: "clone-b2712",
  storageBucket: "clone-b2712.appspot.com",
  messagingSenderId: "685299037795",
  appId: "1:685299037795:web:06028437795f3837996a56",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); //connection to the realtime database
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
