import * as actionTypes from '../actionTypes/quanBatchCreation'

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