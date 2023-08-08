import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import Button from '../../button/button.component';
import { selectCurrentUser } from '../../../store/user/user.selector';
import {  useSelector } from 'react-redux/es/hooks/useSelector';
import { 
  HabitContainer,
  ExisitngHabitsContainer,
  HalfContainer,
} from './habit-form.styles'
import { addHabit } from '../../../utils/firebase/firebase.utils';
import { selectHabitsMap } from '../../../store/habit/habit.selector';
import { useDispatch } from 'react-redux';
import { setHabits, setIsHabitsChanged } from '../../../store/habit/habit.reducer';


const defaultFormFields = {
  habitName: '',
  
};

const HabitForm = () => {
  const habitsMap = useSelector(selectHabitsMap); 
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { habitName } = formFields;
  const currentUser = useSelector(selectCurrentUser); 
  const dispatch = useDispatch(); 

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addHabit(currentUser, habitName); // adding habit to firebase (create new user document)
      console.log('habit added '+habitName ); 
      setIsHabitsChanged('user added new habit ' + habitName); 
      resetFormFields();
    } catch (error) {
      
        console.log('user habit creation encountered an error', error);
      }
    }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <HabitContainer>
      <HalfContainer>
         <h2>Where do you see yourself in 2 years? </h2>
     
      <span>Your existing habits in the database are listed below: </span>
      <ExisitngHabitsContainer>
        {Object.keys(habitsMap).map((habitName) => {
        return (
            <>
            
          <div>{habitName} </div>
         
          </>
        );
      })}

      </ExisitngHabitsContainer>
      </HalfContainer>
     
      <HalfContainer>

         <h2>write down a habit that you want to start today</h2>
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
      </HalfContainer>
  
    </HabitContainer>

  );
}


export default HabitForm;