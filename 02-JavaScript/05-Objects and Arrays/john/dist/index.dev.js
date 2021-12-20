"use strict";

var john = {
  name: "john",
  age: 23,
  sex: "male"
};
var prissou = {};
var papa = {};
var maman = {};
var chloe = {};

function tsiounim(student) {
  console.log("".concat(student.name, " got in math ").concat(student.math, " also got ").concat(student.english, " in english but got ").concat(student.sport, " in sport"));
}

console.log(tsiounim(john));