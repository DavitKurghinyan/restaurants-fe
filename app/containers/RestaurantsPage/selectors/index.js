/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from '../reducer';

const selectRestaurants = state => state.restaurants || initialState;

const makeSelectRestaurantsList = () =>
  createSelector(
    selectRestaurants,
    restaurantsState => restaurantsState.restaurantsList,
  );

const makeSelectRestaurantsPageLoading = () =>
  createSelector(
    selectRestaurants,
    restaurantsState => restaurantsState.loading,
  );

export { makeSelectRestaurantsList, makeSelectRestaurantsPageLoading };
