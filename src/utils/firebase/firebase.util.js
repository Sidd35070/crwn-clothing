// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_LLkND3QkLOJudRFr3afaBXkZjf5ZS9c",
  authDomain: "crwn-clothing-db-a75de.firebaseapp.com",
  projectId: "crwn-clothing-db-a75de",
  storageBucket: "crwn-clothing-db-a75de.appspot.com",
  messagingSenderId: "253801503965",
  appId: "1:253801503965:web:d10be371b7e4493b190f34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Authentication
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInwithGoogle =  () => signInWithPopup(auth, provider)
.then(({user}) => user);


///////Database
//Initialize the database
const db = getFirestore();

//////////Create the signed in user data in DB
//check if the user exists
export const createUserFromAuth = async (user, additionalData = {}) => {
    const { email, displayName } = user;
    const createdAt = new Date();

    const userRef = doc(db, 'users', user.uid);

    const userSnapshot = await getDoc(userRef);

    if (!userSnapshot.exists()) {
        try{
            setDoc(userRef, {
                email, displayName, createdAt, ...additionalData
            })
        } catch(error) {
            console.log('An error occured while creating the user - ', error.message)
        }
    }

    return userRef;
}

export const onAuthStateChangedListener = (callback) =>  onAuthStateChanged(auth, callback);








