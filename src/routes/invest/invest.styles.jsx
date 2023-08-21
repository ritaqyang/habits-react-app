import styled from 'styled-components'; 

export const InvestPageBodyContainer = styled.div`
    width:100%; 
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    column-gap: 1rem; 
    flex-wrap: wrap;
    flex-direction: row;
    
    
`; 


export const InvestCalcContainer= styled.div`
    
    display: flex; 
    width: 100%; 
    flex-direction: column; 
    border: solid 1px black; 
    &calc {
        display: flex;
        border: solid 1px pink; 
    }
    
`; 

export const SpendingContainer= styled.div`
   
    display: flex; 
    padding: 1rem; 
    flex-direction: column; 
    
    
`; 

