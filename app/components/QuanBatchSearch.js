import React, { Component, PropTypes } from 'react';

export default class QuanBatchSearch extends Component {
  constructor(props) {
    super(props);
    this.handleCreateBatch = this.handleCreateBatch.bind(this);
  }

  handleCreateBatch(e){
    this.props.pushState(null, '/QuanBatchCreation');
  }

  render () {
    return (
      <div>
        <div>
          <input type="button" value="查询" />
          <input type="button" value="新建优惠券批次" onClick={this.handleCreateBatch} />
        </div>
      </div>
    );
  }
}
