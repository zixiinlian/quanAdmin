import React, { Component } from 'react';
import QuanAdminApp from './QuanAdminApp';
import { createRedux } from 'redux';
import { Provider } from 'redux/react';
import configureStore from './store/configureStore';

const store = configureStore();

React.render(
    <Provider store={store}>
        {() => <QuanAdminApp />}
  	</Provider>,
    document.getElementById("root")
);