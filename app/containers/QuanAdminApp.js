import 'babel-core/polyfill';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class QuanAdminApp extends Component {
  constructor(props) {
      super(props);
  }

  render() {
  	const { children } = this.props;
    return (
      <div>
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