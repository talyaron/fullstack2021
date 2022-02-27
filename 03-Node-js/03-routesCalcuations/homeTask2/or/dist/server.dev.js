"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]("public"));
app.get('/get-articles', function (req, res) {});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});