import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import QuanSearch from '../components/QuanSearch';
import QuanList from '../components/QuanList';

class QuanManagement extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {quanList} = this.props;

		return (
			<div>
				<QuanSearch ></QuanSearch>
				<QuanList quanList={quanList}></QuanList>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {quanList} = state.quanManagement;
	const {dispatchChannelList} = state.shared;
	return {
		quanList,
		dispatchChannelList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	fetchQuanList: bindActionCreators(fetchQuanList, dispatch),
  	fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch),
  	setQuanListCurrentPage: bindActionCreators(setQuanBatchListCurrentPage, dispatch),
  	setQuanSearch: bindActionCreators(setQuanSearch, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(QuanManagement); 