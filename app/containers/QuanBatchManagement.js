import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { fetchQuanBatchList } from '../actions';
import QuanBatchList from '../components/QuanBatchList';

class QuanBatchManagement extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchQuanBatchList } = this.props;
	    fetchQuanBatchList();
	}

	render() {
		const {quanBatchList} = this.props;

		return (
			<div>
				<QuanBatchList quanBatchList={quanBatchList} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	const {quanBatchList} = state.quanBatchManagement;
	return {
		quanBatchList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState,
  	fetchQuanBatchList: () => dispatch(fetchQuanBatchList())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);