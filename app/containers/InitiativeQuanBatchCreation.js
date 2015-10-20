import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import * as actions from '../actions';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';

class InitiativeQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
		this.handleSave = this.handleSave.bind(this);
	}

	handleSave(){
		let quanBatchInformation = {};
		let {basicInformation} = this.refs;
		Object.assign(quanBatchInformation, basicInformation.value());
	}

	componentDidMount() {
		const { fetchDispatchChannelList, dispatchChannelList } = this.props;
		
	    if(dispatchChannelList.length === 0){
	      fetchDispatchChannelList();
	    }
	}

	render() {
		const {dispatchChannelList} = this.props;
		const basicInformationProps = {dispatchChannelList};
		return (
			<div>
				<QuanBatchBasicInformation ref="basicInformation" {...basicInformationProps}/>
				<input type="button" value="保存" onClick={this.handleSave} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {dispatchChannelList} = state.shared;
	return {
		dispatchChannelList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState: bindActionCreators(pushState, dispatch),
  	fetchDispatchChannelList: bindActionCreators(actions.fetchDispatchChannelList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeQuanBatchCreation);