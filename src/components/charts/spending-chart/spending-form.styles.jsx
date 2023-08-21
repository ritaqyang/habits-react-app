import styled from 'styled-components'; 

export const BigContainer = styled.div`
  display: flex; 
  width: 100%;
  border: 3px solid pink; 
  padding: 2rem; 
  flex-wrap: wrap; 
  
`;
export const SpendingFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  
  padding: 1rem;
  border: 3px solid black; 
  h2 {
    margin: 10px 0;
    color: black;
  }


`; 

export const HalfContainer = styled.div`

  display: flex; 
  flex-direction: row;
  //border: 1px solid pink;  

`; 

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column; 
  padding: 2rem;
  

`; 

export const IndividualButton = styled.div`
  padding: 1rem; 

`;

export const ChartContainer = styled.div`

  border: 2px solid red;
  
`;