"use strict";

function calcInterest(loan, precentage, years) {
  //let loan;
  for (i = 0; i - years; i++) {
    loan = loan * 1;
    loan = loan + loan * (precentage / 100);
  }

  return loan;
}

var a = window.prompt("please enter loan:");
var b = window.prompt("please enter precentage:");
var c = window.prompt("please enter years:");
var x = calcInterest(a, b, c);
alert("the return amont is:" + x);