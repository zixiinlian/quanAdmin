import React from 'react';
import { Link } from 'react-router';

export default class QuanList extends React.Component {
  static PropTypes = {
    quanId : PropTypes.bool.isRequired
  };

  render () {
    return (
      <div className="react-dialog">
          <div className="react-dialog-con"></div>
      </div>
    );
  }
}
