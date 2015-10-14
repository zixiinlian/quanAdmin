import { combineReducers } from 'redux';
import { routerStateReducer as router } from 'redux-router';
import quanBatchManagement from './quanBatchManagement';

const rootReducer = combineReducers({
  quanBatchManagement,
  router
});

export default rootReducer;