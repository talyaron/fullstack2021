"use strict";

// const weight= window.prompt("what is your weight?");
// const height= window.prompt("what is your height?");
var weight = 80;
var height = 1.80;
var bmi = 0;

function bmicalc(weight, height) {
  return weight / (height * height);
}

bmi += bmicalc(weight, height);
console.log(bmi);