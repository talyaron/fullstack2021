"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 4000;
var teams = [{
  player: "Ronaldo",
  team: "manchester utd",
  url: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Cristiano_Ronaldo_Portugal.jpg"
}, {
  player: "Mbape",
  team: "psg"
}, {
  player: "Bale",
  team: "real amdrid"
}, {
  player: "Firmino",
  team: "liverpoll"
}, {
  player: "Torres",
  team: "barcelona"
}];
app.use(express["static"]('public'));
app.get('/teams', function (req, res) {
  var search = req.query.search;
  var filtering = filtereplayer(search);
  res.send(filtering);
});

function filtereplayer(search) {
  if (search) {
    var regex = new RegExp(search, "i");
    return teams.filter(function (searchedTerm) {
      return regex.test(searchedTerm.player) || regex.test(searchedTerm.team);
    });
  } else {
    return [];
  }
}

app.listen(port, function () {
  console.log("server listen on port", port);
});