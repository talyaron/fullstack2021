"use strict";

// question number 3
function age(year) {
  return 2021 - year;
}

var a = age(1921);
console.log(a); //quuestion number 1

function scale(num1, num2) {
  if (num1 > num2) {
    return num1;
  }

  if (num2 > num1) {
    return num2;
  }

  if (num1 == num2) {
    return 'BALANCE';
  }
}

var b = scale(14, 13);
console.log(b); //question number 2

function month(number) {
  if (number == 1) {
    return 'january';
  }

  if (number == 2) {
    return 'febuary';
  }

  if (number == 3) {
    return 'march';
  }

  if (number == 4) {
    return 'april';
  }

  if (number == 5) {
    return 'may';
  }

  if (number == 6) {
    return 'june';
  }

  if (number == 7) {
    return 'july';
  }

  if (number == 8) {
    return 'august';
  }

  if (number == 9) {
    return 'september';
  }

  if (number == 10) {
    return 'october';
  }

  if (number == 11) {
    return 'november';
  }

  if (number == 12) {
    return 'december';
  }
}

var d = month(1);
console.log(d); //question number 4

function Salary(hours, HourlyPay) {
  if (hours <= 8) {
    return hours * HourlyPay;
  } else if (hours > 8 && hours <= 10) {
    return hours * HourlyPay + (hours - 8) * 0.25 * HourlyPay;
  }

  if (hours > 10 && hours <= 12) {
    return hours * HourlyPay + (hours - 8) * 0.25 * HourlyPay + (hours - 10) * 0.25 * HourlyPay;
  }

  if (hours > 12) {
    return hours * HourlyPay + (hours - 8) * 0.25 * HourlyPay + (hours - 10) * 0.25 * HourlyPay + (hours - 12) * 0.25 * HourlyPay;
  }
}

var e = Salary(24, 90);
console.log(e);