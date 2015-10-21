import React, { Component, PropTypes } from 'react';
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
		this.props.fetchQuanList();
		this.props.fetchDispatchChannelList();
	}

	render() {
		const {dispatchChannelList, quanList} = this.props;

		return (
			<div>
				<QuanSearch dispatchChannelList={dispatchChannelList}></QuanSearch>
				<QuanList quanList={quanList}></QuanList>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		quanList: state.quanManagement.quanList,
		dispatchChannelList: state.shared.dispatchChannelList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	fetchQuanList: bindActionCreators(fetchQuanList, dispatch),
  	fetchDispatchChannelList: bindActionCreators(fetchDispatchChannelList, dispatch)
  };
}

QuanManagement.propTypes = {
	quanList: PropTypes.array.isRequired,
	dispatchChannelList: PropTypes.array.isRequired,
	fetchQuanList: PropTypes.func.isRequired,
	fetchDispatchChannelList: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanManagement); 
