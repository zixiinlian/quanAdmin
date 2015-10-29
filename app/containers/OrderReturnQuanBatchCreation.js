import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchSellerList} from '../actions';
import {
	setTitle, setSellerID, setCouponQty, setDispatchOrderReturnRuleIsAutoOnline, setDispatchOrderReturnRulePerUserLimit, setProductScope, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setOrderReturnQuanBatch, setDispatchType, setOrderAmount, addIncludeProductLimitList
	, deleteIncludeProductLimitList, setDispatchOrderReturnRuleOrderAmount,
	setIsShareWithBasicAdjustSingle,
	setIsShareWithTimeLimitSingle,
	setIsShareWithGroupPurchaseSingle,
	setIsShareWithOrderMinusMulti,
	setIsShareWithOrderDiscountMulti,
	setIsShareWithOrderPresentMulti,
	setIsShareWithOrderChangeMulti
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import UserRequestDispatchRule from '../components/UserRequestDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class OrderReturnQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchSellerList, basicInformation: {sellerList}, setDispatchType } = this.props;
		
	    if(sellerList.length === 0){
	      fetchSellerList();
	    }

	    setDispatchType(3);
	}

	render() {
		const { basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setOrderReturnQuanBatch} = this.props;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions} />
				<UserRequestDispatchRule {...dispatchRule} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				<input type="button" value="保存" onClick={setOrderReturnQuanBatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {sellerList} = state.shared;
	const {dispatchOrderReturnRule, couponUsageRule, basicInformation, commonInformation: {dispatchType}} = state.quanBatchCreation;
	const {couponQty, couponImage} = basicInformation;
	return {
		basicInformation: {
			sellerList,
			...basicInformation
		},
		dispatchRule: {
			...dispatchOrderReturnRule,
			userScope: dispatchOrderReturnRule.productScope,
			productLimitList: dispatchOrderReturnRule.includeProductLimitList,
			couponQty,
			couponImage,
			dispatchType
		},
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
  	return {
		...bindActionCreators({
			pushState,
			setOrderReturnQuanBatch,
			setDispatchType,
			fetchSellerList
		}, dispatch),
		basicInformationActions: bindActionCreators({
			setTitle,
			setSellerID
		}, dispatch),
		dispatchRuleActions: bindActionCreators({
			setCouponQty,
			setIsAutoOnline: setDispatchOrderReturnRuleIsAutoOnline,
			setPerUserLimit: setDispatchOrderReturnRulePerUserLimit,
			setUserScope: setProductScope,
			setOrderAmount: setDispatchOrderReturnRuleOrderAmount,
			addProductLimitList: addIncludeProductLimitList,
			deleteProductLimitList: deleteIncludeProductLimitList
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderReturnQuanBatchCreation);