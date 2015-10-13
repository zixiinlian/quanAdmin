import React, { Component } from 'react';
import QuanAdminApp from './QuanAdminApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import * as stores from '../stores';

const redux = createRedux(stores);

React.render(
    <Provider redux={redux}>
        {() => <QuanAdminApp />}
  	</Provider>
    document.getElementById("root")
);