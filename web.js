var gzippo = require('gzippo'); // Middleware for compression
var express = require('express'); // plugin for express, a server framework
var morgan = require('morgan'); // HTTP request logger middleware for node.js
var app = express();

// app.use(morgan('dev'));
app.use(morgan('combined'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
