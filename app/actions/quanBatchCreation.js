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