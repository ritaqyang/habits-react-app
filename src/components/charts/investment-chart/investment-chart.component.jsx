import React, { Component, useEffect } from "react";
import Chart from "react-apexcharts";
import FormInput from "../../forms/form-input/form-input.component";
import Button from "../../button/button.component";
import {InvestFormContainer} from './investment-chart.styles'; 
import { useState } from "react";

const defaultFormFields = {
  monthlyAmount: 0,
  savingsAmount: 0,
};

const defaultCategory = [2023,2028, 2033, 2038,2043, 2048]; 
const defaultarray4 = [15250, 41943, 77618, 116848, 159987, 207424]; 
const defaultarray5 = [15250, 43261, 82226, 127200, 179107, 239017]; 
const defaultarray6 = [15250, 44630,87186, 138736, 201183,276828]; 
  

const calculateReturns = (initialInvestment, yearlyReturnRate, monthlyContribution, numOfMonths) => {
  const PV = initialInvestment; 
  const PMT = monthlyContribution; 
  const n = 12; //number of compounding periods 
  // const r = Math.pow(1 + yearlyReturnRate, 1 / 12) - 1;
  const r = yearlyReturnRate/n; 
  //const MonthlyReturns =  PMT * (((1 + r)**(numOfMonths) - 1) / r)
  //const initialInvestmentReturns = initialInvestment * ((1+r) ** n ); 

  const returns = PV * (1 + r)**(numOfMonths) + (PMT * numOfMonths)


  return Math.trunc(returns);
}; 

const calculateYearly = (initialInvestment, monthlyContribution, yearlyRate) => {
  const PV = initialInvestment; 
  const PMT = monthlyContribution; 
  const r = yearlyRate; 

  const returns = PV * (1+r) + PMT * 12; 

  return Math.trunc(returns); 

}






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

      const [category, setCategory] = useState(defaultCategory); 
      const [maxValue, setMaxValue] = useState(240000);       

      const [array4, setArray4 ] = useState(defaultarray4);
      const [array5, setArray5 ] = useState(defaultarray5); 
      const [array6, setArray6 ] = useState(defaultarray6); 


      
      const [formFields, setFormFields] = useState(defaultFormFields);
      const { monthlyAmount, savingsAmount } = formFields;
       const getResultWithUserInput = (monthly, initial, yearlyInterest) => {
        const array4 = []; 
        //get array for 4% return 

        var nextYear = initial; 
        for (let m = 0; m <= 25; m++) {
          nextYear  = calculateYearly(nextYear, monthly, yearlyInterest);
          if (m % 5 == 0 ){
            array4.push(nextYear);
          }

        }
      
        return array4; 
      }; 

      useEffect(() => {
        setArray4(getResultWithUserInput(300,10000,0.04)); 
        setArray5(getResultWithUserInput(300,10000,0.05));

      },[]); 



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
      
        series={ [
          {
            id:1, 
            name: "4%",
            type:"line",
            data: array4,
          },
          
          {
            id:2,
            name: "5%",
            type:"column",
            data: array5,
          },
          {
            id:3,
            name: "5%",
            type:"line",
            data: array5,
          },
          {
            id:4,
            name: "6%",
              
            data: [15250, 44630,87186, 138736, 201183,276828]
          }
        ] 
      }
        width={800} 
        height={500} 
      />

      
 
    </>
    );
}; 
  

export default InvestChart;
