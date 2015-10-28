import React, { Component } from 'react';

export default class PreferentialDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			couponQty, setCouponQty
			} = this.props;
		return (
			<div>
				<div>
					发放数量：
					<input type="text" value={couponQty} onChange={(e) => setCouponQty(e.target.value)} />张
				</div>
			</div>
		);
	}
}