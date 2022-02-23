"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3002;
app.use(express["static"]('public'));
app.get('/getMe', function (req, res) {
  res.send('Hello me');
});
app.get('/getMyFriend', function (req, res) {
  res.send('Hello friend');
});
app.listen(port, function () {
  console.log("server listen on port", port);
});