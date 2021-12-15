"use strict";

// function bigFunction(n1, n2) { // The function returns the larger of n1 and n2
//     if (n2<n1)
//     return n1;
//     else{
//         return n2;
//     }   
//   }
//    let num= bigFunction(-7, 3);
//    console.log(num);
// -----------------------------------------------------------------------------------------------------------
function calcAge() {
  // var inputAge=document.getElementById("DOB")
  var DOB = prompt("enter your date of birth in the format: year-month-day");
  console.log("date of birth:", DOB); //conertion to the Date object

  var birthDate = new Date(DOB);
  console.log("birthdate" + birthDate); //get diff from current date

  var currDate = Date.now();
  console.log(currDate);
  var diffdDate = currDate - birthDate;
  console.log(diffdDate); //let ageDate= new Date(diffdDate);

  var age = Math.abs(diffdDate.getUTCFullYear() - 1970);
  console.log(age);
}

calcAge();