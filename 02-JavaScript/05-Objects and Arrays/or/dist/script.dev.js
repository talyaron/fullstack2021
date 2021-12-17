"use strict";

var or = {
  name: 'Or',
  lastName: 'Avramashvili',
  english: 100,
  math: 80,
  gmara: 95,
  sport: 95,
  tanach: 90
};
var refael = {
  name: 'Refael',
  lastName: 'Avramashvili',
  english: 90,
  math: 100,
  gmara: 95,
  sport: 100,
  tanach: 95
};

function grades(student) {
  console.log("Those are ".concat(student.name, " ").concat(student.lastName, " grades at the following classes: english:").concat(student.english, ", math:").concat(student.math, ", gmara:").concat(student.gmara, ", sport:").concat(student.sport, ", tanach:").concat(student.tanach));
}

grades(or);
grades(refael);