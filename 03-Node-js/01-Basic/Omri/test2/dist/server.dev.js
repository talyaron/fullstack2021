"use strict";

var express = require('express');

var app = express();
var port = process.env.port || 3000;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.get('/getUser', function (req, res) {
  var x = mathPow(5);
  res.send("".concat(x));
});
app.listen(port, function () {
  console.log('server listen on port', port);
});

function mathPow(number) {
  var powNum = number * number;
  return powNum;
}