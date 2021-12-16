"use strict";

//function to find the bigger of 2 numbers
function LargestNumber(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

console.log('The bigger number is: ' + LargestNumber(77, 3)); //function to find the bigger of 2 numbers

var x = window.prompt("Please enter a number from 1 to 12");

function month(x) {
  if (x == 1) return "its January";else if (x == 2) return "its February";else if (x == 3) return "its March";else if (x == 4) return "its April";else if (x == 5) return "its May";else if (x == 6) return "its June";else if (x == 7) return "its July";else if (x == 8) return "its August";else if (x == 9) return "its September";else if (x == 10) return "its October";else if (x == 11) return "its November";else return "its December";
}

console.log(month(x)); //function to find how old are you

var a = prompt("Enter the year you were born");
var b = prompt("Enter current year");

function AgeCal(BornYear, CurrentYear) {
  return CurrentYear - BornYear;
}

console.log(AgeCal(b, a));