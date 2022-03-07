"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/getMe', function (req, res) {
  res.send([{
    name: 'miki',
    age: 2000
  }]);
});
app.get('/getFriends', function (req, res) {
  res.send('Hello World');
});
app.listen(port, function () {
  console.log('server listen on port', port);
});