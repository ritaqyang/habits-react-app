import { useEffect } from 'react'; 
import { getRedirectResult } from 'firebase/auth'; //yarn add firebase

import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../utils/firebase.utils';
  
  const SignIn = () => {

    useEffect(() => {
      const func = async () => {
        const response = await getRedirectResult(auth);
        console.log(response);
      };
   
      return () => func();
    }, []);
  // run when this component mounts for the first time 
 

    const logGoogleUser = async () => {
      const { user }= await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user);      
    };
  
  
    return (
      <div>
        <h1>Sign In Page</h1>
        <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      </div>
    );
  };
  
  export default SignIn;