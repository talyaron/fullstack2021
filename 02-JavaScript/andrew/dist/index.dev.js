"use strict";

function BMI(mass, height) {
  var bmiValue = mass / Math.pow(height, 2);
  var bmiResualt = 0;

  if (bmiValue < 16) {
    bmiResualt = "Underweight (Severe thinness)";
  } else if (16 < bmiValue && bmiValue < 17) {
    bmiResualt = "Underweight (Moderate thinness)";
  } else if (17 < bmiValue && bmiValue < 18.5) {
    bmiResualt = "Underweight (Moderate thinness)";
  } else if (18.5 < bmiValue && bmiValue < 25) {
    bmiResualt = "Normal range";
  } else if (25 < bmiValue && bmiValue < 30) {
    bmiResualt = "Overweight (Pre-obese)";
  } else if (30 < bmiValue && bmiValue < 35) {
    bmiResualt = "Obese (Class I)";
  } else if (35 < bmiValue && bmiValue < 40) {
    bmiResualt = "Obese (Class II)";
  } else if (bmiValue > 40) {
    bmiResualt = "Obese (Class III)";
  }

  return bmiResualt;
}

var a = window.prompt("please enter your weight:");
var b = window.prompt("please enter your height:");
var x = BMI(a, b);
alert("you're BMI means you are:" + x);