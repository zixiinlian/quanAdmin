import {combineReducers } from 'redux';
import * as actionTypes from '../actionTypes/quanBatchCreation';
import basicInformation from './basicInformation';
import dispatchUserRequestRule from './dispatchUserRequestRule';
import dispatchOrderReturnRule from './dispatchOrderReturnRule';
import dispatchUserPackageRule from './dispatchUserPackageRule';
import dispatchChannelRule from './dispatchChannelRule';
import dispatchSaleRule from './dispatchSaleRule';
import couponUsageRule from './couponUsageRule';
import commonInformation from './commonInformation';

const quanBatchCreation = combineReducers({
	basicInformation,
	dispatchUserRequestRule,
	dispatchOrderReturnRule,
	dispatchUserPackageRule,
	dispatchChannelRule,
	dispatchSaleRule,
	commonInformation,
	couponUsageRule,
	isViewMode
});

function isViewMode(state = false, action){
	switch(action.type){
		case actionTypes.SET_QUAN_BATCH_CREATION:
			return action.isViewMode;
		default:
			return state;
	}
}

export default quanBatchCreation;