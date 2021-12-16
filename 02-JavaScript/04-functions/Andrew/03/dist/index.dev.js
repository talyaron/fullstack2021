"use strict";

//a function that gets the year the user was born and calculates his/her age.
function convertToAge(y) {
  return 2021 - y;
}

var year = window.prompt("Please enter your year of birth:") * 1;

if (year < 100) {
  //converts 2 digit year to 4 digits.
  year = year + 1900;
}

year = convertToAge(year);
alert("Your age is: " + year);