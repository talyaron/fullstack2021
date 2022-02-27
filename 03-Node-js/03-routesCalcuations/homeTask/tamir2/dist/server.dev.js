"use strict";

var express = require('express');

var _require = require('process'),
    title = _require.title;

var app = express();
var port = process.env.PORT || 3000;
var data1 = [{
  title: 'facbook',
  text: 'in facbook we heve a lot of friends'
}];
app.use(express["static"]("public"));
app.get('/tamir', function (req, res) {
  res.send(data1);
}), app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});