"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
var data = [{
  picUrl: "http://chabadpedia.co.il/images/d/da/%D7%9C%D7%90_%D7%94%D7%91%D7%A2%D7%A9%27%27%D7%98.jpg",
  name: "\u05D4\u05D1\u05E2\u05DC \u05E9\u05DD \u05D8\u05D5\u05D1 - \u05DE\u05D9\u05D9\u05E1\u05D3 \u05EA\u05D5\u05E8\u05EA \u05D4\u05D7\u05E1\u05D9\u05D3\u05D5\u05EA",
  order: '0'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/0/0e/939.jpg/375px-939.jpg",
  name: "\u05D4\u05DE\u05D2\u05D9\u05D3 \u05DE\u05DE\u05D6\u05E8\u05D9\u05D8\u05E9",
  order: '1'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/a/a8/%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg/300px-%D7%A8%D7%91%D7%99_%D7%A9%D7%A0%D7%99%D7%90%D7%95%D7%A8_%D7%96%D7%9C%D7%9E%D7%9F.jpg",
  name: "\u05D0\u05D3\u05DE\u05D5\u05E8 \u05D4\u05D6\u05E7\u05DF - \u05DE\u05D9\u05D9\u05E1\u05D3 \u05D7\u05E1\u05D9\u05D3\u05D5\u05EA \u05D7\u05D1\u05D3",
  order: '2'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/f/f6/%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg/375px-%D7%90%D7%93%D7%9E%D7%95%22%D7%A8_%D7%94%D7%90%D7%9E%D7%A6%D7%A2%D7%99.jpg",
  name: "\u05D0\u05D3\u05DE\u05D5\"\u05E8 \u05D4\u05D0\u05DE\u05E6\u05E2\u05D9 - \u05D0\u05D9\u05DF \u05D0\u05E3 \u05EA\u05DE\u05D5\u05E0\u05D4 \u05D0\u05D5 \u05E6\u05D9\u05D5\u05E8 \u05E9\u05DC\u05D5",
  order: '3'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/6/6b/%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg/270px-%D7%A6%D7%9E%D7%97_%D7%A6%D7%93%D7%A7.jpg",
  name: "\u05D0\u05D3\u05DE\u05D5\u05E8 \u05D4\u05E6\u05DE\u05D7 \u05E6\u05D3\u05E7",
  order: '4'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/8/84/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg/165px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%9E%D7%94%D7%A8%D7%A9.jpg",
  name: "\u05D0\u05D3\u05DE\u05D5\u05E8 \u05D4\u05DE\u05D4\u05E8\u05E9",
  order: '5'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/7/7e/%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png/300px-%D7%A6%D7%99%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%27%27%D7%91.png",
  name: "\u05D0\u05D3\u05DE\u05D5\u05E8 \u05D4\u05E8\u05E9\u05D1",
  order: '6'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/b/b8/%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png/300px-%D7%AA%D7%9E%D7%95%D7%A0%D7%AA_%D7%90%D7%93%D7%9E%D7%95%D7%A8_%D7%94%D7%A8%D7%A9%D7%91.png",
  name: "\u05D4\u05E8\u05D1\u05D9 \u05D4\u05E8\u05D9\u05D9\u05E6",
  order: '7'
}, {
  picUrl: "http://chabadpedia.co.il/images/thumb/d/d3/%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg/450px-%D7%A2%D7%99%D7%93%D7%95%D7%93.jpg",
  name: "\u05D4\u05E8\u05D1\u05D9 \u05DE\u05DC\u05D9\u05D5\u05D1\u05D5\u05D5\u05D9\u05D8\u05E9",
  order: '8'
}];
app.use(express["static"]("public"));
app.get('/get-pics', function (req, res) {
  console.log(req.query);
  var order = req.query.order;
  console.log(order);

  if (order) {
    var fillteredPic = data.filter(function (pic) {
      return pic.order === order;
    });
    res.send(fillteredPic);
  } else {
    res.send(data);
  }
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});