import { merge } from 'lodash';
import {
  GET_FEATURED_RESTAURANTS,
  GET_RESTAURANT_BY_LOCATION,
  GET_RESTAURANT_BY_CATEGORY,
  GET_RESTAURANT_DETAIL } from "../actions/restaurant_actions.js";

let _defaultState = {};

const restaurantReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case GET_FEATURED_RESTAURANTS:
      // your code here
    case GET_RESTAURANT_BY_LOCATION:
      // your code here
    case GET_RESTAURANT_BY_CATEGORY:
      // your code here
    case GET_RESTAURANT_DETAIL:
      // your code here
    default:
      return state;
  }
};

export default restaurantReducer;