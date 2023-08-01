
import House from "../../components/spline/house.component";
import SpendingForm from "../../components/forms/invest-forms/spending-form/spending-form.component";
import { useSelector } from "react-redux";
import { selectSpending } from "../../store/spending/spending.selector";
import InvestChart from "../../components/charts/investment-chart/investment-chart.component";

const SocialPage = () => {

    const arr = useSelector(selectSpending).spendArray; 
    console.log("social page re-rendering, current selector array is " + arr); 

    

    return (
        <div>
            this is the social page under construction :3 

            <InvestChart /> 
            
            
            
            
        </div>
    )
}; 

export default SocialPage; 