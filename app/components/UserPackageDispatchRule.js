import React, { Component } from 'react';

export default class UserPackageDispatchRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {
			userPackageId, setUserPackageId, packageUsersQty, setPackageUsersQty, packageDescription, setPackageDescription
		} = this.props;
		return (
			<div>
				<h1>发放规则</h1>
				<div>
					发放数量：
					<input type="text" value={packageUsersQty} onChange={(e) => setPackageUsersQty(e.target.value)} />用户
				</div>
				<div>
					DO数据包ID：
					<input type="text" value={userPackageId} onChange={(e) => setUserPackageId(e.target.value)} />
				</div>
				<div>
					数据提取逻辑：
					<textarea value={packageDescription} onChange={(e) => setPackageDescription(e.target.value)} />
				</div>
			</div>
		);
	}
}