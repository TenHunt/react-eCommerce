import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDlE52CZMA0jk0SRR-JDNbISrxwiTMwrF8",
  authDomain: "crwn-db-b3a1b.firebaseapp.com",
  projectId: "crwn-db-b3a1b",
  storageBucket: "crwn-db-b3a1b.appspot.com",
  messagingSenderId: "112523540792",
  appId: "1:112523540792:web:e063ef90792157e3d529cd",
  measurementId: "G-2EZ4C6CENC"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;