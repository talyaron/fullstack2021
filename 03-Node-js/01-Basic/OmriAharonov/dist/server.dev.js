"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello World');
});
app.listen(3000);