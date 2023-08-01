import React, { Component } from "react";
import Chart from "react-apexcharts";
import FormInput from "../../forms/form-input/form-input.component";
import Button from "../../button/button.component";
import {InvestFormContainer} from './investment-chart.styles'; 
import { useState } from "react";

const defaultFormFields = {
  monthlyAmount: 0,
  savingsAmount: 0,
};

const testcategory = [2023,2028, 2033, 2038,2043, 2048]; 
const testdata= [15250, 41943, 77618, 116848, 159987, 207424];
  
const defaultResult = [
  {
    id:1, 
    name: "4%",
    type:"line",
    data: [15250, 41943, 77618, 116848, 159987, 207424]
  },
  
  {
    id:2,
    name: "5%",
    type:"column",
    data: [15250, 43261, 82226, 127200, 179107, 239017]
  },
  {
    id:3,
    name: "5%",
    type:"line",
    data: [15250, 43261, 82226, 127200, 179107, 239017]
  },
  {
    id:4,
    name: "6%",
      
    data: [15250, 44630,87186, 138736, 201183,276828]
  }
]; 

const calculateReturns = (initialInvestment, yearlyReturnRate, monthlyContribution, numOfMonths) => {

  const P = monthlyContribution; 
  const n = numOfMonths; 
  const r = Math.pow(1 + yearlyReturnRate, 1 / 12) - 1;
  const FV =  P * (Math.pow(1 + r, n )/r);

  const initialInvestmentReturns = initialInvestment * ((1+r) ** n ); 

  return initialInvestmentReturns + FV;
}; 





const InvestChart = () => {
  
      // const optionsMixedChart = {
        
      //   plotOptions: {
      //     bar: {
      //       columnWidth: "50%"
      //     }
      //   },
      //   stroke: {
      //     width: [4, 4, 4]
      //   },
      //   xaxis: {
      //     categories: [2023,2028, 2033, 2038,2043, 2048]
      //   },
      //   markers: {
      //     size: 3,
      //     strokeWidth: 3,
      //     fillOpacity: 0,
      //     strokeOpacity: 0,
      //     hover: {
      //       size: 8
      //     }
      //   },
      //   yaxis: {
      //     tickAmount: 5,
      //     min: 0,
      //     max: 240000,
      //   }
      // }; 

      const [category, setCategory] = useState(testcategory); 
      const [data, setData] = useState(testdata); 
      const [result, setResult] = useState(defaultResult); 
      const [maxValue, setMaxValue] = useState(240000);       
      
      const [formFields, setFormFields] = useState(defaultFormFields);
      const { monthlyAmount, savingsAmount } = formFields;
       const getResultWithUserInput = (monthly, initial, yearlyInterest) => {
        const array4 = []; 
        //get array for 4% return 
      
        for (let m = 0; m < 6; m++) {
          array4.push(calculateReturns(initial,yearlyInterest, monthly, 60 * m)); 
        }
      
        return array4; 
      }; 


      const temp = getResultWithUserInput(100,0,0.04); 
      console.log("temp is" + temp); 

      
      const updateSubField = (objectID, newSubFieldValue) => {
        const objectIndex = result.findIndex((obj) => obj.id === objectID);
        console.log("index is " + objectIndex); 
      
        if (objectIndex === -1) return;
      
        const updatedObject = { ...result[objectIndex], data: newSubFieldValue };
      
        const updatedArray = [...result];
        updatedArray[objectIndex] = updatedObject;
      
        setResult(updatedArray); 
      };


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
  

    // this.state.seriesMixedChart.forEach((s) => {
    //   const data = s.data.map(() => {
    //     return Math.floor(Math.random() * (max - min + 1)) + min;
    //   });
    //   newMixedSeries.push({ data: data, type: s.type });
    // });

    


    return (
     <>
      <Chart 
        options={{
          chart: {
            id: 'line chart'
          },
          xaxis: {
            categories: category
          },
          markers: {
            size: 3,
            strokeWidth: 3,
            fillOpacity: 0,
            strokeOpacity: 0,
            hover: {
              size: 8
            }
          },
          yaxis: {
            tickAmount: 5,
            min: 0,
            max: maxValue,
          }
        }} 
      
        series= {result}
        width={800} 
        height={500} 
      />

      <Button onClick={updateSubField(0,getResultWithUserInput(100,0,0.04))}>click </Button>
      
 
    </>
    );
}; 
  

export default InvestChart;
