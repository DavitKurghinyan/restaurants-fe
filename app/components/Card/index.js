import React from 'react';

import * as Styled from './styled';

import restaurantImg from '../../images/restaurant.jpg';
import CustomText from '../Text';
import CustomRate from '../Rate';
import { StyledButton } from '../Button';

function CardItem({ title, description, rate, onBtnClick, onTitleClick }) {
  return (
    <Styled.Wrapper>
      <Styled.CardInfoWrapper>
        <Styled.CardImg src={restaurantImg} alt="restaurant-img" />
        <Styled.CardInfo>
          <Styled.Title onClick={onTitleClick}>{title}</Styled.Title>
          <Styled.Description>
            <CustomText text={description} />
          </Styled.Description>
        </Styled.CardInfo>
      </Styled.CardInfoWrapper>
      <Styled.CardFooter>
        <CustomRate value={rate} isDisabled />
        <StyledButton onClick={onBtnClick}>View Restaurant</StyledButton>
      </Styled.CardFooter>
    </Styled.Wrapper>
  );
}

export default CardItem;
