import React, { Component } from 'react';

export default class SaleDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			couponQty, setCouponQty, perUserLimit, setDispatchSaleRulePerUserLimit
		} = this.props;
		return (
			<div>
				<h1>发放规则</h1>
				<div>
					发放数量：
					<input type="text" value={couponQty} onChange={(e) => setCouponQty(e.target.value)} />张
				</div>
				<div>
					数量限制：每用户限购
					<input type="text" value={perUserLimit} onChange={(e) => setDispatchSaleRulePerUserLimit(e.target.value)} />张
				</div>
			</div>
		);
	}
}