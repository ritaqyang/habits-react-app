import InvestCalculator from "../../components/investment/invest-calculator/invest-calculator.component";

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
            <InvestCalcContainer>
                <h2>this is investment page </h2> 

                <InvestCalculator title={"What would your investment look like if you start today"}/>
                <InvestCalculator title={"What would your investment look like if you started 5 years ago today"}/>
                
            </InvestCalcContainer>

         
            <SpendingContainer>
                <h2>Do your spending habits match your priorities and goals? </h2>
                
               
                <Donutchart />
            </SpendingContainer>

           
        </InvestPageBodyContainer>
    )
}; 

export default Invest; 