import axios from 'axios';
import * as types from '../actions/types';

const ROOT_URL = 'http://localhost:5000/api/currency/';

export const fetchCurrency = currency => ({
  currency,
  type: types.FETCH_CURRENCY,
});

export const deleteCurrency = name => ({
  name,
  type: types.DELETE_CURRENCY,
});

export const fetchAllCurrencies = currencies => ({
  currencies,
  type: types.FETCH_ALL_CURRENCIES,
});

// Async actions
export const asyncFetchCurrency = crypto => dispatch =>
  axios({
    method: 'POST',
    url: ROOT_URL,
    data: {
      name: JSON.stringify(crypto.name),
    },
  })
    .then(response => dispatch(fetchCurrency(response.data)))
    .catch(err => console.log(err));

// Deleting a currency from DB and state
export const asyncRemoveCurrency = name => dispatch =>
  axios({
    method: 'DELETE',
    url: ROOT_URL + name,
  })
    .then(response => dispatch(deleteCurrency(response.data)))
    .catch(err => console.log(err));
