import styled from 'styled-components';

export const RestaurantBlock = styled.div`
  display: flex;
  padding: 15px 25px;
`;

export const RestaurantHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const RestaurantTitle = styled.h2`
  font-size: 20px;
`;

export const RestaurantDescription = styled.p`
  font-size: 18px;
`;

export const RestaurantPhone = styled.a`
  ${props => props.href};
  font-size: 16px;
  text-decoration: none;
  color: black;
`;

export const RestaurantAddress = styled.address`
  font-size: 16px;
  font-style: italic;
`;

export const RestaurantTiming = styled.p`
  font-size: 16px;
  margin-top: 0;
`;

export const RestaurantChangeRate = styled.div`
  padding: 0 20px;
  font-size: 32px;
`;
export const RestaurantReviewHead = styled.h3`
  font-size: 18px;
`;

export const RestaurantReviewSendBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 540px;
`;

export const RestaurantReviewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const RestaurantReviews = styled.div`
  box-shadow: 1px 0 0 2px #00000007;
  border-radius: 15px;
  padding: 10px 15px;
  border: 0;
  margin-bottom: 15px;
  display: block;
  font-size: 16px;
  line-height: 25px;
  min-height: 60px;
  overflow: hidden;
  resize: none;
  width: 500px;
  outline: none;
`;

export const WriteReviews = styled.textarea`
  box-shadow: 1px 0 0 2px #00000007;
  border-radius: 15px;
  padding: 8px 15px;
  border: 0;
  margin: 5px 10px 10px;
  display: block;
  font-size: 16px;
  line-height: 25px;
  min-height: 60px;
  overflow: hidden;
  resize: none;
  width: 500px;
  outline: none;
`;
