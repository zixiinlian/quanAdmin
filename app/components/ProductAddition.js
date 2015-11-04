import React, { Component } from 'react';
import update from 'react-addons-update';
import {fetchProductList} from '../actions/quanBatchCreation';
import Pager from './pager'

export default class ProductAddition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchCriteria: {
				productId: ''
			},
			savedSearchCriteria: {
				productId: ''
			},
			productList: [],
			isProductListSelected: [],
			isAllSelected: false
		}
	}

	componentDidMount() {
		fetchProductList({pageNumber:1,pageSize:10});
	}

	handleSearchProduct(){
		var self = this;
		getProductList().then((json) => {
			json.forEach((element) => {
				element.isSelected = false;
			});
			self.setState({
				productList: json,
				isAllSelected: false,
				isProductListSelected: new Array(json.length).fill(false)
			});
		});
	}

	handleSelectChange(index){
		let {productList, isProductListSelected} = this.state;

		let isSelected = !isProductListSelected[index];
		let isSameStatus = isProductListSelected.every((element, i) => {
			if(index === i){
				return true;
			}
			return element === isSelected;
		});

		this.setState(update(this.state, {
			isProductListSelected: {
				[index] : { $set: isSelected }
			},
			isAllSelected: {
				$set: isSameStatus && isSelected
			}
		}));
	}

	handleSelectAllChange(){
		let {isAllSelected, isProductListSelected} = this.state;

		isAllSelected = !isAllSelected;
		isProductListSelected = isProductListSelected.map((product) => {
			return isAllSelected;
		});

		this.setState({
			isAllSelected: isAllSelected,
			isProductListSelected: isProductListSelected
		});
	}

	handleProductIdChange(e){
		this.setState({
			searchCriteria: {
				productId: e.target.value
			}
		});
	}

	handleAddProdcut(){
		let {onAddProduct, onCancel} = this.props;
		let {productList, isProductListSelected} = this.state;
		let selectedProductList = productList.filter((product, index) => {
			return isProductListSelected[index];
		});

		onAddProduct(selectedProductList);
		onCancel();
	}

	render() {
		let {productList, isAllSelected, isProductListSelected} = this.state;
		let {onCancel} = this.props;
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<td>
								商品ID：<input type="text" onBlur={this.handleProductIdChange.bind(this)} />
							</td>
							<td>
								业务ID：<input type="text" />
							</td>
							<td>
								商品名称：<input type="text" />
							</td>
						</tr>
						<tr>
							<td>
								所属机构：<input type="text" />
							</td>
						</tr>
					</tbody>
				</table>
				<div>
					<input type="button" value="查询" onClick={this.handleSearchProduct.bind(this)} />
				</div>
				<table>
					<thead>
						<tr>
							<th><input type="checkbox" checked={isAllSelected} onChange={this.handleSelectAllChange.bind(this)} /></th>
							<th>商品ID</th>
							<th>业务ID</th>
							<th>商品名</th>
							<th>状态</th>
							<th>价格</th>
						</tr>
					</thead>
					<tbody>
					{
						productList.map((product, index) => {
							let {productId} = product;
							let isSelected = isProductListSelected[index];
							return (
								<tr key={productId}>
									<td><input type="checkbox" checked={isSelected} onChange={this.handleSelectChange.bind(this, index)} /></td>
									<td>{productId}</td>
									<td>{productId}</td>
									<td>{productId}</td>
									<td>{productId}</td>
									<td>{productId}</td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
				<div>
					<input type="button" value="添加" onClick={this.handleAddProdcut.bind(this)} />
					<input type="button" value="取消" onClick={onCancel} />
				</div>
			</div>
		);
	}
}