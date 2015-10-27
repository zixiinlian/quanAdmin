import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushState } from 'redux-router';
import QuanSearch from '../components/QuanSearch';
import QuanList from '../components/QuanList';
import { fetchQuanList, fetchSellerList } from '../actions';

class QuanManagement extends Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.fetchQuanList();
		this.props.fetchSellerList();
	}

	render() {
		const {sellerList, quanList} = this.props;

		return (
			<div>
				<QuanSearch sellerList={sellerList}></QuanSearch>
				<QuanList quanList={quanList}></QuanList>
			</div>
		);
	}
} 

function mapStateToProps(state) {
	return {
		quanList: state.quanManagement.quanList,
		sellerList: state.shared.sellerList
	};
}

function mapDispatchToProps(dispatch) {
  return {
  	fetchQuanList: bindActionCreators(fetchQuanList, dispatch),
  	fetchSellerList: bindActionCreators(fetchSellerList, dispatch)
  };
}

QuanManagement.propTypes = {
	quanList: PropTypes.array,
	sellerList: PropTypes.array.isRequired,
	fetchQuanList: PropTypes.func.isRequired,
	fetchSellerList: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(QuanManagement); 
