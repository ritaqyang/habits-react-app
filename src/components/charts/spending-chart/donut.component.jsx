import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';
import Button from "../../button/button.component";
import SmallFormInput from "../../forms/invest-forms/form-input-small/form-input-small.component";

import { 
  SpendingFormContainer,
  HalfContainer, 
  BigContainer,
  ButtonContainer, IndividualButton,
} from './spending-form.styles';
const defaultFormFields = {

    grocery: 500,
    rent: 2000  ,
    utilities: 150  , 
    goingout: 400, 
    clothes: 200,
    other: 100,
    entertainment: 150,
    education: 100, 
    savingsAmount: 100,
  };
const labels = ["grocery","rent","utilities","goingout", "shopping","other"]; 
const data = [500,1700,100,500,200,300]; 
function Donutchart()
{
    const [categoryArray, setCategoryArray]= useState(labels);
    const [userData, setUserData]= useState(data);
    const [isClicked, setIsClicked] = useState(false); 
    
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { 
        grocery,
        rent,
        utilities,
        goingout, 
        clothes,
        other,
        entertainment,
        education,
        savingsAmount,
        } = formFields;
        const newArray = [grocery,rent,utilities,goingout,clothes,other,entertainment,education,savingsAmount]; 
        //get all numbers instead of string
        const changedArray = newArray.map((element) =>  {return (+element)});
        console.log(changedArray);
    
    
    
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    };
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        
    };

    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          console.log(formFields); 
          setUserData(changedArray); 
          console.log("donut array is " +changedArray);
          
        } catch (error) {
          console.log('user submit spending failed', error);
        }
      };

      const handleClick = () => {
        
        changedArray.splice(1,1,0);
        console.log(changedArray);
        setUserData(changedArray); 
      }

    // useEffect(() => {
    //   const setRent = () => {
    //   setFormFields({...formFields,[rent]:0}); 

    //   }

    //   setRent(); 
    // },[isClicked]); 

    
  

    return(
        <React.Fragment>
        <BigContainer>

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
        <HalfContainer>
            <SmallFormInput
            label='Entertainment'
            type='text'
            required
            onChange={handleChange}
            name='entertainment'
            value={entertainment}
            />

            <SmallFormInput
            label='Skills & Education'
            type='text'
            required
            onChange={handleChange}
            name='education'
            value={education}
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
        <ButtonContainer>
          <IndividualButton>
          <Button type='submit'>submit the numbers</Button>
          </IndividualButton>
          <IndividualButton>
          <Button onClick={handleClick}>see without rent</Button>

          </IndividualButton>

        </ButtonContainer>
        
      </form>
      
    </SpendingFormContainer>
    
            <Chart 
            type="donut"
            width={500}
            height={ 550}
            series={userData}

            options={{
             labels:categoryArray,
             title:{
                text:"spending distribution",
                align:"center",
             },

             plotOptions:{
             pie:{
                donut:{
                    labels:{
                        show:true,
                        total:{
                            show:true,
                            showAlways:true,
                             //formatter: () => '343',
                            fontSize:30,
                            color: '#f90000',
                        }
                    }
                }
             }

             },

             dataLabels:{
                enabled:true,
             }


            }}
            
            />

            </BigContainer>
        </React.Fragment>
    );
}
export default Donutchart;