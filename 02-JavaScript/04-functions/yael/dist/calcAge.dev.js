"use strict";

function calcAge() {
  // var inputAge=document.getElementById("DOB")
  var DOB = prompt("enter your date of birth in the format: year-month-day");
  console.log("date of birth:", DOB); //conertion to the Date object

  var birthDate = new Date(DOB);
  console.log("birthdate" + birthDate); //get diff from current date

  var currDate = Date.now();
  var diffdDate = currDate - birthDate; //calculated age in ms
  //console.log(diffdDate);
  //calculation of age

  var ageDate = new Date(diffdDate);
  var age = Math.abs(ageDate.getUTCFullYear() - 1970);
  console.log(age);
}

calcAge();