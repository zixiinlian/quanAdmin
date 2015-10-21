import {combineReducers } from 'redux';
import {routerStateReducer as router}from 'redux-router';
import shared from './shared';
import quanBatchManagement from './quanBatchManagement';
import quanManagement from './quanManagement';

const rootReducer = combineReducers({
	shared,
	quanBatchManagement,
	quanManagement,
	router
});

export default rootReducer;