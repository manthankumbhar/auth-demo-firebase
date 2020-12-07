import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCwArAdzssTUQRASTk6rWTxMicaOj8hrzI",
  authDomain: "auth-demo-663bb.firebaseapp.com",
  projectId: "auth-demo-663bb",
  storageBucket: "auth-demo-663bb.appspot.com",
  messagingSenderId: "544817371590",
  appId: "1:544817371590:web:eb5384e75ad67cc74bfac7",
};
const fire = firebase.initializeApp(config);

export default fire;
