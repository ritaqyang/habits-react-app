import InvestChart from '../../components/charts/investment-chart/investment-chart.component';

import {
    InvestCalcContainer,
    InvestPageBodyContainer,
    SpendingContainer,
} from './invest.styles'; 
import InvestCalcForm from "../../components/forms/invest-forms/invest-calculator-form/invest-calc-form.component";
import Donutchart from "../../components/charts/spending-chart/donut.component";
const Invest = () => {
    return (
        <InvestPageBodyContainer>

            <h3>click estimate to see what the results look like with 500 initial investment and 100 monthly contribution! </h3>
            
            
            <InvestChart />
            <SpendingContainer>
                <h2>Do your spending habits match your priorities and goals? </h2>
                
               
                <Donutchart />
            </SpendingContainer>

           
        </InvestPageBodyContainer>
    )
}; 

export default Invest; 