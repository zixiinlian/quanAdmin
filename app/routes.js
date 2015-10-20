import React from 'react';
import { Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagement from './containers/QuanBatchManagement';
import InitiativeQuanBatchCreation from './containers/InitiativeQuanBatchCreation';

export default (
	<Route component={QuanAdminApp}>
		<Route path="/" component={QuanBatchManagement} />
		<Route path="/InitiativeQuanBatchCreation" component={InitiativeQuanBatchCreation} />
	</Route>
);