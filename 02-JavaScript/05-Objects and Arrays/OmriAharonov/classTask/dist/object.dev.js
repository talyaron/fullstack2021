"use strict";

var Omri = {
  name: 'Omri',
  lastName: 'Aharonov',
  engScore: 88,
  mathScore: 90,
  hstScore: 75,
  verbalSkill: 100
};

function studentGrades(student) {
  console.log("".concat(student.name, " ").concat(student.lastName, " grades are: English = ").concat(student.engScore, ", \n     Math = ").concat(student.mathScore, ", History = ").concat(student.hstScore, ", velbarl Skill = ").concat(student.verbalSkill));
}

studentGrades(Omri);