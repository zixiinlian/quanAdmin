import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushState } from 'redux-router';
import QuanSearch from '../components/QuanSearch';
import QuanList from '../components/QuanList';
import CancelQuanModal from '../components/CancelQuanModal';
import ModalDialog from '../components/ModalDialog';
import {  fetchSellerList } from '../actions/index';
import {setQuanSearch,setQuanListCurrentPage,fetchQuanList,doQuanCancel,showCancelQuanModal,hideCancelQuanModal} from '../actions/quanManage';

class QuanManagement extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.fetchQuanList();
		this.props.fetchSellerList();
		this.props.setQuanListCurrentPage();
	}

	componentWillReceiveProps(nextProps){
		if( nextProps.quanSearchParam !== this.props.quanSearchParam ||
			nextProps.quanPager.current !== this.props.quanPager.current){
			this.props.fetchQuanList();
		}
	}

	renderCancelQuanModal(){
		const {isShowCancelQuanModal, selectedCouponIndex, quanList, hideCancelQuanModal,doQuanCancel} = this.props;
		let selectedCoupon = null;
		if(isShowCancelQuanModal){
			selectedCoupon = quanList[selectedCouponIndex];
			let modalProps = {...selectedCoupon,selectedCouponIndex,doQuanCancel,hideCancelQuanModal};
			return <ModalDialog onClose={hideCancelQuanModal} title="作废优惠券"><CancelQuanModal {...modalProps}></CancelQuanModal></ModalDialog>;
		}
	}

	render() {
		const {sellerList,quanList,setQuanListCurrentPage,quanPager,quanSearchParam,setQuanSearch,showCancelQuanModal} = this.props;
		const searchProps = {pushState, sellerList,quanSearchParam,setQuanSearch};
		const listProps = {quanList,setQuanListCurrentPage,quanPager,showCancelQuanModal};
		return (
			<div>
				<QuanSearch {...searchProps} ></QuanSearch>
				<QuanList {...listProps} ></QuanList>
				{this.renderCancelQuanModal()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		quanList: state.quanManagement.quanList,
		sellerList: state.shared.sellerList,
		quanSearchParam:state.quanManagement.quanSearchParam,
		quanPager:state.quanManagement.quanPager,
		isShowCancelQuanModal:state.quanManagement.isShowCancelQuanModal,
		selectedCouponIndex:state.quanManagement.selectedCouponIndex
	};
}

function mapDispatchToProps(dispatch) {
  	return {
  		fetchQuanList: bindActionCreators(fetchQuanList, dispatch),
  		fetchSellerList: bindActionCreators(fetchSellerList, dispatch),
		setQuanSearch:bindActionCreators(setQuanSearch,dispatch),
		setQuanListCurrentPage:bindActionCreators(setQuanListCurrentPage,dispatch),
		doQuanCancel:bindActionCreators(doQuanCancel,dispatch),
		showCancelQuanModal:bindActionCreators(showCancelQuanModal,dispatch),
		hideCancelQuanModal:bindActionCreators(hideCancelQuanModal,dispatch)
  	};
}

QuanManagement.propTypes = {
	quanList: PropTypes.array,
	sellerList: PropTypes.array.isRequired,
	fetchQuanList: PropTypes.func.isRequired,
	fetchSellerList: PropTypes.func.isRequired,
	setQuanListCurrentPage:PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanManagement); 
