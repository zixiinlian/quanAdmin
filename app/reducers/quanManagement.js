import update from 'react-addons-update';
import {RECEIVE_QUAN_LIST,SET_QUAN_LIST_CURRENT_PAGE,
	SET_QUAN_SEARCH_CRITERIA,SET_QUAN_STATUS,
	SHOW_CANCEL_QUAN_MODAL,HIDE_CANCEL_QUAN_MODAL} from '../actionTypes/quanManage';

let initialState = {
	quanList: [],
	quanSearchParam:{
		batchId:'',
		title: '',
		couponCode:'',
		serialNumber:'',
		dispatchCustomerID: '',
		applyCustomerID: '',
		isBindUser:'',
		dispatchOrderId:'',
		applyOrderId:'',
	},
	quanPager: {
		total: 0,
		current: 1,
		visible: 5
	}
}

export default function quanManagement(state = initialState, action) {
	switch(action.type){
		case RECEIVE_QUAN_LIST: {
			return update(state, {
				quanList: { $set: action.quanList }
			});
		}
		case SET_QUAN_LIST_CURRENT_PAGE: {
			return update(state, {
				quanPager: {
					total: {$set: action.total},
					current: {$set: action.current}
				}
			});
		}
		case SET_QUAN_SEARCH_CRITERIA: {
			return update(state, {
				quanSearchParam:{$set:action.quanSearchParam}
			});
		}
		case SET_QUAN_STATUS: {
			return update(state, {
				quanList: {
					[action.index]: {status: {$set: action.status}}
				}
			});
		}
		case SHOW_CANCEL_QUAN_MODAL: {
			return update(state, {
				isShowCancelQuanModal: {$set: true},
				selectedCouponIndex: {$set: action.selectedCouponIndex}
			});
		}
		case HIDE_CANCEL_QUAN_MODAL: {
			return update(state, {
				isShowCancelQuanModal: {$set: false}
			});
		}
		default:{
			return state;
		}
	}
}