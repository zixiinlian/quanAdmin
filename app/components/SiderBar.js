import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SiderBar extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   const { fetchDispatchChannelList, dispatchChannelList } = this.props;
  //   if(dispatchChannelList.length === 0){
  //     fetchDispatchChannelList();
  //   }
  // }

  render () {
    // const { dispatchChannelList } = this.props;
    return (
      <div id="menu" className="page-sidebar navbar-collapse collapse">
        <ul className="page-sidebar-menu">
          <li>
              <div className="sidebar-toggler hidden-phone"></div>
          </li>
          <li id="m_1">
            <Link to={`/`}>
                <i className="fa fa-home"></i>
                <span className="title">控制面板</span>
                <span className="arrow "></span>
            </Link>
            <ul className="sub-menu">
              <li id="m_2">
                  <Link to={`/quan`}>
                      <i className="fa fa-cogs"></i>
                      应用维护
                  </Link>
              </li>                
            </ul>
          </li>
        </ul>
        <div classNameName="siderbar">
          siderbar: <br/>
          <Link to={`/`}>优惠券批次管理</Link> <br/>
          <Link to={`/quan`}>优惠券管理</Link> <br/>
          <Link to={`/InitiativeQuanBatchCreation`}>添加优惠券</Link>
        </div>
      </div>
    );
  }
}