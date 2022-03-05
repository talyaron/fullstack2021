"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public'));
app.get('/getUsers', function (req, res) {
  res.send({
    name: "Misha",
    id: 12345
  });
});
app.listen(port, function () {
  console.log('server listen on port', port);
});