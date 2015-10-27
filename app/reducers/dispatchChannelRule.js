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
		default:{
			return state;
		}
	}
}