import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

class QuanBatchCreation extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		const {quanBatchList} = this.props;

		return (
			<div>
				This is Quan Creation page.
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchCreation);