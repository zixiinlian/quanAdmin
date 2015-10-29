import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import {
	fetchQuanBatchList,fetchSellerList, setQuanBatchSearchCriteria, showIssueQuan, hideIssueQuan, setQuanBatchListCurrentPage
	, viewQuanBatch, editQuanBatch, putOffQuanBatch, putOnQuanBatch
} from '../actions';
import QuanBatchList from '../components/QuanBatchList';
import QuanBatchSearch from '../components/QuanBatchSearch';
import IssueQuan from '../components/IssueQuan';
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
		const { fetchSellerList,sellerList,fetchQuanBatchList } = this.props;
	    if(!sellerList || sellerList.length === 0){
			fetchSellerList();
	    }

	    fetchQuanBatchList();
	}

	renderIssueQuan(){
		const {isShowIssueQuan, selectedQuanBatchId, quanBatchList, hideIssueQuan} = this.props;
		let selectedQuanBatch = null;
		if(isShowIssueQuan){
			selectedQuanBatch = quanBatchList.find((element) => {
				return element.batchId === selectedQuanBatchId;
			});

			return <ModalDialog onClose={hideIssueQuan} title="站外渠道按卡号段分发"><IssueQuan {...selectedQuanBatch}></IssueQuan></ModalDialog>;
		}
	}

	render() {
		const {
			pushState, quanBatchList, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchSellerList, sellerList
			, showIssueQuan, quanBatchListPager, setQuanBatchListCurrentPage, putOnQuanBatch, putOffQuanBatch,loginUser
			, viewQuanBatch, editQuanBatch
		} = this.props;
		const searchProps = {pushState, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchSellerList, sellerList};
		const listProps = {pushState,quanBatchList, showIssueQuan, dispatchTypeList, quanBatchListPager, setQuanBatchListCurrentPage, putOnQuanBatch
			, putOffQuanBatch,loginUser, viewQuanBatch, editQuanBatch};
		return (
			<div>
				<QuanBatchSearch {...searchProps} />
				<QuanBatchList {...listProps} />
				{ this.renderIssueQuan() }
			</div>
		);
	}
}

QuanBatchManagement.propTypes = {
  pushState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {quanBatchList, quanBatchSearchCriteria, isShowIssueQuan, selectedQuanBatchId, quanBatchListPager} = state.quanBatchManagement;
	const {dispatchTypeList,sellerList,loginUser} = state.shared;
	return {
		quanBatchList,
		quanBatchSearchCriteria,
		dispatchTypeList,
		sellerList,
		isShowIssueQuan,
		selectedQuanBatchId,
		quanBatchListPager,
		loginUser
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  	pushState,
  	fetchQuanBatchList,
  	fetchSellerList,
  	showIssueQuan,
  	hideIssueQuan,
  	setQuanBatchListCurrentPage,
  	setQuanBatchSearchCriteria,
  	viewQuanBatch, 
  	editQuanBatch,
  	putOffQuanBatch,
  	putOnQuanBatch
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);