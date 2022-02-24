"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var data = [{
  title: 'The Matrix',
  year: '1999',
  img: 'https://www.gamespot.com/a/uploads/screen_kubrick/171/1712892/3694187-matrix_header.jpg',
  id: 0
}, {
  title: 'Chocolat',
  year: '2000',
  img: 'https://i.ytimg.com/vi/692hOJq1KJE/maxresdefault.jpg',
  id: 4
}, {
  title: 'Harry Potter',
  year: '2001',
  img: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Harry_Potter_and_the_Philosopher%27s_Stone_banner.jpg',
  id: 3
}, {
  title: 'Spider‑Man',
  year: '2002',
  img: 'https://image.cnbcfm.com/api/v1/image/106973043-1636494543829-spider-man_no_way_home_Cropped.jpg?v=1636494571&w=929&h=523',
  id: 3
}, {
  title: 'Cold Mountain',
  year: '2003',
  img: 'https://i.ytimg.com/vi/kfxXPhKuMUA/maxresdefault.jpg',
  id: 5
}, {
  title: 'Million Dollar Baby',
  year: '2004',
  img: 'http://gonewiththetwins.com/new/wp-content/uploads/2017/10/milliondollarbaby.jpg',
  id: 6
}, {
  title: 'Good Night, and Good Luck.',
  year: '2005',
  img: 'https://www.intofilm.org/intofilm-production/scaledcropped/970x546https%3A/s3-eu-west-1.amazonaws.com/images.cdn.filmclub.org/film__3785-good-night-and-good-luck--hi_res-55ded357.jpg/film__3785-good-night-and-good-luck--hi_res-55ded357.jpg',
  id: 7
}, {
  title: 'Pirates of the Caribbean',
  year: '2006',
  img: 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/A1FD40107CA341AAE0B3225A4182397EE1A22BABAFD2D680E818EA4C560801AC/scale?width=1200&aspectRatio=1.78&format=jpeg',
  id: 7
}, {
  title: 'Next',
  year: '2007',
  img: 'https://m.media-amazon.com/images/M/MV5BNjhjNjBlYWItMTFlNy00MzQzLTk1MGQtNTI4M2M5MGM4YTU0XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_QL75_UX500_CR0,47,500,281_.jpg',
  id: 9
}, {
  title: 'The Dark Knight',
  year: '2008',
  img: 'https://irs.www.warnerbros.com/hero-banner-v2-tablet-jpeg/movies/media/browser/the_dark_knight_banner.jpg',
  id: 8
}, {
  title: 'Knowing',
  year: '2009',
  img: 'https://m.media-amazon.com/images/I/51gpALZ1Q5L._SY445_.jpg',
  id: 10
}, {
  title: 'The Fighter (I)',
  year: '2010',
  img: 'https://i.ytimg.com/vi/VXEbdgqWNFg/movieposter.jpg',
  id: 11
}];
app.use(express["static"]('public'));
app.get("/getUsers", function (req, res) {
  // console.log(req.query)
  var year = req.query.year;

  if (year) {
    console.log(year);
    var filterdData = data.filter(function (data) {
      return data.year === year;
    });
    res.send(filterdData);
  } else {
    res.send(data);
  }
});
app.listen(port, function () {
  return console.log("Express is listening at http://localhost:".concat(port));
});