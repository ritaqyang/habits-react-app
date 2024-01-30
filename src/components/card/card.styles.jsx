import styled from 'styled-components';

export const Card = styled.div`
  position: relative;
  width: 190px;
  height: 254px;
  background-color: #000;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 12px;
  gap: 12px;
  border-radius: 8px;
  cursor: pointer;
  color: white;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -5px;
    margin: auto;
    width: 200px;
    height: 264px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
    transition: filter 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:hover::before {
    transform: rotate(-90deg) scaleX(1.34) scaleY(0.77);
  }

  &:hover::after {
    filter: blur(30px);
  }
`;

export const Heading = styled.p`
  font-size: 20px;
  text-transform: capitalize;
  font-weight: 700;
`;

export const Content = styled.p`
  font-size: 14px;

  &:not(:first-child) {
    color: #e81cff;
    font-weight: 600;
  }
`;