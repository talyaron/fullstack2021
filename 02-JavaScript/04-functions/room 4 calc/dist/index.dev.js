"use strict";

// BMI
function BMI(weight, height) {
  var BMI = weight / (height * height);

  if (BMI <= 18.5) {
    alert("Underweight");
  } else if (BMI <= 24.9 && BMI > 18.5) {
    alert("Normal");
  } else if (BMI <= 29.9 && BMI > 24.9) {
    alert("Overweight");
  } else if (BMI <= 34.9 && BMI > 29.9) {
    alert("Fat");
  } else {
    alert("Dayum");
  }
}

weight = window.prompt("Whats your weight", "weight");
height = window.prompt("Whats your heigh", "height");
var x = BMI(weight, height);
console.log(x);