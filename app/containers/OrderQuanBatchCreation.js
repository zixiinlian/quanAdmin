import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchDispatchChannelList} from '../actions';
import * as actions from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import QuanBatchDispatchRule from '../components/QuanBatchDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class OrderQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	handleSave(){
	}

	componentDidMount() {
		const { fetchDispatchChannelList, dispatchChannelList } = this.props;
		
	    if(dispatchChannelList.length === 0){
	      fetchDispatchChannelList();
	    }
	}

	render() {
		const {dispatchChannelList, deleteQuanBatchCreationDispatchProductLimit, dispatchUserRequestRule, addQuanBatchCreationDispatchProductLimit
			, setIsAutoOnline, setPerUserLimit, setDiscountType, couponUsageRule, setPlatformLimitList, setApplyProductType, setIsBindUser, setExpireType
			, setDiscountAmount, setDiscountPercent, setExpireDays, basicInformation, setTitle, setSellerID, quanBatchType
		} = this.props;
		const basicInformationProps = {dispatchChannelList, ...basicInformation, setTitle, setSellerID};
		const dispatchRuleProps = {...dispatchUserRequestRule, deleteQuanBatchCreationDispatchProductLimit, addQuanBatchCreationDispatchProductLimit, setIsAutoOnline, setPerUserLimit, quanBatchType};
		const usageRuleProps = {...couponUsageRule, setDiscountType, setPlatformLimitList, setApplyProductType, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent
			, setExpireDays};
		return (
			<div>
				<QuanBatchBasicInformation ref="basicInformation" {...basicInformationProps}/>
				<QuanBatchDispatchRule {...dispatchRuleProps}/>
				<QuanBatchUsageRule {...usageRuleProps} />
				<input type="button" value="保存" onClick={this.handleSave.bind(this)} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {dispatchChannelList} = state.shared;
	const {dispatchUserRequestRule, couponUsageRule, title, sellerID} = state.quanBatchCreation;
	return {
		dispatchChannelList,
		dispatchUserRequestRule,
		couponUsageRule,
		basicInformation: {
			title,
			sellerID
		},
		quanBatchType: 1
	};
}

function mapDispatchToProps(dispatch) {
  	return bindActionCreators({
	  	pushState,
	  	...actions,
	  	fetchDispatchChannelList
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderQuanBatchCreation);