import React from 'react';
import { Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagement from './containers/QuanBatchManagement';
import InitiativeQuanBatchCreation from './containers/InitiativeQuanBatchCreation';
import OrderQuanBatchCreation from './containers/OrderQuanBatchCreation';
import UserPackageQuanBatchCreation from './containers/UserPackageQuanBatchCreation';
import QuanManagement from './containers/QuanManagement';

export default (
	<Route component={QuanAdminApp}>
		<Route path="/" component={QuanBatchManagement} />
		<Route path="/InitiativeQuanBatchCreation" component={InitiativeQuanBatchCreation} />
		<Route path="/OrderQuanBatchCreation" component={OrderQuanBatchCreation} />
		<Route path="/UserPackageQuanBatchCreation" component={UserPackageQuanBatchCreation} />
		<Route path="/quan" component={QuanManagement} />
	</Route>
);