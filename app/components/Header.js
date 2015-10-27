import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="header navbar navbar-inverse navbar-fixed-top">
        <div className="header-inner">
            <a className="navbar-brand" href="/">
                <span>公共业务平台</span>
            </a>
            <a href="javascript:;" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <img src="http://backend.hujiang.com//assets/img/menu-toggler.png" alt="" />
            </a>
            <ul className="nav navbar-nav pull-right">
                <li className="dropdown user">
                    <a href="javascript:" className="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                        <img alt="" width="29" height="29" src="http://i2.hjfile.cn/f48/27/59/29282759.jpg" />
                        <span className="username">陈静</span>
                        <i className="fa fa-angle-down"></i>
                    </a>
                    <ul className="dropdown-menu">
                        <li><a href="http://bulo.hujiang.com/setting/" target="_blank"><i className="fa fa-user"></i> 个人档案</a></li>
                        <li><a href="http://bulo.hujiang.com/setting/profile?a=pwd" target="_blank"><i className="fa fa-lock"></i> 修改密码</a></li>
                        <li className="divider"></li>
                        <li><a href="/Account/logout"><i className="fa fa-key"></i> 退出</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    );
  }
}