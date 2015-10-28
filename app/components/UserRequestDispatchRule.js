import React, { Component } from 'react';
import ProductListAddition from './ProductListAddition';

export default class UserRequestDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			beginDate, endDate, isAutoOnline, setIsAutoOnline, couponQty, setCouponQty, perUserLimit, setPerUserLimit, productLimitList
			, deleteProductLimitList, addProductLimitList, dispatchType, userScope, setUserScope
		} = this.props;
		const listAdditionProps = {deleteProductLimitList, addProductLimitList, productLimitList};
		return (
			<div>
				<h1>发放规则</h1>
				<div>
					领取开始时间：
					<input type="text" value={beginDate} />
					0点 至 
					<input type="text" value={endDate} />
					24点结束
				</div>
				<div>
					自动上架：<input type="checkbox" checked={isAutoOnline} onChange={() => setIsAutoOnline()} />是
				</div>
				<div>
					批次图片：
					<input type="file"/>
				</div>
				<div>
					发放数量：
					<input type="text" value={couponQty} onChange={e => setCouponQty(e.target.value)} />张
				</div>
				<div>
					数量限制：{dispatchType === 1 ? '每用户限领' : '每订单限领'}<input type="text" value={perUserLimit} onChange={e=> setPerUserLimit(e.target.value)} />张
				</div>
				<div>
					{dispatchType === 1 ? '用户限制：' : '订单限制：'}
					<input type="radio" name="userLimit" checked={userScope == 0} onChange={() => {setUserScope(0)}}/>无限制
					<input type="radio" name="userLimit" checked={userScope == 1} onChange={() => {setUserScope(1)}}/>指定商品
					{userScope == 1 ? <ProductListAddition {...listAdditionProps} /> : null}
				</div>
			</div>
		);
	}
}