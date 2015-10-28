import {combineReducers } from 'redux';
import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	beginDate: '2015-12-01',
	endDate: '2016-12-01',
	isAutoOnline: true,
	perUserLimit: '',
	orderAmount: '',
	productScope: 0,
	includeProductLimitList: [],
	excludeProductLimitList: [],
	categoryLimitList: []
}

export default function dispatchOrderReturnRule(state = initialState, action){
	switch(action.type){
		case actionTypes.DELETE_INCLUDE_PRODUCT_LIMIT:{
			return update(state, {
				includeProductLimitList: {$splice: [[action.index, 1]]}
			});
		}
		case actionTypes.ADD_INCLUDE_PRODUCT_LIMIT_LIST: {
			let productLimitList = state.includeProductLimitList;
			let productList = action.productList.filter((product) => {
				return !productLimitList.find((existProduct) => {
					return existProduct.productId === product.productId;
				});
			});
			return update(state, {
				includeProductLimitList: {$push: productList}
			}); 
		}
		case actionTypes.SET_DISPATCH_ORDER_RETURN_RULE_PER_USER_LIMIT: {
			return update(state, {
				perUserLimit: {$set: action.perUserLimit}
			});
		}
		case actionTypes.SET_DISPATCH_ORDER_RETURN_RULE_IS_AUTO_ONLINE: {
			return update(state, {
				isAutoOnline: {$set: !state.isAutoOnline}
			});
		}
		case actionTypes.SET_PRODUCT_SCOPE: {
			return update(state, {
				productScope: {$set: action.productScope}
			});
		}
		case actionTypes.SET_DISPATCH_ORDER_RETURN_RULE_ORDER_AMOUNT: {
			return update(state, {
				orderAmount: {$set: action.orderAmount}
			});
		}
		default:{
			return state;
		}
	}
}