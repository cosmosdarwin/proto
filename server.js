// Express Framework
var express = require('express');
var app = express();

// Jade Templating Engine
var jade = require('jade');
app.set('view engine', 'jade');

// MIDDLEWARE

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(express.static('public'));

// ROUTES

app.get('/', function(req, res) {
  res.redirect('/play');
});

app.get('/play', function(req, res) {
    res.render('play');
});

app.get('/billboard', function(req, res) {
    res.render('billboard');
});

// 404

app.use(function(req, res, next) {
	res.setHeader('Content-Type', 'text/html');
	res.send(404, 'You are lost.');
});

// RUN

app.listen(3000);
