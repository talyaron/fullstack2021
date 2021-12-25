"use strict";

//regular function
function sayHello(name) {
  return "Hello ".concat(name);
}

var hello = sayHello('Eliya');
console.log(hello); //anonymous function

var sayHello2 = function sayHello2(name) {
  return "Hello ".concat(name);
};

var hello2 = sayHello2('Leon');
console.log(hello2); //arrow function

var sayHello3 = function sayHello3(name) {
  return "Hello ".concat(name);
};

var sayHello4 = function sayHello4(name1, name2) {
  return "Hello ".concat(name1, " ").concat(name2);
};

console.log(sayHello4('roi', 'Naor'));
var hello3 = sayHello3('Shay');
console.log(hello3);
var hello4 = sayHello4('Michael');
console.log(hello4);
console.log(sayHello4('Eytan'));
var students = ['Yoel', 'Yahya', 'Michael', 'Omri'];
console.log('----------------------');

for (var i in students) {
  var _hello = sayHello4(students[i]);

  console.log(_hello);
}