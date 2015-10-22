import React, { Component } from 'react';
import update from 'react-addons-update';
import ModalDialog from './ModalDialog';
import ProductAddition from './ProductAddition';

export default class ProductListAddition extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isShowProductAdditionDialog: false
		}
	}

	handleShowProductAddition(isShow){
		this.setState({
			isShowProductAdditionDialog: isShow
		});
	}

	handleAddProduct(addedProductList){
		let {addQuanBatchCreationDispatchProductLimit} = this.props;
		addQuanBatchCreationDispatchProductLimit(addedProductList);
	}

	handleDeleteProduct(index){
		let {deleteQuanBatchCreationDispatchProductLimit} = this.props;
		deleteQuanBatchCreationDispatchProductLimit(index);
	}

	render() {
		const {isShowProductAdditionDialog} = this.state;
		const {productLimitList} = this.props;

		return (
			<div>
				<table>
					<thead>
						<tr>
							<th>商品ID</th>
							<th>业务ID</th>
							<th>商品名</th>
							<th>状态</th>
							<th>价格</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
					{
						productLimitList.map((product, index) => {
							let {productId} = product;
							return (
								<tr key={productId}>
									<td>{productId}</td>
									<td>{productId}</td>
									<td>{productId}</td>
									<td>{productId}</td>
									<td>{productId}</td>
									<td><a href="javascript:void(0)" onClick={this.handleDeleteProduct.bind(this, index)}>删除</a></td>
								</tr>
							)
						})
					}
					</tbody>
				</table>
				<div>
					<input type="button" value="添加商品" onClick={this.handleShowProductAddition.bind(this, true)} />
					<input type="button" value="批量导入商品" />
				</div>
				{
					isShowProductAdditionDialog ? 
					(
						<ModalDialog title="添加商品" onClose={this.handleShowProductAddition.bind(this, false)}>
							<ProductAddition onCancel={this.handleShowProductAddition.bind(this, false)} onAddProduct={this.handleAddProduct.bind(this)} />
						</ModalDialog>
					)
					: null
				}
			</div>
		);
	}
}