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
    const { batchId, title, createTime, dispatchType, dispatchTypeList, operationUserName } = this.props;
    const dispatchTypeDesc = dispatchTypeList.filter((element) => {
      return element.id === dispatchType
    })[0].desc;
    return (
      <tr>
        <td>{batchId}</td>
        <td>{title}</td>
        <td>{createTime}</td>
        <td>{dispatchTypeDesc}</td>
        <td>{batchId}</td>
        <td>{batchId}</td>
        <td>{operationUserName}</td>
        <td>
          <a href="javascript:void(0)">查看</a>
          <a href="javascript:void(0)">编辑</a>
          <a href="javascript:void(0)">上架</a>
          <a href="javascript:void(0)">下架</a>
          <a href="javascript:void(0)" onClick={this.handleIssueQuan}>分发</a>
          <a href="javascript:void(0)">发放</a>
          <a href="javascript:void(0)">导出</a>
        </td>
      </tr>
    );
  }
}