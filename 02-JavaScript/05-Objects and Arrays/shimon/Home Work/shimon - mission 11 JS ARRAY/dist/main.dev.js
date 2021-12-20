"use strict";

//question 1
var ShimonH = {
  name: "Shimon",
  family: "Hasidim",
  age: 33,
  position: "Father",
  friends: ["Michael", "Meair", "Eliran"]
};
var SaritH = {
  name: "Sarit",
  family: "Hasidim",
  age: 32,
  position: "Mother",
  friends: ["Michal", "Dorit", "Hagit"]
};
var AyalaH = {
  name: "Ayala",
  family: "Hasidim",
  age: 12,
  position: "Daughter",
  friends: ["Yaeli", "Efrat", "Shira"]
};
var EfratH = {
  name: "Efrat",
  family: "Hasidim",
  age: 10,
  position: "Daughter",
  friends: ["Michal", "Dorit", "Hagit"]
};
var AvigailH = {
  name: "Avigail",
  family: "Hasidim",
  age: 8,
  position: "Daughter",
  friends: ["Yaeli", "Efrat", "Shira"]
}; //question 2

var hasidim_array = [ShimonH, SaritH, AyalaH, EfratH, AvigailH];
console.log(hasidim_array); //question 3

var hasidim_name = [ShimonH.name, SaritH.name, AyalaH.name, EfratH.name, AvigailH.name];

for (var i in hasidim_name) {
  console.log(hasidim_name[i]);
} //question 4
//Done
//question 5


var hasidim_frinds = [ShimonH.friends, SaritH.friends, AyalaH.friends, EfratH.friends, AvigailH.friends];

for (var _i in hasidim_frinds) {
  console.log(hasidim_name[_i] + ", had the following friends: ", hasidim_frinds[_i]);
}