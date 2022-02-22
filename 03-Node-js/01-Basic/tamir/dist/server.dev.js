"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000;
app.use(express["static"]('public'));
app.get('/me', function (req, res) {
  res.send({
    name: 'tamir',
    age: '24'
  });
  console.log('hey');
});
app.get('/friend', function (req, res) {
  res.send({
    name: 'yanir',
    age: '25'
  });
});
app.listen(port, function () {
  console.log('server listen on port', port);
});