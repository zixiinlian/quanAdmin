import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import {fetchQuanBatchList, fetchDispatchChannelList, setQuanBatchSearchCriteria, showIssueQuan, hideIssueQuan, setQuanBatchListCurrentPage} from '../actions';
import QuanBatchList from '../components/QuanBatchList';
import QuanBatchSearch from '../components/QuanBatchSearch';
import IssueQuan from '../components/IssueQuan';
import ModalDialog from '../components/ModalDialog';

class QuanBatchManagement extends Component {
	constructor(props) {
		super(props);
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.quanBatchSearchCriteria !== this.props.quanBatchSearchCriteria){
			const { fetchQuanBatchList } = this.props;
	    	fetchQuanBatchList(nextProps.quanBatchSearchCriteria);
		}
	}

	componentDidMount() {
		const { fetchDispatchChannelList, dispatchChannelList, fetchQuanBatchList } = this.props;

	    if(dispatchChannelList.length === 0){
	      fetchDispatchChannelList();
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
		}

		return <ModalDialog isShow={isShowIssueQuan} close={hideIssueQuan} title="站外渠道按卡号段分发"><IssueQuan {...selectedQuanBatch}></IssueQuan></ModalDialog>;
	}

	render() {
		const {
			pushState, quanBatchList, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchDispatchChannelList, dispatchChannelList
			, showIssueQuan, quanBatchListPager, setQuanBatchListCurrentPage
		} = this.props;
		const searchProps = {pushState, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchDispatchChannelList, dispatchChannelList};
		const listProps = {quanBatchList, showIssueQuan, dispatchTypeList, quanBatchListPager, setQuanBatchListCurrentPage};
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
	const {dispatchTypeList, dispatchChannelList} = state.shared;
	return {
		quanBatchList,
		quanBatchSearchCriteria,
		dispatchTypeList,
		dispatchChannelList,
		isShowIssueQuan,
		selectedQuanBatchId,
		quanBatchListPager
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState: bindActionCreators(pushState, dispatch),
  	fetchQuanBatchList: bindActionCreators(fetchQuanBatchList, dispatch),
  	fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch),
  	showIssueQuan: bindActionCreators(showIssueQuan, dispatch),
  	hideIssueQuan: bindActionCreators(hideIssueQuan, dispatch),
  	setQuanBatchListCurrentPage: bindActionCreators(setQuanBatchListCurrentPage, dispatch),
  	setQuanBatchSearchCriteria: bindActionCreators(setQuanBatchSearchCriteria, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);