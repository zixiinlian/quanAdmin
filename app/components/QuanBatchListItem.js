import React, { Component, PropTypes } from 'react';

export default class QuanBatchListItem extends Component {
  constructor(props) {
    super(props);
    this.handleIssueQuan = this.handleIssueQuan.bind(this);
  }

  handleIssueQuan(e){
    let {showIssueQuan, batchId} = this.props;
    showIssueQuan(batchId);
  }

  render () {
    const { batchId, batchName } = this.props;
    return (
      <tr>
        <td>{batchId}</td>
        <td>{batchName}</td>
        <td>{batchId}</td>
        <td>{batchId}</td>
        <td>{batchId}</td>
        <td>{batchId}</td>
        <td>{batchId}</td>
        <td><a href="javascirpt:void(0)" onClick={this.handleIssueQuan}>分发</a></td>
      </tr>
    );
  }
}