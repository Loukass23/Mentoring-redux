import axios from 'axios';
import { GET_BEERS, GET_BEERS_ERROR } from './actionsTypes'

const beers_URL = 'https://api.punkapi.com/v2/beers'

export const getBeers = () => {
  return dispatch => {
    return axios
      .get(beers_URL)
      .then(res => {
        dispatch({
          type: GET_BEERS,
          user: res.data
        });
      })
      .catch(err => {
        console.log(err);
        dispatch({
          type: GET_BEERS_ERROR,
          err
        });
      });
  };
};
