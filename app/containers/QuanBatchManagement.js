import React, { Component } from 'react';
import { connect } from 'react-redux';

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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanBatchManagement);