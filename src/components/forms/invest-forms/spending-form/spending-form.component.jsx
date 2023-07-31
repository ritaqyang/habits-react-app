import { useState, useEffect} from 'react';
import Button from '../../../button/button.component';
import SmallFormInput from '../form-input-small/form-input-small.component';

import { useDispatch, useSelector } from 'react-redux';
import { setSpending } from '../../../../store/spending/spending.reducer';
import Donut from '../../../charts/spending-chart/spending-chart.component';


import { 
  SpendingFormContainer,
  HalfContainer, 
} from './spending-form.styles';
import { selectSpending } from '../../../../store/spending/spending.selector';
import TestDonut from '../../../charts/spending-chart/test.component';


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
    const newArray = [grocery,rent,utilities,goingout,clothes,other]; 
    const changedArray = newArray.map((element) =>  {return (+element)});
    console.log(changedArray);


  const [donutArray, setDonutArray] = useState([]); 

  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
    
  };

  const dispatch  = useDispatch(); 
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
     
      console.log("grocery is " + grocery); 
      console.log(formFields); 
      dispatch(setSpending(changedArray)); 
      setDonutArray(changedArray); 
      console.log("donut array is " +donutArray);
      
    } catch (error) {
      console.log('user submit spending failed', error);
    }
  };

  
  return (
    <>
  
    <SpendingFormContainer>
        <form onSubmit={handleSubmit} >
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
       
        <Button type='submit'>submit the numbers</Button>
        
      </form>
      
      


    </SpendingFormContainer>
    
    
    
    </>

  );
}


export default SpendingForm;