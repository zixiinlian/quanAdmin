'use strict';

import React from 'react'; // eslint-disable-line no-unused-vars
import { Route } from 'react-router';
import HomePage from './components/HomePage';

export default (
  <Route component={Application}>
    <Route path="/" component={HomePage} />
    <Route path="/:add" component={AddPage} />
  </Route>
);