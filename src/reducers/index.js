import { combineReducers } from 'redux';
import authReducer from './authReducer';
import storesReducer from './storesReducer';
import cousinesReducer from './cousinesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  stores: storesReducer,
  cousines: cousinesReducer
});

export default rootReducer;
