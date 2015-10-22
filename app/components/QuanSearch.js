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

          批次号: <input ref="batchId" type="text" placeholder="批次号" className="form-control"/>
          优惠券名称: <input ref="quanName" type="text" placeholder="批次号" className="form-control"/>
          <div className="form-group">
            发放机构: 
            <select ref="dispatchChannel" className="form-control">
              {
                dispatchChannelList.map((dispatchChannel) =>
                  <option key={dispatchChannel.id} value={dispatchChannel.id}>{dispatchChannel.desc}</option>
                )
              }
            </select>
          </div>
          优惠券码: <input ref="quanCode" type="text"  className="form-control" placeholder="批次号"/>
 
          优惠券序列号: <input ref="quan" type="text"  className="form-control" placeholder="优惠券序列号"/>

          领取人: <input ref="quanReceiver" type="text"  className="form-control" placeholder="领取人"/>

          使用人: <input ref="quanUser" type="text"  className="form-control" placeholder="使用人"/>
          <div className="form-group">
            使用状态: 
            <select ref="quanStatus" className="form-control">
                <option value="0">全部</option>
                <option value="0">已使用</option>
                <option value="1">未使用</option>
                <option value="2">已过期</option>
                <option value="3">已作废</option>
            </select>
          </div>
          <div className="form-group">
            是否绑定账户: 
            <select ref="isBandUser" className="form-control">
                <option value="0">全部</option>
                <option value="0">是</option>
                <option value="1">否</option>
            </select>
          </div>
          来源订单: <input ref="quanSource" type="text" placeholder="批次号" className="form-control"/>
    
          使用订单: <input type="text" placeholder="批次号" className="form-control"/>

        <div>
          <input type="button" value="查询" onClick={this.handleSearchQuan} className="btn blue"/>
          // <input type="button" value="导出" onClick={this.handleExport} />
        </div>
      </div>
    );
  }
}