import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	orderAmount: '',
	discountType: 0,
	discountAmount: '',
	discountPercent: '',
	platformLimitList: [],
	applyProductType: 0,
	expireType: 0,
	useBeginTime: '',
	useEndTime: '',
	expireDays: '',
	isBindUser: true
}

export default function couponUsageRule(state = initialState, action) {
	switch(action.type){
		case actionTypes.SET_DISCOUNT_TYPE: {
			return update(state, {
				discountType: {$set: action.discountType}
			});
		}
		case actionTypes.SET_PLATEFORM_LIMIT_LIST: {
			let newState;
			let platformLimitList = state.platformLimitList;
			let index = platformLimitList.indexOf(action.platform);
			if(index !== -1){
				newState = update(state, {
					platformLimitList: {$splice: [[index, 1]]}
				})
			}
			else{
				newState = update(state, {
					platformLimitList: {$push: [action.platform]}
				})
			}
			return newState;
		}
		case actionTypes.SET_APPLY_PRODUCT_TYPE: {
			return update(state, {
				applyProductType: {$set: action.applyProductType}
			});
		}
		case actionTypes.SET_IS_BIND_USER: {
			let isBindUser = !state.isBindUser;
			return update(state, {
				isBindUser: {$set: isBindUser}
			});
		}
		case actionTypes.SET_EXPIRE_TYPE: {
			return update(state, {
				expireType: {$set: action.expireType}
			});
		}
		case actionTypes.SET_DISCOUNT_AMOUNT: {
			return update(state, {
				discountAmount: {$set: action.discountAmount}
			});
		}
		case actionTypes.SET_DISCOUNT_PERCENT: {
			return update(state, {
				discountPercent: {$set: action.discountPercent}
			});
		}
		case actionTypes.SET_EXPIRE_DAYS: {
			return update(state, {
				expireDays: {$set: action.expireDays}
			});
		}
		default:{
			return state;
		}
	}
}