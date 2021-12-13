"use strict";

console.log('####1####');
var x = 4;
var y = 20;

if (x > y) {
  console.log(x);
} else {
  console.log(y);
}

console.log('####2####');
var num1 = 3;
var num2 = -7;
var num3 = 2;

if (num1 * num2 * num3 > 0) {
  console.log('+');
} else {
  console.log('-');
}

console.log('####3####');
var number1 = 5;
var number2 = -6;
var number3 = -2;
var big, mid, small;

if (number1 > number2 && number1 > number3) {
  big = number1;

  if (number2 > number3) {
    mid = number2;
    small = number3;
  } else {
    mid = number3;
    small = number2;
  }
}

if (number2 > number1 && number2 > number3) {
  big = number2;

  if (number1 > number3) {
    mid = number1;
    small = number3;
  } else {
    mid = number3;
    small = number1;
  }
}

if (number3 > number2 && number3 > number1) {
  big = number3;

  if (number2 > number1) {
    mid = number2;
    small = number1;
  } else {
    mid = number1;
    small = number2;
  }
}

console.log(big, mid, small);
console.log('####4####');
console.log('####5####');

for (var i = 0; i < 16; i++) {
  if (i % 2 === 0) {
    console.log(i + ' is even');
  } else {
    console.log(i + ' is odd');
  }
}

console.log('####6####');
var David = 80;
var Vinoth = 77;
var Divya = 88;
var Ishitha = 95;
var Thomas = 68;
var sum = (David + Vinoth + Divya + Ishitha + Thomas) / 5;

if (sum < 60) {
  console.log('grade is F');
} else if (sum < 70 && sum >= 6) {
  console.log('grade is D');
} else if (sum < 80 && sum >= 70) {
  console.log('grade is C');
} else if (sum < 90 && sum >= 80) {
  console.log('grade is B');
} else if (sum < 100 && sum >= 90) {
  console.log(sum + 'grade is A');
}

console.log('####7####');

for (var _i = 1; _i < 101; _i++) {
  if (_i % 3 === 0 && _i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (_i % 3 === 0) {
    console.log('Fizz');
  } else if (_i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(_i);
  }
}