import React, { Component, PropTypes } from 'react';

export default class SelectQuanBatchTypeModal extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
          发放规则：
          <input type="radio" name="dispatchRule" value="1" onClick={e => this.props.selectQuanBatchType(1)}/>用户主动领取
          <input type="radio" name="dispatchRule" value="2" onClick={e => this.props.selectQuanBatchType(2)}/>指定用户发放
          <input type="radio" name="dispatchRule" value="3" onClick={e => this.props.selectQuanBatchType(3)}/>订单满额返券
          <input type="radio" name="dispatchRule" value="4" onClick={e => this.props.selectQuanBatchType(4)}/>站外渠道投放
          <input type="radio" name="dispatchRule" value="5" onClick={e => this.props.selectQuanBatchType(5)}/>售卖
          <input type="radio" name="dispatchRule" value="6" onClick={e => this.props.selectQuanBatchType(6)}/>补偿性优惠券
          <input type="radio" name="dispatchRule" value="7" onClick={e => this.props.selectQuanBatchType(7)}/>优惠型优惠券
      </div>
    );
  }
}
