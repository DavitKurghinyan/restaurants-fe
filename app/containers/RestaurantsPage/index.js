/*
 * RestaurantsPage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo, useEffect, useState } from 'react';
import { Helmet }                           from 'react-helmet';
import { connect }                          from 'react-redux';
import { compose }                          from 'redux';
import { createStructuredSelector }         from 'reselect';

import { useInjectReducer }           from 'utils/injectReducer';
import { useInjectSaga }              from 'utils/injectSaga';
import _                              from 'lodash';
import reducer                        from './reducer';
import saga                           from './saga';
import CardItem                       from '../../components/Card';
import * as Styled                    from './styled';
import Map                            from '../../components/Map';
import { FetchRestaurantsListAction } from './actions';
import {
  makeSelectRestaurantsList,
  makeSelectRestaurantsPageLoading,
}                                     from './selectors';
import H1                             from '../../components/H1';

const key = 'restaurants';

export function RestaurantsPage({
                                  restaurants = [],
                                  fetchRestaurantsList,
                                  history,
                                }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    fetchRestaurantsList();
  }, []);

  const [selectedRestaurant, selectRestaurant] = useState({});

  const navigateToDetailsPage = id => {
    history.push(`/restaurants/${id}`);
  };

  const handleTitleClick = (lat, lng) => {
    selectRestaurant({
      lat,
      lng,
    });
  };

  return (
    <article>
      <Helmet>
        <title>Restaurants Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Styled.MainWrapper>
        <Styled.ListWrapper>
          {!_.isEmpty(restaurants)
            ? _.map(restaurants, restaurant => (
              <CardItem
                key={restaurant.id}
                title={restaurant.name}
                description={restaurant.description}
                rate={restaurant.rate}
                onTitleClick={() =>
                  handleTitleClick(restaurant.lat, restaurant.lon)
                }
                onBtnClick={() => navigateToDetailsPage(restaurant.id)}
              />
            ))
            : null}
        </Styled.ListWrapper>
        <Map
          onMarkerClick={navigateToDetailsPage}
          selectedLocation={selectedRestaurant}
          locations={restaurants}
        />
      </Styled.MainWrapper>
    </article>
  );
}

const mapStateToProps = createStructuredSelector({
  restaurants: makeSelectRestaurantsList(),
  loading    : makeSelectRestaurantsPageLoading(),
});

export const mapDispatchToProps = {
  fetchRestaurantsList: FetchRestaurantsListAction,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RestaurantsPage);
