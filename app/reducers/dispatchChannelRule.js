import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	isSale: '',
	saleAmount: ''
}

export default function dispatchUserPackageRule(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_USER_PACKAGE_ID: {
			return update(state, {
				isSale: {$set: action.isSale}
			});
		}
		case actionTypes.SET_PACKAGE_USERS_QTY: {
			return update(state, {
				saleAmount: {$set: action.saleAmount}
			});
		}
		default:{
			return state;
		}
	}
}