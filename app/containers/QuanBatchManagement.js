import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import {fetchQuanBatchList, fetchDispatchChannelList, setQuanBatchSearchCriteria} from '../actions';
import QuanBatchList from '../components/QuanBatchList';
import QuanBatchSearch from '../components/QuanBatchSearch';
import IssueQuan from '../components/IssueQuan';

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
		const { fetchQuanBatchList } = this.props;
	    fetchQuanBatchList();
	}

	render() {
		const {pushState, quanBatchList, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchDispatchChannelList, dispatchChannelList} = this.props;
		const searchProps = {pushState, dispatchTypeList, setQuanBatchSearchCriteria, quanBatchSearchCriteria, fetchDispatchChannelList, dispatchChannelList};
		const listProps = {quanBatchList};
		return (
			<div>
				<QuanBatchSearch {...searchProps} />
				<QuanBatchList {...listProps} />
			</div>
		);
	}
}

QuanBatchManagement.propTypes = {
  pushState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {quanBatchList, quanBatchSearchCriteria} = state.quanBatchManagement;
	const {dispatchTypeList, dispatchChannelList} = state.shared;
	return {
		quanBatchList,
		quanBatchSearchCriteria,
		dispatchTypeList,
		dispatchChannelList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState: bindActionCreators(pushState, dispatch),
  	fetchQuanBatchList: bindActionCreators(fetchQuanBatchList, dispatch),
  	fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch),
  	setQuanBatchSearchCriteria: bindActionCreators(setQuanBatchSearchCriteria, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);