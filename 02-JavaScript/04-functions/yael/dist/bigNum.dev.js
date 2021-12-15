"use strict";

function bigFunction(n1, n2) {
  // The function returns the larger of num1 and num2
  if (n2 < n1) return n1;else {
    return n2;
  }
}

var num = bigFunction(-7, 3);
console.log(num);