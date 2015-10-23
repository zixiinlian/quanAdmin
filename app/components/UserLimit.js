import React, { Component } from 'react';

export default class UserLimit extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {perUserLimit, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit
			, setPerUserLimit, productLimitList} = this.props;
		const listAdditionProps = {productLimitList, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit};

		return (
			<div>
				用户限制：
				<input type="radio" name="userLimit" checked={perUserLimit == 0} onChange={() => {setPerUserLimit(0)}}/>无限制
				<input type="radio" name="userLimit" checked={perUserLimit == 1} onChange={() => {setPerUserLimit(1)}}/>指定班级用户
				{perUserLimit == 1 ? <ProductListAddition {...listAdditionProps} /> : null}
			</div>
		);
	}
}