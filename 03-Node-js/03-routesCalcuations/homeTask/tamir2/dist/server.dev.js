"use strict";

var _require = require('express'),
    text = _require.text;

var express = require('express');

var _require2 = require('express/lib/response'),
    links = _require2.links;

var app = express();
var port = process.env.PORT || 3000;
var data1 = [{
  title: 'facbook',
  text1: 'face-time'
}, {
  title: 'instegram',
  text1: 'instafollow'
}, {
  title: 'tiktok',
  text1: 'timbrlend'
}];
app.use(express["static"]('public'));
app.get('/tamir', function (req, res) {
  var user = req.query.user;
  var filterdata1 = filterduser(user);
  res.send(filterdata1);
});

function filterduser(user) {
  if (user) {
    var regex = new RegExp(user, "i");
    return data1.filter(function (user) {
      return regex.test(user.title);
    });
  } else {
    return [];
  }
}

app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});