import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	dispatchType: '',
	operationUserId: 1
}

export default function commonInformation(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_DISPATCH_TYPE: {
			return update(state, {
				dispatchType: {$set: action.dispatchType}
			});
		}
		case actionTypes.SET_QUAN_BATCH_CREATION: {
			let {dispatchType, operationUserId} = action.quanBatch;
			return update(state, {
				dispatchType: {$set: dispatchType},
				operationUserId: {$set: operationUserId}
			});
		}
		default:{
			return state;
		}
	}
}