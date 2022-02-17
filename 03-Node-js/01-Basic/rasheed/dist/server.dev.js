"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.get('/get-user', function (req, res) {
  res.send('this is the rasheed');
});
app.listen(port, function () {
  console, log('server listen on port', port);
}); // route

app.get('/', function (req, res) {
  res.send('Hello World');
});