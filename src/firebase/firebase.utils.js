import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyC1l7ZhauovXrBRliNqBKCknUIUVXZBf9U",
        authDomain: "ecomm-practice-91d77.firebaseapp.com",
        projectId: "ecomm-practice-91d77",
        storageBucket: "ecomm-practice-91d77.appspot.com",
        messagingSenderId: "1003070779687",
        appId: "1:1003070779687:web:64da709c74c6544342b902"
    };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
