import { get, post, delete as axiosDelete } from 'axios';
import {
  SEARCH_ENDPOINT,
  ZOMATO_API_KEY
} from './endpoints';
import { ZomatoRestaurantSearch } from "../../utils/adapters";

const headerAuth = { headers: { 'user-key': ZOMATO_API_KEY } };

const getFeaturedRestaurant = () => {
  return get(`${SEARCH_ENDPOINT}`, headerAuth)
    .then(response => {
      const result = ZomatoRestaurantSearch(response.data);

      return {
        meta: {
          status: result.length > 0 ? 'success' : 'no_result',
          error: ''
        },
        data: result || []
      };
    })
    .catch(error => {
      return {
        meta: {
          status: 'error',
          error: `home/getFeaturedRestaurant - ${error}`
        },
        data: []
      };
    });
};

export default {
  getFeaturedRestaurant
};