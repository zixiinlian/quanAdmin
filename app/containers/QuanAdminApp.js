import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SiderBar from '../components/SiderBar';
import Header from '../components/Header';

class QuanAdminApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
  	const { children, siderbarList } = this.props;
    return (
      <div className="page-container">
        <Header></Header>
        <SiderBar siderbarList={siderbarList}></SiderBar>
	      <div className="page-content">
	      	{children}
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