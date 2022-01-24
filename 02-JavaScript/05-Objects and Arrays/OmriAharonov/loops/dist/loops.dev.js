"use strict";

var singers = ['Adele', 'Bon Jovi', 'Shlomo Artzi'];

for (var i = 0; i < singers.length; i++) {
  console.log(singers[i]);
}

console.log('--------------------------');

for (var _i in singers) {
  console.log(singers[_i]);
}

console.log('--------------------------');

for (var _i2 = 0, _singers = singers; _i2 < _singers.length; _i2++) {
  var singer = _singers[_i2];
  console.log(singer);
}

console.log('--------------------------');
singers.forEach(function (singer) {
  console.log(singer);
});