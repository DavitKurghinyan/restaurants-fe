import React from 'react';
import 'rc-rate/assets/index.css';

import * as Styled from './styled';

function CustomRate({ isDisabled, value, change }) {
  return (
    <Styled.StyledRate onChange={change} disabled={isDisabled} value={value} />
  );
}

export default CustomRate;
