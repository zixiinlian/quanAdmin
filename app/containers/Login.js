import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pushState } from 'redux-router';
import QuanSearch from '../components/QuanSearch';
import QuanList from '../components/QuanList';
import CancelQuanModal from '../components/CancelQuanModal';
import ModalDialog from '../components/ModalDialog';
import {  fetchSellerList } from '../actions/index';
import {login} from '../actions/login';

class QuanManagement extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps){

    }

    handleLogin(e){
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        this.props.login({id:457,name:username});
    }


    render() {
        return (
            <div>
                用户名：
                <input ref="username" type="text" name="username"/>
                密码：
                <input ref="password" type="password" name="password"/>
                <button onClick={e => this.handleLogin()}>登录</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        pushState,
        login
    }, dispatch);
}

QuanManagement.propTypes = {

}

export default connect(mapStateToProps, mapDispatchToProps)(QuanManagement); 
