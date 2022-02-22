"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3058;
app.use(express["static"]('public'));
app.get('/getHello', function (req, res) {
  res.send('Hello World');
});
app.listen(port, function () {
  return console.log("Express is listening to localhost:".concat(port));
});