"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/getMe', function (req, res) {
  res.send([{
    name: 'Omri',
    age: 33
  }]);
});
app.get('/getMyFriend', function (req, res) {
  res.send([{
    name: 'Rotem',
    age: 32
  }]);
});
app.listen(port, function () {
  console.log('server listen on port', port);
});