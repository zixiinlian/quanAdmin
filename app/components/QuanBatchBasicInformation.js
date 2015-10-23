import React, { Component } from 'react';

export default class QuanBatchBasicInformation extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {dispatchChannelList, sellerID, setSellerID, title, setTitle} = this.props;

		return (
			<div>
				<h1>基本信息</h1>
				<div>
					<span>发放机构:</span>
					<select value={sellerID} onChange={(e) => setSellerID(e.target.value)}>
          			{
          				dispatchChannelList.map((dispatchChannel) =>
                      		<option key={dispatchChannel.id} value={dispatchChannel.id}>{dispatchChannel.desc}</option>
                    	)
                  	}
	                </select>
				</div>
				<div>
					<span>批次名称:</span>
					<input type="text" defaultValue={title} onBlur={(e) => setTitle(e.target.value)} />
				</div>
			</div>
		);
	}
}