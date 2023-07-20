import { useState } from 'react';
import FormInput from '../../form-input/form-input.component';
import Button from '../../../button/button.component';




import { 
  InvestFormContainer,
} from './invest-calc-form.styles';



const defaultFormFields = {
  monthlyAmount: 0,
  savingsAmount: 0,
};

const InvestCalcForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { monthlyAmount, savingsAmount } = formFields;
  
  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log("user put down investment"); 

      resetFormFields();
    } catch (error) {
      
        console.log('user investment submission encountered an error', error);
      }
    }


  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <InvestFormContainer>

        
        <form onSubmit={handleSubmit}>
        <FormInput
          label='Monthly Contribution'
          type='text'
          required
          onChange={handleChange}
          name='monthlyAmount'
          value={monthlyAmount}
        />

        <FormInput
          label='Savings'
          type='text'
          required
          onChange={handleChange}
          name='savingsAmount'
          value={savingsAmount}
        />

        
        <Button type='submit'>Estimate</Button>
      </form>

    </InvestFormContainer>
      
    

  );
}


export default InvestCalcForm;