
import { selectSpending } from "../../../store/spending/spending.selector";
import Donut from "../../charts/spending-chart/spending-chart.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState} from "react";
import Button from "../../button/button.component";
import testDonut from "../../charts/spending-chart/test.component";
import SpendingForm from "../../forms/invest-forms/spending-form/spending-form.component"
const Spending = () => {
    
    const spendingObj = useSelector(selectSpending); 
    const array = spendingObj.spendArray; 
    console.log("retrieving from spend store" + array); 
    const newArray = [1,2,3,4,5,6]; 

    const myFunction = (newArray) => {
        const newDonut = new Donut(); 
        newDonut.updateCharts(newArray); 
    }; 



    return (
        <div>
            
            
            <SpendingForm />
            <Button type="graph" onClick={myFunction(newArray)} > Generate Donut</Button> 
            <Donut /> 
        </div>
    )
}; 

export default Spending; 