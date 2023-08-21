import styled from 'styled-components'; 

export const BigContainer = styled.div`
  display: flex; 
  flex-direction: column; 
  border: 3px solid pink; 
  @media (min-width:950px){
    display: flex; 
    flex-direction: row;
    border: 3px solid pink; 
  }
`;
export const SpendingFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
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