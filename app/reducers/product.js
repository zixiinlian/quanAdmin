import update from 'react-addons-update'
import * as actionTypes from '../actionTypes/quanBatchCreation'

let initialState = {
	productList:[]
}

export default function product(state = initialState, action){
	switch(action.type){
		case actionTypes.SET_PRODUCT_LIST: {
			return update(state,{
				productList:{$set:action.productList}
			});
		}
		default:{
			return state;
		}
	}
}