/*
 * restaurantsReducer
 */

import produce from 'immer';

import {
  FAILED_FETCH_RESTAURANTS_LIST,
  FETCH_RESTAURANTS_LIST,
  SAVE_RESTAURANTS_LIST,
} from './constants';

// The initial state of the App
export const initialState = {
  restaurantsList: [],
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const restaurantsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_RESTAURANTS_LIST:
        draft.loading = true;
        break;
      case SAVE_RESTAURANTS_LIST:
        draft.loading = false;
        draft.restaurantsList = action.restaurants;
        break;
      case FAILED_FETCH_RESTAURANTS_LIST:
        draft.loading = false;
        // do something else if it will be needed
        break;
    }
  });

export default restaurantsReducer;
