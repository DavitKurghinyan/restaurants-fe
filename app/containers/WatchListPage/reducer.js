/*
 * watchListReducer
 */

import produce from 'immer';

import {
  FETCH_WATCH_LIST,
  SAVE_WATCH_LIST,
  FAILED_FETCH_WATCH_LIST,
} from './constants';

// The initial state of the App
export const initialState = {
  watchLists: {},
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const watchListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FETCH_WATCH_LIST:
        draft.loading = true;
        break;
      case SAVE_WATCH_LIST:
        draft.loading = false;
        if (action.next) {
          action.data.stories = [
            ...state.watchLists.stories,
            ...action.data.stories,
          ];
        }
        draft.watchLists = action.data;
        break;
      case FAILED_FETCH_WATCH_LIST:
        draft.loading = false;
        // do something else if it will be needed
        break;
    }
  });

export default watchListReducer;
