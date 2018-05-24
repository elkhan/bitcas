import { combineReducers } from 'redux';
import currencyReducer from './currencyReducer';

// There is only one reducer - not much point
export default combineReducers({
  currencies: currencyReducer,
});
