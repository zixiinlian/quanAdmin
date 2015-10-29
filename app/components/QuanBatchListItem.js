import React, { Component, PropTypes } from 'react';
import { pushState } from 'redux-router';

export default class QuanBatchListItem extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { 
      batchId, title, createTime, dispatchType, dispatchTypeList, couponQty, createUserName, status, index, viewQuanBatch, editQuanBatch
      , showIssueQuan, putOnQuanBatch, putOffQuanBatch
    } = this.props;
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
          <a href="javascript:void(0)" onClick={ e => viewQuanBatch(index) }>查看</a>
          <a href="javascript:void(0)" onClick={ e => editQuanBatch(index) }>编辑</a>
          { 
            status == 0 ? <a href="javascript:void(0)" onClick={ e => putOnQuanBatch(index) }>上架</a> 
            : <a href="javascript:void(0)" onClick={ e => putOffQuanBatch(index) }>下架</a>
          }
          <a href="javascript:void(0)" onClick={ () => showIssueQuan(batchId) }>分发</a>
        </td>
      </tr>
    );
  }
}