import React, { Component, PropTypes } from 'react';
import classNames from 'classNames'

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	const {children, title, isShow = true, close} = this.props;
    return (
      <div className={classNames("mask", {hide: isShow === false})} >
      	<div className="dialog">
      		<div>
      			{title}
      			<a href="javascript:void(0)" onClick={close}>X</a>
      		</div>
	      	{children}      		
      	</div>
      </div>
    );
  }
}