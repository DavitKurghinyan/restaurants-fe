/**
 * Watchlist page
 */

import { call, put, takeLatest } from 'redux-saga/effects';

import { FETCH_WATCH_LIST } from './constants';
import { FailedSaveWatchListAction, SaveWatchListAction } from './actions';
import { fetchWatchList } from '../../services/watchlists.service';

/**
 * Get all WatchLists
 */
export function* getWatchLists({ body }) {
  try {
    const data = yield call(fetchWatchList, body);
    yield put(SaveWatchListAction(data, !!body.next_page_token));
  } catch (err) {
    yield put(FailedSaveWatchListAction());
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchListSagas() {
  yield takeLatest(FETCH_WATCH_LIST, getWatchLists);
}
