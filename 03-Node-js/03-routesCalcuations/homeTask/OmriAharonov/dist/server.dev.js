"use strict";

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
var cars = [{
  img: 'https://www.supercars.net/blog/wp-content/uploads/2020/03/x1966_Pontiac_GTO.jpg.pagespeed.ic_.4FnACdskZc.jpg',
  name: 'Pontiac Coupe',
  year: '1966'
}, {
  img: 'https://www.supercars.net/blog/wp-content/uploads/2020/03/1966_Mercury_Cyclone.jpg',
  name: 'Plymouth Superbird',
  year: '1964'
}, {
  img: 'https://www.supercars.net/blog/wp-content/uploads/2020/03/1968_Pontiac_Firebird.jpg',
  name: 'Chevy Camaro',
  year: '1969'
}, {
  img: 'https://www.supercars.net/blog/wp-content/uploads/2020/03/1969_Dodge_Challenger-1400x930.jpg',
  name: 'Pontiac Firebird',
  year: '1968'
}, {
  img: 'https://www.supercars.net/blog/wp-content/uploads/2020/03/1968_Dodge_Superbee.jpg',
  name: 'Plymouth Roadrunner',
  year: '1967'
}, {
  img: 'https://www.supercars.net/blog/wp-content/uploads/2020/03/1960_Corvette-XP-700.jpg',
  name: 'Corvette',
  year: '1960'
}, {
  img: 'https://cdn.hswstatic.com/gif/1961-chevrolet-impala-ss-409-1.jpg',
  name: 'Chevrolet Impala SS',
  year: '1961'
}, {
  img: 'https://i.pinimg.com/736x/f0/4b/37/f04b37e0b56a5fe7ee422683cad40837--dart-car-dodge-dart.jpg',
  name: 'Dodge Dart',
  year: '1962'
}, {
  img: 'https://www.totallycars.club/wp-content/uploads/2019/01/american-muscle-cars-buick-riviera-gs-15485340484c8pl-700x525.jpg',
  name: 'Buick Riviera GS',
  year: '1965'
}, {
  img: 'https://www.totallycars.club/wp-content/uploads/2020/05/1590335640pcl48-700x394.jpg',
  name: 'Ford Galaxie 427',
  year: '1963'
}];
app.use(express["static"]('public'));
app.use(express["static"]('public'));
app.get('/muscleCars', function (req, res) {
  var car = req.query.car;
  var year = req.query.year;

  if (car) {
    var filterdCar = cars.filter(function (auto) {
      return auto.name === car;
    });
    res.send(filterdCar);
  } else if (year) {
    var filterdyear = cars.filter(function (auto) {
      return auto.year === year;
    });
    res.send(filterdyear);
  } else {
    res.send(cars);
  }
});
app.listen(port, function () {
  console.log('server listen to port', port);
});