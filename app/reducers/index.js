import { combineReducers } from 'redux';
import add from './add';
import list from './list';

const rootReducer = combineReducers({
  add,
  list
});

export default rootReducer;