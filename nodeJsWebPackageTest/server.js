'use strict';
var http = require('http');
var express = require('express');
var app = express();

var port = process.env.port || 1337;

// view engine
app.set("view engine", "jade");

app.get("/", function (req, res) {
    res.render("jade/index", { title: "Demo App 123" });
});

var server = http.createServer(app);
server.listen(port);