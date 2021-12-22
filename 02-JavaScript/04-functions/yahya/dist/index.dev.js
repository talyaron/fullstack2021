"use strict";

//----------1------------//
function bignum(x, y) {
  if (x > y) return x;else return y;
} //------------2---------//


console.log(month(Number));

function month(m) {
  if (m == 1) return "January";else if (m == 2) return "February";else if (m == 3) return "March";else if (m == 4) return "April";else if (m == 5) return "May";else if (m == 6) return "June";else if (m == 7) return "July";else if (m == 8) return "August";else if (m == 9) return "September";else if (m == 10) return "October";else if (m == 11) return "November";else if (m == 12) return "December";
} //------------3----------------// 


function age(thisYear, bornYear) {
  return thisYear - bornYear;
}

var q = age(2000, 2002);
console.log("Age is ".concat(q)); //------------4----------------// 
//???????????????//