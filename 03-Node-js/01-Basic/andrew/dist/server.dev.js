"use strict";

// console.log("hi");
var express = require('express');

var app = express();
var port = process.env.PORT || 3000; //route

app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/get-user', function (req, res) {
  res.send('this is the name of the user');
});
app.listen(port, function () {
  return console.log('server listen on port', port);
});