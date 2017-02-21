var express = require('express');
var app = express();
var request = require('request');
var queryString = require('querystring');


var conf = require('./conf/config');

app.get('/', function(req, res) {
	res.send('Hi');
});

app.get('/heweather/:method', function(req, res) {
	var method = req.params.method;
	var params = '?key=' + conf.key + '&' +queryString.encode(req.query);
	var url = conf.heapi + method + params;

	request(url, function(error, response, body){
		if (!error && response.statusCode == 200) {
			res.send(body);
		}
	})
});

var server = app.listen(8005, function() {
	// var host = server.address().address;
	var port = server.address().port;

	console.log('sailing on port %s', port);
});