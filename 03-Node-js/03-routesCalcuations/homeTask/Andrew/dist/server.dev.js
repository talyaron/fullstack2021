"use strict";

var express = require('express');

var app = express();
var port = 3000;
app.use(express["static"]('public'));
var items = [{
  name: 'Lauf True Grit',
  category: 'gravel',
  price: 6490,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/lauf/2022/true-grit-ultimate/thumbs/1000/d1859.webp'
}, {
  name: 'Canyon Grail CF',
  category: 'gravel',
  price: 3400,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/canyon/2020/grail-cf-sl-8.0-di2/thumbs/1000/5d9bc.webp'
}, {
  name: 'Salsa Cutthroat',
  category: 'gravel',
  price: 2900,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/salsa/2020/cutthroat-apex-1/thumbs/1000/645f4.webp'
}, {
  name: 'Cervélo PX-Series',
  category: 'TT',
  price: 12500,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/cervelo/2020/px-series-red-etap-axs-1-disc/thumbs/1000/c8737.webp'
}, {
  name: 'S-Works Shiv',
  category: 'TT',
  price: 13500,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/specialized/2021/s-works-shiv-disc/thumbs/1000/26608.webp'
}, {
  name: 'Scott Plasma',
  category: 'TT',
  price: 9000,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/scott/2021/plasma-rc/thumbs/1000/e7455.webp'
}, {
  name: 'YT Industries Capra',
  category: 'enduro',
  price: 8000,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/yt/2022/capra-launch-edition-mx/thumbs/1000/fa7e9.webp'
}, {
  name: 'Forbidden Dreadnought',
  category: 'enduro',
  price: 7300,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/forbidden/2022/dreadnought-gx/thumbs/1000/0d25b.webp'
}, {
  name: 'Nukeproof Mega 297',
  category: 'enduro',
  price: 4350,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/nukeproof/2022/mega-297-carbon-elite/thumbs/1000/4e7d8.webp'
}, {
  name: 'Canyon Stitched 720',
  category: 'dirt jump',
  price: 1800,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/canyon/2020/stitched-720/thumbs/1000/afb25.webp'
}, {
  name: 'Marin Alcatraz',
  category: 'dirt jump',
  price: 1350,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/marin/2019/alcatraz/thumbs/1000/627d6.webp'
}, {
  name: 'GT La Bomba',
  category: 'dirt jump',
  price: 12600,
  picUrl: 'https://d2yn9m4p3q9iyv.cloudfront.net/gt/2019/la-bomba/thumbs/1000/70f00.webp'
}];
var filteredItems = [];
app.get('/', function (req, res) {
  res.send('');
});
app.get('/getList', function (req, res) {
  var price = req.query.price;
  var category = req.query.category;
  var name = req.query.name;
  var regex = new RegExp(name, "i");
  console.log(price, category, name);
  filteredItems = items.filter(function (item) {
    return item.price <= price;
  });

  if (category != "all") {
    filteredItems = items.filter(function (item) {
      return item.category == category;
    });
  }

  if (name) {
    filteredItems = items.filter(function (item) {
      return regex.test(item.name);
    });
  }

  res.send(filteredItems);
});
app.listen(port, function () {
  console.log("running on port ".concat(port));
});