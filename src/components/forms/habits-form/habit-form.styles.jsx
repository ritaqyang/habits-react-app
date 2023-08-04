import styled from 'styled-components'; 

export const HabitContainer = styled.div`
  display: flex;

  h2 {
    margin: 10px 0;
    color: black;
  }
  margin: 1rem;

  font-family: 'Verdana';

`; 


export const HalfContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction:column; 
  padding: 0.5rem; 
  margin: 2rem; 

`; 

export const ExisitngHabitsContainer = styled.div`
  display: flex; 
  padding: 1rem 1rem 3rem 3rem; 
  margin: 1rem 1rem 0 0;
  border: 1px solid; 
`; 



// .sign-up-container {
//     display: flex;
//     flex-direction: column;
//     width: 380px;
  
//     h2 {
//       margin: 10px 0;
//       color: black; 
//     }
  
//     .buttons-container {
//       display: flex;
//       justify-content: space-between;
//     }
//   }