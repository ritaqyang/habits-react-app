import { useState } from 'react';
import Button from '../../../button/button.component';
import SmallFormInput from '../form-input-small/form-input-small.component';




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
  const { grocery,
    rent,
    utilities,
    goingout, 
    clothes,
    entertainment,
    education, 
    savingsAmount, } = formFields;
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log("user put down spending details"); 

      resetFormFields();
    } catch (error) {
      
        console.log('user spending submission encountered an error', error);
      }
    }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <SpendingFormContainer>

        
        <form onSubmit={handleSubmit}>
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
            label='Savings'
            type='text'
            required
            onChange={handleChange}
            name='savingsAmount'
            value={savingsAmount}
            />

        </HalfContainer>

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
            label='Savings'
            type='text'
            required
            onChange={handleChange}
            name='savingsAmount'
            value={savingsAmount}
            />

        </HalfContainer>

        
        <Button type='submit'>Estimate</Button>
      </form>

    </SpendingFormContainer>
      
    

  );
}


export default SpendingForm;