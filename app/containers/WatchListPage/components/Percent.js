import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import * as Styled from '../styled';

const BORDER_COLORS = {
  GREEN: 'green',
  RED: 'red',
  ORANGE: 'orange',
};

const Percent = ({ percent = 0 }) => {
  const [borderColor, setBorderColor] = useState(BORDER_COLORS.GREEN);

  useEffect(() => {
    if (percent <= 25) {
      setBorderColor(BORDER_COLORS.ORANGE);
    }
    if (percent > 25 && percent < 65) {
      setBorderColor(BORDER_COLORS.RED);
    }
  }, [percent]);

  return (
    <Styled.PercentBlock borderColor={borderColor}>
      {`${percent}%`}
    </Styled.PercentBlock>
  );
};

Percent.propTypes = {
  percent: PropTypes.number,
};

export default Percent;
