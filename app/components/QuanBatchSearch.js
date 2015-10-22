import React, { Component, PropTypes } from 'react';

export default class QuanBatchSearch extends Component {
  constructor(props) {
    super(props);
    this.handleCreateBatch = this.handleCreateBatch.bind(this);
    this.handleSearchQuanBatch = this.handleSearchQuanBatch.bind(this);
  }

  handleCreateBatch(e){
    this.props.pushState(null, '/InitiativeQuanBatchCreation');
  }

  handleSearchQuanBatch(e){
    let quanBatchSearchCriteria = {
      batchId: this.refs.batchId.value,
      dispatchType: this.refs.dispatchType.value
    };
    this.props.setQuanBatchSearchCriteria(quanBatchSearchCriteria);
  }

  render () {
    const { dispatchTypeList, dispatchChannelList } = this.props;
    return (
      <div>
        <input ref="batchId" type="text" className="form-control" placeholder="批次号"/>
        <input type="text" className="form-control" placeholder="批次名称"/>
        <div className="form-group">
          发放机构: 
          <select ref="dispatchChannel" className="form-control input-small">
            {
              dispatchChannelList.map((dispatchChannel) =>
                <option key={dispatchChannel.id} value={dispatchChannel.id}>{dispatchChannel.desc}</option>
              )
            }
          </select>
        </div>
        <input type="text" className="form-control" placeholder="创建人"/>
        <div className="form-group">
          发放方式: 
          <select ref="dispatchType" className="form-control input-small">
            {
              dispatchTypeList.map((dispatchType) =>
                <option key={dispatchType.id} value={dispatchType.id}>{dispatchType.desc}</option>
              )
            }
          </select>
        </div> 
        <div>
          <input type="button" className="btn blue" value="查询" onClick={this.handleSearchQuanBatch} />
          <input type="button" className="btn blue" value="新建优惠券批次" onClick={this.handleCreateBatch} />
        </div>
      </div>
    );
  }
}