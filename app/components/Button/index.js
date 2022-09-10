import styled from 'styled-components';
import {
  blueColor,
  largePadding,
  mediumFontSize,
  primaryColor,
  smallPadding,
  whiteColor,
} from '../../styles/variables';

export const StyledButton = styled.button`
  font-size: ${mediumFontSize};
  padding: ${smallPadding} ${largePadding};
  color: ${whiteColor};
  background: ${blueColor};
  border: 1px solid ${primaryColor};
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: background 0.5s;
  transition: background 0.5s;
  word-break: normal;
  height: 55px;

  &:hover {
    color: white;
    background-color: ${primaryColor};
  }
`;
