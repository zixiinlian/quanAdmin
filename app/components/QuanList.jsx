import React from 'react';
import { Link } from 'react-router';

export default class QuanList extends React.Component {
  static PropTypes = {
    quanId : PropTypes.bool.isRequired
  };

  render () {
    return (
      <table>
          <tr>
            <td>{quanId}</td>
          </tr>
      </table>
    );
  }
}
