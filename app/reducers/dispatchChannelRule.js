import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	isSale: 0,
	saleAmount: ''
}

export default function dispatchChannelRule(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_IS_SALE: {
			let isSale = state.isSale === 0 ? 1 : 0;
			return update(state, {
				isSale: {$set: isSale}
			});
		}
		case actionTypes.SET_SALE_AMOUNT: {
			return update(state, {
				saleAmount: {$set: action.saleAmount}
			});
		}
		case actionTypes.SET_QUAN_BATCH_CREATION: {
			let dispatchRule = action.quanBatch.dispatchChannelRule;
			if(!dispatchRule){
				dispatchRule = initialState;
			}
			let {isSale, saleAmount} = dispatchRule;
			return update(state, {
				isSale: {$set: isSale},
				saleAmount: {$set: saleAmount}
			});
		}
		default:{
			return state;
		}
	}
}