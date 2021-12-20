import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDuLKXkz7hHM-_6_OnLET6VQKV3Gyw8Dbw",
  authDomain: "linkedin-clone-abe3c.firebaseapp.com",
  projectId: "linkedin-clone-abe3c",
  storageBucket: "linkedin-clone-abe3c.appspot.com",
  messagingSenderId: "831578901155",
  appId: "1:831578901155:web:32572160dbc579deb5cd16"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth,provider,storage};
export default db;
