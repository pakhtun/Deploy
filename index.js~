var express = require('express');
var app = express();
var api = require('./API.js');

app.listen(3000);


app.get('/', function(req, res) {
	var bar = api.double(200);
	res.status(200).send({ bar });
});
