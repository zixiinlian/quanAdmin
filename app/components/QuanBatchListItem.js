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
    const { batchId, title, createTime, dispatchType, dispatchTypeList,couponQty, createUserName } = this.props;
    const dispatchTypeDesc = dispatchTypeList.find((element) => {
      return element.id === dispatchType
    }).desc;
    return (
      <tr>
        <td>{batchId}</td>
        <td>{title}</td>
        <td>{createTime}</td>
        <td>{dispatchTypeDesc}</td>
        <td>{batchId}</td>
        <td>{couponQty}</td>
        <td>{createUserName}</td>
        <td>
          <a href="javascript:void(0)" onClick={this.handleIssueQuan}>分发</a>
        </td>
      </tr>
    );
  }
}

// <a href="javascript:void(0)">查看</a>
// <a href="javascript:void(0)">编辑</a>
// <a href="javascript:void(0)">上架</a>
// <a href="javascript:void(0)">下架</a>
// <a href="javascript:void(0)" onClick={this.handleIssueQuan}>分发</a>
// <a href="javascript:void(0)">发放</a>
// <a href="javascript:void(0)">导出</a>