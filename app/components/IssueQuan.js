import React, { Component, PropTypes } from 'react';

export default class IssueQuan extends Component {
  constructor(props) {
    super(props);
  }

  handleIssue(){
    const {batchId,dispatchType,batchDispatchQuan} = this.props;
    let channelName = this.refs.newChannel.value === '' ? this.refs.channel.value:this.refs.newChannel.value;
    let dispatchQuanParams = {
      batchId,
      dispatchType,
      startNo:this.refs.startNo.value,
      endNo:this.refs.endNo.value,
      dispatchedChannelName:channelName
    };
    batchDispatchQuan(dispatchQuanParams);
  }

  render () {
  	const {batchId,title,couponQty,dispatchedQty,dispatchChannelList} = this.props;
    let  availableQty  = couponQty;
    if(dispatchedQty && dispatchedQty>0){
      availableQty = couponQty - dispatchedQty;
    }
    return (
      <div>
      	<div>批次ID:{batchId}</div>
      	<div>批次名称:{title}</div>
        <div>发放总量:{couponQty}</div>
        <div>可分发量:{availableQty}</div>
        <div>分发段号:
          <input type="number" ref="startNo"/>至
          <input type="number" ref="endNo"/>
        </div>
        <div>
          <label>分发渠道: </label>
          <select className="form-control input-small"  ref="channel">
            {
              dispatchChannelList.map((channel) =>
                      <option key={channel.channelId} value={channel.channelName}>{channel.channelName}</option>
              )
            }
          </select>
          或
          <input type="text" ref="newChannel"/>
        </div>
        <div>
          <button onClick = {e => this.handleIssue()}>确认分发</button>
            <button onClick={e => this.props.hideIssueQuan()}>取消</button>
        </div>
      </div>
    );
  }
}
