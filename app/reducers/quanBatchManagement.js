import update from 'react-addons-update'
import {
	RECEIVE_QUAN_BATCH_LIST,
	SET_QUAN_BATCH_SEARCH_CRITERIA,
	SHOW_ISSUE_QUAN,
	HIDE_ISSUE_QUAN,
	SET_QUAN_BATCH_LIST_CURRENT_PAGE
} from '../actions'

let initialState = {
	quanBatchList: [],
	quanBatchSearchCriteria: {
		batchId: '',
		dispatchType: ''
	},
	isShowIssueQuan: false,
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
					total: {$set: action.totalPage}
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
		case SET_QUAN_BATCH_LIST_CURRENT_PAGE: {
			return update(state, {
				quanBatchListPager: {
					current: {$set: action.currentPage}
				}
			});
		}
		default:{
			return state;
		}
	}
}