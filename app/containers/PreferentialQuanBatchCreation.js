import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchSellerList} from '../actions';
import {
	setTitle, setSellerID, setCouponQty, setIsSale, setSaleAmount, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setChannelQuanBatch, setDispatchType, setOrderAmount,
	setPreferentialQuanBatch,
	setIsShareWithBasicAdjustSingle,
	setIsShareWithTimeLimitSingle,
	setIsShareWithGroupPurchaseSingle,
	setIsShareWithOrderMinusMulti,
	setIsShareWithOrderDiscountMulti,
	setIsShareWithOrderPresentMulti,
	setIsShareWithOrderChangeMulti
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import PreferentialDispatchRule from '../components/PreferentialDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class ChannelQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchSellerList, basicInformation: {sellerList}, setDispatchType } = this.props;
		
	    if(sellerList.length === 0){
	      fetchSellerList();
	    }

	    setDispatchType(7);
	}

	render() {
		const { basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setPreferentialQuanBatch} = this.props;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions}/>
				<PreferentialDispatchRule {...dispatchRule} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				<input type="button" value="保存" onClick={setPreferentialQuanBatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {sellerList} = state.shared;
	const {couponUsageRule, basicInformation} = state.quanBatchCreation;
	const {couponQty} = basicInformation;
	return {
		basicInformation: {
			sellerList,
			...basicInformation
		},
		dispatchRule: {
			couponQty
		},
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			pushState,
			setPreferentialQuanBatch,
			setDispatchType,
			fetchSellerList
		}, dispatch),
		basicInformationActions: bindActionCreators({
			setTitle,
			setSellerID
		}, dispatch),
		dispatchRuleActions: bindActionCreators({
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
			setOrderAmount,
			setIsShareWithBasicAdjustSingle,
			setIsShareWithTimeLimitSingle,
			setIsShareWithGroupPurchaseSingle,
			setIsShareWithOrderMinusMulti,
			setIsShareWithOrderDiscountMulti,
			setIsShareWithOrderPresentMulti,
			setIsShareWithOrderChangeMulti
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelQuanBatchCreation);