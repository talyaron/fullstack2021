"use strict";

//variable
var a = 2; //משתנה ישן ולא בשימוש

var z = 'Good mornning';
var w = 45;
var wLet; //hoisted

var wVar;
b = 3;
c = 4;
d = 5;
a = a + 5;
b = c * d;
c = b - a * 2 / 3;
d = 3 * 6 / c;
x = 'hi all';
a = a + ' hi all'; // z = 'Good evening';

w = w + 10;
wLet = 10;
wVar = 20;
console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(x);
console.log(w);
console.log(wLet, wVar); //loops
//for(initial value; condition to be true; increment){
//code block
//}

for (var i = 0; i < 10; i++) {
  console.log(i);
}

for (var _i = 10; _i > 0; _i--) {
  console.log(_i);
}

for (var _i2 = 20; _i2 > 4; _i2 -= 4) {
  console.log(_i2);
  console.log(_i2 * 5 - 2);
}

for (var _i3 = 5; _i3 > 3 && _i3 < 10; _i3++) {
  console.log('I is ' + _i3);
}

for (var _i4 = 0; _i4 < 10; _i4++) {
  console.log(_i4);
  var _a = 12;
  var b = 23;
  console.log(_a);
}

;
console.log(b); //no error
// console.log(a); //error

var result = 14;

for (var n = 14; n > 1; n--) {
  result = result * (n - 1);
  console.log(result);
}

var counter = 14;

for (var _n = 14; _n > 1; _n--) {
  // console.log('----------');
  // console.log('n = ' + n);
  // console.log('counter =', counter);
  counter = counter * (_n - 1); // console.log('counter * (n-1) = ', counter)
}

console.log('14! = ' + counter); // let counter = 14;

for (var _n2 = 13; _n2 > 1; _n2--) {
  // console.log('----------');
  // console.log('n = ' + n);
  // console.log('counter =', counter);
  counter = counter * _n2; // console.log('counter * (n-1) = ', counter)
}

console.log('14! = ' + counter); //conditions

var s = '3';

if (s > 1) {
  console.log('it was true');
}

if (s > 3) {
  console.log('the 2nd was true');
}

var y = 'Hi';

if (y == 'Hi') {
  console.log('y is Hi');
}

if (y == 'hi') {
  console.log('y is Hi');
} else {
  console.log('y is not Hi');
}

if (s === '3') {
  console.log('s === 3');
}