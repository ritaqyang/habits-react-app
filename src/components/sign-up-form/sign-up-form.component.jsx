import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
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

    const { setCurrentUser } = useContext(UserContext); 
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
            setCurrentUser(user);
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
            <h2>
                sign up with ur email and password 
            </h2>
            <form onSubmit={handleSubmit}>
                <FormInput 
                    label='Display Name'
                    type='text' 
                    required 
                    onChange={handleChange} 
                    name='displayName'
                    value={displayName}
                />

                <FormInput 
                    label='email'
                    type='email' 
                    required
                    onChange={handleChange} 
                    name='email'
                    value={email}
                />
                
                <FormInput 
                    label='Password'
                    type='password' 
                    required 
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                
               
                <FormInput
                    label='Confirm Password'
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