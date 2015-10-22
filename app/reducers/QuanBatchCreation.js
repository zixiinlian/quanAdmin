import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	dispatchUserRequestRule: {
		productLimitList: [],
		perUserLimit: 0,
		isAutoOnline: true
	},
	couponUsageRule: {
		orderAmount: '',
		discountType: 0,
		discountAmount: '',
		discountPercent: '',
		platformLimitList: [],
		applyProductType: 0,
		expireType: 0,
		useBeginTime: '',
		userEndTime: '',
		expireDays: '',
		isBindUser: true
	}
}

export default function quanBatchCreation(state = initialState, action) {
	switch(action.type){
		case actionTypes.DELETE_QUAN_BATCH_CREATION_DISPATCH_PRODUCT_LIMIT:{
			return update(state, {
				dispatchUserRequestRule: {
					productLimitList: {$splice: [[action.index, 1]]}
				}
			});
		}
		case actionTypes.ADD_QUAN_BATCH_CREATION_DISPATCH_PRODUCT_LIMIT: {
			let productLimitList = state.quanBatchCreationCriteria.dispatchUserRequestRule.productLimitList;
			let productList = action.productList.filter((product) => {
				return !productLimitList.find((existProduct) => {
					return existProduct.productId === product.productId;
				});
			});
			return update(state, {
				dispatchUserRequestRule: {
					productLimitList: {$push: productList}
				}
			}); 
		}
		case actionTypes.SET_PER_USER_LIMIT: {
			return update(state, {
				dispatchUserRequestRule: {
					perUserLimit: {$set: action.perUserLimit}
				}
			});
		}
		case actionTypes.SET_IS_AUTO_ONLINE: {
			return update(state, {
				dispatchUserRequestRule: {
					isAutoOnline: {$set: action.isAutoOnline}
				}
			});
		}
		case actionTypes.SET_DISCOUNT_TYPE: {
			return update(state, {
				couponUsageRule: {
					discountType: {$set: action.discountType}
				}
			});
		}
		case actionTypes.SET_PLATEFORM_LIMIT_LIST: {
			let newState;
			let platformLimitList = state.couponUsageRule.platformLimitList;
			let index = platformLimitList.indexOf(action.platform);
			if(index !== -1){
				newState = update(state, {
					couponUsageRule: {
						platformLimitList: {$splice: [[index, 1]]}
					}
				})
			}
			else{
				newState = update(state, {
					couponUsageRule: {
						platformLimitList: {$push: [action.platform]}
					}
				})
			}
			return newState;
		}
		case actionTypes.SET_APPLY_PRODUCT_TYPE: {
			return update(state, {
				couponUsageRule: {
					applyProductType: {$set: action.applyProductType}
				}
			});
		}
		case actionTypes.SET_IS_BIND_USER: {
			let isBindUser = !state.couponUsageRule.isBindUser;
			return update(state, {
				couponUsageRule: {
					isBindUser: {$set: isBindUser}
				}
			});
		}
		default:{
			return state;
		}
	}
}