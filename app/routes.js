import React from 'react';
import { Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagement from './containers/QuanBatchManagement';
import QuanBatchCreation from './containers/QuanBatchCreation';
import QuanManagement from './containers/QuanManagement';

export default (
	<Route component={QuanAdminApp}>
		<Route path="/" component={QuanBatchManagement} />
		<Route path="/QuanBatchCreation" component={QuanBatchCreation} />
		<Route path="/quan" component={QuanManagement} />
	</Route>
);