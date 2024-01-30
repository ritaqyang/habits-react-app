import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    height: 100vh; 
    width: 100%;
  height: 100vh; /* changed to 100vh for visibility */
  background: conic-gradient(at 50% 25%, transparent 75%, #47d3ff 0),
    conic-gradient(at 50% 25%, transparent 75%, #47d3ff 0) 60px 60px,
    conic-gradient(at 50% 25%, transparent 75%, #47d3ff 0) calc(2 * 60px)
      calc(2 * 60px),
    conic-gradient(at 50% 25%, transparent 75%, #47d3ff 0) calc(3 * 60px)
      calc(3 * 60px),
    repeating-linear-gradient(135deg, #adafff 0 12.5%, #474bff 0 25%);
  background-size: calc(4 * 60px) calc(4 * 60px);
    

`;

export const CategoryContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
    padding: 10rem;
    border: 3px solid green; 

   
`;

export const WebsiteFeatures = styled.div`
  text-align: center; 
  padding: 5rem;
  &:hover {
    text-align: center; 
    border: 1.5px solid black;
   
  }
`;

export const FeatureBox = styled.div`
  display: flex; 
  padding: 2rem; 
  //border: 3px solid red; 

`;

