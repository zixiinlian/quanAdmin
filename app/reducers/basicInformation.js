import {combineReducers } from 'redux';
import update from 'react-addons-update';
import * as actionTypes from '../actionTypes/quanBatchCreation';

let initialState = {
	batchId: '',
	title: '',
	sellerID: '2',
	couponQty: '',
	couponImage: '',
	operationUserId:''
}

export default function basicInformation(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_TITLE: {
			return update(state, {
				title: {$set: action.title}
			});
		}
		case actionTypes.SET_SELLER_ID: {
			return update(state, {
				sellerID: {$set: action.sellerID}
			});
		}
		case actionTypes.SET_COUPON_QTY: {
			return update(state, {
				couponQty: {$set: action.couponQty}
			});
		}
		case actionTypes.SET_BATCH_ID: {
			return update(state, {
				batchId: {$set: action.batchId}
			});
		}
		case actionTypes.SET_QUAN_BATCH_CREATION:{
			let {batchId, title, sellerID, couponQty, couponImage} = action.quanBatch;
			return update(state, {
				batchId: {$set: batchId},
				title: {$set: title},
				sellerID: {$set: sellerID},
				couponQty: {$set: couponQty},
				couponImage: {$set: couponImage},
			});
		}
		default:{
			return state;
		}
	}
}