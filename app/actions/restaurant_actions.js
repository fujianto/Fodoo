import Zomato from '../api/zomato/';

export const GET_FEATURED_RESTAURANTS_LOADING = 'GET_FEATURED_RESTAURANTS_LOADING';
export const GET_FEATURED_RESTAURANTS_ERROR = 'GET_FEATURED_RESTAURANTS_ERROR';
export const GET_FEATURED_RESTAURANTS_SUCCESS = 'GET_FEATURED_RESTAURANTS_SUCCESS';

export const GET_RESTAURANT_BY_LOCATION = 'GET_RESTAURANT_BY_LOCATION';
export const GET_RESTAURANT_BY_CATEGORY = 'GET_RESTAURANT_BY_CATEGORY';
export const GET_RESTAURANT_DETAIL = 'GET_RESTAURANT_DETAIL';

export const getFeaturedRestaurants = () => dispatch => {
  dispatch({
    type: GET_FEATURED_RESTAURANTS_LOADING,
    payload: {
      meta: {
        status: 'loading',
        error: ''
      },
      data: []
    }
  });

  return Zomato.getFeaturedRestaurant().then(result => {
    if (result.meta.status === 'error') {
      dispatch({
        type: GET_FEATURED_RESTAURANTS_ERROR,
        payload: result
      });
    } else {
      dispatch({
        type: GET_FEATURED_RESTAURANTS_SUCCESS,
        payload: result
      });
    }
  });
};

export const getRestaurantByLocation = () => ({
  type: GET_RESTAURANT_BY_LOCATION
});

export const getRestaurantByCategory = () => ({
  type: GET_RESTAURANT_BY_CATEGORY
});

export const getRestaurantDetail = () => ({
  type: GET_RESTAURANT_DETAIL
});
