"use strict";

// function multi1(a,b){
//     let x=a*b;
//     return x;
// };
// let multi2 =function(a,b){
//     let x=a*b;
//     return x;
// };
// let multi3 =(a,b)=>{
//     let x=a*b;
//     return x;
// };
// let first = prompt("enter first number");
// let second = prompt("enter second number");
// alert(multi1(first,second));
// alert(multi2(first,second));
// alert(multi3(first,second));
// let array = ["band1","band2","band3","band4","band5"];
// //for loop
// let names = "";
// for(let i=0; i<array.length; i++ ){
//     names += ` ${array[i]}`;
// }
// alert(`(for loop) your favorite bands are: ${names}`);
// //of loop
// names = "";
// for(let j of array){
//     names += ` ${j}`;
// }
// alert(`(for of loop) your favorite bands are: ${names}`);
// //in loop
// names = "";
// for(let k in array){
//     names += ` ${array[k]}`;
// }
// alert(`(for in loop) your favorite bands are: ${names}`);
// //callback
// names = "";
// array.forEach(element => {
//     names += ` ${element}`;
// });
// alert(`(forEach) your favorite bands are: ${names}`);
var teams = [{
  name: "Bahrain Victorious",
  position: 8
}, {
  name: "Israel Start-Up Nation",
  position: 7
}, {
  name: "UAE Team Emirates",
  position: 5
}, {
  name: "Ineos Grenadiers",
  position: 2
}];
var team7 = teams.findIndex(function (team) {
  return team.position == 7;
});
alert(" the team in the 7th position is: ".concat(team7));