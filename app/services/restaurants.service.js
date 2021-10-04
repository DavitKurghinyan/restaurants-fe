import request from '../utils/request';

export const fetchRestaurantsList = () => {
  return request('restaurants/all', {
    method: 'GET',
  });
};

export const fetchRestaurantsDetail = restaurantId => {
  return request(`restaurants/single?id=${restaurantId}`);
};
