import * as types from '../actions/types';

const fetchCurrencyReducer = (state = {}, action) => {
  switch (action.type) {
    case types.FETCH_CURRENCY:
      return [...state, ...action.currency];

    default:
      return state;
  }
};

export default fetchCurrencyReducer;
