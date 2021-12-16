"use strict";

//let andrew = {
//    name: "Andrew",
//    lastName: "Lishafay",
///   math: 70,
//   english: 85,
//   phisics: 90,
//    biology: 65,
//    hebrew: 75
//};
//alert(`${andrew.name} ${andrew.lastName} grades are: Math: ${andrew.math} English: ${andrew.english} Phisics: ${andrew.phisics} Biology: ${andrew.biology} Hebrew: ${andrew.hebrew}`);
////////////////////
function convertToDate(a) {
  var monthes = ["Tishrei", "Marcheshvan", "Marcheshvan", "Tevet", "Shevat", "Adar", "Nisan", "Iyar", "Sivan", "Tammuz", "Av", "Elul"];
  return monthes[a - 1];
}

var x = window.prompt("Please enter a Number between 1 and 12:") * 1;

if (x < 1 || x > 12) {
  alert(x + " is not a valid number.");
}

x = convertToDate(x);
alert("The month is: " + x);