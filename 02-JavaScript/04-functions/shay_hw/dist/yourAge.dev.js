"use strict";

//third exercise
function yourAge(birth, thisYear) {
  var age = thisYear - birth;
  alert(age);
}

yourAge(birth = prompt('enter your birth year'), thisYear = prompt('enter this year number'));