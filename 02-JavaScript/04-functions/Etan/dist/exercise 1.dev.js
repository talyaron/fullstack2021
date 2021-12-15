"use strict";

//-------------- exercise 1
function choose() {
  var num1 = window.prompt("Choose the first number", "0");
  var num2 = window.prompt("Choose the secont number", "0");
  var answer = "the bigger number is ";

  if (num1 > num2) {
    return answer + num1;
  } else {
    return answer + num2;
  }
}

console.log(choose());