import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import { 
  HabitContainer,
} from './habit-form.styles'


const defaultFormFields = {
  habitName: '',
  
};

const HabitForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { habitName } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      
        console.log('user habit creation encountered an error', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <HabitContainer>
      <h2>Where do you see yourself in 2 years? </h2>
      <span>write down a habit that you want to start today</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Habit Name'
          type='text'
          required
          onChange={handleChange}
          name='habitName'
          value={habitName}
        />

        
        <Button type='submit'>Commit</Button>
      </form>
    </HabitContainer>

  );


export default HabitForm;