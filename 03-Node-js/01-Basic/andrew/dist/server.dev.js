"use strict";

// console.log("hi");
var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public')); //middlware
//route

app.get('/', function (req, res) {
  res.send('check');
});
app.get('/getUser', function (req, res) {
  res.send({
    name: "andrew",
    id: 56345
  });
});
app.listen(port, function () {
  return console.log('server listen on port', port);
});