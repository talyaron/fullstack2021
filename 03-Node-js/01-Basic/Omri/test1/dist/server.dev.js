"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/get-user', function (req, res) {
  res.send('This is the name of the user');
});
app.listen(port, function () {
  console.log('server listen on port', port);
});