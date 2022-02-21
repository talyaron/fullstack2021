"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3000;
app.use(express["static"]('public')); //user route

app.get("/getMe", function (req, res) {
  res.send([{
    name: 'rasheed',
    age: 25,
    id: 56565
  }]);
}); //Friends route

app.get("/getFriends", function (req, res) {
  res.send([{
    name: 'mike',
    age: 29,
    id: 546546
  }]);
});
app.listen(port, function () {
  return console.log("server listen on port", port);
});