import {
  FAILED_FETCH_RESTAURANT_DETAIL,
  FAILED_FETCH_REVIEWS,
  FETCH_RESTAURANT_DETAIL,
  FETCH_REVIEWS,
  SAVE_RESTAURANT_DETAIL,
  SAVE_REVIEWS,
  SEND_REVIEW,
  SET_RATE,
} from '../constants';

export const FetchRestaurantDetailAction = id => ({
  type: FETCH_RESTAURANT_DETAIL,
  id,
});

export const SaveRestaurantDetailAction = restaurantDetail => ({
  type: SAVE_RESTAURANT_DETAIL,
  restaurantDetail,
});

export const FailedFetchRestaurantDetailAction = () => ({
  type: FAILED_FETCH_RESTAURANT_DETAIL,
});

export const FetchReviewsAction = restaurantId => ({
  type: FETCH_REVIEWS,
  restaurantId,
});

export const SaveReviewsAction = reviews => ({
  type: SAVE_REVIEWS,
  reviews,
});

export const FailedFetchReviewsAction = () => ({
  type: FAILED_FETCH_REVIEWS,
});

export const SetRateAction = (restaurantId, rate) => ({
  type: SET_RATE,
  restaurantId,
  rate,
});

export const SendReviewAction = (restaurantId, review) => ({
  type: SEND_REVIEW,
  restaurantId,
  review,
});
