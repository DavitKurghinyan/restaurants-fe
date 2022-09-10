/**
 * CityFalcon Page selectors
 */

import { createSelector } from 'reselect';
import { initialState } from '../reducer';

const selectWatchLists = state => state.watchLists || initialState;

const makeSelectedWatchLists = () =>
  createSelector(
    selectWatchLists,
    watchListsState => watchListsState.watchLists,
  );

const makeSelectWatchListPageLoading = () =>
  createSelector(
    selectWatchLists,
    watchListsState => watchListsState.loading,
  );

export { makeSelectedWatchLists, makeSelectWatchListPageLoading };
