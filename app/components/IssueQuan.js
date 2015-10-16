import React, { Component, PropTypes } from 'react';

export default class IssueQuan extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	const {batchId, batchName} = this.props;
    return (
      <div>
      	<div>批次ID：{batchId}</div>
      	<div>批次名称：{batchName}</div>
      </div>
    );
  }
}
