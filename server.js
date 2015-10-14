var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('./webpack.config');

var app = new require('express')();
var port = 3000;

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/QuanBatchList', function(req, res){
	res.json([
		{ batchId: 1},
		{ batchId: 2},
		{ batchId: 3},
		{ batchId: 4},
		{ batchId: 5}
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
