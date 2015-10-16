import {
	combineReducers
}
from 'redux';
import {
	routerStateReducer as router
}
from 'redux-router';
import shared from './shared';
import quanBatchManagement from './quanBatchManagement';

const rootReducer = combineReducers({
	shared,
	quanBatchManagement,
	router
});

export default rootReducer;