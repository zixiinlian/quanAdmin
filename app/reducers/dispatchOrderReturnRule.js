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
		case actionTypes.SET_QUAN_BATCH_CREATION: {
			let dispatchRule = action.quanBatch.dispatchOrderReturnRule;
			if(!dispatchRule){
				dispatchRule = initialState;
			}
			let {
				beginDate, endDate, isAutoOnline, perUserLimit, orderAmount, productScope, includeProductLimitList = []
				, excludeProductLimitList = [], categoryLimitList = []
			} = dispatchRule;
			includeProductLimitList || (includeProductLimitList = []);
			excludeProductLimitList || (excludeProductLimitList = []);
			categoryLimitList || (categoryLimitList = []);
			return update(state, {
				beginDate: {$set: beginDate},
				endDate: {$set: endDate},
				isAutoOnline: {$set: isAutoOnline},
				perUserLimit: {$set: perUserLimit},
				orderAmount: {$set: orderAmount},
				includeProductLimitList: {$set: includeProductLimitList},
				excludeProductLimitList: {$set: excludeProductLimitList},
				categoryLimitList: {$set: categoryLimitList}
			});
		}
		default:{
			return state;
		}
	}
}