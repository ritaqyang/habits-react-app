
import SignUpForm from '../../components/forms/sign-up-form/sign-up-form.component';
import SignInForm from '../../components/forms/sign-in-form/sign-in-form.component';

import './sign-in.styles.scss';

  const SignIn = () => {

    
  
    return (
      <div className='authentication-container'>
        <div className="authentication-container__item"> <SignInForm /></div>
        <div className="authentication-container__item"><SignUpForm /></div>
       
       
        
      </div>
    );
  };
  
  export default SignIn;