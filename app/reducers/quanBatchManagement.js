import update from 'react-addons-update'
import {
	RECEIVE_QUAN_BATCH_LIST
} from '../actions'

let initialState = {
	quanBatchList: []
}

export default function quanBatchManagement(state = initialState, action) {
	switch(action.type){
		case RECEIVE_QUAN_BATCH_LIST: {
			return update(state, {
				quanBatchList: { $set: action.quanBatchList }
			});
		}
		default:{
			return state;
		}
	}
}