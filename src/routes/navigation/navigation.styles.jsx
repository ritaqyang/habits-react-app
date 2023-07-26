import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavigationContainer = styled.div`
  width: 100%;
  height: 75px;
  font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;

`;

export const NavLinks = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  border: 1px solid black; 
  cursor: pointer;å
  color: black; 
  &:hover {
    box-shadow: 0 1rem 2rem;
`;

export const NavLinkOut = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;å
  color: black; 
  &:hover {
    color: grey; 
`;
