import styled from 'styled-components';

import Img from '../Img';
import {
  extraSmallPadding,
  mediumFontSize,
  smallFontSize,
  extraSmallMargin,
  smallPadding,
  mediumPadding,
  greyColor,
  smallMargin,
  primaryColor,
  boulderColor,
} from '../../styles/variables';

export const Wrapper = styled.div`
  width: 350px;
  padding: ${smallPadding};
  box-shadow: 0 ${smallPadding} ${mediumPadding} 1px ${greyColor};
  margin-bottom: ${smallMargin};
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardImg = styled(Img)`
  width: 50%;
  border-radius: 0.5em;
`;

export const CardInfo = styled.div`
  padding-left: ${extraSmallPadding};
  width: 50%;
`;

export const Title = styled.h4`
  font-size: ${mediumFontSize};
  margin: ${extraSmallMargin} 0;
  color: ${primaryColor};
  cursor: pointer;
`;

export const Description = styled.p`
  font-size: ${smallFontSize};
  color: ${boulderColor};
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
