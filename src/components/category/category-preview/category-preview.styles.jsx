import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  width:100%;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

export const Preview = styled.div`
  display: flex;
  width: 100%;
`;
export const FeatureBox = styled.div`
  display: flex; 
  padding: 2rem; 
  //border: 3px solid red; 

`;



