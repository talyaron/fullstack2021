"use strict";

//a function that gets two numbers, and returns the largest number
function biggerNumber(a, b) {
  if (a > b) {
    return a;
  } else if (b > a) {
    return b;
  }
}

var x = window.prompt("please enter the first number:") * 1;
var y = window.prompt("please enter the second number:") * 1;
var awnser = biggerNumber(x, y);
alert("The bigger number is: " + awnser);