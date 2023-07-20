import InvestChart from "../../charts/investment-chart/investment-chart.component";
import InvestCalcForm from "../../forms/invest-forms/invest-calculator-form/invest-calc-form.component";
import { CalcContainer, CalcBodyContainer } from "./invest-calculator.styles";
const InvestCalculator = ({title}) => {
    return (
        <CalcContainer>
        
            <h2> {title}</h2>
            <span>write down what you can invest monthly </span>

            <CalcBodyContainer>
            <InvestChart />
            <InvestCalcForm />

            </CalcBodyContainer>
            
            
        </CalcContainer>
    )
}; 

export default InvestCalculator; 
