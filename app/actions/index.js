import fetch from 'isomorphic-fetch';
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

export function requestQuanBatchList(reddit) {
  return {
    type: REQUEST_QUAN_BATCH_LIST
  };
}

export const RECEIVE_QUAN_BATCH_LIST = 'RECEIVE_QUAN_BATCH_LIST';

export function receiveQuanBatchList(json) {
  return {
    type: RECEIVE_QUAN_BATCH_LIST,
    quanBatchList: json
  };
}

export function fetchQuanBatchList() {
  return dispatch => {
    dispatch(requestQuanBatchList());
    return fetch(`/QuanBatchList`)
      .then(response => response.json())
      .then(json => dispatch(receiveQuanBatchList(json)));
  };
}