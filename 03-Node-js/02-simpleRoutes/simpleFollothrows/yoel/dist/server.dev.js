"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public')); //middleware

app.get('/getMe', function (req, res) {
  res.send({
    name: 'yoel',
    id: 1230
  });
});
app.get('/getMyFriend', function (req, res) {
  res.send({
    name: 'mordi',
    id: 7940
  });
});
app.listen(port, function () {
  console.log("your port is ".concat(port));
});