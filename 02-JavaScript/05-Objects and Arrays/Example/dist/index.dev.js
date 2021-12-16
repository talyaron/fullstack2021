"use strict";

//Primitve types
var x = '222'; //string

var y = true; //boolean

var z = 23; //number
//Objects
// let obj = {
//     key:value,
//     key2:value,
//     key3:value
// }

var ohad = {
  name: 'Ohad',
  lastName: 'Gur',
  age: 20,
  isMarried: false
};
var rasheed = {
  name: "rasheed",
  lastName: 'Jaber',
  age: 27,
  isMarried: false
};
var noa = {
  name: "noa",
  lastName: 'chasha',
  age: 21,
  isMarried: false
};
var michaelF = {
  name: "Michael",
  lastName: 'Frankel',
  age: 42,
  isMarried: true
};
console.log(rasheed.name);
console.log(rasheed['isMarried']); //definr function

function tellAboutTheStudent(student) {
  if (student.isMarried) {
    console.log("".concat(student.name, " ").concat(student.lastName, " is ").concat(student.age, " years old and he is married"));
  } else {
    console.log("".concat(student.name, " ").concat(student.lastName, " is ").concat(student.age, " years old and he is not married"));
  }
}

;
tellAboutTheStudent(rasheed);
tellAboutTheStudent(michaelF);
tellAboutTheStudent(ohad);
tellAboutTheStudent(noa);