var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var bodyParser = require('body-parser')
var config = require('./webpack.config');

var app = new require('express')();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
app.use( bodyParser.json() );       // to support JSON-encoded bodies

app.post('/QuanBatchList', function(req, res){
	if(Object.keys(req.body).length !== 0){
		res.json([
			{ batchId: 1},
			{ batchId: 2}
		]);
	}
	else{
		res.json([
			{ batchId: 1},
			{ batchId: 2},
			{ batchId: 3},
			{ batchId: 4},
			{ batchId: 5}
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
