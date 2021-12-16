"use strict";

// --- 1 --- //
// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// if( a>=b ){
// console.log(a);
// }
// else{
//     console.log(b);
// }
// --- 2 --- //
// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// let c = window.prompt("what is the third number?");
// if(a>0 && b>0 && c>0){
//     console.log("the sign is +");
// }
// else if(a<0 && b<0 && c<0){
//     console.log("the sign is -");
// }
// else if(a>0 && b<0 && c>0){
//     console.log("the sign is -");
// }
// else if(a>0 && b<0 && c<0){
//     console.log("the sign is +");
// }
// else{
//     console.log("the sign is -");
// }
// --- 3 --- //
// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// let c = window.prompt("what is the third number?");
// if(a>b && a>c){
//     if(b>c){
//         console.log(a + "," + b + "," + c);
//     }
//     else{
//         console.log(a + "," + c + "," + b);
//     }
// }
// else if(b>a && b>c){
//     if(a>c){
//         console.log(b + "," + a + "," + c);
//     }
//     else{
//         console.log(b + "," + c + "," + a);
//     }
// }
// else if(c>a && c>b){
//     if(a>b){
//         console.log(c + "," + a + "," + b);
//     }
//     else{
//         console.log(c + "," + b + "," + a);
//     }
// }
// --- 4 --- //
// let a = window.prompt("what is the first number?");
// let b = window.prompt("what is the second number?");
// let c = window.prompt("what is the third number?");
// let d = window.prompt("what is the fourth number?");
// let e = window.prompt("what is the fifth number?");
// if (a>b && a>c && a>d && a>e){
//     console.log(a);
// }
// else if(b>a && b>c && b>d && b>e){
//     console.log(b);
// }
// else if(c>a && c>b && c>d && c>e){
//     console.log(c);
// }
// else if(d>a && d>b && d>c && d>e){
//     console.log(d);
// }
// else{
//     console.log(e);
// }
// --- 5 --- //
// for(let i=0; i<=15; i++){
//     if(i % 2== 0){
//         console.log(i + " is even");
//     }
//     else{
//         console.log(i + " is odd");
//     }
// }
// --- 6 --- //
// const students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];
// let marksum = 0;
// for(let i=0; i<students.length; i++){
// marksum += students[i][1];
// var avg = (marksum/students.length);
// }
// console.log("avg grade:" + avg);
//     if(avg<60){
//     console.log('F');
//     }
//     else if(avg<70){
//     console.log('D');
//     }
//     else if(avg<80){    
//     console.log('C');
//     }
//     else if(avg<90){
//         console.log('B');
//     }
//     else{
//         console.log('A');
//     }
// --- 7 --- //
for (var i = 0; i < 100; i++) {
  if (i % 3 == 0) console.log();
}