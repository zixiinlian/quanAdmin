import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	perUserLimit: ''
}

export default function dispatchSaleRule(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_DISPATCH_SALE_RULE_PER_USER_LIMIT: {
			return update(state, {
				perUserLimit: {$set: action.perUserLimit}
			});
		}
		default:{
			return state;
		}
	}
}