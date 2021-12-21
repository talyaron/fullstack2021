"use strict";

function multi(a, b) {
  return a * b;
}

var q = multi(2, 3);
console.log(q);

var multi2 = function multi2(a, b) {
  return a * b;
};

var w = multi2(4, 6);
console.log(w);

var multi3 = function multi3(a, b) {
  return a * b;
};

var e = multi3(7, 8);
console.log(e);
var footballTeams = [{
  teamName: 'Macabi Tel-Aviv',
  place: 16
}, {
  teamName: 'Beitar Jeruslam',
  place: 7
}, {
  teamName: 'Hapoel Haifa',
  place: 5
}, {
  teamName: 'Bnei-Sachnin',
  place: 6
}];

var sayHello3 = function sayHello3(name) {
  return "Hello ".concat(name);
};

var sayHello4 = function sayHello4(name) {
  return "Hello ".concat(name);
};