import React, { Component, PropTypes } from 'react';
import Pager from './pager'
// import QuanBatchListItem from './QuanListItem';

export default class QuanList extends Component {
  constructor(props) {
    super(props);
  }



  handleCancelQuan() {

  }

  render () {
    return (
      <div>
        <table className="table table-striped table-bordered table-hover table-full-width dataTable">
            <thead>
              <tr>
                <th>优惠券序列号</th>
                <th>批次ID</th>
                <th>状态</th>
                <th>领取人</th>
                <th>来源订单</th>
                <th>领取时间</th>
                <th>是否绑定账户</th>
                <th>使用人</th>
                <th>使用时间</th>
                <th>使用订单</th>
                <th>实付金额</th>
                <th>实际抵扣金额</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
            {
              this.props.quanList.map((quan, i) =>
                <tr key={i}>
                  <td>{quan.couponCode}</td>
                  <td>{quan.batchId}</td>
                  <td>{quan.status}</td>
                  <td>{quan.dispatchCustomerName}</td>
                  <td>{quan.dispatchOrderId}</td>
                  <td>{quan.dispatchTime}</td>
                  <td>{quan.couponUsageRule.isBindUser ? '是':'否'}</td>
                  <td>{quan.applyCustomerName}</td>
                  <td>{quan.applyTime}</td>
                  <td>{quan.applyOrderId}</td>
                  <td>{quan.payAmount}</td>
                  <td>{quan.deductionAmount}</td>
                  <td>
                    <a href="javascript:void(0)" onClick={this.handleCancelQuan.bind(this)}>作废</a>
                  </td>
                </tr>
              )
            }
            </tbody>
        </table>
      </div>
    );
  }
}

QuanList.propTypes = {
  quanList:PropTypes.array
};