import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import add from './add';

const rootReducer = combineReducers({
  add,
  router
});

export default rootReducer;