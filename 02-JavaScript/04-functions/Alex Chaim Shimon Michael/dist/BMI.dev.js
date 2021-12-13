"use strict";

var weight = window.prompt("what is your weight?");
var height = window.prompt("what is your height?");

function bmicalc(weight, height) {
  return weight / (height * height);
}

bmi = bmicalc;
console.log(bmi);