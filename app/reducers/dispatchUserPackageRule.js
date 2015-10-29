import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	userPackageId: '',
	packageUsersQty: '',
	packageDescription: ''
}

export default function dispatchUserPackageRule(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_USER_PACKAGE_ID: {
			return update(state, {
				userPackageId: {$set: action.userPackageId}
			});
		}
		case actionTypes.SET_PACKAGE_USERS_QTY: {
			return update(state, {
				packageUsersQty: {$set: action.packageUsersQty}
			});
		}
		case actionTypes.SET_PACKAGE_DESCRIPTION: {
			return update(state, {
				packageDescription: {$set: action.packageDescription}
			});
		}
		case actionTypes.SET_QUAN_BATCH_CREATION: {
			let dispatchRule = action.quanBatch.dispatchUserPackageRule;
			if(!dispatchRule){
				dispatchRule = initialState;
			}
			let {userPackageId, packageUsersQty, packageDescription} = dispatchRule;
			return update(state, {
				userPackageId: {$set: userPackageId},
				packageUsersQty: {$set: packageUsersQty},
				packageDescription: {$set: packageDescription}
			});
		}
		default:{
			return state;
		}
	}
}