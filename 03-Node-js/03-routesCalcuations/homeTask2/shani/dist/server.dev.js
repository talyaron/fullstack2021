"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3058;
var data = [{
  title: ""
}];
app.use(express["static"]('public'));
app.get('/getArticle', function (req, res) {
  res.send('Hello World');
});
app.listen(port, function () {
  return console.log("Express is listening to localHost:".concat(port));
});