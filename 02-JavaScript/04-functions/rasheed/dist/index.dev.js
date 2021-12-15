"use strict";

// function bmi(ma,he){
//     return ma/(he*he);
// }
// let sum = bmi(65,1.7);
// console.log(sum);
// function show(sum){
//     if (sum > 18.5 && sum <= 25.5){
//         console.log(sum +' undrweight');
//     }
//     else if (sum > 25.5 && sum <=  38.5){
//         console.log(sum +' undrweight');
//     }
//     else {
//         console.log(sum +' undrweight');
//     }
// }
var loan = 100;
var precent = 0.5;
var years = 10;

function calcintrest(loan, precent, years) {
  return loan * precent / years;
}

var totalPrecent = calcintrest(100 * 0.5 / 10);
console.log(totalPrecent);