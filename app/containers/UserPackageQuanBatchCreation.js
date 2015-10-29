import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchSellerList} from '../actions';
import {
	setTitle, setSellerID, setUserPackageId, setPackageUsersQty, setPackageDescription, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setUserPackageQuanBatch, setDispatchType, setOrderAmount,
	setIsShareWithBasicAdjustSingle,
	setIsShareWithTimeLimitSingle,
	setIsShareWithGroupPurchaseSingle,
	setIsShareWithOrderMinusMulti,
	setIsShareWithOrderDiscountMulti,
	setIsShareWithOrderPresentMulti,
	setIsShareWithOrderChangeMulti
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import UserPackageDispatchRule from '../components/UserPackageDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class UserPackageQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchSellerList, basicInformation: {sellerList}, setDispatchType } = this.props;
		
	    if(sellerList.length === 0){
	      fetchSellerList();
	    }

	    setDispatchType(2);
	}

	render() {
		const {isViewMode, basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setUserPackageQuanBatch} = this.props;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions}/>
				<UserPackageDispatchRule {...dispatchRule} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				{isViewMode ? null : <input type="button" value="保存" onClick={setUserPackageQuanBatch} />}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {sellerList} = state.shared;
	const {isViewMode, dispatchUserPackageRule, couponUsageRule, basicInformation} = state.quanBatchCreation;
	return {
		basicInformation: {
			sellerList,
			...basicInformation
		},
		isViewMode,
		dispatchRule: dispatchUserPackageRule,
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			pushState,
			setUserPackageQuanBatch,
			setDispatchType,
			fetchSellerList
		}, dispatch),
		basicInformationActions: bindActionCreators({
			setTitle,
			setSellerID
		}, dispatch),
		dispatchRuleActions: bindActionCreators({
			setUserPackageId,
			setPackageUsersQty,
			setPackageDescription
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

export default connect(mapStateToProps, mapDispatchToProps)(UserPackageQuanBatchCreation);