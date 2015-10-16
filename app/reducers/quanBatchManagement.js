import update from 'react-addons-update'
import {
	RECEIVE_QUAN_BATCH_LIST,
	SET_QUAN_BATCH_SEARCH_CRITERIA,
	SHOW_ISSUE_QUAN
} from '../actions'

let initialState = {
	quanBatchList: [],
	quanBatchSearchCriteria: {
		batchId: undefined,
		dispatchType: undefined
	},
	isShowIssueQuan: false,
	selectedQuanBatchId: undefined
}

export default function quanBatchManagement(state = initialState, action) {
	switch(action.type){
		case RECEIVE_QUAN_BATCH_LIST: {
			return update(state, {
				quanBatchList: { $set: action.quanBatchList }
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
		default:{
			return state;
		}
	}
}