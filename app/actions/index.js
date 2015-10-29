import fetch from 'isomorphic-fetch';
import {pushState} from 'redux-router';
import {setQuanBatchCreation} from './quanBatchCreation'
import * as api from '../api';
// import ActionTypes from '../constants/ActionTypes';

// export function getQuanList() {
//   return async api => ({
//     type: ActionTypes.User.getOneByUsername,
//     username,
//     res: await api(`/users/${username}`)
//   });
// }

// export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

// Resets the currently visible error message.
// export function resetErrorMessage() {
//   return {
//     type: RESET_ERROR_MESSAGE
//   };
// }

export const REQUEST_QUAN_BATCH_LIST = 'REQUEST_QUAN_BATCH_LIST';

export function requestQuanBatchList() {
  return {
    type: REQUEST_QUAN_BATCH_LIST
  };
}

export const RECEIVE_QUAN_BATCH_LIST = 'RECEIVE_QUAN_BATCH_LIST';

export function receiveQuanBatchList(json) {
  return {
    type: RECEIVE_QUAN_BATCH_LIST,
    quanBatchList: json.results,
    totalPage: parseInt(json.total / json.pageSize),
    pageIndex: json.pageIndex,
    pageSize: json.pageSize,
  };
}

export function fetchQuanBatchList(quanBatchSearchCriteria) {
  return dispatch => {
    dispatch(requestQuanBatchList());
    return api.getQuanBatchList(quanBatchSearchCriteria).then(json => dispatch(receiveQuanBatchList(json.data)));
  };
}

export const SET_QUAN_BATCH_SEARCH_CRITERIA = 'SET_QUAN_BATCH_SEARCH_CRITERIA';

export function setQuanBatchSearchCriteria(quanBatchSearchCriteria) {
  return {
    type: SET_QUAN_BATCH_SEARCH_CRITERIA,
    quanBatchSearchCriteria
  };
}

export const RECEIVE_DISPATCH_CHANNEL_LIST = 'RECEIVE_DISPATCH_CHANNEL_LIST';

export function receiveDispatchChannelList(json) {
  return {
    type: RECEIVE_DISPATCH_CHANNEL_LIST,
    dispatchChannelList: json
  };
}

export function fetchDispatchChannelList() {
  return dispatch => {
    return fetch(`/DispatchChannelList`)
      .then(response => response.json())
      .then(json => dispatch(receiveDispatchChannelList(json)));
  };
}

/**
 * 获得机构列表
 * @returns {Function}
 */

export const RECEIVE_SELLER_LIST = 'RECEIVE_SELLER_LIST';

export function receiveSellerList(json) {
  return {
    type: RECEIVE_SELLER_LIST,
    sellerList: json
  };
}


export function fetchSellerList() {
  return dispatch => {
    return api.getSellerList().then(json => dispatch(receiveSellerList(json.data)));
  };
}

export const SHOW_ISSUE_QUAN = 'SHOW_ISSUE_QUAN';

export function showIssueQuan(selectedQuanBatchId) {
  return {
    type: SHOW_ISSUE_QUAN,
    selectedQuanBatchId
  };
}

export const HIDE_ISSUE_QUAN = 'HIDE_ISSUE_QUAN';

export function hideIssueQuan() {
  return {
    type: HIDE_ISSUE_QUAN
  };
}

export const SET_QUAN_BATCH_LIST_CURRENT_PAGE = 'SET_QUAN_BATCH_LIST_CURRENT_PAGE';

export function setQuanBatchListCurrentPage(currentPage) {
  return {
    type: SET_QUAN_BATCH_LIST_CURRENT_PAGE,
    currentPage
  };
}

export const RECEIVE_QUAN_LIST = 'RECEIVE_QUAN_LIST';
export function receiveQuanList(json){
  return {
    type: RECEIVE_QUAN_LIST,
    quanList: json.results,
    pageIndex: json.pageIndex,
    pageSize: json.pageSize,
    total: json.total
  }
}

export function fetchQuanList(quanBatchSearchCriteria) {
  return dispatch => {
    return api.getQuanList()
      .then(json => dispatch(receiveQuanList(json.data)));
  };
}

/**
 * 上架优惠券批次
 * @type {string}
 */
export const SET_PUT_ON_QUAN_BATCH = 'SET_PUT_ON_QUAN_BATCH';

export function setPutOnQuanBatch(result) {
  return {
    type: SET_PUT_ON_QUAN_BATCH,
    result
  };
}

export function doPutOnQuanBatch(batchId,operatorUserId){
  return dispatch => {
    return api.putOnQuanBatch(batchId,operatorUserId).then(json => dispatch(setPutOnQuanBatch(json)));
  }
}

/**
 * 下架优惠券批次
 * @type {string}
 */
export const SET_PUT_OFF_QUAN_BATCH = 'SET_PUT_OFF_QUAN_BATCH';

export function setPutOffQuanBatch(result) {
  return {
    type: SET_PUT_OFF_QUAN_BATCH,
    result
  }
}

export function doPutOffQuanBatch(batchId,operateUserId){
  return dispatch => {
    return api.putOffQuanBatch(batchId,operateUserId).then(json => dispatch(setPutOffQuanBatch(json)));
  }
}

function setBatchQuan(state, pageIndex){
  let quanBatch = state.quanBatchManagement.quanBatchList[pageIndex];
    let {basicInformation, commonInformation, couponUsageRule} = state.quanBatchCreation;
    for(let key in basicInformation){
      basicInformation[key] = quanBatch[key];
    }
    for(let key in commonInformation){
      commonInformation[key] = quanBatch[key];
    }
    for(let key in couponUsageRule){
      couponUsageRule[key] = quanBatch.couponUsageRule[key];
    }

    let destDispatchRule, originDispatchRule, url;
    
    for(let key in destDispatchRule){
      if(key === 'platformLimitList' && originDispatchRule[key] === null){
        destDispatchRule[key] = [];
      }
      else{
        destDispatchRule[key] = originDispatchRule[key];
      }
    }

    return url;
}

export function viewQuanBatch(pageIndex){
  return (dispatch, getState) => {
    let state = getState();
    let quanBatch = state.quanBatchManagement.quanBatchList[pageIndex];
    dispatch(setQuanBatchCreation(quanBatch, true));
    let url = setBatchQuan(state, pageIndex);
    switch(quanBatch.dispatchType){
      case 1:
        url = '/UserRequestQuanBatchCreation';
        break;
      case 2:
        url = '/UserPackageQuanBatchCreation';
        break;
      case 3:
        url = '/OrderReturnQuanBatchCreation';
        break;
      case 4:
        url = '/ChannelQuanBatchCreation';
        break;
      case 5:
        url = '/SaleQuanBatchCreation';
        break;
    }
    dispatch(pushState(null, url));
  }
}

export function editQuanBatch(pageIndex){
  return (dispatch, getState) => {
    let state = getState();
    let quanBatch = state.quanBatchManagement.quanBatchList[pageIndex];
    dispatch(setQuanBatchCreation(quanBatch, false));
    let url = setBatchQuan(state, pageIndex);
    switch(quanBatch.dispatchType){
      case 1:
        url = '/UserRequestQuanBatchCreation';
        break;
      case 2:
        url = '/UserPackageQuanBatchCreation';
        break;
      case 3:
        url = '/OrderReturnQuanBatchCreation';
        break;
      case 4:
        url = '/ChannelQuanBatchCreation';
        break;
      case 5:
        url = '/SaleQuanBatchCreation';
        break;
    }
    dispatch(pushState(null, url));
  }
}