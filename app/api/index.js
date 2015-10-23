import fetch from 'isomorphic-fetch';
import {stringify} from 'query-string';

let apiServer = "http://192.168.155.169:8004/v1";

export function getQuanBatchList(quanBatchSearchCriteria) {
	// let url = new URL(apiServer + "coupon/batches");
	// url.search = stringify(quanBatchSearchCriteria);
	return fetch(apiServer + '/coupon/batches', {
			method: 'get',
			 headers: {
			 	'Accept': 'application/json',
			 	'Content-Type': 'application/json'
			 },
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