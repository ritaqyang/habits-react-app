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
    name: "4%",
    type:"line",
    data: [15250, 41943, 77618, 116848, 159987, 207424]
  },
  
  {
    name: "5%",
    type:"column",
    data: [15250, 43261, 82226, 127200, 179107, 239017]
  },
  {
    name: "5%",
    type:"line",
    data: [15250, 43261, 82226, 127200, 179107, 239017]
  },
  {
    name: "6%",
      
    data: [15250, 44630,87186, 138736, 201183,276828]
  }
]; 



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
            max: 240000,
          }
        }} 
        // series={[{
        //   name: 'series-1',
        //   data: data
        //   },
        //   {
        //     name: 'series-2',
        //     data: [15250, 43261, 82226, 127200, 179107, 239017]
        //   }
        // ]}
        series= {defaultResult}
        
        width={800} 
        height={500} 
      />
      
 
    </>
    );
}; 
  

export default InvestChart;
