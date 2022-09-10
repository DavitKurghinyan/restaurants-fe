import styled from 'styled-components';
import { blueColor } from '../../styles/variables';

export const HeaderBlock = styled.div`
  display: flex;
  padding: 15px 0;
  justify-content: space-between;
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${blueColor};
  }
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-right: 20px;
  height: 40px;
`;

export const Line = styled.span`
  width: 30px;
  height: 2px;
  background: ${blueColor};
`;

export const Account = styled.div`
  svg {
    width: 30px;
    color: ${blueColor};
  }
`;
