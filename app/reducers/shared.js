import update from 'react-addons-update'
import {
	RECEIVE_DISPATCH_CHANNEL_LIST,
	RECEIVE_SELLER_LIST
} from '../actions'

let initialState = {
	dispatchTypeList: [{
		id: 1,
		desc: '用户主动领取'
	}, {
		id: 2,
		desc: '指定用户发放'
	}, {
		id: 3,
		desc: '订单满额返券'
	}, {
		id: 4,
		desc: '站外渠道投放'
	},{
		id: 5,
		desc: '售卖'
	}],
	sellerList: []
}

export default function shared(state = initialState, action) {
	switch(action.type){
		case RECEIVE_DISPATCH_CHANNEL_LIST: {
			return update(state, {
				dispatchChannelList: { $set: action.dispatchChannelList }
			});
		}
		case RECEIVE_SELLER_LIST: {
			return update(state, {
				sellerList: { $set: action.sellerList }
			});
		}
		default:{
			return state;
		}
	}
}