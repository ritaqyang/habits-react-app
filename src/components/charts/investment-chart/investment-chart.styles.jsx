import styled from 'styled-components'; 


export const BigContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  border: 3px solid pink; 
  width: 100%;
  @media (min-width:950px){
    display: flex; 
    flex-direction: row;
    border: 3px solid pink; 
  }
`;
export const InvestFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  padding: 2rem;
  h2 {
    margin: 10px 0;
    color: black;
  }


`; 


export const ChartContainer = styled.div`
  
  padding: 2rem; 
  width: 80%; 
  max-width:800px;
`;