import { useEffect } from 'react'; 
import { getRedirectResult } from 'firebase/auth'; //yarn add firebase
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './sign-in.styles.scss';
import {
    auth,
    signInWithGooglePopup,
    createUserDocumentFromAuth,
  } from '../../utils/firebase/firebase.utils';

  
  const SignIn = () => {

    
  
    return (
      <div className='authentication-container'>
       
        <SignInForm />
        <SignUpForm />
      </div>
    );
  };
  
  export default SignIn;