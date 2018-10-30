import { merge } from 'lodash';
import {
  GET_FEATURED_RESTAURANTS_LOADING,
  GET_FEATURED_RESTAURANTS_ERROR,
  GET_FEATURED_RESTAURANTS_SUCCESS,
  GET_RESTAURANT_BY_LOCATION,
  GET_RESTAURANT_BY_CATEGORY,
  GET_RESTAURANT_DETAIL } from "../actions/restaurant_actions.js";

let _defaultState = {
  restaurants: {
    meta: {
      status: "loading"
    },
    data: []
  },
};

export const restaurantReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  
  switch(action.type) {
    case GET_FEATURED_RESTAURANTS_LOADING:
      return { ...state, restaurants: { ...action.payload } };
    case GET_FEATURED_RESTAURANTS_ERROR:
      return { ...state, restaurants: { ...action.payload } };
    case GET_FEATURED_RESTAURANTS_SUCCESS:
      return { ...state, restaurants: { ...action.payload } };
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