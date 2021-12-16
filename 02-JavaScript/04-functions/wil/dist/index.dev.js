"use strict";

function Bigger(x, y) {
  if (x > y) {
    return x + 'is bigger';
  }

  if (y > x) {
    return y + 'is bigger';
  }
}

console.log(Bigger(12, 20));
var z = window.prompt('please choose a number and you will get the month..');

function numToMonth(z) {
  if (z == 1) return 'The month is January';else if (z == 2) return 'The month is Februery';else if (z == 3) return 'The month is March';else if (z == 4) return 'The month is April';else if (z == 5) return 'The month is May';else if (z == 6) return 'The month is June';else if (z == 7) return 'The month is July';else if (z == 8) return 'The month is August';else if (z == 9) return 'The month is September';else if (z == 10) return 'The month is October';else if (z == 11) return 'The month is November';else if (z == 12) return 'The month is December';else return 'Error,there isnt such a month';
}

console.log(numToMonth(z));

function ageCalc(currentYear, yearOfBirth) {
  return currentYear - yearOfBirth;
}

var a = ageCalc(2021, 1998);
console.log('Your`e ' + a + 'years old');

function dollarToNis(d, n) {
  return d * n;
}

var d,
    n = dollarToNis(3.13, 10);
console.log(d + 'dollars are' + n + 'shekels');