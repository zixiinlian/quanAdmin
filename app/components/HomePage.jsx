import React from 'react';
import { Link } from 'react-router';

export default class HomePage extends React.Component {
  render () {
    return (
      <div>
        <h3>Github</h3>
          <div>
            <Link to="/facebook">View Facebook's profile & repositories</Link>
          </div>
          <div>
            <Link to="/google">View Google's profile & repositories</Link>
          </div>
      </div>
    );
  }
}
