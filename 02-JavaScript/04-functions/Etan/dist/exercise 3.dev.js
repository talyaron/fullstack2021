"use strict";

//-------------- exercise 3
function ageCalc(currentYear, age) {
  var yourAge = window.prompt("what year were you born in?", "Year");
  age === yourAge;
  return currentYear - yourAge;
}

console.log(ageCalc(2021, ''));