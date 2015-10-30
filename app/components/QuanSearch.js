import React, { Component, PropTypes } from 'react';

export default class QuanBatchSearch extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  handleSearchQuan(){
   let quanSearchParam= {
        batchId:this.refs.batchId.value,
        title:this.refs.title.value,
        couponCode:this.refs.couponCode.value,
        serialNumber:this.refs.serialNumber.value,
        dispatchCustomerID:this.refs.dispatchCustomerID.value,
        applyCustomerID:this.refs.applyCustomerID.value,
        isBindUser:this.refs.isBindUser.value,
        dispatchOrderId:this.refs.dispatchOrderId.value,
        applyOrderId:this.refs.applyOrderId.value
    };

    this.props.setQuanSearch(quanSearchParam);
  }

  render () {
    const { sellerList } = this.props;
    return (
      <div>
        <div className="form-inline">
          <div className="form-group">
            <label>批次号: </label>
            <input ref="batchId" type="text"  className="form-control input-small"/>
          </div>
          <div className="form-group ml10">
            <label>优惠券名称: </label>
            <input ref="title" type="text" className="form-control input-small"/>
          </div>
          <div className="form-group ml10">
            <label>发放机构: </label>
            <select ref="dispatchChannel" className="form-control input-small">
              {
                sellerList.map((seller) =>
                  <option key={seller.id} value={seller.businessSellerId}>{seller.name}</option>
                )
              }
            </select>
          </div>
        </div>
        <div className="form-inline mt10">
          <div className="form-group">
            <label>优惠券码: </label>
            <input ref="couponCode" type="text"  className="form-control input-small" />
          </div>
          <div className="form-group ml10">
            <label>优惠券序列号: </label>
            <input ref="serialNumber" type="text"  className="form-control input-small" />
          </div>
          <div className="form-group ml10">
            <label>领取人: </label>
            <input ref="dispatchCustomerID" type="text"  className="form-control input-small" />
          </div>
          <div className="form-group ml10">
            <label>使用人: </label>
            <input ref="applyCustomerID" type="text"  className="form-control input-small"/>
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
            <select ref="isBindUser" className="form-control input-small">
                <option value="">全部</option>
                <option value="1">是</option>
                <option value="0">否</option>
            </select>
          </div>
          <div className="form-group ml10">
            <label>来源订单: </label>
            <input ref="dispatchOrderId" type="text" className="form-control input-small"/>
          </div>
          <div className="form-group ml10">
            <label>使用订单: </label>
            <input ref="applyOrderId" type="text" className="form-control input-small"/>
          </div>
        </div>
        <div className="mt10 mb10">
          <input type="button" value="查询" onClick={this.handleSearchQuan.bind(this)} className="btn blue"/>
          <input type="button" value="导出" onClick={this.handleExport} className="btn blue ml10"/>
        </div>
      </div>
    );
  }
}