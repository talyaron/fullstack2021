"use strict";

var nir = {
  name: 'nir',
  lastName: 'nisim',
  gender: true,
  english: 90,
  Physics: 70,
  technology: 90,
  electricity: 75
};
var aviel = {
  name: "aviel",
  lastName: 'rasin',
  gender: true,
  english: 100,
  Physics: 70,
  technology: 80,
  electricity: 70
};
var tamir = {
  name: "tamir",
  lastName: 'dadon',
  gender: true,
  english: 80,
  Physics: 100,
  technology: 90,
  electricity: 75
};
var tair = {
  name: "tair",
  lastName: 'hania',
  gender: false,
  english: 90,
  Physics: 70,
  technology: 90,
  electricity: 50
};

function tellAboutTheStudent(student) {
  if (student.gender) {
    console.log("".concat(student.name, " ").concat(student.lastName, "  Scores in ").concat(student.english, "-english and \n         ").concat(student.technology, "-technology and  ").concat(student.Physics, "-Physics and  ").concat(student.electricity, "-electricity ").concat(student.name, "\n          is a smart student"));
  } else {
    console.log("".concat(student.name, " ").concat(student.lastName, " Scores in ").concat(student.english, "-english and \n            ").concat(student.technology, "-technology and  ").concat(student.Physics, "-Physics and  ").concat(student.electricity, "-electricity ").concat(student.name, "\n              is a smart student"));
  }
}

;
tellAboutTheStudent(tair);
tellAboutTheStudent(tamir);
tellAboutTheStudent(aviel);
tellAboutTheStudent(nir);