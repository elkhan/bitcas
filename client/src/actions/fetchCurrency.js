import * as types from '../actions/types';

const fetchCurrency = currency => ({
  type: types.FETCH_CURRENCY,
  currency,
});

export default fetchCurrency;
