"use strict";

var dori = {
  name: 'Dori',
  lastName: 'Ziv',
  math: 45,
  physic: 95,
  biology: 93,
  english: 100
};
console.log(dori.name);
console.log(dori['biology']);

function tellAboutTheStudent(student) {
  if (student.physic > 93) {
    console.log("".concat(student.name, " ").concat(student.lastName, " have  ").concat(student.physic, "  on physic"));
  }

  if (student.math <= 80) {
    console.log("".concat(student.name, " ").concat(student.lastName, " has ").concat(student.math, " on math"));
  } else {
    console.log("".concat(student.name, " ").concat(student.lastName, " have ").concat(student.math, " on math"));
  }
}

tellAboutTheStudent(dori);