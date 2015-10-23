import React, { Component } from 'react';
import UserLimit from './UserLimit'
import OrderLimit from './OrderLimit'

export default class QuanBatchDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {isAutoOnline, productLimitList, perUserLimit, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit
			, setPerUserLimit, setIsAutoOnline, quanBatchType} = this.props;
		const listAdditionProps = {productLimitList, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit};
		const UserLimitProps = {perUserLimit, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit
			, setPerUserLimit, productLimitList};
		const OrderLimitProps = {};
		return (
			<div>
				<h1>发放规则</h1>
				<div>
					领取开始时间：
					<input type="text" ref="useBeginTime" />
					0点 至 
					<input type="text" ref="useEndTime" />
					24点结束
				</div>
				<div>
					自动上架：<input type="checkbox" checked={isAutoOnline} onChange={() => { setIsAutoOnline(!isAutoOnline)}} />是
				</div>
				<div>
					批次图片：
					<input type="file"/>
				</div>
				<div>
					发放数量：
					<input type="text" />张
				</div>
				<div>
					数量限制：{quanBatchType === 0 ? '每用户限领' : '每订单限领'}<input type="text" />张
				</div>
				{quanBatchType === 0 ? <UserLimit {...UserLimitProps} /> : <OrderLimit {...OrderLimitProps} /> }
			</div>
		);
	}
}