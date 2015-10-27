import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchDispatchChannelList} from '../actions';
import {
	setTitle, setSellerID, setCouponQty, setIsSale, setSaleAmount, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setChannelQuanBatch, setDispatchType, setOrderAmount
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import ChannelDispatchRule from '../components/ChannelDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class ChannelQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchDispatchChannelList, basicInformation: {dispatchChannelList}, setDispatchType } = this.props;
		
	    if(dispatchChannelList.length === 0){
	      fetchDispatchChannelList();
	    }

	    setDispatchType(4);
	}

	render() {
		const { basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setChannelQuanBatch} = this.props;
		const {couponQty} = basicInformation;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions}/>
				<ChannelDispatchRule {...dispatchRule} couponQty = {couponQty} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				<input type="button" value="保存" onClick={setChannelQuanBatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {dispatchChannelList} = state.shared;
	const {dispatchChannelRule, couponUsageRule, basicInformation} = state.quanBatchCreation;
	return {
		basicInformation: {
			dispatchChannelList,
			...basicInformation
		},
		dispatchRule: dispatchChannelRule,
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			pushState,
			setChannelQuanBatch,
			setDispatchType
		}, dispatch),
		fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch),
		basicInformationActions: bindActionCreators({
			setTitle,
			setSellerID
		}, dispatch),
		dispatchRuleActions: bindActionCreators({
			setIsSale,
			setSaleAmount,
			setCouponQty
		}, dispatch),
		usageRuleActions: bindActionCreators({
			setDiscountType,
			setPlatformLimitList,
			setApplyProductType,
			setIsBindUser,
			setExpireType,
			setDiscountAmount,
			setDiscountPercent,
			setExpireDays,
			setOrderAmount
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelQuanBatchCreation);