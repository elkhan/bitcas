import * as types from '../actions/types';

const fetchCurrencyReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CURRENCY:
      return [...state, action.currency];
    // return console.log(action.currency);
    case types.DELETE_CURRENCY:
      return state.filter(currency => currency.name !== action.name);
    case types.FETCH_ALL_CURRENCIES:
      // FIXME: Should ignore if the same _id
      return [...state, ...action.currencies];
    default:
      return state;
  }
};

export default fetchCurrencyReducer;
