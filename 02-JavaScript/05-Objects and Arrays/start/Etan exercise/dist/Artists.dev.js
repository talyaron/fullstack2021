"use strict";

var artists = [{
  name: 'Denis'
}, {
  name: 'Avihu'
}, {
  name: 'Eminem'
}];

for (i = 0; i < artists.length; i++) {
  console.log(artists[i].name);
}

for (var _i in artists) {
  console.log(artists[_i].name);
}

for (var _i2 = 0, _artists = artists; _i2 < _artists.length; _i2++) {
  var artist = _artists[_i2];
  console.log(artist.name);
}

artists.forEach(function (artist) {
  console.log(artist.name);
});