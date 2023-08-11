import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes,getDownloadURL, connectStorageEmulator } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
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


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);


export const uploadToStorage = async (file, email) => {
    const storageRef = ref(storage, `${email}/profile_image.jpg`);
  
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    });
  }
  // 'file' comes from the Blob or File API
  

export const getImageFromStorage = async (email) => {
    getDownloadURL(ref(storage, `${email}/profile_image.jpg`))
  .then((url) => {
    // `url` is the download URL for 'images/stars.jpg'

    // Or inserted into an <img> element
    const img = document.getElementById('myimg');
    img.style.width = '100px'; // Set the width to 200 pixels
    img.style.height = 'auto'; // Let the browser maintain the aspect ratio

    img.setAttribute('src', url);
    console.log("firebase storage getting image from storage"); 
  })
  .catch((error) => {
    // Handle any errors
  });
};

