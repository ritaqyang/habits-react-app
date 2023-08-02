import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -18px;
  font-size: 15px;
  color: ${mainColor};
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 15px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 50%;
  top: 8px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles};
`;

export const Input = styled.input`
  background: none;
  background-color: white;
  color: ${subColor};
  font-size: 15px;
  padding: 3px 3px 5px 10px;
  display: block;
  width: 100%;
  border-radius: 0;
  border: 1px solid ${subColor};
  margin: 5px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles};
  }
`;

export const Group = styled.div`
  display: flex;
  flex-wrap: wrap; 
  position: relative;
  margin: 20px 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`;
