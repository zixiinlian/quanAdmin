import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductListAddition from './ProductListAddition'

export default class QuanBatchDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {isAutoOnline, productLimitList, perUserLimit, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit
			, setPerUserLimit, setIsAutoOnline} = this.props;
		const listAdditionProps = {productLimitList, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit};

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
					数量限制：每用户限领<input type="text" />张
				</div>
				<div>
					用户限制：
					<input type="radio" name="userLimit" checked={perUserLimit == 0} onChange={() => {setPerUserLimit(0)}}/>无限制
					<input type="radio" name="userLimit" checked={perUserLimit == 1} onChange={() => {setPerUserLimit(1)}}/>指定班级用户
					{perUserLimit == 1 ? <ProductListAddition {...listAdditionProps} /> : null}
				</div>
			</div>
		);
	}
}