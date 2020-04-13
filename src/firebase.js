import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAD9sFNWbXV9i_l3G9egskX9dmTQuVfPtg',
  authDomain: 'fir-tutorial-8e9f3.firebaseapp.com',
  databaseURL: 'https://fir-tutorial-8e9f3.firebaseio.com',
  projectId: 'fir-tutorial-8e9f3',
  storageBucket: 'fir-tutorial-8e9f3.appspot.com',
  messagingSenderId: '169381579008',
  appId: '1:169381579008:web:8db806099b3bda1e568be5',
  measurementId: 'G-3RTTE10X85',
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const generateUserDocument = async (user, additionalData) => {
  if (!user) return;
  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();
  if (!snapshot.exists) {
    const { email, displayName, photoURL } = user;
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.error('Error creating user document', { error });
    }
  }

  return getUserDocument(user.uid);
};

const getUserDocument = async (uid) => {
  if (!uid) return null;
  try {
    const userDocument = await firestore.doc(`users/${uid}`).get();
    return {
      uid,
      ...userDocument.data(),
    };
  } catch (error) {
    console.error('Error fetching user', { error });
  }
};
