"use strict";

var leon = {
  sport: 90,
  english: 80,
  math: 40,
  history: 70,
  goodstudent: false
};
var joe = {
  goodstudent: true,
  sport: 90,
  english: 80,
  math: 40,
  history: 70
};

function tellAboutTheStudent(student) {
  if (student.goodstudent) {
    console.log("".concat(student.name, " got ").concat(student["math"], " in math and ").concat(student.sport, " in sport\n    and ").concat(student.math, " in math, in history he got ").concat(student.history, " he is good student"));
  } else {
    console.log("".concat(student.name, " got ").concat(student["math"], " in math and ").concat(student.sport, " in sport\n    and ").concat(student.math, " in math, in history he got ").concat(student.history, " he is  not good student"));
  }
}

tellAboutTheStudent(leon);
tellAboutTheStudent(joe);