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
      title:this.refs.title.value,
      dispatchType: this.refs.dispatchType.value,
      sellerID:this.refs.seller.value,
      createUserName:this.refs.createUserName.value
    };
    this.props.setQuanBatchSearchCriteria(quanBatchSearchCriteria);
  }

  render () {
    const { dispatchTypeList, sellerList } = this.props;
    return (
      <div className="form-inline">
        <div className="form-group">
          <input ref="batchId" type="text" className="form-control" placeholder="批次号"/>
        </div>
        <div className="form-group ml10">
          <input ref="title" type="text" className="form-control" placeholder="批次名称"/>
        </div>
        <div className="form-group ml10">
          <label>发放机构: </label>
          <select ref="seller" className="form-control input-small">
            {
              sellerList.map((seller) =>
                <option key={seller.id} value={seller.id}>{seller.name}</option>
              )
            }
          </select>
        </div>
        <div className="form-group ml10">
          <input ref="createUserName" type="text" className="form-control" placeholder="创建人"/>
        </div>
        <div className="form-group ml10">
          <label>发放方式: </label>
          <select ref="dispatchType" className="form-control input-small">
            <option value="">不限</option>
            {
              dispatchTypeList.map((dispatchType) =>
                <option key={dispatchType.id} value={dispatchType.id}>{dispatchType.desc}</option>
              )
            }
          </select>
        </div> 
        <div className="mt10 mb10">
          <input type="button" className="btn blue" value="查询" onClick={this.handleSearchQuanBatch} />
          <input type="button" className="btn blue ml10" value="新建优惠券批次" onClick={this.handleCreateBatch} />
        </div>
      </div>
    );
  }
}