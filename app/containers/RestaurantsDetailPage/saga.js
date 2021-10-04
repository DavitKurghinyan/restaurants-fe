/**
 * Restaurant detail saga
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import {
  FETCH_RESTAURANT_DETAIL,
  FETCH_REVIEWS,
  SEND_REVIEW,
  SET_RATE,
} from './constants';
import {
  FailedFetchRestaurantDetailAction,
  FetchReviewsAction,
  SaveRestaurantDetailAction,
  SaveReviewsAction,
} from './actions';
import { fetchRestaurantsDetail } from '../../services/restaurants.service';
import {
  addReview,
  getAllReviews,
  updateRate,
} from '../../services/reviews.service';

/**
 * Get restaurant detail
 */
export function* getRestaurantDetail({ id }) {
  try {
    const {result: restaurantDetail} = yield call(fetchRestaurantsDetail, id);
    yield put(SaveRestaurantDetailAction(restaurantDetail));
  } catch (err) {
    yield put(FailedFetchRestaurantDetailAction());
  }
}

/**
 * Get reviews
 */
export function* getReviews({ restaurantId }) {
  try {
    const { result: reviews } = yield call(getAllReviews, restaurantId);
    yield put(SaveReviewsAction(reviews));
  } catch (err) {
    // TODO add logic here
  }
}

/**
 * Add new review
 */
export function* addNewReview({ restaurantId, review }) {
  try {
    // here I'm using static user ID for the all reviews because we don't have that functionality yet
    yield call(addReview, { description: review, restaurantId: parseInt(restaurantId), userId: 1 });
    yield put(FetchReviewsAction(restaurantId));
  } catch (err) {
    // TODO add logic here
  }
}

/**
 * Set rate
 */
export function* SetRate({ restaurantId, rate }) {
  try {
    yield call(updateRate, rate, restaurantId);
  } catch (err) {
    // TODO add logic here
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* restaurantsDetailSagas() {
  yield takeLatest(FETCH_RESTAURANT_DETAIL, getRestaurantDetail);
  yield takeLatest(FETCH_REVIEWS, getReviews);
  yield takeLatest(SEND_REVIEW, addNewReview);
  yield takeLatest(SET_RATE, SetRate);
}
