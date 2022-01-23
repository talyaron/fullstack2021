"use strict";

//array
var arr = [1, 2, 'hello', 34, true, 'bla bla']; //[element, element]

console.log(arr[2]);

for (var kjsdf in arr) {
  console.log("".concat(kjsdf, " --> ").concat(arr[kjsdf]));
} //avarge


var grades = [70, 90, 68, 79, 100];
var sum = 0;

for (var i in grades) {
  sum += grades[i];
}

for (var _i = 2; _i < 100; _i += 2) {
  console.log("".concat(_i, " --> ").concat(grades[_i]));
}

var avg = sum / grades.length;
console.log(avg);