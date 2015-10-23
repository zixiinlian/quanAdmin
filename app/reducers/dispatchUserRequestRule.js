import {combineReducers } from 'redux';
import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	productLimitList: [],
	perUserLimit: 0,
	isAutoOnline: true
}

export default function dispatchUserRequestRule(state = initialState, action){
	switch(action.type){
		case actionTypes.DELETE_QUAN_BATCH_CREATION_DISPATCH_PRODUCT_LIMIT:{
			return update(state, {
				productLimitList: {$splice: [[action.index, 1]]}
			});
		}
		case actionTypes.ADD_QUAN_BATCH_CREATION_DISPATCH_PRODUCT_LIMIT: {
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
		case actionTypes.SET_PER_USER_LIMIT: {
			return update(state, {
				perUserLimit: {$set: action.perUserLimit}
			});
		}
		case actionTypes.SET_IS_AUTO_ONLINE: {
			return update(state, {
				isAutoOnline: {$set: action.isAutoOnline}
			});
		}
		default:{
			return state;
		}
	}
}