import styled from 'styled-components';
import {
  extraSmallPadding,
  normalFontSize,
  primaryColor,
  smallPadding,
} from '../../styles/variables';

export const StyledButton = styled.button`
  background: transparent;
  font-size: ${normalFontSize};
  padding: ${extraSmallPadding} ${smallPadding};
  color: ${primaryColor};
  border: 1px solid ${primaryColor};
  cursor: pointer;
  -webkit-transition: background 0.5s;
  transition: background 0.5s;

  &:hover {
    color: white;
    background-color: ${primaryColor};
  }
`;
