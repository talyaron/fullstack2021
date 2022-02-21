"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/getMe', function (req, res) {
  res.send({
    name: 'noa',
    age: 21
  });
});
app.get('/getMyFriends', function (req, res) {
  res.send([{
    name: 'zofia',
    age: 20
  }, {
    name: 'orit',
    age: 25
  }]);
});
app.listen(port, function () {
  console.log("Express is listening at http://localhost:".concat(port));
});