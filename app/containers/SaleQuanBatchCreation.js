import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchDispatchChannelList} from '../actions';
import {
	setTitle, setSellerID, setCouponQty, setDispatchSaleRulePerUserLimit, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setSaleQuanBatch, setDispatchType, setOrderAmount
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import SaleDispatchRule from '../components/SaleDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class SaleQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchDispatchChannelList, basicInformation: {dispatchChannelList}, setDispatchType } = this.props;
		
	    if(dispatchChannelList.length === 0){
	      fetchDispatchChannelList();
	    }

	    setDispatchType(5);
	}

	render() {
		const { basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setSaleQuanBatch} = this.props;
		const {couponQty} = basicInformation;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions}/>
				<SaleDispatchRule {...dispatchRule} couponQty = {couponQty} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				<input type="button" value="保存" onClick={setSaleQuanBatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {dispatchChannelList} = state.shared;
	const {dispatchSaleRule, couponUsageRule, basicInformation} = state.quanBatchCreation;
	return {
		basicInformation: {
			dispatchChannelList,
			...basicInformation
		},
		dispatchRule: dispatchSaleRule,
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			pushState,
			setSaleQuanBatch,
			setDispatchType
		}, dispatch),
		fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch),
		basicInformationActions: bindActionCreators({
			setTitle,
			setSellerID
		}, dispatch),
		dispatchRuleActions: bindActionCreators({
			setDispatchSaleRulePerUserLimit,
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

export default connect(mapStateToProps, mapDispatchToProps)(SaleQuanBatchCreation);