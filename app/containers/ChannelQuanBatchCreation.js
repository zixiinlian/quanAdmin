import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchSellerList} from '../actions';
import {
	setTitle, setSellerID, setCouponQty, setIsSale, setSaleAmount, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setChannelQuanBatch, setDispatchType, setOrderAmount,
	setIsShareWithBasicAdjustSingle,
	setIsShareWithTimeLimitSingle,
	setIsShareWithGroupPurchaseSingle,
	setIsShareWithOrderMinusMulti,
	setIsShareWithOrderDiscountMulti,
	setIsShareWithOrderPresentMulti,
	setIsShareWithOrderChangeMulti
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import ChannelDispatchRule from '../components/ChannelDispatchRule';
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

	    setDispatchType(4);
	}

	render() {
		const {isViewMode, basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setChannelQuanBatch} = this.props;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions}/>
				<ChannelDispatchRule {...dispatchRule} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				{isViewMode? null : <input type="button" value="保存" onClick={setChannelQuanBatch} />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {sellerList,loginUser} = state.shared;
	const {isViewMode, dispatchChannelRule, couponUsageRule, basicInformation} = state.quanBatchCreation;
	const {couponQty} = basicInformation;
	return {
		commonInformation:{
			operationUserId:loginUser.id,
			operationUserName:loginUser.name
		},
		basicInformation: {
			sellerList,
			...basicInformation
		},
		dispatchRule: {
			...dispatchChannelRule,
			couponQty
		},
		isViewMode,
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			pushState,
			setChannelQuanBatch,
			setDispatchType,
			fetchSellerList
		}, dispatch),
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