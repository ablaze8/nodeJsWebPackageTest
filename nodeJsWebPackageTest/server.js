'use strict';
var http = require('http');

var express = require('express');
var stylus = require('stylus');
var logger = require('morgan');
var bodyParser = require('body-parser');

var port = process.env.port || 1337;
var app = express();

function compile(str, path) {
    return stylus(str).set('filename', path);
}

app.set('views', __dirname + '/server/views');
app.set("view engine", "jade");

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(stylus.middleware({
    src: __dirname + '/public',
    compile: compile
}
));

app.use(express.static(__dirname + '/public'));

app.get('partials/:partialPath', function (req, res) {
    res.render('partials/' + req.param.partialPath);
});

app.get('*', function (req, res) {
    res.render('index');
});


var server = http.createServer(app);
server.listen(port, function () {
    console.log('My app is listening at: ', port);
});