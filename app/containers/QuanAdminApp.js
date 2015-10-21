import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class QuanAdminApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
  	const { children } = this.props;
    return (
      <div>
        <div className="siderbar">
          siderbar: <br/>
          <Link to={`/quan`}>优惠券管理</Link> <br/>
          <Link to={`/QuanBatchCreation`}>添加优惠券</Link> <br/>
          <Link to={`/QuanBatchCreation`}>添加优惠券</Link> 
        </div>
    	  <div>
	        I''m master page.
	      </div>
	      <div>
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