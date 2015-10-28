import React, { Component } from 'react';
import { connect } from 'react-redux';
//import 'react-date-picker/index.css';
import ProductListAddition from './ProductListAddition';

export default class QuanBatchUsageRule extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {discountType, setDiscountType, platformLimitList, setPlatformLimitList, applyProductType, setApplyProductType, isBindUser, setIsBindUser
			, expireType, setExpireType, discountAmount, setDiscountAmount, discountPercent, setDiscountPercent, expireDays, setExpireDays, orderAmount
			, setOrderAmount,
			isShareWithBasicAdjustSingle,
			isShareWithTimeLimitSingle,
			isShareWithGroupPurchaseSingle,
			isShareWithOrderMinusMulti,
			isShareWithOrderDiscountMulti,
			isShareWithOrderPresentMulti,
			isShareWithOrderChangeMulti,
			setIsShareWithBasicAdjustSingle,
			setIsShareWithTimeLimitSingle,
			setIsShareWithGroupPurchaseSingle,
			setIsShareWithOrderMinusMulti,
			setIsShareWithOrderDiscountMulti,
			setIsShareWithOrderPresentMulti,
			setIsShareWithOrderChangeMulti
		} = this.props;
		let isIncludeSpecificPlatform = (platformID => platformLimitList.find((e) => e.platformID === platformID));
		return (
			<div>
				<h1>使用规则</h1>
				<div>
					优惠方式：售价满额<input type="text" value={orderAmount} onChange={(e) => setOrderAmount(e.target.value)} />元 
					<input type="radio" name="discountType" checked={discountType === 2} onChange={() => setDiscountType(0)} />立减
					<input type="text" value={discountAmount} onChange={(e) => setDiscountAmount(e.target.value)} />元
					<input type="radio" name="discountType" checked={discountType === 1} onChange={() => setDiscountType(1)}/>折扣
					<input type="text" value={discountPercent} onChange={(e) => setDiscountPercent(e.target.value)} />折
				</div>
				<div>
					适用平台：
					<input type="checkbox" checked={isIncludeSpecificPlatform(0)} onChange={() => setPlatformLimitList(0)}/>全平台
					<input type="checkbox" checked={isIncludeSpecificPlatform(1)} onChange={() => setPlatformLimitList(1)}/>移动
					<input type="checkbox" checked={isIncludeSpecificPlatform(2)} onChange={() => setPlatformLimitList(2)}/>PC
				</div>
				<div>
					适用商品：
					<input type="radio" name="applyProductType" checked={applyProductType === 0} onChange={() => setApplyProductType(0)}/>全场通用
					<input type="radio" name="applyProductType" checked={applyProductType === 1} onChange={() => setApplyProductType(1)}/>指定分类
					<input type="radio" name="applyProductType" checked={applyProductType === 2} onChange={() => setApplyProductType(2)}/>指定商品
				</div>
				<div>
					有效期类型：
					<input type="radio" name="expireType" checked={expireType === 0} onChange={() => setExpireType(0)} />固定时间
					至
					<input type="radio" name="expireType" checked={expireType === 1} onChange={() => setExpireType(1)}/>自领取之日起
					<input type="text" value={expireDays} onChange={(e) => setExpireDays(e.target.value)} />天内有效
				</div>
				<div>
					单品促销设定：
					<input type="checkbox" checked={isShareWithBasicAdjustSingle} onChange={setIsShareWithBasicAdjustSingle}/>与单品基础调价共享
					<input type="checkbox" checked={isShareWithTimeLimitSingle} onChange={setIsShareWithTimeLimitSingle}/>与单品限时特价共享
					<input type="checkbox" checked={isShareWithGroupPurchaseSingle} onChange={setIsShareWithGroupPurchaseSingle}/>与单品团购共享
				</div>
				<div>
					多品促销设定：
					<input type="checkbox" checked={isShareWithOrderMinusMulti} onChange={setIsShareWithOrderMinusMulti}/>与多品满额立减共享
					<input type="checkbox" checked={isShareWithOrderDiscountMulti} onChange={setIsShareWithOrderDiscountMulti}/>与多品满额折扣共享
					<input type="checkbox" checked={isShareWithOrderPresentMulti} onChange={setIsShareWithOrderPresentMulti}/>多品满额赠送共享
					<input type="checkbox" checked={isShareWithOrderChangeMulti} onChange={setIsShareWithOrderChangeMulti}/>与多品满额换购共享
				</div>
				<div>
					绑定账号设定：<input type="checkbox" checked={isBindUser} onChange={setIsBindUser}/>是
				</div>
			</div>
		);
	}
}