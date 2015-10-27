import * as actionTypes from '../actionTypes/quanBatchCreation';
import {postJson} from '../api'

export function deleteQuanBatchCreationDispatchProductLimit(index) {
  return {
    type: actionTypes.DELETE_QUAN_BATCH_CREATION_DISPATCH_PRODUCT_LIMIT,
    index
  };
}

export function addQuanBatchCreationDispatchProductLimit(productList) {
  return {
    type: actionTypes.ADD_QUAN_BATCH_CREATION_DISPATCH_PRODUCT_LIMIT,
    productList
  };
}

export function setPerUserLimit(perUserLimit) {
  return {
    type: actionTypes.SET_PER_USER_LIMIT,
    perUserLimit
  };
}

export function setIsAutoOnline(isAutoOnline) {
  return {
    type: actionTypes.SET_IS_AUTO_ONLINE,
    isAutoOnline
  };
}

export function setDiscountType(discountType) {
  return {
    type: actionTypes.SET_DISCOUNT_TYPE,
    discountType
  };
}

export function setPlatformLimitList(platform) {
  return {
    type: actionTypes.SET_PLATEFORM_LIMIT_LIST,
    platform
  };
}

export function setApplyProductType(applyProductType) {
  return {
    type: actionTypes.SET_APPLY_PRODUCT_TYPE,
    applyProductType
  };
}

export function setIsBindUser() {
  return {
    type: actionTypes.SET_IS_BIND_USER
  };
}

export function setExpireType(expireType){
	return {
		type: actionTypes.SET_EXPIRE_TYPE,
		expireType
	}
}

export function setDiscountAmount(discountAmount){
	return {
		type: actionTypes.SET_DISCOUNT_AMOUNT,
		discountAmount
	}
}

export function setDiscountPercent(discountPercent){
	return {
		type: actionTypes.SET_DISCOUNT_PERCENT,
		discountPercent
	}
}

export function setExpireDays(expireDays){
	return {
		type: actionTypes.SET_EXPIRE_DAYS,
		expireDays
	}
}

export function setTitle(title){
  return {
    type: actionTypes.SET_TITLE,
    title
  }
}

export function setSellerID(sellerID){
  return {
    type: actionTypes.SET_SELLER_ID,
    sellerID
  }
}

export function setUserPackageId(userPackageId){
  return {
    type: actionTypes.SET_USER_PACKAGE_ID,
    userPackageId
  }
}

export function setPackageUsersQty(packageUsersQty){
  return {
    type: actionTypes.SET_PACKAGE_USERS_QTY,
    packageUsersQty
  }
}

export function setPackageDescription(packageDescription){
  return {
    type: actionTypes.SET_PACKAGE_DESCRIPTION,
    packageDescription
  }
}

export function setIsSale(){
  return {
    type: actionTypes.SET_IS_SALE,
  }
}

export function setSaleAmount(saleAmount){
  return {
    type: actionTypes.SET_SALE_AMOUNT,
    saleAmount
  }
}

export function setDispatchType(dispatchType){
  return {
    type: actionTypes.SET_DISPATCH_TYPE,
    dispatchType
  }
}

export function setOrderAmount(orderAmount){
  return {
    type: actionTypes.SET_ORDER_AMOUNT,
    orderAmount
  }
}

export function setCouponQty(couponQty){
  return {
    type: actionTypes.SET_COUPON_QTY,
    couponQty
  }
}

export function setDispatchSaleRulePerUserLimit(perUserLimit){
  return {
    type: actionTypes.SET_DISPATCH_SALE_RULE_PER_USER_LIMIT,
    perUserLimit
  }
}

export function setUserPackageQuanBatch() {
  return (dispatch, getState) => {
    let {basicInformation, dispatchUserPackageRule, couponUsageRule, commonInformation} = getState().quanBatchCreation;
    let data = {
      ...basicInformation,
      ...commonInformation,
      dispatchUserPackageRule,
      couponUsageRule
    }
    postJson('/coupon/batches', data);
    // .then(json => dispatch(receiveQuanBatch(json)));
  };
}

export function setChannelQuanBatch() {
  return (dispatch, getState) => {
    let {basicInformation, dispatchChannelRule, couponUsageRule, commonInformation} = getState().quanBatchCreation;
    let data = {
      ...basicInformation,
      ...commonInformation,
      dispatchChannelRule,
      couponUsageRule
    }
    postJson('/coupon/batches', data);
    // .then(json => dispatch(receiveQuanBatch(json)));
  };
}

export function setSaleQuanBatch() {
  return (dispatch, getState) => {
    let {basicInformation, dispatchSaleRule, couponUsageRule, commonInformation} = getState().quanBatchCreation;
    let data = {
      ...basicInformation,
      ...commonInformation,
      dispatchSaleRule,
      couponUsageRule
    }
    postJson('/coupon/batches', data);
    // .then(json => dispatch(receiveQuanBatch(json)));
  };
}