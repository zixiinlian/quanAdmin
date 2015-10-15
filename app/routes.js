import React from 'react';
import { Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagement from './containers/QuanBatchManagement';
import QuanBatchCreation from './containers/QuanBatchCreation';

export default (
	<Route component={QuanAdminApp}>
		<Route path="/" component={QuanBatchManagement} />
		<Route path="/QuanBatchCreation" component={QuanBatchCreation} />
	</Route>
);