"use strict";

//calories calc
function calories(breakfast, lunch, dinner) {
  var y = breakfast + lunch + dinner;
  if (y < 2200) return "you ate ".concat(y, " calories today you have ").concat(2200 - y, " calories left to eat today.");else return "you ate ".concat(y, " calories today you have passed the calorie limit by ").concat(y - 2200, " calories");
} //choose the number of calories you ate each meal.


var y = calories(295, 1120, 350);
console.log(y);