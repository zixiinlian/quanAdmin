import React, { Component, PropTypes } from 'react';
import { validateDigit } from '../validators';

export default class QuanBatchSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batchId: '', 
      title: '', 
      seller: '', 
      createUserName: '', 
      dispatchType: ''
    }
  }

  handleBatchIdChanged(e){
    let batchId = e.target.value;
    if(!validateDigit(batchId)){
      alert('批次号必须是数字!');
      return;
    }

    this.setState({batchId: batchId})
  }

  handleCreateBatch(e){
    console.log(this.props);
    this.props.showQuanBatchTypeModal();
  }

  handleSearchQuanBatch(e){
    let {batchId, title, dispatchType, sellerID, createUserName} = this.state;
    let quanBatchSearchCriteria = {
      batchId,
      title,
      dispatchType,
      sellerID,
      createUserName
    };
    this.props.setQuanBatchSearchCriteria(quanBatchSearchCriteria);
  }

  render () {
    const { dispatchTypeList, sellerList } = this.props;
    const {batchId, title, seller, createUserName, dispatchType} = this.state;
    return (
      <div className="form-inline">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="批次号" value={batchId} onChange={this.handleBatchIdChanged.bind(this)} />
        </div>
        <div className="form-group ml10">
          <input type="text" className="form-control" placeholder="批次名称" value={title} onChange={e => this.setState({title: e.target.value})} />
        </div>
        <div className="form-group ml10">
          <label>发放机构: </label>
          <select className="form-control input-small" value={seller} onChange={e => this.setState({seller: e.target.value})}>
            <option value="">不限</option>
            {
              sellerList.map((seller) =>
                <option key={seller.id} value={seller.id}>{seller.name}</option>
              )
            }
          </select>
        </div>
        <div className="form-group ml10">
          <input type="text" className="form-control" placeholder="创建人" value={createUserName} onChange={e => this.setState({createUserName: e.target.value})}/>
        </div>
        <div className="form-group ml10">
          <label>发放方式: </label>
          <select className="form-control input-small" value={dispatchType} onChange={e => this.setState({dispatchType: e.target.value})}>
            <option value="">不限</option>
            {
              dispatchTypeList.map((dispatchType) =>
                <option key={dispatchType.id} value={dispatchType.id}>{dispatchType.desc}</option>
              )
            }
          </select>
        </div> 
        <div className="mt10 mb10">
          <input type="button" className="btn blue" value="查询" onClick={this.handleSearchQuanBatch.bind(this)} />
          <input type="button" className="btn blue ml10" value="新建优惠券批次" onClick={this.handleCreateBatch.bind(this)} />
        </div>
      </div>
    );
  }
}