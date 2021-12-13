"use strict";

// var x = 10;
var y;
w = 0;

for (var x = 10; x >= 1; x--) {
  y = x * (x - 1);
  w = w + y;
}

console.log(w);