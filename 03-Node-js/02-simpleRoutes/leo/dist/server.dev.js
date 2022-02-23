"use strict";

var _require = require('dns'),
    lookupService = _require.lookupService;

var express = require('express');

var _require2 = require('inspector'),
    url = _require2.url;

var app = express();
var port = process.env.PORT || 3005;
var pictures = [{
  name: "leo",
  year: "1857",
  url: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
}, {
  name: "picaso",
  year: "1977",
  url: "https://images.pexels.com/photos/962312/pexels-photo-962312.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
}];
app.use(express["static"]('public'));
app.get('/getPics', function (req, res) {
  res.send(pictures);
});
app.listen(port, function () {
  console.log("server listen on port", port);
});