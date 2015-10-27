import React, { Component, PropTypes } from 'react';
import classNames from 'classNames'

export default class Pager extends Component {
  constructor(props) {
    super(props);
    this.handleGoToPreviousPage = this.handleGoToPreviousPage.bind(this);
    this.handleGoToNextPage = this.handleGoToNextPage.bind(this);
    this.handleGoToFirstPage = this.handleGoToFirstPage.bind(this);
    this.handleGoToLastPage = this.handleGoToLastPage.bind(this);
    this.handleGoToSpecificPage = this.handleGoToSpecificPage.bind(this);
  }

  handleGoToPreviousPage(){
    let {current, onPageChanged} = this.props;
    if(current !== 1){
      onPageChanged(current - 1);
    }
  }

  handleGoToNextPage(){
    let {current, total, onPageChanged} = this.props;
    if(current !== total){
      onPageChanged(current + 1);
    }
  }

  handleGoToFirstPage(){
    let {current, onPageChanged} = this.props;
    if(current !== 1){
      onPageChanged(1);
    }
  }

  handleGoToLastPage(){
    let {current, onPageChanged} = this.props;
    if(current !== total){
      onPageChanged(total);
    }
  }

  handleGoToSpecificPage(pageNumber){
    let {current, onPageChanged} = this.props;
    if(current !== pageNumber){
      onPageChanged(pageNumber);
    }
  }

  calculatePager(){
    let result = {};
    let {total, current, visible} = this.props;

    if(total <= visible){
      visible = total;
    }

    let left = current - parseInt(visible / 2);
    if(current <= visible){
      left = 1;
    }
    if(current + visible > total){
      left = total - visible + 1;
    }

    let right = left + visible;
    if (right > total){
      right = total;
    }

    let pages = Array.from({length: right - left + 1}, (e, i) => i + left);

    return {left, current, right, pages};
  }


  render () {
  	const {total} = this.props;
    const {left, current, right, pages} = this.calculatePager();
    if(total !== 0){
      return (
        <div>
          <a href="javascript:void(0)" onClick={this.handleGoToPreviousPage}>上一页</a>
          {left !== 1 ? <a href="javascript:void(0)" onClick={this.handleGoToFirstPage}>1</a> : null}
          {left !== 1 ? <span>...</span> : null}
          {
            pages.map(e => <a key={e} href="javascript:void(0)" className={classNames({currentPage: e === current})} onClick={() => this.handleGoToSpecificPage(e)}>{e}</a>)
          }
          {right !== total ? <span>...</span> : null}
          {right !== total ? <a href="javascript:void(0)" onClick={this.handleGoToLastPage}>{total}</a> : null}
          <a href="javascript:void(0)" onClick={this.handleGoToNextPage}>下一页</a>
        </div>
      );
    }
    else{
      return null;
    }
  }
}