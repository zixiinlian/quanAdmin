import fetch from 'isomorphic-fetch';

let apiServer = "http://192.168.155.169:8004/v1/";

export function getQuanBatchList(quanBatchSearchCriteria) {
	// let url = new URL(apiServer + "coupon/batches");
	// url.search = stringify(quanBatchSearchCriteria);
	return fetch('/QuanBatchList', {
			method: 'get'
			// headers: {
			// 	'Accept': 'application/json',
			// 	'Content-Type': 'application/json'
			// },
		})
		.then(response => response.json())
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
		method: 'post',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		'body': data
	})
	.then(response => response.json());
}