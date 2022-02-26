"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public')); //connects the public folder 

app.get('/get-article', function (req, res) {
  res.send(photos);
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});