import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storesReducer from './storesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer
});

export default rootReducer;
