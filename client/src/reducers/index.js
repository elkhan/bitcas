import { combineReducers } from 'redux';
import fetchCurrencyReducer from './fetchCurrencyReducer';

// There is only one reducer - not much point
export default combineReducers({
  fetchCurrencyReducer,
});
