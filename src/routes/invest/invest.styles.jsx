import styled from 'styled-components'; 

export const InvestPageBodyContainer = styled.div`
    width:100%; 
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    display: flex;
    justify-content: space-between;
    
`; 


export const InvestCalcContainer= styled.div`
    width:60%;
    height:100%; 
    display: flex; 
    flex-direction: column; 
    border: solid 1px black; 
    &calc {
        display: flex;
        border: solid 1px pink; 
    }
    
`; 

export const SpendingContainer= styled.div`
    width:60%;
    height:100%; 
    display: flex; 
    flex-direction: column; 
    background-color: pink; 
    
`; 

