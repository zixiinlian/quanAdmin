import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import {
	fetchQuanBatchList,fetchSellerList, setQuanBatchSearchCriteria, showIssueQuan, hideIssueQuan, setQuanBatchListCurrentPage
	, viewQuanBatch, editQuanBatch, putOffQuanBatch, putOnQuanBatch,
	showQuanBatchTypeModal,hideQuanBatchTypeModal,selectQuanBatchType,
	fetchDispatchChannelList,batchDispatchQuan
} from '../actions';
import QuanBatchList from '../components/QuanBatchList';
import QuanBatchSearch from '../components/QuanBatchSearch';
import IssueQuan from '../components/IssueQuan';
import SelectQuanBatchTypeModal from '../components/SelectQuanBatchTypeModal';
import ModalDialog from '../components/ModalDialog';

class QuanBatchManagement extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps){
		if( nextProps.quanBatchSearchCriteria !== this.props.quanBatchSearchCriteria ||
			nextProps.quanBatchListPager.current !== this.props.quanBatchListPager.current){
	    	this.props.fetchQuanBatchList();
		}
	}

	componentDidMount() {
		const { fetchSellerList,sellerList,dispatchChannelList,fetchDispatchChannelList,fetchQuanBatchList } = this.props;
	    if(!sellerList || sellerList.length === 0){
			fetchSellerList();
	    }

		if(! dispatchChannelList || dispatchChannelList.length === 0){
			fetchDispatchChannelList();
		}
	    fetchQuanBatchList();
	}

	renderIssueQuan(){
		const {isShowIssueQuan, selectedQuanBatchId, quanBatchList, hideIssueQuan,dispatchChannelList,batchDispatchQuan} = this.props;
		let selectedQuanBatch = null;
		if(isShowIssueQuan){
			selectedQuanBatch = quanBatchList.find((element) => {
				return element.batchId === selectedQuanBatchId;
			});
			return <ModalDialog onClose={hideIssueQuan} title="站外渠道按卡号段分发"><IssueQuan {...selectedQuanBatch} hideIssueQuan={hideIssueQuan} dispatchChannelList={dispatchChannelList} batchDispatchQuan={batchDispatchQuan}></IssueQuan></ModalDialog>;
		}
	}

	renderSelectQuanType(){
		const {isShowSelectQuanModal, hideQuanBatchTypeModal,selectQuanBatchType} = this.props;
		if(isShowSelectQuanModal){
			return <ModalDialog onClose={hideQuanBatchTypeModal} title="选择新建优惠券类型"><SelectQuanBatchTypeModal selectQuanBatchType={selectQuanBatchType}></SelectQuanBatchTypeModal></ModalDialog>;
		}
	}

	render() {
		const {
			pushState, quanBatchList, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchSellerList, sellerList,fetchDispatchChannelList,dispatchChannelList
			, showIssueQuan, quanBatchListPager, setQuanBatchListCurrentPage, putOnQuanBatch, putOffQuanBatch,loginUser
			, viewQuanBatch, editQuanBatch,showQuanBatchTypeModal
		} = this.props;

		const searchProps = {pushState, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchSellerList,sellerList,showQuanBatchTypeModal};
		const listProps = {pushState,quanBatchList, showIssueQuan, dispatchTypeList, quanBatchListPager, setQuanBatchListCurrentPage, putOnQuanBatch
			, putOffQuanBatch,loginUser, viewQuanBatch, editQuanBatch,fetchDispatchChannelList,dispatchChannelList};
		return (
			<div>
				<QuanBatchSearch {...searchProps} />
				<QuanBatchList {...listProps} />
				{ this.renderIssueQuan() }
				{ this.renderSelectQuanType() }
			</div>
		);
	}
}

QuanBatchManagement.propTypes = {
  pushState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {quanBatchList, quanBatchSearchCriteria, isShowIssueQuan, selectedQuanBatchId, quanBatchListPager,isShowSelectQuanModal} = state.quanBatchManagement;
	const {dispatchTypeList,sellerList,dispatchChannelList,loginUser} = state.shared;
	return {
		quanBatchList,
		quanBatchSearchCriteria,
		dispatchTypeList,
		sellerList,
		dispatchChannelList,
		isShowIssueQuan,
		selectedQuanBatchId,
		quanBatchListPager,
		loginUser,
		isShowSelectQuanModal
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  	pushState,
  	fetchQuanBatchList,
  	fetchSellerList,
	fetchDispatchChannelList,
  	showIssueQuan,
  	hideIssueQuan,
  	setQuanBatchListCurrentPage,
  	setQuanBatchSearchCriteria,
  	viewQuanBatch, 
  	editQuanBatch,
  	putOffQuanBatch,
  	putOnQuanBatch,
	  showQuanBatchTypeModal,
	  hideQuanBatchTypeModal,
	  selectQuanBatchType,
	  batchDispatchQuan
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);