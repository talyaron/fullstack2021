"use strict";

// // 1 //
// const dad = {
//     firstName: 'Moshe',
//     lastName: 'Choen',
//     age: 60,
//     NumberOfKids: 2,
//     occupation: 'Truck driver',
// }
// const mom = {
//     firstName: 'Sarah',
//     lastName: 'Choen',
//     age: 57,
//     NumberOfKids: 2,
//     occupation: 'Teacher',
// }
// const kid1 = {
//     firstName: 'Ron',
//     lastName: 'Choen',
//     age: 22,
//     occupation: 'Student',
//     hobbie: 'Surfing',
// }
// const kid2 = {
//     firstName: 'Rachel',
//     lastName: 'Choen',
//     age: 18,
//     occupation: 'Solider',
//     hobbie: 'Shopping',
// }
// // 2 //
// const family = [dad, mom, kid1, kid2]
// // 3 //
// for(let i = 0; i < family.length; i++){
//     console.log(`${family[i].firstName} ${family[i].lastName}`)
// }
// 4 //
var dad = {
  firstName: 'Moshe',
  lastName: 'Choen',
  age: 60,
  NumberOfKids: 2,
  occupation: 'Truck driver',
  friends: ['Avi', 'Shlomo', 'Haim']
};
var mom = {
  firstName: 'Sarah',
  lastName: 'Choen',
  age: 57,
  NumberOfKids: 2,
  occupation: 'Teacher',
  friends: ['Michal', 'Sarit', 'Tizpi']
};
var kid1 = {
  firstName: 'Ron',
  lastName: 'Choen',
  age: 22,
  occupation: 'Student',
  hobbie: 'Surfing',
  friends: ['Eliran', 'Alex', 'Erez']
};
var kid2 = {
  firstName: 'Rachel',
  lastName: 'Choen',
  age: 18,
  occupation: 'Solider',
  hobbie: 'Shopping',
  friends: ['Livnat', 'Naama', 'Yael']
};
var family = [dad, mom, kid1, kid2]; // 5 //

for (var i = 0; i < family.length; i++) {
  console.log("".concat(family[i].firstName, " friend are: ").concat(family[i].friends));
}