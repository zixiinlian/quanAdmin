import update from 'react-addons-update'
import {
	RECEIVE_QUAN_BATCH_LIST,
	SET_QUAN_BATCH_SEARCH_CRITERIA
} from '../actions'

let initialState = {
	quanBatchList: [],
	quanBatchSearchCriteria: {
		batchId: '',
		dispatchType: ''
	}
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
		default:{
			return state;
		}
	}
}