"use strict";

var a = 3;
var b = 4; /////regular function

function sum(a, b) {
  return a * b;
}

console.log(sum(a, b));
console.log("-------------------"); //anonymous function

var sum2 = function sum2(_sum) {
  return a * b;
};

console.log(sum2(a, b));
console.log("----------------"); //arrow function

var sum3 = function sum3(a, b) {
  return a * b;
};

console.log(sum3(a, b));
console.log("------------------------------------------------------------------");
var singers = ["adele", "timberlake", "maluma", "fonzy", "eyal"];
console.log("--------loop------------");

for (var i = 0; i < singers.length; i++) {
  console.log(singers[i]);
}

console.log("--------in loop------------");

for (var _i in singers) {
  console.log(singers[_i]);
}

console.log("---------of loop-----------");

for (var _i2 = 0, _singers = singers; _i2 < _singers.length; _i2++) {
  var singer = _singers[_i2];
  console.log(singer);
}

console.log("--------each loop------------");
singers.forEach(function (singer) {
  console.log(singer);
});
console.log("---------------------------------------------------------------");
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
var teamNum = footballTeams.findIndex(function (team) {
  return team.place == 7;
});
console.log("".concat(teamNum));