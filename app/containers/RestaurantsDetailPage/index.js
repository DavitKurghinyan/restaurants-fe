/*
 * FeaturePage
 *
 * List all the features
 */
import React, { memo, useEffect, useState } from 'react';
import { Helmet }                           from 'react-helmet';
import { connect }                          from 'react-redux';
import { compose }                          from 'redux';
import { createStructuredSelector }         from 'reselect';
import _                                    from 'lodash';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga }    from 'utils/injectSaga';
import reducer              from './reducer';
import saga                 from './saga';

import {
  FetchRestaurantDetailAction,
  FetchReviewsAction,
  SendReviewAction,
  SetRateAction,
}                       from './actions';
import {
  makeSelectRestaurantDetail,
  makeSelectRestaurantDetailPageLoading,
  makeSelectReviews,
}                       from './selectors';
import * as Styled      from './styled';
import CustomRate       from '../../components/Rate';
import { StyledButton } from '../../components/Button';

const key = 'restaurantDetail';

function RestaurantDetailPage({
                                restaurantDetail,
                                loading,
                                reviews,
                                fetchRestaurantDetail,
                                fetchReviews,
                                addReview,
                                setRate,
                                history,
                              }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    const { location }     = history;
    const splittedPathname = location.pathname.split('/');
    const locationId       = splittedPathname[splittedPathname.length - 1];

    if (locationId) {
      setRestaurantId(locationId);
      fetchRestaurantDetail(locationId);
      fetchReviews(locationId);
    }
  }, []);

  const [reviewText, setReviewText]     = useState('');
  const [restaurantId, setRestaurantId] = useState('');
  const [selectedRate, setSelectedRate] = useState('');

  const changeRate = rate => {
    setSelectedRate(rate);
    setRate(restaurantId, rate);
  };

  const handleReviewChange = ({ target }) => {
    const { value } = target;
    setReviewText(value);
  };

  const handleReviewSubmit = () => {
    if (reviewText) {
      addReview(restaurantId, reviewText);
      setReviewText('');
    }
  };

  return (
    <div>
      <Helmet>
        <title>Restaurant Detail</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <Styled.RestaurantBlock>
        <Styled.RestaurantHeading>
          <Styled.RestaurantTitle>
            {restaurantDetail.name}
          </Styled.RestaurantTitle>
          <CustomRate isDisabled value={restaurantDetail.rate}/>
          <Styled.RestaurantDescription>
            {restaurantDetail.description}
          </Styled.RestaurantDescription>
          <Styled.RestaurantAddress>
            address: {restaurantDetail.address}
          </Styled.RestaurantAddress>
          <Styled.RestaurantPhone href={`tel::${restaurantDetail.phone}`}>
            phone: {restaurantDetail.phone}
          </Styled.RestaurantPhone>
          <Styled.RestaurantTiming>
            timing: {restaurantDetail.timing}
          </Styled.RestaurantTiming>
        </Styled.RestaurantHeading>
      </Styled.RestaurantBlock>
      <Styled.RestaurantReviewBlock>
        {!_.isEmpty(reviews) ? (
          <>
            <Styled.RestaurantReviewHead>
              Restaurant Reviews
            </Styled.RestaurantReviewHead>
            {_.map(reviews, review => (
              <Styled.RestaurantReviews key={review.id}>
                {review.description}
              </Styled.RestaurantReviews>
            ))}
          </>
        ) : null}
      </Styled.RestaurantReviewBlock>
      <Styled.RestaurantChangeRate>
        <CustomRate value={selectedRate} change={changeRate}/>
      </Styled.RestaurantChangeRate>
      <Styled.RestaurantReviewSendBlock>
        <Styled.WriteReviews
          value={reviewText}
          onChange={handleReviewChange}
        />
        <StyledButton onClick={handleReviewSubmit}>Send Review</StyledButton>
      </Styled.RestaurantReviewSendBlock>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  restaurantDetail: makeSelectRestaurantDetail(),
  loading         : makeSelectRestaurantDetailPageLoading(),
  reviews         : makeSelectReviews(),
});

export const mapDispatchToProps = {
  fetchRestaurantDetail: FetchRestaurantDetailAction,
  fetchReviews         : FetchReviewsAction,
  addReview            : SendReviewAction,
  setRate              : SetRateAction,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(RestaurantDetailPage);
