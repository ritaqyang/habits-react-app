import { useState, useEffect} from 'react';
import Button from '../../../button/button.component';
import SmallFormInput from '../form-input-small/form-input-small.component';

import { useDispatch } from 'react-redux';
import { setSpending } from '../../../../store/spending/spending.reducer';
import Donut from '../../../charts/spending-chart/spending-chart.component';


import { 
  SpendingFormContainer,
  HalfContainer, 
} from './spending-form.styles';


const defaultFormFields = {

  grocery: 0,
  rent: 0,
  utilities: 0, 
  goingout: 0, 
  clothes: 0,
  entertainment: 0,
  education: 0, 
  other: 0,
  savingsAmount: 0,
};

const SpendingForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { 
    grocery,
    rent,
    utilities,
    goingout, 
    clothes,
    other,
    } = formFields;

  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };



 
  
  
  const userInput= [grocery, rent,3,3,3,3]; 
  console.log("grocery is " + grocery); 
  console.log("userinput spending array is " + userInput);
  
  const dispatch  = useDispatch(); 
  useEffect( () => {

    const updateSpendingArray = (userInput) =>{
      
      dispatch(setSpending(userInput)); 
    }

    updateSpendingArray(userInput); 

  },[userInput]);   

  

  

  return (
    <>
  
    <SpendingFormContainer>
        <form >
        <HalfContainer>
            <SmallFormInput
            label='Grocery'
            type='text'
            required
            onChange={handleChange}
            name='grocery'
            value={grocery}
            />

            <SmallFormInput
            label='Rent'
            type='text'
            required
            onChange={handleChange}
            name='rent'
            value={rent}
            />
            <SmallFormInput
            label='Utilities'
            type='text'
            required
            onChange={handleChange}
            name='utilities'
            value={utilities}
            />

            

        </HalfContainer>

        <HalfContainer>
            

            <SmallFormInput
            label='Going Out'
            type='text'
            required
            onChange={handleChange}
            name='goingout'
            value={goingout}
            />
            <SmallFormInput
            label='Clothes'
            type='text'
            required
            onChange={handleChange}
            name='clothes'
            value={clothes}
            />

            <SmallFormInput
            label='Other'
            type='text'
            required
            onChange={handleChange}
            name='other'
            value={other}
            />

        </HalfContainer>
       

      </form>

    </SpendingFormContainer>
    
    </>

  );
}


export default SpendingForm;