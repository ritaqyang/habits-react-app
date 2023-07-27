import Donut from "./spending-chart.component"; 
import ApexCharts from "apexcharts";
import Chart from 'react-apexcharts'; 
import { useSelector } from "react-redux/es/hooks/useSelector";
import { selectSpending } from "../../../store/spending/spending.selector";

const TestDonut = (props) => {

    
   
   
    return(
        <>
        <Donut series={props.series} />
    
        </>
    )
}; 


export default TestDonut; 
