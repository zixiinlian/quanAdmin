import {combineReducers } from 'redux';
import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	title: '',
	sellerID: '2'
}

export default function basicInformation(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_TITLE: {
			return update(state, {
				title: {$set: action.title}
			});
		}
		case actionTypes.SET_SELLER_ID: {
			return update(state, {
				sellerID: {$set: action.sellerID}
			});
		}
		default:{
			return state;
		}
	}
}