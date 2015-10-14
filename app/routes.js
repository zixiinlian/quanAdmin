import React from 'react';
import { Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagementPage from './containers/QuanBatchManagement';

export default (
	<Route component={QuanAdminApp}>
		<Route path="/" component={QuanBatchManagementPage} />
	</Route>
);