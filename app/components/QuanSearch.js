import React, { Component, PropTypes } from 'react';

export default class QuanBatchSearch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { fetchDispatchChannelList, dispatchChannelList } = this.props;
    if(dispatchChannelList.length === 0){
      fetchDispatchChannelList();
    }
  }

  onSearchQuan(e){
    let quanSearchParam = {
      batchId: this.refs.batchId.value,
      quanName: this.refs.quanName.value
    };
    this.props.setQuanSearch(quanSearchParam);
  }

  render () {
    const { dispatchChannelList } = this.props;
    return (
      <div>
        <div className="form-inline">
          <div className="form-group">
            <label>批次号: </label>
            <input ref="batchId" type="text"  className="form-control input-small"/>
          </div>
          <div className="form-group ml10">
            <label>优惠券名称: </label>
            <input ref="quanName" type="text" className="form-control input-small"/>
          </div>
          <div className="form-group ml10">
            <label>发放机构: </label>
            <select ref="dispatchChannel" className="form-control input-small">
              {
                dispatchChannelList.map((dispatchChannel) =>
                  <option key={dispatchChannel.id} value={dispatchChannel.id}>{dispatchChannel.desc}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className="form-inline mt10">
          <div className="form-group">
            <label>优惠券码: </label>
            <input ref="quanCode" type="text"  className="form-control input-small" />
          </div>
          <div className="form-group ml10">
            <label>优惠券序列号: </label>
            <input ref="quan" type="text"  className="form-control input-small" />
          </div>
          <div className="form-group ml10">
            <label>领取人: </label>
            <input ref="quanReceiver" type="text"  className="form-control input-small" />
          </div>
          <div className="form-group ml10">
            <label>使用人: </label>
            <input ref="quanUser" type="text"  className="form-control input-small"/>
          </div>
        </div>
        <div className="form-inline mt10">
          <div className="form-group">
            <label>使用状态: </label>
            <select ref="quanStatus" className="form-control input-small">
                <option value="0">全部</option>
                <option value="0">已使用</option>
                <option value="1">未使用</option>
                <option value="2">已过期</option>
                <option value="3">已作废</option>
            </select>
          </div>
          <div className="form-group ml10">
            <label>是否绑定账户: </label>
            <select ref="isBandUser" className="form-control input-small">
                <option value="0">全部</option>
                <option value="0">是</option>
                <option value="1">否</option>
            </select>
          </div>
          <div className="form-group ml10">
            <label>来源订单: </label>
            <input ref="quanSource" type="text" className="form-control input-small"/>
          </div>
          <div className="form-group ml10">
            <label>使用订单: </label>
            <input type="text" className="form-control input-small"/>
          </div>
        </div>
        <div className="mt10 mb10">
          <input type="button" value="查询" onClick={this.handleSearchQuan} className="btn blue"/>
          <input type="button" value="导出" onClick={this.handleExport} className="btn blue ml10"/>
        </div>
      </div>
    );
  }
}