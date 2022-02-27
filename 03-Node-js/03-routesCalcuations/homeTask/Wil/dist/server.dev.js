"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]("public"));
app.get('/get-Users', function (req, res) {});
app.listen(port, function () {
  console.log("Example app listening on port ".concat(port));
});