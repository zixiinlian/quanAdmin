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
        <table>
          <tbody>
            <tr>
              <td>
                批次号: <input ref="batchId" type="text"/>
              </td>
              <td colSpan="2">
                优惠券名称: <input ref="quanName" type="text" />
              </td>
              <td>
                发放机构: 
                <select ref="dispatchChannel">
                  {
                    dispatchChannelList.map((dispatchChannel) =>
                      <option key={dispatchChannel.id} value={dispatchChannel.id}>{dispatchChannel.desc}</option>
                    )
                  }
                </select>
              </td>
            </tr>
            <tr>
              <td>
                优惠券码: <input ref="quanCode" type="text" />
              </td>
              <td>
                优惠券序列号: <input ref="quan" type="text" />
              </td>
              <td>
                领取人: <input ref="quanReceiver" type="text" />
              </td>
              <td>
                使用人: <input ref="quanUser" type="text" />
              </td>
            </tr>
            <tr>
              <td>
                使用状态: 
                <select ref="quanStatus">
                    <option value="0">全部</option>
                    <option value="0">已使用</option>
                    <option value="1">未使用</option>
                    <option value="2">已过期</option>
                    <option value="3">已作废</option>
                </select>
              </td>
              <td>
                是否绑定账户: 
                <select ref="isBandUser">
                    <option value="0">全部</option>
                    <option value="0">是</option>
                    <option value="1">否</option>
                </select>
              </td>
              <td>
                来源订单: <input ref="quanSource" type="text" />
              </td>
              <td>
                使用订单: <input type="text" />
              </td>
            </tr>
          </tbody>   
        </table>
        <div>
          <input type="button" value="查询" onClick={this.handleSearchQuan} />
          // <input type="button" value="导出" onClick={this.handleExport} />
        </div>
      </div>
    );
  }
}