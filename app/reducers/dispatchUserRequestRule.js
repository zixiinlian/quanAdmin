import {combineReducers } from 'redux';
import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	beginDate: '2015-07-01',
	endDate: '2016-07-01',
	isAutoOnline: true,
	perUserLimit: '',
	userScope: 0,
	productLimitList: []
}

export default function dispatchUserRequestRule(state = initialState, action){
	switch(action.type){
		case actionTypes.DELETE_PRODUCT_LIMIT:{
			return update(state, {
				productLimitList: {$splice: [[action.index, 1]]}
			});
		}
		case actionTypes.ADD_PRODUCT_LIMIT_LIST: {
			let productLimitList = state.productLimitList;
			let productList = action.productList.filter((product) => {
				return !productLimitList.find((existProduct) => {
					return existProduct.productId === product.productId;
				});
			});
			return update(state, {
				productLimitList: {$push: productList}
			}); 
		}
		case actionTypes.SET_DISPATCH_USER_REQUEST_RULE_PER_USER_LIMIT: {
			return update(state, {
				perUserLimit: {$set: action.perUserLimit}
			});
		}
		case actionTypes.SET_IS_AUTO_ONLINE: {
			return update(state, {
				isAutoOnline: {$set: !state.isAutoOnline}
			});
		}
		case actionTypes.SET_USER_SCOPE: {
			return update(state, {
				userScope: {$set: action.userScope}
			});
		}
		case actionTypes.SET_QUAN_BATCH_CREATION: {
			let dispatchRule = action.quanBatch.dispatchUserRequestRule;
			if(!dispatchRule){
				dispatchRule = initialState;
			}
			let {beginDate, endDate, isAutoOnline, perUserLimit, userScope, productLimitList=[]} = dispatchRule;
			productLimitList || (productLimitList = []);
			return update(state, {
				beginDate: {$set: beginDate},
				endDate: {$set: endDate},
				isAutoOnline: {$set: isAutoOnline},
				perUserLimit: {$set: perUserLimit},
				userScope: {$set: userScope},
				productLimitList: {$set: productLimitList}
			});
		}
		default:{
			return state;
		}
	}
}