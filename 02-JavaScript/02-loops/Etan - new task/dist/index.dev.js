"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// ----- Different methods to setting vars:
//1
// var a = 20;
// var b = 20;
// var sum = a + b;
// //2
// var a, b, sum;
// a = 20;
// b = 20;
// sum = a + b;
// //3
// var a = 20, b = 20, sum = a + b;
// console.log(sum);
// ----- string methods:
// var name = "It's Etan Heyman";
//  // ' and " work the same, while you use one to string,
// //you can work the other inside the string.
// var name = "It\'s Etan Heyman";
//  // 'It's Etan Heyman' would not work
// would also work like this:
//String data type
var name = 'It\'s "etan" heyman'; // var number = "2837"
//Numeric data type

var num1 = +124097348237;
var num2 = -332457854.98; //Boolean data type

var bool1 = true;
var bool2 = false; // in console these would show as numbers, but at work they work as true(1) and false(0)

var bool3 = 1;
var bool4 = 0; //Undefined data

var hey; //Null data type

var hey2 = null;
console.log(_typeof(hey2)); //assignment oporators

var number = 10; // number = number + 5;

number += 5;
console.log(number); //string oporrators

var numbers1 = 4 + 5;
var numbers2 = 4 + "" + 5; //to add a space to numbers, include ""

console.log(numbers1);
var age = 23;
var info = "My name is Etan, I am " + age + " years old" + 10; //this would run with the word old is connected to 10
// to add a variable add ++

var info2 = "My name is Etan, I am " + age + " years old " + 10; //add a space in the end of the string to space after

console.log(info); // conditional statements

console.log("---------- condition type 1");
var x = 10;
var y = 50;

if (x == 10) {
  console.log("If!");
}

if (x != 10) {
  console.log("not!");
}

console.log("---------- condition type 2");
var x = 11;
var y = 50;

if (x === 11) {
  console.log("If!");
}

if (x != 10) {
  console.log("not!");
}

console.log("---------- condition type 3");
var x = 10;
var y = 50;

if (x == 10 && y < 20) {
  console.log("If!");
} else {
  console.log("Else!");
}

console.log("---------- condition type 4");
var x = 10;
var y = 50;

if (x == 10 && y < 20) {
  console.log("If!");
} else if (x > 50) {
  console.log("Else if!");
} else {
  console.log("Else!");
}

console.log("---------- condition type 5");
var x = 10;
var y = 50;

if (x == 10 && y < 20) {
  console.log("If!");
} else if (x < 50) {
  console.log("Else if!");
} else {
  console.log("Else!");
}

console.log("---------- condition type 6 age verification and gendered answer");
var gender = "male";
var when = window.prompt("In what year were you born?", "Year");

if (gender === "male") {
  if (age === 18) {
    console.log("you're a " + gender + " and above the age limit!");
  } else {
    console.log("Sorry dude!");
  }
} else if (gender === "female") {
  if (age >= 18) {
    console.log("You are a " + gender + "and above the age limit!");
  } else {
    console.log("Sorry lady!");
  }
} // -------- arrays


var items;
items = ["bottle", 4, true, false, "good", 5, "amazing", "8"];
console.log(items[1]); // ---------------- calculator:

function calc() {
  var a = parseInt(document.querySelector("#value1").value);
  var b = parseInt(document.querySelector("#value2").value);
  var op = document.querySelector("#operator").value;
  var calculate;

  if (op === "add") {
    calculate = a + b;
  } else if (op === "min") {
    calculate = a - b;
  } else if (op === "div") {
    calculate = a / b;
  } else if (op === "multi") {
    calculate = a * b;
  } else {
    calculate = "oops!  Error";
  }

  document.querySelector("#result").innerHTML = calculate;
}