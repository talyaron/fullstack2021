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
// const teams = [
//     {name: "Bahrain Victorious" , position: 8 },
//     {name: "Israel Start-Up Nation", position: 7},
//     {name: "UAE Team Emirates" , position: 5},
//     {name: "Ineos Grenadiers", position: 2},
// ];
// let team7 = teams.findIndex(team => team.position == 7);
// alert(` the team in the 7th position is: ${team7}`);
// function bringGrade(){
//     return Math.floor(Math.random()*100)+1;
// }
// let x = bringGrade();
// console.log(x);
// let S = "011100";
// let V = parseInt(S,2);
// console.log(V);
// while(V!=0){
//     if(V%2 == 0) V/=2;
//     else V-=1;
//     console.log(V);
// }
// let A = [{ x: -1, y: -2 }, { x: 1, y: 2 }, { x: 2, y: 4 }, { x: -3, y: 2 }, { x: 2, y: -2 },];
// function findNumOfRays(arr) {
//     let newArr = [];
//     for (i in arr) {
//         if (arr[i].x > 0 && arr[i].y > 0) newArr.push({ qaurter: 1, rate: (arr[i].x / arr[i].y) });
//         else if (arr[i].x < 0 && arr[i].y > 0) newArr.push({ qaurter: 2, rate: (arr[i].x / arr[i].y) });
//         else if (arr[i].x > 0 && arr[i].y < 0) newArr.push({ qaurter: 3, rate: (arr[i].x / arr[i].y) });
//         else if (arr[i].x < 0 && arr[i].y < 0) newArr.push({ qaurter: 4, rate: (arr[i].x / arr[i].y) });
//     }
//     for (let i = 0; i < newArr.length; i++) {
//         for (let j = 0; j < newArr.length; j++) {
//             if (i !== j) {
//                 if (newArr[i].qaurter == newArr[j].qaurter && newArr[i].rate == newArr[j].rate) {
//                     newArr.splice(i, 1);
//                 }
//             }
//         }
//     }
//     return newArr.length;
// }
// resualt = findNumOfRays(A);
// console.log(resualt);
var sum = 0;

for (var i = 0; i < 10; i++) {
  if (i % 3 == 0 || i % 5 == 0) sum += i;
}

console.log(sum);