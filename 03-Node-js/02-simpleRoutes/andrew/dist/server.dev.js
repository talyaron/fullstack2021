"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 2000;
app.use(express["static"]('public'));
app.get('/', function (req, res) {
  res.send('check');
});
app.get('/getMe', function (req, res) {
  res.send({
    name: "Andrew",
    age: 26,
    height: 1.85
  });
});
app.get('/getMyFriend', function (req, res) {
  res.send({
    name: "Menash",
    age: 85,
    height: 1.69
  });
});
app.listen(port, function () {
  return console.log('server listen on port', port);
});