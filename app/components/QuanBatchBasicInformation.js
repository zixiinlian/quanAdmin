import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

export default class QuanBatchBasicInformation extends Component {
	constructor(props) {
		super(props);
	}

	value(){
		let {dispatchChannel} = this.refs;
		return {
			dispatchChannel: dispatchChannel.value
		};
	}

	render() {
		const {dispatchChannelList} = this.props;

		return (
			<div>
				<h1>基本信息</h1>
				<div>
					<span>发放机构:</span>
					<select ref="dispatchChannel">
          			{
          				dispatchChannelList.map((dispatchChannel) =>
                      		<option key={dispatchChannel.id} value={dispatchChannel.id}>{dispatchChannel.desc}</option>
                    	)
                  	}
	                </select>
				</div>
				<div>
					<span>批次名称:</span>
					<input type="text" />
				</div>
			</div>
		);
	}
}