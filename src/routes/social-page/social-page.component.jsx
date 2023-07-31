
import House from "../../components/spline/house.component";
import SpendingForm from "../../components/forms/invest-forms/spending-form/spending-form.component";
import { useSelector } from "react-redux";
import { selectSpending } from "../../store/spending/spending.selector";
import Donut from "../../components/charts/spending-chart/spending-chart.component";
import Donutchart from "../../components/charts/spending-chart/donut.component";
import Button from "../../components/button/button.component";

const SocialPage = () => {

    const arr = useSelector(selectSpending).spendArray; 
    console.log("social page re-rendering, current selector array is " + arr); 

    

    return (
        <div>
            this is the social page under construction :3 

            <Donutchart />
            
            
            
            
        </div>
    )
}; 

export default SocialPage; 