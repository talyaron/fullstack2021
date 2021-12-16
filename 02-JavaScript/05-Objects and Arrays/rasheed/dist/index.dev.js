"use strict";

var student = {
  firstName: "Rasheed",
  lastName: "Jaber",
  mathGrade: "A+",
  englishGrad: "B+",
  sportGrad: "c+",
  totalGrads: "B-",
  didPass: true
};
var secandstudent = {
  firstName: "Martine",
  lastName: "alison",
  mathGrade: "c+",
  englishGrad: "a+",
  sportGrad: "c+",
  totalGrads: "B-",
  didPass: true
};
var thirdtudent = {
  firstName: "Mark",
  lastName: "night",
  mathGrade: "f+",
  englishGrad: "c+",
  sportGrad: "f+",
  totalGrads: "d-",
  didPass: false
};

function tellStudent(student) {
  if (student.didPass) {
    console.log("".concat(student.firstName, " ").concat(student.lastName, " MathGrade is ").concat(student.mathGrade, " ,EnglishGrade is ").concat(student.englishGrad, " and SportGrade is ").concat(student.sportGrad, " so the total Grads sum is ").concat(student.totalGrads, " ").concat(student.firstName, " has passed"));
  } else {
    console.log("".concat(student.firstName, " ").concat(student.lastName, " MathGrade is ").concat(student.mathGrade, " ,EnglishGrade is ").concat(student.englishGrad, " and SportGrade is ").concat(student.sportGrad, " so the total Grads sum is ").concat(student.totalGrads, " ").concat(student.firstName, " did'nt pass"));
  }
}

tellStudent(student);
tellStudent(secandstudent);
tellStudent(thirdtudent);