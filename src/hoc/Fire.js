import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDuwI_rw1MNznESZIhKTGsrltr6sxLjWiY",
  authDomain: "auth-demo-firebase-470ea.firebaseapp.com",
  projectId: "auth-demo-firebase-470ea",
  storageBucket: "auth-demo-firebase-470ea.appspot.com",
  messagingSenderId: "197558901483",
  appId: "1:197558901483:web:41cf4d599fc7d2beb5fcae"
};
const fire = firebase.initializeApp(config);

export default fire;
