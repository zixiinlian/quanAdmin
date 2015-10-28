import fetch from 'isomorphic-fetch';

function errorHandle(response){
	if(response.status < 200 || response.status > 300){
		throw {isServerError: true, message: "网络错误，请稍后重试!"};
	}
	return response;
}

let apiServer = "http://192.168.155.169:8004/v1";
// TODO delete.
apiServer = "http://localhost:9000/v1";

/**
 * 获取优惠券批次列表
 * @param quanBatchSearchCriteria
 * @returns {Promise.<T>|*}
 */
export function getQuanBatchList(quanBatchSearchCriteria) {
	console.log(quanBatchSearchCriteria)
	return get( apiServer+ '/coupon/batches',quanBatchSearchCriteria)
		.then(response => response.json())
}

/**
 * 获取优惠券列表
 * @returns {Promise.<T>|*}
 */
export function getQuanList(){
	return get(apiServer + "/coupons").then(response => response.json());
}

/**
 * 获取机构列表
 * @returns {Promise.<T>|*}
 */
export function getSellerList() {
	return fetch(apiServer + '/sellers', {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
}

/**
 * 上架优惠券
 * @param batchId
 * @param operationUserId
 * @returns {Promise.<T>|*}
 */
export function putOnQuanBatch(batchId,operateUserId){
	return fetch(apiServer + '/coupon/batches/'+batchId+'/on/by/'+operateUserId,{
		method:'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(response => response.json());
}

/**
 * 下架优惠券
 * @param batchId
 * @param operationUserId
 * @returns {Promise.<T>|*}
 */
export function putOffQuanBatch(batchId,operateUserId){
	return fetch(apiServer + '/coupon/batches/'+batchId+'/off/by/'+operateUserId,{
		method:'PATCH',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	}).then(response => response.json());
}

export function getProductList() {
	// let url = new URL(apiServer + "coupon/batches");
	// url.search = stringify(quanBatchSearchCriteria);
	return fetch('/ProductList', {
			method: 'get'
			// headers: {
			// 	'Accept': 'application/json',
			// 	'Content-Type': 'application/json'
			// },
		})
		.then(response => response.json())
}

export function postJson(url, data) {
	url = new URL(apiServer + url);
	data = JSON.stringify(data);
	return fetch(url, {
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		'body': data
	})
	.then(errorHandle)
	.then(response => response.json())
	.then(data => {
		if(data.status === 0){
			return data;
		}

		throw {isServerError: false, message: data.message};
	});
}

export function get(url,data){
	if(data && data!=null && data!=''){
		url = url.concat("?");
		for(var i in data){
			if(data[i] && data[i]!=null){
				url = url.concat(i,"=",data[i],"&");
			}
		}

	}
	return fetch(url);
}