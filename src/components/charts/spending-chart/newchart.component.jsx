import React ,{useState, useEffect}from "react";
import Chart from 'react-apexcharts';
import Button from "../../button/button.component";
import SmallFormInput from "../../forms/invest-forms/form-input-small/form-input-small.component";

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
const labels = ["grocery","rent","utilities","goingout", "shopping","other"]; 
const data = [500,1700,100,500,200,300]; 
function Donutchart()
{
    const [contryname, setCountryname]= useState(labels);
    const [medal, setMedal]= useState(data);
    
      
      
        
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
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
         
          
          console.log(formFields); 
          setMedal(changedArray); 
          console.log("donut array is " +changedArray);
          
        } catch (error) {
          console.log('user submit spending failed', error);
        }
      };

    

   

    return(
        <React.Fragment>

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
    
            <div className='container-fluid mt-3 mb-3'>        
            <h2 className="text-left">Donut Chart</h2>
            <Chart 
            type="donut"
            width={1349}
            height={ 550}
            series={medal}

            options={{
             labels:contryname,
             title:{
                text:"Medal Country Name",
               // align:"center",
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

            </div>
        </React.Fragment>
    );
}
export default Donutchart;