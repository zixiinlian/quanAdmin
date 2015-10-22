import React, { Component, PropTypes } from 'react';
import classNames from 'classNames'

export default class ModalDialog extends Component {
  constructor(props) {
    super(props);
  }

  render () {
  	const {children, title, onClose} = this.props;
    return (
      <div className="mask" >
      	<div className="dialog">
      		<div>
      			{title}
      			<a href="javascript:void(0)" onClick={onClose}>X</a>
      		</div>
	      	{children}      		
      	</div>
      </div>
    );
  }
}