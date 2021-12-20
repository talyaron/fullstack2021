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
tellStudent(thirdtudent); ///////////////////////////////////////////

var input = window.prompt("Enter the Number of the Month");

function monthName(input) {
  var months = ["תשרי", "חשוון", "כסלו", "טבת", "שבט", "אדר א", "אדר", "הסמוך", "לניסן", "ניסן", "אייר", "סיוון", "תמוז", "אב", "אלל"];
  var output = months[input - 1];
  return output;
}

if (input <= 0 || input >= 15) {
  alert("Error! Number Is Undifined");
} else {
  alert("The Month is " + monthName(input));
}