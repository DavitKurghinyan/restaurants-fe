import request from '../utils/request';

export const getAllReviews = restaurantId =>
  request(`restaurants/reviews?restaurantId=${restaurantId}`);

export const addReview = body =>
  request(`restaurants/feedback`, {
    body: JSON.stringify(body),
    method: 'PUT',
  });

export const updateRate = (rate, restaurantId) => {
  const body = {
    rate,
    id: parseFloat(restaurantId),
  };

  return request(`restaurants/rate`, {
    body: JSON.stringify(body),
    method: 'PUT',
  });
};
