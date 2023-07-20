import { useState } from 'react';
import FormInput from '../../form-input/form-input.component';
import Button from '../../../button/button.component';




import { 
  InvestFormContainer,
} from './invest-calc-form.styles';



const defaultFormFields = {
  amount: 0,
  
};

const InvestCalcForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { amount } = formFields;
  
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

        <h2> What would your investment look like if you start today? </h2>
        <span>write down what you can invest monthly </span>
        <form onSubmit={handleSubmit}>
        <FormInput
          label='Monthly Contribution'
          type='text'
          required
          onChange={handleChange}
          name='amount'
          value={amount}
        />

        
        <Button type='submit'>Get Estimate</Button>
      </form>

    </InvestFormContainer>
      
    

  );
}


export default InvestCalcForm;