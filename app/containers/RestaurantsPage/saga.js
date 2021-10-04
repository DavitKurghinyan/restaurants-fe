/**
 * Restaurants list page
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_RESTAURANTS_LIST } from './constants';
import {
  FailedSaveRestaurantListAction,
  SaveRestaurantListAction,
}                                 from './actions';
import { fetchRestaurantsList }   from '../../services/restaurants.service';

/**
 * Get all restaurants
 */
export function* getRestaurants() {
  try {
    // Call our request helper (see 'utils/request')
    const { result: restaurants } = yield call(fetchRestaurantsList);
    const filteredRestaurants = restaurants.map(restaurant => ({
      ...restaurant,
      lat: parseFloat(restaurant.lat),
      lon: parseFloat(restaurant.lon),
    }));
    yield put(SaveRestaurantListAction(filteredRestaurants));
  } catch (err) {
    yield put(FailedSaveRestaurantListAction());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* restaurantsSagas() {
  yield takeLatest(FETCH_RESTAURANTS_LIST, getRestaurants);
}
