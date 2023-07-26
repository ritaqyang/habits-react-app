import Donut from "./spending-chart.component"; 
import ApexCharts from "apexcharts";
import Chart from 'react-apexcharts'; 

const testDonut = () => {

    const newDonut = new Donut(); 

    return(
        <>
        {/* <Chart options={newDonut.state.options} series={newDonut.state.series} label={newDonut.state.labels} type="donut" width="380" /> */}
        <Donut />
        </>
    )
}; 


export default testDonut; 
