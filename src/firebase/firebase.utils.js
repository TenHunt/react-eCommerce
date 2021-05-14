import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDlE52CZMA0jk0SRR-JDNbISrxwiTMwrF8",
  authDomain: "crwn-db-b3a1b.firebaseapp.com",
  databaseURL: '',
  projectId: "crwn-db-b3a1b",
  storageBucket: "crwn-db-b3a1b.appspot.com",
  messagingSenderId: "112523540792",
  appId: "1:112523540792:web:e063ef90792157e3d529cd",
  measurementId: "G-2EZ4C6CENC"
};

export const createUserProfileDocument = async ( userAuth, additionalData ) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get()

  if(!snapShot.exists) {
    const {displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set( {
        displayName,
        email,
        createdAt,
        ...additionalData
      });

    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;