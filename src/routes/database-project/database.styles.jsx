import styled from 'styled-components';

export const Header = styled.div`
    
    width: 100%;
    display: flex; 
    flex-direction: column;
    height: 100rem;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
`;

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

export const IntroSecondContainer = styled.div`
    width: 50%; 
    display: flex; 
    font-size: 2rem; 
    padding: 0 5rem 0 5rem;

`;

