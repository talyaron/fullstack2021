"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
app.get("/", function (req, res) {
  console.log('get-user');
  res.send("this is the name of the rasheed");
}); //route

app.get("/", function (req, res) {
  var x = 3 * 5;
  res.send("Hello World ".concat(x));
});
app.listen(port, function () {
  console.log("server listen on port", port);
});