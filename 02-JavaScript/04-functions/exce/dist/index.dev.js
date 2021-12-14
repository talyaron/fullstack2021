"use strict";

var hi = 1.80;
var we = 70;

function calculate(hi, we) {
  var sum = 0;
  sum = we / (hi * hi);
  return sum;
}

function print(sum) {
  if (sum < 18.5) {
    console.log("underweight");
  } else if (sum < 25) {
    console.log("goodweiht");
  } else {
    console.log("overweight");
  }
}

var sum = calculate(hi, we);
console.log(print(sum));