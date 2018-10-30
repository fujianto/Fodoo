import { get, post, delete as axiosDelete } from 'axios';
import {
  SEARCH_ENDPOINT
} from './endpoints';

const headerAuth = { headers: { 'user-key': 'xxx' } };

const getFeaturedRestaurant = () => {
  return get(`${SEARCH_ENDPOINT}`, headerAuth)
    .then(response => {
      const result = response.data.restaurants;

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