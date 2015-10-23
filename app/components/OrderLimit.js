import React, { Component } from 'react';

export default class OrderLimit extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {orderLimit, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit
			, setPerUserLimit, productLimitList} = this.props;

		return (
			<div>
				订单限制：
				<input type="radio" name="orderLimit" checked={orderLimit == 0} onChange={() => {setPerUserLimit(0)}}/>无限制
				<input type="radio" name="orderLimit" checked={orderLimit == 1} onChange={() => {setPerUserLimit(1)}}/>指定商品
				<input type="radio" name="orderLimit" checked={orderLimit == 1} onChange={() => {setPerUserLimit(1)}}/>指定类目
			</div>
		);
	}
}