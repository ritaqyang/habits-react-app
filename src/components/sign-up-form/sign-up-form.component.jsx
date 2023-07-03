import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input /form-input.coomponent";
import Button from "../button/button.component";


const defaultFormFields = {
    displayName: '', 
    email: '', 
    password: '', 
    confirmPassword: ''
}

const SignUpForm = () => {

    const [formFields, setFormFields] = useState(defaultFormFields); 
    const { displayName, email, password, confirmPassword} = formFields; 

    console.log(formFields); 

    const resetFormFields = () => {
        setFormFields(defaultFormFields); 
    }

    const handleSubmit = async (event) => {
        event.preventDefault(); 

        if (password != confirmPassword){
            alert("passwords do not match ");
            return; 
        }
        try {
            const { user } = await createAuthUserWithEmailAndPassword( email, password ); 
            await createUserDocumentFromAuth( user, { displayName }); 
            resetFormFields(); 

        } catch (error){
            if (error.code == 'auth/email-already-in-use'){
                alert ('Cannot create user, email already in use'); 
            } else {
                console.log('user creation encountered an error', error); 
            }
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target; 
        setFormFields({...formFields, [name]: value});
    };


    return (
        <div>
            <h1>
                sign up with ur email and password 
            </h1>
            <form onSubmit={handleSubmit}>
                <label>Display Name </label>
                <FormInput 
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName'
                    value={displayName}
                />

                <label>Email  </label>
                <FormInput 
                    type='email' 
                    required
                    onChange={handleChange} 
                    name='email'
                    value={email}
                />
                
                <label>Password </label>
                <FormInput 
                    type='password' 
                    required 
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                
                <label>Confirm Password</label>
                <FormInput
                    type='password' 
                    required
                    onChange={handleChange} 
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type='submit'>Sign up </Button>


            </form>
        </div>
    )
}

export default SignUpForm; 