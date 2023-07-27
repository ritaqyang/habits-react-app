
import { selectSpending } from "../../../store/spending/spending.selector";
import Donut from "../../charts/spending-chart/spending-chart.component";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useEffect, useState} from "react";
import Button from "../../button/button.component";
import testDonut from "../../charts/spending-chart/test.component";
import SpendingForm from "../../forms/invest-forms/spending-form/spending-form.component"
const Spending = () => {

    
    

    return (
        <div>
            
            <SpendingForm />
           
        </div>
    )
}; 

export default Spending; 