"use strict";

var express = require("express");

var app = express();
var port = process.env.PORT || 3001;
var pictures = [{
  img: "https://imdmyself.com/wp-content/uploads/2017/11/Pionyi-5.jpg",
  year: 2000
}, {
  img: "https://imdmyself.com/wp-content/uploads/2017/11/Pionyi-62.jpg",
  year: 2005
}, {
  img: "https://imdmyself.com/wp-content/uploads/2017/11/Pionyi-9-2.jpg",
  year: 2010
}, {
  img: "https://aif-s3.aif.ru/images/012/123/d3a6193d0c8c8ae5e5b03698b08d6884.jpg",
  year: 2015
}, {
  img: "https://p2.tabor.ru/feed/2016-09-01/11722762/152116_760x500.jpg",
  year: 2020
}];
app.use(express["static"]("public"));
app.get("/getPictures", function (req, res) {
  var year = req.query.year;

  if (year) {
    console.log(year);
    var filteredpicture = pictures.filter(function (picture) {
      return picture.year === year;
    });
    res.send(filteredpicture);
  } else {
    res.send(pictures);
  }
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});