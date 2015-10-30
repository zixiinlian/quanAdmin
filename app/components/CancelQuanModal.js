import React, { Component, PropTypes } from 'react';

export default class CancelQuanModal extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	const {couponId, title,selectedCouponIndex} = this.props;
    return (
      <div>
        <h1 className="text-warning"></h1>
      	<div>优惠券ID：{couponId}</div>
      	<div>优惠券名称：{title}</div>
        <div>
          <button onClick={e => this.props.doQuanCancel(selectedCouponIndex)} >作废</button>
          <button>取消</button>
        </div>
      </div>
    );
  }
}
