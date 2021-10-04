import {
  FAILED_FETCH_RESTAURANTS_LIST,
  FETCH_RESTAURANTS_LIST,
  SAVE_RESTAURANTS_LIST,
} from '../constants';

export const FetchRestaurantsListAction = () => ({
  type: FETCH_RESTAURANTS_LIST,
});

export const SaveRestaurantListAction = restaurants => ({
  type: SAVE_RESTAURANTS_LIST,
  restaurants,
});

export const FailedSaveRestaurantListAction = () => ({
  type: FAILED_FETCH_RESTAURANTS_LIST,
});
