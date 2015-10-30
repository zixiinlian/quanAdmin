import {RECEIVE_QUAN_LIST,SET_QUAN_LIST_CURRENT_PAGE,SET_QUAN_SEARCH_CRITERIA,SET_QUAN_STATUS,SHOW_CANCEL_QUAN_MODAL,HIDE_CANCEL_QUAN_MODAL} from '../actionTypes/quanManage';
import {getJson,postJson} from '../api'

export function receiveQuanList(json){
  return {
    type: RECEIVE_QUAN_LIST,
    quanList: json.results,
    total: Math.ceil(json.total / json.pageSize),
    current: json.pageIndex
  }
}

export function fetchQuanList() {
  return (dispatch,getState) => {
    let {quanManagement: {quanPager, quanSearchParam}} = getState();
    return getJson("/coupons",{
      ...quanSearchParam,
      pageSize: quanPager.visible,
      pageIndex: quanPager.current
    })
        .then(json => dispatch(receiveQuanList(json.data)));
  };
}

export function setQuanListCurrentPage(currentPage) {
  return {
    type: SET_QUAN_LIST_CURRENT_PAGE,
    currentPage
  };
}

export function setQuanSearch(quanSearchParam) {
  return {
    type: SET_QUAN_SEARCH_CRITERIA,
    quanSearchParam
  };
}


export function setQuanStatus(index, status) {
  return {
    type: SET_QUAN_STATUS,
    index,
    status
  };
}

export function doQuanCancel(index) {
  console.log(index);
  return (dispatch, getState) => {
    let state = getState();
    let quan = state.quanManagement.quanList[index];
    return postJson('/coupons/cancel',{
      couponId:quan.couponId,
      cancelReason:quan.cancelReason
    }, "PATCH").then(json => dispatch(setQuanStatus(index,4)));
  }
}

export function hideCancelQuanModal() {
  return {
    type: HIDE_CANCEL_QUAN_MODAL
  };
}

export function showCancelQuanModal(selectedCouponIndex) {
  return {
    type: SHOW_CANCEL_QUAN_MODAL,
    selectedCouponIndex
  };
}
