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
  team: "psg",
  url: "https://pbs.twimg.com/media/D-Po6M5XYAE9zNp.jpg"
}, {
  player: "Bale",
  team: "real amdrid",
  url: "https://images2.minutemediacdn.com/image/fetch/w_736,h_485,c_fill,g_auto,f_auto/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F1370153981-850x560.jpeg"
}, {
  player: "Firmino",
  team: "liverpoll",
  url: "https://i2-prod.liverpoolecho.co.uk/incoming/article21342232.ece/ALTERNATES/s1200c/0_GettyImages-1334150468.jpg"
}, {
  player: "Torres",
  team: "barcelona",
  url: "https://pbs.twimg.com/media/FL0mBjrWQAE6_-7?format=jpg&name=large"
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