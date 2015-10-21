import update from 'react-addons-update';
import { RECEIVE_QUAN_LIST } from '../actions';

let initialState = {
	quanList: []
}

export default function quanManagement(state = initialState, action) {
	switch(action.type){
		case RECEIVE_QUAN_LIST: {
			return update(state, {
				quanList: { $set: action.quanList }
			});
		}
		default:{
			return state;
		}
	}
}