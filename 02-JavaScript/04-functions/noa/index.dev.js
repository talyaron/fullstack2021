"use strict";

//define
function bmi(height, weight) {
  return weight / (height * height);
}

;

function bmiMeaning(bmi) {
  if (bmi > 18 && bmi <= 25) {
    return bmi + ' תקין';
  } else if (bmi <= 18) {
    return bmi + 'תת משקל';
  }

  if (bmi > 25) {
    return "".concat(bmi, " \u05E2\u05D5\u05D3\u05E3 \u05DE\u05E9\u05E7\u05DC");
  }
} //invoke


var q = bmi(1.59, 52);
console.log(q);
var meaning = bmiMeaning(q);
console.log(meaning);
q = bmi(1.8, 90);
console.log(q);
meaning = bmiMeaning(q);
console.log(meaning);

function calcIntrest(loan, precentage, years) {
  return totalSum;
}