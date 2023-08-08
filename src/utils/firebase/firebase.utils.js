import { initializeApp } from "firebase/app";


//Todo: finish retrieve profile pic function 

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
  updateDoc,
  increment,
} from 'firebase/firestore';
import { getDatabase, ref, orderByChild } from "firebase/database";
import { setHabits } from "../../store/habit/habit.reducer";

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

export const getCategoriesAndDocuments = async (categories) => {
  const collectionRef = collection(db, categories);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data());
};

export const getHabitsfromDatabase = async (email) => {
  const Ref= collection(db,'user-habit',email,'Habits'); 
  const q = query(Ref); 

  const Snapshot = await getDocs(q); 
  return Snapshot.docs.map((docSnapshot) => docSnapshot.data()); 

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


  export const addHabit = async (
    user, 
    habit,
    additionalInfo= {}
  ) => {
    
    if (!user) return; 
    
    const userHabitDocRef = doc(db, 'user-habit', user.email,"Habits",habit);
    const userSnapshot = await getDoc(userHabitDocRef);
  
    if (!userSnapshot.exists()) {
      
      try {
        console.log('creating a new habit doc for user, user email is ' +user.email);
        await setDoc(userHabitDocRef, {
          
            habitName:habit,
            count:0,
            completedDays:{},
            ...additionalInfo,
           //object 
      });

        
      } catch (error) {
        console.log('error creating the user habit', error.message); 
      }   
    } 

    else{
      try {
        console.log("user habit doc already exist - adding a new habit, user email is " +  user.email); 
        
      } catch (error) {
        console.log('error adding to existing user habit doc'); 
      }
    }
  
     return userHabitDocRef;
  }

  export const updateCompletedHabit = async (
    user, 
    habit,
    completedDays,
    isAdding,
    additionalInfo= {}
  ) => {
    
    if (!user) return; 
    
    const userHabitDocRef = doc(db, 'user-habit', user.email,"Habits",habit);
    const userSnapshot = await getDoc(userHabitDocRef);
  
    if (userSnapshot.exists()) {
      
      try {
        console.log('adding habit logs for ' + user.email);
        await updateDoc(userHabitDocRef, {
          
            completedDays: completedDays,
            count:increment(1),
            ...additionalInfo,
      });
      } catch (error) {
        console.log('error adding completed days', error.message); 
      }   
    } 
  }; 

  export const retrieveCompletedDays = async(email,habitName) => {
    const Ref= doc(db,'user-habit',email,'Habits',habitName); 
    const docSnapshot = await getDoc(Ref);
    if (docSnapshot.exists()){
      console.log("document data" , docSnapshot.data().completedDays);
      return docSnapshot.data().completedDays; 
    
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }; 

  export const uploadUserProfileImageURL= async(
    user, 
    imageURL,
  ) => {
    
    if (!user) return; 
    const userProfilePicRef = doc(db, 'profile', user.email);
    const userSnapshot = await getDoc(userProfilePicRef);
    if (!userSnapshot.exists()) {
      try {
        console.log('creating a new profile pic doc for user, user email is ' + user.email);
        await setDoc(userProfilePicRef, {
          
            profilePic: imageURL,
           //object 
      });
      } catch (error) {
        console.log('error adding user profile image', error.message); 
      }   
    } 
    // else{
    //   try {
    //     console.log("user habit doc already exist - adding a new habit, user email is " +  user.email); 
        
    //   } catch (error) {
    //     console.log('error adding to existing user habit doc'); 
    //   }
    // }
     return userProfilePicRef;
  }; 
  
  export const retrieveProfilePic = async(email,habitName) => {
    const Ref= doc(db,'user-habit',email,'Habits',habitName); 
    const docSnapshot = await getDoc(Ref);
    if (docSnapshot.exists()){
      console.log("document data" , docSnapshot.data().completedDays);
      return docSnapshot.data().completedDays; 
    
    } else {
      // docSnap.data() will be undefined in this case
      console.log("No such document!");
    }
  }; 

  
