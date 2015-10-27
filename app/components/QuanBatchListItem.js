import React, { Component, PropTypes } from 'react';

export default class QuanBatchListItem extends Component {
  constructor(props) {
    super(props);
    this.handleIssueQuan = this.handleIssueQuan.bind(this);
    this.handleReadBatch = this.handleReadBatch.bind(this);
    this.handleEditBatch = this.handleEditBatch.bind(this);
    this.handlePutOnBatch = this.handlePutOnBatch.bind(this);
    this.handlePutOffBatch = this.handlePutOffBatch.bind(this);
  }

  handlePutOnBatch(e){
    let {doPutOnQuanBatch,batchId,loginUser,status} = this.props;
    doPutOnQuanBatch(batchId,loginUser.id).then(data => {
      if(!data || data.result.status!=0){
        alert(json.result.message);
      }else{
        status = 1;
      }
    });
  }

  handlePutOffBatch(e){
    let {doPutOffQuanBatch,batchId,loginUser,status} = this.props;
    doPutOffQuanBatch(batchId,loginUser.id).then(data => {
      if(!data || data.result.status!=0){
        alert(json.result.message);
      }else{
        status = 0;
      }
    });
  }

  handleReadBatch(e){
    this.props.pushState(null, '/InitiativeQuanBatchCreation');
  }

  handleEditBatch(e){
    this.props.pushState(null, '/InitiativeQuanBatchCreation');
  }

  handleIssueQuan(e){
    let {showIssueQuan, batchId} = this.props;
    showIssueQuan(batchId);
  }

  render () {
    const { batchId, title, createTime, dispatchType, dispatchTypeList,couponQty, createUserName ,status} = this.props;
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
          <a href="javascript:void(0)" onClick={this.handleReadBatch}>查看</a>
          <a href="javascript:void(0)" onClick={this.handleEditBatch}>编辑</a>
          {status == 0 ? <a href="javascript:void(0)" onClick={this.handlePutOnBatch}>上架</a> : <a href="javascript:void(0)" onClick={this.handlePutOffBatch}>下架</a>}
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