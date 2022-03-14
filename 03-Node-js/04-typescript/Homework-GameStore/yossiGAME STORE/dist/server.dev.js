"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var express = require('express');

var app = express();
var port = 4000;
app.use(express["static"]('public'));
app.use(express.json()); // function uid() {
//     return Date.now().toString(36) + Math.random().toString(36);
// }

var games = {
  data: [{
    name: 'ONWARD',
    price: 100,
    id: 1,
    img: 'https://i.ytimg.com/vi/BPaeUvZA0Jw/maxresdefault.jpg'
  }, {
    name: 'Soulash',
    price: 200,
    id: 2,
    img: 'https://img.itch.zone/aW1nLzIxNDkwMTMucG5n/original/vmoKiJ.png'
  }, {
    name: 'Conan Chop Chop',
    price: 300,
    id: 3,
    img: 'https://www.global-esports.news/wp-content/uploads/2022/02/Conan-Chop-Chop-1.jpg'
  }, {
    name: 'FAR',
    price: 400,
    id: 4,
    img: 'https://images.gog-statics.com/d27152e79189024693bf67cc04995d80e1a2cad7a6ae232ae285a1b47a1fd815_product_card_v2_mobile_slider_639.jpg'
  }, {
    name: 'Battle Cry of Freedom',
    price: 500,
    id: 5,
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1358710/header.jpg?t=1646262868'
  }, {
    name: 'ONWARD',
    price: 100,
    id: 1,
    img: 'https://i.ytimg.com/vi/BPaeUvZA0Jw/maxresdefault.jpg'
  }, {
    name: 'Soulash',
    price: 200,
    id: 2,
    img: 'https://img.itch.zone/aW1nLzIxNDkwMTMucG5n/original/vmoKiJ.png'
  }, {
    name: 'Conan Chop Chop',
    price: 300,
    id: 3,
    img: 'https://www.global-esports.news/wp-content/uploads/2022/02/Conan-Chop-Chop-1.jpg'
  }, {
    name: 'FAR',
    price: 400,
    id: 4,
    img: 'https://images.gog-statics.com/d27152e79189024693bf67cc04995d80e1a2cad7a6ae232ae285a1b47a1fd815_product_card_v2_mobile_slider_639.jpg'
  }, {
    name: 'Battle Cry of Freedom',
    price: 500,
    id: 5,
    img: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1358710/header.jpg?t=1646262868'
  }],
  addGame: function addGame(newGame) {
    this.data.push(_objectSpread({}, newGame));
  },
  updateGame: function updateGame(name, price, img, id) {
    var indexId = this.data.filter(function (game) {
      return game.id == id;
    });
    indexId.forEach(function (index) {
      index.name = name;
      index.price = price;
      index.img = img;
    });
  },
  getGameById: function getGameById(id) {
    var gameById = this.data.filter(function (game) {
      return game.id == id;
    });
    return gameById;
  },
  getGameByPrice: function getGameByPrice(price) {
    var gameByPrice = this.data.filter(function (game) {
      return game.price == price;
    });
    return gameByPrice;
  },
  deleteGame: function deleteGame(id) {
    this.data = this.data.filter(function (game) {
      return game.id != id;
    });
    return this.data;
  }
};
app.post('/delete-game', function (req, res) {
  var id = req.body.id;
  games.deleteGame(id);
  res.send(games.data);
});
app.post('/add-game', function (req, res) {
  var addGame = req.body.addGame;
  games.addGame(addGame);
  res.send(games.data);
});
app.get('/get-games', function (req, res) {
  res.send(games.data);
});
app.patch('/update-game', function (req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      price = _req$body.price,
      img = _req$body.img,
      id = _req$body.id;
  games.updateGame(name, price, img, id);
  res.send(games.data);
});
app.get('/get-games-id', function (req, res) {
  var id = req.query.id;

  if (id === '') {
    res.send(games.data);
  }

  var gameById = games.getGameById(id);
  res.send(gameById);
});
app.get('/get-games-price', function (req, res) {
  var price = req.query.price;

  if (price === '') {
    res.send(games.data);
  }

  var gameByPrice = games.getGameByPrice(price);
  res.send(gameByPrice);
});
app.listen(port, function () {
  console.log("app listening on port ".concat(port));
});