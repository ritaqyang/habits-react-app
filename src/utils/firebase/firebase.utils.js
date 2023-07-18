// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
import { getDatabase, ref, orderByChild } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdQbc9Lhj3MzqcQkrywZyNdfpwidtiSyc",
  authDomain: "rizzapp-db.firebaseapp.com",
  projectId: "rizzapp-db",
  storageBucket: "rizzapp-db.appspot.com",
  messagingSenderId: "558998141923",
  appId: "1:558998141923:web:39eb750bb18c6e68323ed6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account',
  });
  
export const auth = getAuth(); //authentication remain the same for the whole life cycle 
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore(); 


export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};


export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};


export const getUserDocuments = async() => {
  const collectionRef = collection(db, 'habits'); 
 const q = query(collectionRef); 
  
  const querySnapshot = await getDocs(q); 
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data()); 
}

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInfo= {}
  ) => {
    
    if (!userAuth) return; 
    
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);
  
    if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date(); 
      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo //object 
        });
      } catch (error) {
        console.log('error creating the user', error.message); 
      }   
        
    } 
  
     return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return; 
    return await createUserWithEmailAndPassword(auth, email, password); 
  }
  export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
  
    return await signInWithEmailAndPassword(auth, email, password);
  };


  export const signOutUser = async () => await signOut(auth);

  export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback); 