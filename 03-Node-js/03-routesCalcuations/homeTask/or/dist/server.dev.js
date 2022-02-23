"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
var data = [{
  pic: "http://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/300px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg",
  name: "Admor-hazaken",
  order: 1
}, {
  pic: "http://chabadpedia.co.il/images/thumb/4/40/%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png",
  name: "Admor-hazaken",
  order: 2
}, {
  pic: "http://chabadpedia.co.il/images/thumb/4/40/%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png",
  name: "Admor-hazaken",
  order: 3
}, {
  pic: "http://chabadpedia.co.il/images/thumb/4/40/%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png",
  name: "Admor-hazaken",
  order: 4
}, {
  pic: "http://chabadpedia.co.il/images/thumb/4/40/%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png",
  name: "Admor-hazaken",
  order: 5
}, {
  pic: "http://chabadpedia.co.il/images/thumb/4/40/%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png",
  name: "Admor-hazaken",
  order: 6
}, {
  pic: "http://chabadpedia.co.il/images/thumb/4/40/%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%90%D7%93%D7%9E%D7%95%D7%94%22%D7%96_%D7%A0%D7%93%D7%99%D7%A8.png",
  name: "Admor-hazaken",
  order: 7
}];
app.use(express["static"]("public"));
app.get('/get-pics', function (req, res) {
  res.send("");
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});