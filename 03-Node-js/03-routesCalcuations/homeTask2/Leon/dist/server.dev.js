"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 4000;
var teams = [{
  player: "ronaldo",
  team: "manchester utd"
}, {
  player: "mbape",
  team: "psg"
}, {
  player: "bale",
  team: "real amdrid"
}, {
  player: "firmino",
  team: "liverpoll"
}, {
  player: "torres",
  team: "barcelona"
}];
var list = [{
  bale: "bale",
  mbape: "mbape",
  ronaldo: "ronaldo",
  firmino: "firmino",
  torres: "torres"
}];
app.use(express["static"]('public'));
app.get('/teams', function (req, res) {
  res.send('Hello World');
});
app.listen(port, function () {
  console.log("server listen on port", port);
});