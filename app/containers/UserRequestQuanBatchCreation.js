import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchSellerList} from '../actions';
import {
	setTitle, setSellerID, setCouponQty, setIsAutoOnline, setDispatchUserRequestRulePerUserLimit, setUserScope, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setUserRequestQuanBatch, setDispatchType, setOrderAmount, addProductLimitList
	, deleteProductLimitList,
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


class UserRequestQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchSellerList, basicInformation: {sellerList}, setDispatchType } = this.props;
		
	    if(sellerList.length === 0){
	      fetchSellerList();
	    }

	    setDispatchType(1);
	}

	render() {
		const {isViewMode, basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setUserRequestQuanBatch} = this.props;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions} />
				<UserRequestDispatchRule {...dispatchRule} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				{isViewMode ? null : <input type="button" value="保存" onClick={setUserRequestQuanBatch} />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {sellerList} = state.shared;
	const {isViewMode, dispatchUserRequestRule, couponUsageRule, basicInformation, commonInformation: {dispatchType}} = state.quanBatchCreation;
	const {couponQty, couponImage} = basicInformation;
	return {
		basicInformation: {
			sellerList,
			...basicInformation
		},
		dispatchRule: {
			...dispatchUserRequestRule,
			couponQty,
			couponImage,
			dispatchType
		},
		isViewMode,
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
  	return {
		...bindActionCreators({
			pushState,
			setUserRequestQuanBatch,
			setDispatchType,
			fetchSellerList
		}, dispatch),
		basicInformationActions: bindActionCreators({
			setTitle,
			setSellerID
		}, dispatch),
		dispatchRuleActions: bindActionCreators({
			setCouponQty,
			setIsAutoOnline,
			setPerUserLimit: setDispatchUserRequestRulePerUserLimit,
			setUserScope,
			addProductLimitList,
			deleteProductLimitList
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRequestQuanBatchCreation);