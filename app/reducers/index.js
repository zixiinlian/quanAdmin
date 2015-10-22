import {combineReducers } from 'redux';
import {routerStateReducer as router}from 'redux-router';
import shared from './shared';
import quanBatchManagement from './quanBatchManagement';
import quanManagement from './quanManagement';
import quanBatchCreation from './quanBatchCreation';

const rootReducer = combineReducers({
	shared,
	quanBatchManagement,
	quanBatchCreation,
	quanManagement,
	router
});

export default rootReducer;