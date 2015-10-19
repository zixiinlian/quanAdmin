import React, { Component, PropTypes } from 'react';
import QuanBatchListItem from './QuanBatchListItem';

export default class QuanBatchList extends Component {
  constructor(props) {
    super(props);
    this.handleIssueQuan = this.handleIssueQuan.bind(this);
  }

  handleIssueQuan(e){
    
  }

  render () {
    const { quanBatchList, showIssueQuan, dispatchTypeList } = this.props;
    return (
      <table>
          <thead>
            <tr>
              <th>批次号</th>
              <th>批次名称</th>
              <th>创建时间</th>
              <th>发放类型</th>
              <th>发放时间</th>
              <th>发放数量</th>
              <th>创建人</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
          {
            quanBatchList.map((batch, i) =>
              <QuanBatchListItem showIssueQuan={showIssueQuan} dispatchTypeList={dispatchTypeList} {...batch} key={i} />
            )
          }
          </tbody>
      </table>
    );
  }
}
