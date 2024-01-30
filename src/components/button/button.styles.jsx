import styled from 'styled-components'; 

export const BaseButton = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    color: black;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: 1px solid black;
    cursor: pointer;
    display: flex;
    justify-content: center;
  
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid black;
    }
  
  

`; 
export const PinkButton = styled.button`
  padding: 15px;
  margin: 25px 0px;
  width: 290px;
  font-size: 15px;
  background: #DE5499;
  border-radius: 10px;
  font-weight: 800;
  box-shadow: 3px 3px 0px 0px #E99F4C;
`; 

export const GoogleSignInButton = styled(BaseButton)`
  background-color: rgba(29, 77, 220, 0.7);
  color: white;

  &:hover {
    background-color:rgba(29, 77, 220, 0.85);
    
    border: none;
    box-shadow: 0 20px 20px rgba(0, 0, 0, .2);
  }
`; 

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

// @import "../../sass/abstracts/variables"; 


// .button-container {
//     min-width: 165px;
//     width: auto;
//     height: 50px;
//     letter-spacing: 0.5px;
//     line-height: 50px;
//     padding: 0 35px 0 35px;
//     font-size: 15px;
//     color: black;
//     text-transform: uppercase;
//     font-family: 'Open Sans Condensed';
//     font-weight: bolder;
//     border: 1px solid black;
//     cursor: pointer;
//     display: flex;
//     justify-content: center;
  
//     &:hover {
//       background-color: white;
//       color: black;
//       border: 1px solid black;

//     }
  
//     &.google-sign-in {
//       background-color: rgba(29, 77, 220, 0.7);
//       color: white;
  
//       &:hover {
//         background-color:rgba(29, 77, 220, 0.85);
        
//         border: none;
//         box-shadow: 0 20px 20px rgba(0, 0, 0, .2);
//       }
//     }
  
//     &.inverted {
//       background-color: white;
//       color: black;
//       border: 1px solid black;
  
//       &:hover {
//         background-color: black;
//         color: white;
//         border: none;
//       }
//     }
//   }