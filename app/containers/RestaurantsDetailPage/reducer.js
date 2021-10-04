/*
 * restaurantsDetailReducer
 */

import produce from 'immer';

import {
  FAILED_FETCH_RESTAURANT_DETAIL,
  FETCH_RESTAURANT_DETAIL,
  SAVE_RESTAURANT_DETAIL,
  SAVE_REVIEWS,
} from './constants';

// The initial state of the App
export const initialState = {
  restaurantDetail: {},
  loading: false,
  reviews: [],
};

/* eslint-disable default-case, no-param-reassign */
const restaurantsDetailReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_RESTAURANT_DETAIL:
        draft.loading = true;
        break;
      case SAVE_RESTAURANT_DETAIL:
        draft.loading = false;
        draft.restaurantDetail = action.restaurantDetail;
        break;
      case FAILED_FETCH_RESTAURANT_DETAIL:
        draft.loading = false;
        // do something else if it will be needed
        break;
      case SAVE_REVIEWS:
        draft.reviews = action.reviews;
        // do something else if it will be needed
        break;
    }
  });

export default restaurantsDetailReducer;
