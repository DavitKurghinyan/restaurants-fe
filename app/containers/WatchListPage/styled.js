import styled from 'styled-components';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
} from '@material-ui/core';
import {
  bigFontSize,
  blackColor,
  blueColor,
  boulderColor,
  extraSmallPadding,
  greyColor,
  largePadding,
  primaryColor,
  smallPadding,
  titleFontSize,
  whiteColor,
} from '../../styles/variables';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1360px;
`;

export const MainWrapperHeading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 1360px;
  align-items: baseline;
  position: relative;

  h3 {
    color: ${blueColor};
    font-size: ${titleFontSize};
    margin: 0;
  }

  @media screen and (max-width: 1367px) {
    flex-direction: row;
    justify-content: flex-end;
    min-height: 100px;

    h3 {
      position: absolute;
      left: 0;
    }
  }
  @media screen and (max-width: 767px) {
    //flex-direction: column;
  }
`;

export const ListWrapper = styled.div``;

export const Item = styled(Accordion)`
  margin-bottom: 10px;
`;

export const ItemBlock = styled(AccordionSummary)`
  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ImageBlock = styled.div`
  display: flex;

  img {
    margin-right: 20px;
  }
`;

export const ExpandedAccordion = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
`;

export const CommentsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  border-top: 1px solid silver;
  margin-top: 10px;
`;

export const CommentsButton = styled(Button)`
  &:last-child {
    margin-right: 0 !important;
  }

  margin-right: 30px !important;

  svg {
    margin-right: 10px;
  }

  &:hover {
    color: #0f5be3 !important;
  }
`;

export const DomainBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 30px;
`;

export const DomainInfo = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-right: 20px;
  }
`;

export const LinkTo = styled.a`
  text-decoration: none;
  padding: 0 22px;
  color: black;
  font-size: 16px;
  font-weight: 600;
`;
export const Text = styled.p``;

export const FiltersBlock = styled.div`
  @media screen and (max-width: 1367px) {
    width: 100%;
  }
`;
export const FilterHeading = styled.div`
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 1367px) {
    justify-content: flex-end;
  }
`;
export const FilterButton = styled.button`
  font-size: ${bigFontSize};
  padding: ${smallPadding} ${largePadding};
  color: ${whiteColor};
  color: ${blackColor};
  background: ${props => (props.isFilterActive ? greyColor : whiteColor)};
  border: 1px solid
    ${props => (props.isFilterActive ? 'transparent' : boulderColor)};
  word-break: normal;
  border-radius: 5px;
  cursor: pointer;
  -webkit-transition: background 0.5s;
  transition: background 0.5s;
  margin-right: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;

  &:hover {
    color: white;
    background-color: ${primaryColor};

    & > svg {
      fill: ${whiteColor};
    }
  }

  svg {
    fill: ${blueColor};
    width: 22px;
    margin: 5px;
  }

  @media screen and (max-width: 1367px) {
    padding: ${extraSmallPadding} ${smallPadding};
  }
`;

export const TriangleBlock = styled.span`
  svg {
    position: absolute;
    bottom: -25px;
    height: 25px;
    left: 0;
    right: 0;
    margin: auto;
    fill: ${greyColor};
  }
`;

export const FilterBody = styled.div`
  display: flex;
  background: #efefef;
  padding: 40px 50px;
  justify-content: space-around;
  margin-bottom: 30px;
  border-radius: 10px;

  & > div {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  @media screen and (max-width: 1367px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const PercentBlock = styled.div`
  width: 77px;
  height: 60px;
  min-width: 77px;
  min-height: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  word-break: normal;
  padding: 0;
  font-size: 20px;
  border: 1px solid ${props => props.borderColor};
  color: ${props => props.borderColor};
`;
