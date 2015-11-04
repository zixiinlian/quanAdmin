import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	dispatchType: '',
	operationUserId: '',
	operationUserName:''
}
export default function commonInformation(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_DISPATCH_TYPE: {
			return update(state, {
				dispatchType: {$set: action.dispatchType}
			});
		}
		case actionTypes.SET_QUAN_BATCH_CREATION: {
			let {dispatchType} = action.quanBatch;
			if(!action.loginUser){
				return update(state, {
					dispatchType: {$set: dispatchType},
				});
			}
			return update(state, {
				dispatchType: {$set: dispatchType},
				operationUserId: {$set: action.loginUser.id},
				operationUserName: {$set: action.loginUser.name}
			});
		}
		case actionTypes.SET_OPERATION_USER:{
			return update(state,{
				operationUserId: {$set: action.loginUser.id},
				operationUserName: {$set: action.loginUser.name}
			})
		}
		default:{
			return state;
		}
	}
}