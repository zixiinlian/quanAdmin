import fetch from 'isomorphic-fetch';
import {getQuanBatchList,getSellerList} from '../api'
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
    totalPage:json.total
  };
}

export function fetchQuanBatchList(quanBatchSearchCriteria) {
  return dispatch => {
    dispatch(requestQuanBatchList());
    return getQuanBatchList(quanBatchSearchCriteria).then(json => dispatch(receiveQuanBatchList(json.data)));
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
    return getSellerList().then(json => dispatch(receiveSellerList(json.data)));
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
    quanList: json
  }
}

export function fetchQuanList(quanBatchSearchCriteria) {
  return dispatch => {
    return fetch(`/QuanList`)
      .then(response => response.json())
      .then(json => dispatch(receiveQuanList(json)));
  };
}