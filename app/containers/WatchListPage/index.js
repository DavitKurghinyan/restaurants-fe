/*
 * WatchListPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import PropTypes from 'prop-types';
import { useInjectSaga } from '../../utils/injectSaga';
import { useInjectReducer } from '../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import * as Styled from './styled';
import { FetchWatchListAction } from './actions';
import {
  makeSelectedWatchLists,
  makeSelectWatchListPageLoading,
} from './selectors';
import ListItem from './components/ListItem';
import FiltersBar from './components/FiltersBar';
import Header from '../../components/Header';
import LoadingIndicator from '../../components/LoadingIndicator';
import { LANGUAGES } from './constants';
import H3 from '../../components/H3';

const initialState = {
  limit: ['30'],
  order: ['top'],
  languages: ['en'],
  next_page_token: '',
};

const key = 'watchLists';

WatchListPage.propTypes = {
  watchLists: PropTypes.array,
  fetchWatchList: PropTypes.func,
  loading: PropTypes.bool,
};

export function WatchListPage({ fetchWatchList, watchLists = [], loading }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const [data, setData] = useState(initialState);
  const [refreshInterval, setRefreshInterval] = useState(null);

  const onCheckAll = () => {
    const languages = [];
    if (data.languages.includes('all')) {
      return languages;
    }
    LANGUAGES.map(lang => languages.push(lang.value));
    return languages;
  };

  const handleChange = (event, field, element) => {
    event.preventDefault();
    event.stopPropagation();
    let { value } = event.target;
    if (field === 'languages') {
      const clickedElem = element.props.value;
      if (clickedElem === 'all') {
        value = onCheckAll();
      } else if (data.languages.includes('all')) {
        value = data.languages.filter(
          item => item !== clickedElem && item !== 'all',
        );
      } else if (value.length === LANGUAGES.length - 1) {
        value = [...value, 'all'];
      }
    }

    setData({
      ...data,
      [field]: typeof value === 'string' ? value.split(',') : value,
    });
  };

  const changeRefreshInterval = ev => {
    setRefreshInterval(ev.target.value);
  };

  const onReset = () => {
    setData(initialState);
    setRefreshInterval(null);
  };

  const onReload = () => {
    fetchData();
  };

  const fetchData = () => {
    fetchWatchList(data);
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (refreshInterval) {
      const interval = setInterval(fetchData, Number(refreshInterval));
      return () => clearInterval(interval);
    }
  }, [refreshInterval]);

  useEffect(() => fetchData(), [data]);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight) {
        fetchWatchList({
          ...data,
          next_page_token: watchLists.next_page_token,
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [watchLists]);
  return (
    <article>
      <Helmet>
        <title>WatchList Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Header />
      <Styled.MainWrapper>
        <Styled.MainWrapperHeading>
          <H3>WatchList Name</H3>
          <FiltersBar
            handleChange={handleChange}
            data={data}
            refreshInterval={[refreshInterval]}
            setRefreshInterval={changeRefreshInterval}
            onReset={onReset}
            onReload={onReload}
          />
        </Styled.MainWrapperHeading>

        <Styled.ListWrapper>
          {watchLists &&
            watchLists.stories &&
            watchLists.stories.map((item, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ListItem item={item} key={`${item.id}${index}`} />
            ))}
        </Styled.ListWrapper>
        {loading && <LoadingIndicator />}
      </Styled.MainWrapper>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectWatchListPageLoading(),
  watchLists: makeSelectedWatchLists(),
});

export const mapDispatchToProps = {
  fetchWatchList: FetchWatchListAction,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(WatchListPage);
