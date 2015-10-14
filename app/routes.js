import React from 'react';
import { Router, Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagementPage from './containers/QuanBatchManagement';

export default (
	<Router>
		<Route path="/" component={QuanAdminApp}>
			<Route path="manage" component={QuanBatchManagementPage} />
		</Route>
	</Router>
);