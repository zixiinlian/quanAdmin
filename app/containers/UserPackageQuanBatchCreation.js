import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { bindActionCreators } from 'redux';
import {fetchDispatchChannelList} from '../actions';
import {
	setTitle, setSellerID, setUserPackageId, setPackageUsersQty, setPackageDescription, setDiscountType, setPlatformLimitList, setApplyProductType
	, setIsBindUser, setExpireType, setDiscountAmount, setDiscountPercent, setExpireDays, setQuanBatch, setDispatchType
} from '../actions/quanBatchCreation';
import QuanBatchBasicInformation from '../components/QuanBatchBasicInformation';
import UserPackageDispatchRule from '../components/UserPackageDispatchRule';
import QuanBatchUsageRule from '../components/QuanBatchUsageRule';

class UserPackageQuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchDispatchChannelList, basicInformation: {dispatchChannelList}, setDispatchType } = this.props;
		
	    if(dispatchChannelList.length === 0){
	      fetchDispatchChannelList();
	    }

	    setDispatchType(2);
	}

	render() {
		const { basicInformation, dispatchRule, usageRule, basicInformationActions, dispatchRuleActions, usageRuleActions, setQuanBatch} = this.props;
		return (
			<div>
				<QuanBatchBasicInformation {...basicInformation} {...basicInformationActions}/>
				<UserPackageDispatchRule {...dispatchRule} {...dispatchRuleActions} />
				<QuanBatchUsageRule {...usageRule} {...usageRuleActions} />
				<input type="button" value="保存" onClick={setQuanBatch} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {dispatchChannelList} = state.shared;
	const {dispatchUserPackageRule, couponUsageRule, basicInformation} = state.quanBatchCreation;
	return {
		basicInformation: {
			dispatchChannelList,
			...basicInformation
		},
		dispatchRule: dispatchUserPackageRule,
		usageRule: couponUsageRule
	};
}

function mapDispatchToProps(dispatch) {
	return {
		...bindActionCreators({
			pushState,
			setQuanBatch,
			setDispatchType
		}, dispatch),
		fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch),
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
			setExpireDays
		}, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPackageQuanBatchCreation);