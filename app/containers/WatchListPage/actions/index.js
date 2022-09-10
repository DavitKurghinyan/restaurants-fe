import {
  FAILED_FETCH_WATCH_LIST,
  FETCH_WATCH_LIST,
  SAVE_WATCH_LIST,
} from '../constants';

export const FetchWatchListAction = body => ({
  type: FETCH_WATCH_LIST,
  body,
});

export const SaveWatchListAction = (data, next) => ({
  type: SAVE_WATCH_LIST,
  data,
  next,
});

export const FailedSaveWatchListAction = () => ({
  type: FAILED_FETCH_WATCH_LIST,
});
