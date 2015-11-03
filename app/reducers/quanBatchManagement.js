import update from 'react-addons-update'
import {
	RECEIVE_QUAN_BATCH_LIST,
	SET_QUAN_BATCH_SEARCH_CRITERIA,
	SHOW_ISSUE_QUAN,
	HIDE_ISSUE_QUAN,
	SET_QUAN_BATCH_LIST_CURRENT_PAGE,
	SET_QUAN_BATCH_STATUS,
	SHOW_QUAN_BATCH_TYPE_QUAN,
	HIDE_QUAN_BATCH_TYPE_QUAN
} from '../actions'

let initialState = {
	quanBatchList: [],
	quanBatchSearchCriteria: {
		batchId: '',
		title: '',
		dispatchType: '',
		sellerID: '',
		createUserName: ''
	},
	isShowIssueQuan: false,
	isShowSelectQuanModal:false,
	selectedQuanBatchId: '',
	quanBatchListPager: {
		total: 0,
		current: 1,
		visible: 5
	}
}

export default function quanBatchManagement(state = initialState, action) {
	switch(action.type){
		case RECEIVE_QUAN_BATCH_LIST: {
			return update(state, {
				quanBatchList: { $set: action.quanBatchList },
				quanBatchListPager: {
					total: {$set: action.total},
					current: {$set: action.current}
				}
			});
		}
		case SET_QUAN_BATCH_SEARCH_CRITERIA: {
			return update(state, {
				quanBatchSearchCriteria: {$set: action.quanBatchSearchCriteria}
			});
		}
		case SHOW_ISSUE_QUAN: {
			return update(state, {
				isShowIssueQuan: {$set: true},
				selectedQuanBatchId: {$set: action.selectedQuanBatchId}
			});
		}
		case HIDE_ISSUE_QUAN: {
			return update(state, {
				isShowIssueQuan: {$set: false}
			});
		}
		case SET_QUAN_BATCH_STATUS: {
			return update(state, {
				quanBatchList: {
					[action.index]: {status: {$set: action.status}} 
				}
			});
		}
		case SET_QUAN_BATCH_LIST_CURRENT_PAGE: {
			return update(state, {
				quanBatchListPager: {
					current: {$set: action.currentPage}
				}
			});
		}
		case SHOW_QUAN_BATCH_TYPE_QUAN: {
			return update(state, {
				isShowSelectQuanModal:{$set:true}
			});
		}
		case HIDE_QUAN_BATCH_TYPE_QUAN: {
			return update(state, {
				isShowSelectQuanModal:{$set:false}
			});
		}
		default:{
			return state;
		}
	}
}