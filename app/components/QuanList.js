import React, { Component, PropTypes } from 'react';
import Pager from './pager'
// import QuanBatchListItem from './QuanListItem';

export default class QuanList extends Component {
  constructor(props) {
    super(props);
  }
  
  onCancelQuan() {

  }

  render () {
    const { quanList, handleCancelQuan } = this.props;
    return (
      <div>
        <table>
            <thead>
              <tr>
                <th>优惠券序列号</th>
                <th>批次ID</th>
                <th>状态</th>
                <th>领取人</th>
                <th>来源订单</th>
                <th>领取时间</th>
                <th>绑定账户</th>
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
              quanList.map((quan, i) =>
                <tr>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td>8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                  <td>12</td>
                  <td>
                    <a href="javascript:void(0)" onClick={this.handleCancelQuan}>作废</a>
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
