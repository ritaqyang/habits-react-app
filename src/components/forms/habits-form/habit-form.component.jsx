//todo: make page refresh when the modal closes 

import RedButton from '../../button/red_button.component';
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
import Modal from 'react-modal';




// Custom styles for the modal content
const customStyles = {
  content: {
    width: '35%',    // Adjust the width to your desired size
    height: '35%',   // Adjust the height to your desired size
    margin: 'auto',  // Center the modal
  },
};



const defaultFormFields = {
  habitName: '',
  
};

const HabitForm = () => {
  const habitsMap = useSelector(selectHabitsMap); 
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { habitName } = formFields;
  const currentUser = useSelector(selectCurrentUser); 
  const dispatch = useDispatch(); 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await addHabit(currentUser, habitName); // adding habit to firebase (create new user document)
      console.log('habit added '+habitName ); 
      setIsHabitsChanged('user added new habit ' + habitName); 
      //resetFormFields();
    } catch (error) {
      
        console.log('user habit creation encountered an error', error);
      }
    }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };


  // const handleCloseModal = async(event) => {
  //   event.preventDefault(); 
  //   try { 
  //     await 
  //   }
  // }


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
      

        
        <Button type='submit'onClick={() => setModalIsOpen(true)}>Commit</Button>
      </form>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Example Modal"
        style={customStyles} // Apply custom styles
      >
        <h2>Modal Content</h2>
        <p>You've commited to {habitName} </p>
        <Button onClick={() => setModalIsOpen(false)}>Close Window</Button>
      </Modal>
      </HalfContainer>
  
    </HabitContainer>

  );
}


export default HabitForm;