import React, { Component, PropTypes } from 'react';

export default class QuanBatchList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { quanBatchList } = this.props;
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
              <tr key={i}>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
                <td>{batch.batchId}</td>
              </tr>
            )
          }
          </tbody>
      </table>
    );
  }
}
