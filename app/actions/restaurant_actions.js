export const GET_FEATURED_RESTAURANTS = 'GET_FEATURED_RESTAURANTS';
export const GET_RESTAURANT_BY_LOCATION = 'GET_RESTAURANT_BY_LOCATION';
export const GET_RESTAURANT_BY_CATEGORY = 'GET_RESTAURANT_BY_CATEGORY';
export const GET_RESTAURANT_DETAIL = 'GET_RESTAURANT_DETAIL';

export const getFeaturedRestaurants = () => ({
  type: GET_FEATURED_RESTAURANTS
});

export const getRestaurantByLocation = () => ({
  type: GET_RESTAURANT_BY_LOCATION
});

export const getRestaurantByCategory = () => ({
  type: GET_RESTAURANT_BY_CATEGORY
});

export const getRestaurantDetail = () => ({
  type: GET_RESTAURANT_DETAIL
});
