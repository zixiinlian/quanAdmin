// import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from 'redux-router';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import configureStore from './store/configureStore';
import './styles/bootstrap.min.css';
import './styles/style.css';
import './styles/style-responsive.css';
import './styles/default.css';

const store = configureStore();

ReactDOM.render(
	<div>
	    <Provider store={store}>
	        <ReduxRouter />
	  	</Provider>
	  	<DebugPanel top right bottom>
          <DevTools store={store} monitor={LogMonitor} />
        </DebugPanel>
  	</div>,
    document.getElementById("root")
);
