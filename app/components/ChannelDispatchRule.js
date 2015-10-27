import React, { Component } from 'react';

export default class ChannelDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			couponQty, setCouponQty, isSale, setIsSale, saleAmount , setSaleAmount
		} = this.props;
		return (
			<div>
				<h1>发放规则</h1>
				<div>
					发放数量：
					<input type="text" value={couponQty} onChange={(e) => setCouponQty(e.target.value)} />张
				</div>
				<div>
					是否销售：
					<input type="checkbox" checked={isSale === 1} onChange={e => setIsSale()} />
					金额：
					<input type="text" value={saleAmount} onChange={(e) => setSaleAmount(e.target.value)} />元
				</div>
			</div>
		);
	}
}