import React from 'react';
import * as Styled from './styled';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { Account } from '../../images/svgs/account';
import { ExpandMore } from '../../images/svgs/expandMore';
import { Logo } from '../../images/svgs/logo';

const Header = () => {
  const windowDimensions = useWindowDimensions();
  return (
    <Styled.HeaderBlock>
      <Styled.LogoBlock>
        {windowDimensions.width < 1367 ? (
          <Styled.Menu>
            <Styled.Line />
            <Styled.Line />
            <Styled.Line />
          </Styled.Menu>
        ) : null}
        <Logo />
      </Styled.LogoBlock>
      <Styled.Account>
        <Account />
        <ExpandMore />
      </Styled.Account>
    </Styled.HeaderBlock>
  );
};

export default Header;
