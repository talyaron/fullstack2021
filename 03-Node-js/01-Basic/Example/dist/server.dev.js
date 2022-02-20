"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
app.get("/get-user", function (req, res) {
  console.log('get-user');
  res.send("this is the name of the user");
}); //route

app.get("/aaa", function (req, res) {
  var x = 3 * 5;
  res.send("Hello World ".concat(x));
});
app.listen(port, function () {
  console.log("server listen on port", port);
});