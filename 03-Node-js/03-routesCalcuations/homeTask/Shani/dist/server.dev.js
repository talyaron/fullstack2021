"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3058;
var data = [{
  imgUrl: "",
  topic: "beach",
  year: 0
}, {
  imgUrl: "",
  topic: "mountains",
  year: 1
}, {
  imgUrl: "",
  topic: "desert",
  year: 2
}, {
  imgUrl: "",
  topic: "city",
  year: 0
}, {
  imgUrl: "",
  topic: "beach",
  year: 0
}, {
  imgUrl: "",
  topic: "field",
  year: 0
}];
app.use(express["static"]('public'));
app.get('/getPics', function (req, res) {
  res.send(data);
});
app.listen(port, function () {
  return console.log("Express is listening to localhost:".concat(port));
});