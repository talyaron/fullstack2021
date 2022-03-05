"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var work = [{
  img: 'https://th.bing.com/th/id/OIP.XOgLT3Jo3y9UwP8Z070V4AHaE7?pid=ImgDet&w=1280&h=853&rs=1',
  view: 'desert',
  year: '1995'
}, {
  img: 'https://th.bing.com/th/id/OIP.XOgLT3Jo3y9UwP8Z070V4AHaE7?pid=ImgDet&w=1280&h=853&rs=1',
  view: 'desert',
  year: '1992'
}, {
  img: 'https://th.bing.com/th/id/R.e0e8a87f389f07b093ece6974e5ebc55?rik=%2fFlmQcQ31cQRrA&pid=ImgRaw&r=0',
  view: 'desert',
  year: '1997'
}, {
  img: 'https://th.bing.com/th/id/OIP.q6vwa5u_AtPDbYR7CW3csgHaEo?pid=ImgDet&rs=1',
  view: 'sea',
  year: '1999'
}, {
  img: 'https://usercontent1.hubstatic.com/12512822_f520.jpg',
  view: 'mountains',
  year: '1901'
}];
app.use(express["static"]("public"));
app.get('/work', function (req, res) {
  // const view = req.query.view;
  if (view = req.query.view) {
    var filterbyview = work.filter(function (work) {
      return work.view === view;
    });
    res.send(filterbyview);
  }
}), app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});