import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class SiderBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false
    }
  }

  handleToggleNav() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render () {
    const { handleToggleSiderbar } = this.props;

    return (
      <div id="menu" className="page-sidebar navbar-collapse collapse">
        <ul className="page-sidebar-menu">
          <li>
              <div className="sidebar-toggler hidden-phone" onClick={ handleToggleSiderbar }></div>
          </li>
          <li id="m_1" onClick={ this.handleToggleNav.bind(this) } className={ this.state.isShow ? "active" : "" }>
            <a href="javascript:;">
                <i className="fa fa-home"></i>
                <span className="title">优惠券</span>
                <span className="arrow "></span>
            </a>
            <ul className="sub-menu">
              <li id="m_2">
                  <Link to={`/`}>
                      <i className="fa fa-cogs"></i>
                      优惠券批次管理
                  </Link>
              </li>
              <li id="m_3">
                  <Link to={`/quan`}>
                      <i className="fa fa-cogs"></i>
                      优惠券管理
                  </Link>
              </li> 
              <li id="m_4">
                  <Link to={`/InitiativeQuanBatchCreation`}>
                      <i className="fa fa-cogs"></i>
                      添加优惠券
                  </Link>
              </li>                
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}