var webpack = require('webpack');
var path = require('path');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser')
var config = require('./webpack.config');
var express = require('express');
var app = express();
// var static = require('express-static');
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.get('/QuanBatchList', function(req, res){
	if(Object.keys(req.query).length !== 0){
		res.json([
			{ batchId: 1, batchName: '批次1', dispatchType: 1},
			{ batchId: 2, batchName: '批次2', dispatchType: 1}
		]);
	}
	else{
		res.json([
			{ batchId: 1, batchName: '批次1', dispatchType: 1},
			{ batchId: 2, batchName: '批次2', dispatchType: 2},
			{ batchId: 3, batchName: '批次3', dispatchType: 3},
			{ batchId: 4, batchName: '批次4', dispatchType: 1},
			{ batchId: 5, batchName: '批次5', dispatchType: 1}
		]);
	}
});

app.get('/DispatchChannelList', function(req, res){
	res.json([
		{ id: 1, desc: '机构1'},
		{ id: 2, desc: '机构2'},
		{ id: 3, desc: '机构3'},
		{ id: 4, desc: '机构4'},
		{ id: 5, desc: '机构5'}
	]);
});

app.get('/QuanList', function(req, res){
	res.json([
		{
			batchId: 457,
			isDispatched: true,
			dispatchCustomerID: 1,
			dispatchCustomerName: "xxx",
			dispatchedChannelID: null,
			dispatchOrderId: null,
			isApplyed: false,
			applyCustomerID: null,
			applyCustomerName: null,
			applyOrderId: null,
			createUserId: 1,
			createTime: "2015-09-07T16:36:44+0800",
			editUserId: 1,
			editTime: "2015-09-07T16:36:44+0800",
			status: 1,
			cancelReason: null,
			deductionAmount: null,
			payAmount: null,
			couponUsageRule: {
				id: 432,
				useBeginTime: "2015-09-07T16:36:43+0800",
				useEndTime: "2016-07-07T00:00:00+0800",
				expireDays: null,
				expireType: 0,
				discountType: 1,
				discountAmount: null,
				discountPercent: 7.3,
				isMarketingDiscountMutex: false,
				isProductDiscountMutex: true,
				isBindUser: false,
				applyProductType: 2,
				orderAmount: 3
			},
			startNo: null,
			endNo: null
		}

	]);
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.get('/UserRequestQuanBatchCreation', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});
app.get('/OrderReturnQuanBatchCreation', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});
app.get('/UserPackageQuanBatchCreation', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});
app.get('/ChannelQuanBatchCreation', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});
app.get('/SaleQuanBatchCreation', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});
app.get('/preferCouponDetail', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});
console.log(path.join(__dirname, '/app/styles'));
app.use(express.static(path.join(__dirname, '/app/styles')));

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
