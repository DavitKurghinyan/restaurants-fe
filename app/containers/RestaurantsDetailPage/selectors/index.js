/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

import { initialState } from '../reducer';

const selectRestaurantDetail = state => state.restaurantDetail || initialState;

const makeSelectRestaurantDetail = () =>
  createSelector(
    selectRestaurantDetail,
    restaurantDetailState => restaurantDetailState.restaurantDetail,
  );

const makeSelectRestaurantDetailPageLoading = () =>
  createSelector(
    selectRestaurantDetail,
    restaurantDetailState => restaurantDetailState.loading,
  );

const makeSelectReviews = () =>
  createSelector(
    selectRestaurantDetail,
    restaurantDetailState => restaurantDetailState.reviews,
  );

export {
  makeSelectRestaurantDetail,
  makeSelectRestaurantDetailPageLoading,
  makeSelectReviews,
};
