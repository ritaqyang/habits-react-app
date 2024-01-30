import styled from 'styled-components'; 

export const BigContainer = styled.div`
  display: flex; 
  //border: 3px solid pink; 
  padding: 1rem; 
  width: 100%; 
  
`;

export const CalendarsContainer = styled.div`

    display: flex; 
    //border: 3px solid blue; 
    padding: 1rem; 
    width: 100%; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;


`;

export const NameContainer = styled.div`
    font: 2rem;
    justify-content: space-evenly; 
    //border: 1px solid orange;
    padding: 0 0 1rem 2rem;
`;
export const CalendarContainer = styled.div`
    display: flex; 
    //border: 2px solid red; 
    flex-direction: column; 
    padding: 1rem; 
    margin: 1rem;
    justify-content: center;

`;