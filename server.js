var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var static = require('express-static');
var bodyParser = require('body-parser')
var config = require('./webpack.config');

var app = new require('express')();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(static('app/styles'));

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

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
  }
});
