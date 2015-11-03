import {DO_LOGIN} from '../actionTypes/login';
import {getJson,postJson} from '../api'


export function login(json) {
    return {
        type: DO_LOGIN,
        loginUser:json
    };
}

export function doLogin(username,password){
    console.log(username);
    return dispatch => {
        let loginUser = {
            id:457,
            name:"suncheng"
        }
        return dispatch(login(String.stringify(loginUser)));
    };
}

