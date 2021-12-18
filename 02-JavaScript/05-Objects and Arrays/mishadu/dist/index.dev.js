"use strict";

var ohad = {
  name: 'Ohad',
  lastName: 'Gur',
  math: 20,
  history: 30,
  physics: 48,
  english: 80,
  sports: 100
};

function studentmath(student) {
  console.log("".concat(student.name, " ").concat(student.lastName, " got ").concat(student.math, " at math"));
}

studentmath(ohad);