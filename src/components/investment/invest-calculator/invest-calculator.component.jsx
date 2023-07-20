import InvestChart from "../../charts/investment-chart/investment-chart.component";
import InvestCalcForm from "../../forms/investment-page-forms/invest-calculator-form/invest-calc-form.component";

const InvestCalculator = () => {
    return (
        <div>
            <h2>this is a investment calculator! </h2>
            <InvestCalcForm />
            <InvestChart /> 
        </div>
    )
}; 

export default InvestCalculator; 
