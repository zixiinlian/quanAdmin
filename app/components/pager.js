import React, { Component, PropTypes } from 'react';
import createFragment from 'react-addons-create-fragment';
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

  renderPager(){
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

    if(left !== 1){
      result['firstPage'] = <a href="javascript:void(0)" onClick={this.handleGoToFirstPage}>1</a>
      result['firstPageEllipis'] = <span>...</span>
    }

    for(let i = left; i < current; i++){
      result['page' + i] = <a href="javascript:void(0)" onClick={() => this.handleGoToSpecificPage(i)}>{i}</a>;
    }

    result['page' + current] = <a href="javascript:void(0)" className="currentPage" onClick={() => this.handleGoToSpecificPage(current)}>{current}</a>;    

    for(let i = current + 1; i <= right; i++){
       result['page' + i] = <a href="javascript:void(0)" onClick={() => this.handleGoToSpecificPage(i)}>{i}</a>;
    }

    if(right !== total){
      result['lastPageEllipis'] = <span>...</span>
      result['lastPage'] = <a href="javascript:void(0)" onClick={this.handleGoToLastPage}>{total}</a>
    }

    return createFragment(result);
  }


  render () {
  	const {total} = this.props;
    let left = 1;
    return (
      <div className={classNames({hide: total === 0})}>
        <a href="javascript:void(0)" onClick={this.handleGoToPreviousPage}>上一页</a>
        {this.renderPager()}
        <a href="javascript:void(0)" onClick={this.handleGoToNextPage}>下一页</a>
      </div>
    );
  }
}