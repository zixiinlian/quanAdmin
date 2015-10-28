import React from 'react';
import { Route } from 'react-router';
import QuanAdminApp from './containers/QuanAdminApp';
import QuanBatchManagement from './containers/QuanBatchManagement';
import UserRequestQuanBatchCreation from './containers/UserRequestQuanBatchCreation';
import OrderReturnQuanBatchCreation from './containers/OrderReturnQuanBatchCreation';
import UserPackageQuanBatchCreation from './containers/UserPackageQuanBatchCreation';
import ChannelQuanBatchCreation from './containers/ChannelQuanBatchCreation';
import SaleQuanBatchCreation from './containers/SaleQuanBatchCreation';
import QuanManagement from './containers/QuanManagement';

export default (
	<Route component={QuanAdminApp}>
		<Route path="/" component={QuanBatchManagement} />
		<Route path="/UserRequestQuanBatchCreation" component={UserRequestQuanBatchCreation} />
		<Route path="/OrderReturnQuanBatchCreation" component={OrderReturnQuanBatchCreation} />
		<Route path="/UserPackageQuanBatchCreation" component={UserPackageQuanBatchCreation} />
		<Route path="/ChannelQuanBatchCreation" component={ChannelQuanBatchCreation} />
		<Route path="/SaleQuanBatchCreation" component={SaleQuanBatchCreation} />
		<Route path="/quan" component={QuanManagement} />
	</Route>
);