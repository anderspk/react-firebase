import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAD9sFNWbXV9i_l3G9egskX9dmTQuVfPtg",
  authDomain: "fir-tutorial-8e9f3.firebaseapp.com",
  databaseURL: "https://fir-tutorial-8e9f3.firebaseio.com",
  projectId: "fir-tutorial-8e9f3",
  storageBucket: "fir-tutorial-8e9f3.appspot.com",
  messagingSenderId: "169381579008",
  appId: "1:169381579008:web:8db806099b3bda1e568be5",
  measurementId: "G-3RTTE10X85",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
export const firestore = firebase.firestore();
