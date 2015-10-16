import React, { Component, PropTypes } from 'react';

export default class QuanBatchSearch extends Component {
  constructor(props) {
    super(props);
    this.handleCreateBatch = this.handleCreateBatch.bind(this);
    this.handleSearchQuanBatch = this.handleSearchQuanBatch.bind(this);
  }

  componentDidMount() {
    const { fetchDispatchChannelList, dispatchChannelList } = this.props;
    if(dispatchChannelList.length === 0){
      fetchDispatchChannelList();
    }
  }

  handleCreateBatch(e){
    this.props.pushState(null, '/QuanBatchCreation');
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
        <table>
          <tbody>
            <tr>
              <td>
                批次号: <input ref="batchId" type="text"/>
              </td>
              <td>
                批次名称: <input type="text" />
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
                创建人: <input type="text" />
              </td>
              <td>
                发放方式: 
                <select ref="dispatchType">
                  {
                    dispatchTypeList.map((dispatchType) =>
                      <option key={dispatchType.id} value={dispatchType.id}>{dispatchType.desc}</option>
                    )
                  }
                </select>
              </td>
              <td>
                
              </td>
            </tr>
          </tbody>   
        </table>
        <div>
          <input type="button" value="查询" onClick={this.handleSearchQuanBatch} />
          <input type="button" value="新建优惠券批次" onClick={this.handleCreateBatch} />
        </div>
      </div>
    );
  }
}