import React, { Component, PropTypes} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';
import { fetchQuanBatchList } from '../actions';
import QuanBatchList from '../components/QuanBatchList';
import QuanBatchSearch from '../components/QuanBatchSearch';

class QuanBatchManagement extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		const { fetchQuanBatchList } = this.props;
	    fetchQuanBatchList();
	}

	render() {
		const {quanBatchList, pushState} = this.props;

		return (
			<div>
				<QuanBatchSearch pushState={pushState} />
				<QuanBatchList quanBatchList={quanBatchList} />
			</div>
		);
	}
}

QuanBatchManagement.propTypes = {
  pushState: PropTypes.func.isRequired
};

function mapStateToProps(state) {
	const {quanBatchList} = state.quanBatchManagement;
	return {
		quanBatchList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState: bindActionCreators(pushState, dispatch),
  	fetchQuanBatchList: bindActionCreators(fetchQuanBatchList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);