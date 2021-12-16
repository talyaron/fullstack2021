"use strict";

var newStudent = {
  name: "etan",
  lastName: "heyman"
};
var grades = {
  hebrew: 70,
  math: 80,
  art: 65,
  history: 85,
  web: 60
};

function reportCard(newStudent) {
  console.log("".concat(newStudent.name, " ").concat(newStudent.lastName, "'s report card"));
  console.log("".concat(grades.hebrew));
  console.log("".concat(grades.math));
  console.log("".concat(grades.art));
  console.log("".concat(grades.history));
  console.log("".concat(grades.web));
  console.log("You've passed this year");
}

console.logreportCard(newStudent);