import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAD4b93asLo45DkPw2_E0i-Iv6UicVnyX8",
    authDomain: "crwn-db-76758.firebaseapp.com",
    databaseURL: "https://crwn-db-76758.firebaseio.com",
    projectId: "crwn-db-76758",
    storageBucket: "crwn-db-76758.appspot.com",
    messagingSenderId: "709433850871",
    appId: "1:709433850871:web:c4afcf910ceb8b4eb18cf2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
