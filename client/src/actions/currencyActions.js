import * as types from '../actions/types';

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
