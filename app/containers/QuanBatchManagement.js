import React, { Component } from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

class QuanBatchManagement extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
		        Now you see me.
		    </div>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
  return {
  	pushState
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);