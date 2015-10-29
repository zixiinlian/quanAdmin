import React, { Component, PropTypes } from 'react';
import Pager from './pager'
import QuanBatchListItem from './QuanBatchListItem';

export default class QuanBatchList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { quanBatchList,showIssueQuan, dispatchTypeList, quanBatchListPager, setQuanBatchListCurrentPage, putOnQuanBatch, putOffQuanBatch, loginUser, viewQuanBatch, editQuanBatch } = this.props;
    const listItemProps = {showIssueQuan, putOnQuanBatch, putOffQuanBatch, loginUser, dispatchTypeList, viewQuanBatch, editQuanBatch};
    return (
      <div>
        <table className="table table-striped table-bordered table-hover table-full-width dataTable">
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
                <QuanBatchListItem {...listItemProps} {...batch} key={i} index={i} />
              )
            }
            </tbody>
        </table>
        <Pager onPageChanged={setQuanBatchListCurrentPage} {...quanBatchListPager}/>
      </div>
    );
  }
}
