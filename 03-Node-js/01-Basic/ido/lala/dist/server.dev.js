"use strict";

var RMplayers = [{
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}, {
  url: '',
  name: ''
}];

var express = require('express');

var app = express();
var port = 5000;
app.use(express["static"]('public'));
app.get('/details', function (req, res) {
  res.send("hello world");
});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});