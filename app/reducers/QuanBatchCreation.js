import {combineReducers } from 'redux';
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
	couponUsageRule
});

export default quanBatchCreation;