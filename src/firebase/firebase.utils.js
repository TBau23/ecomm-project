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

export const createUserProfileDocument = async(userAuth, additionalData) => {
    if (!userAuth) return;
    // queries to firestore return two types of objects : references and snapshots. These objects can be either Document
    // or Collection versions
    // we use Document reference object to perform CRUD methods from Firestore
    const userRef = firestore.doc(`/users/${userAuth.uid}`)

    const snapshot = await userRef.get();

    // if the user data doesnt exist, create the new user using data from userAuth object
    if(!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
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
provider.setCustomParameters({ prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
