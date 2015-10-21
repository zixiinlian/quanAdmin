import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushState } from 'redux-router';
import QuanSearch from '../components/QuanSearch';
import QuanList from '../components/QuanList';
import { fetchQuanList, fetchDispatchChannelList } from '../actions';

class QuanManagement extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		const { fetchQuanList, fetchDispatchChannelList} = this.props;

		fetchQuanList();
		fetchDispatchChannelList();
	}

	render() {
		const {quanList, dispatchChannelList, fetchQuanList, fetchDispatchChannelList} = this.props;

		return (
			<div>
				<QuanSearch dispatchChannelList={dispatchChannelList}></QuanSearch>
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
  	fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(QuanManagement); 