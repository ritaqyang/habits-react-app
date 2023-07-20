import InvestCalculator from "../../components/investment/invest-calculator/invest-calculator.component";

import {
    InvestCalcContainer,
    InvestPageBodyContainer,
    SpendingContainer,
} from './invest.styles'; 

const Invest = () => {
    return (
        <InvestPageBodyContainer>
            <InvestCalcContainer>
                <h2>this is investment page </h2> 

                <InvestCalculator title={"What would your investment look like if you start today"}/>
                <InvestCalculator title={"What would your investment look like if you started 5 years ago today"}/>
                
            </InvestCalcContainer>

            <SpendingContainer>
                this is the spending container
            </SpendingContainer>

           
        </InvestPageBodyContainer>
    )
}; 

export default Invest; 