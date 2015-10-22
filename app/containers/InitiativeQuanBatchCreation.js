import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchDispatchChannelList} from '../actions';
import * as actions from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import QuanBatchDispatchRule from '../components/QuanBatchDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

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
		const {dispatchChannelList, deleteQuanBatchCreationDispatchProductLimit, dispatchUserRequestRule, addQuanBatchCreationDispatchProductLimit, 
			setIsAutoOnline, setPerUserLimit, setDiscountType, couponUsageRule, setPlatformLimitList, setApplyProductType, setIsBindUser} = this.props;
		const basicInformationProps = {dispatchChannelList};
		const dispatchRuleProps = {...dispatchUserRequestRule, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit, setIsAutoOnline, setPerUserLimit};
		const usageRuleProps = {...couponUsageRule, setDiscountType, setPlatformLimitList, setApplyProductType, setIsBindUser};
		return (
			<div>
				<QuanBatchBasicInformation ref="basicInformation" {...basicInformationProps}/>
				<QuanBatchDispatchRule {...dispatchRuleProps}/>
				<QuanBatchUsageRule {...usageRuleProps} />
				<input type="button" value="保存" onClick={this.handleSave} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {dispatchChannelList} = state.shared;
	const {dispatchUserRequestRule, couponUsageRule} = state.quanBatchCreation;
	return {
		dispatchChannelList,
		dispatchUserRequestRule,
		couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({
	  	pushState,
	  	...actions,
	  	fetchDispatchChannelList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(InitiativeQuanBatchCreation);