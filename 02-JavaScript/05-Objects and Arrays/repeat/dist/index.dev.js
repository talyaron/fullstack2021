"use strict";

// const x= {age:12}
// let age="eee";
// let hello="boo"
// x.age=2;
// x["hello"]={};
// console.log(x);
// const keys = ['author', 'yearOfPublication', 'pages'];
// const values = ['T.J', 2010, 350]
// let result = {};
// keys.forEach(function (value, index) {
//     result[value] = values[index]
// });
// console.log(result);
var keys = ['author', 'yearOfPublication', 'pages'];
var values = ['T.J', 2010, 350];
var result = {};

for (var i = 0; i < keys.length; i++) {
  result[keys[i]] = values[i];
}

console.log(result);