import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SiderBar from '../components/SiderBar';
import Header from '../components/Header';

class QuanAdminApp extends Component {
  constructor(props) {
      super(props);
      this.state = {
        isShow: true
      }
  }

  handleToggleSiderbar() {
    this.setState({
      isShow: !this.state.isShow
    });
  }

  render() {
  	const { children, siderbarList } = this.props;
    return (
      <div className={ "page-header-fixed " + (this.state.isShow ? "" : "page-sidebar-closed") } >
        <div className="page-container">
          <Header></Header>
          <SiderBar siderbarList={siderbarList} handleToggleSiderbar={this.handleToggleSiderbar.bind(this)}></SiderBar>
  	      <div className="page-content">
  	      	{children}
  	      </div>
        </div>
      </div>
    );
  }
}

QuanAdminApp.propTypes = {
  // Injected by React Redux
  // errorMessage: PropTypes.string,
  // resetErrorMessage: PropTypes.func.isRequired,
  // pushState: PropTypes.func.isRequired,
  // inputValue: PropTypes.string.isRequired,
  // Injected by React Router
  children: PropTypes.node
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanAdminApp);