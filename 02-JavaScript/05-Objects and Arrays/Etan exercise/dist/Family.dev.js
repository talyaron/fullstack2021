"use strict";

var Etan = {
  sex: "male",
  firstName: "Etan",
  lastName: "Heyman",
  birthday: "03/07/1998",
  birthplace: "Jerusalem",
  height: 189,
  age: 23,
  friends: [" Chen", " Avi", " Johni", " Ofir"]
};
var Tamir = {
  sex: "male",
  firstName: "Tamir",
  lastName: "Heyman",
  birthday: "15/07/2001",
  birthplace: "Jerusalem",
  height: 185,
  age: 20,
  friends: [" Dan", " lior", " Yuval"]
};
var Mozhgan = {
  sex: "female",
  firstName: "Mozgan",
  lastName: "Heyman",
  birthday: "12/06/1972",
  birthplace: "Abadan",
  height: 165,
  age: 49,
  friends: [" Liora", " Yehudit"]
};
var Romina = {
  sex: "female",
  firstName: "Elizabeth Romina",
  lastName: "Aguilera Meza",
  birthday: "25/04/1995",
  birthplace: "asuncion",
  height: 156,
  age: 26,
  friends: ["Lorry", " Sol", " Nico"]
}; // const David = {
//     sex: 'male',
// firstName 'David',
// lastName: 'Heyman',
// birthday:
// birthplace: 'Rochester',
// height: 186
// age:
// }
// const Ning = {
//     sex: 'female',
// firstName: 'Ning',
// lastName: 'Heyman',
//     birthday:
//     birthplace:
// height:
// age:
// }
// const Benjamin = {
// sex: 'male',
// firstName: 'Benjamin',
// lastName: 'Heyman',
// birthday:
// birthplace:
// height:
// age:
// }

var familyDetails = [Etan, Tamir, Mozhgan, Romina];
/* this gives you the description of the person you'll choose */

function fullDescription(name) {
  if (name.sex == "male") {
    console.log("His name is ".concat(name.firstName, " ").concat(name.lastName, ","));
    console.log("He was born in ".concat(name.birthplace));
    console.log("And his date of birth is ".concat(name.birthday, " and he is ").concat(name.age, " years old"));
  } else if (name.sex == "female") {
    console.log("Her name is ".concat(name.firstName, " ").concat(name.lastName, ","));
    console.log("She was born in ".concat(name.birthplace));
    console.log("And her date of birth is ".concat(name.birthday, " and she is ").concat(name.age, " years old"));
  }
}

console.log(fullDescription(Romina)); // this prints all their names:

function showFamily() {
  for (var i in familyDetails) {
    console.log(familyDetails[i].firstName); // console.log(`${familyDetails[i].firstName} ${familyDetails[i].lastName}'s best friends are ${familyDetails[i].friends}`)
  }
  /* and their friends */


  familyDetails.forEach(function (item) {
    console.log("".concat(item.firstName, " ").concat(item.lastName, "'s best friends are: ").concat(item.friends));
  });
}

showFamily(); // every time the loop goes through, 
//I want it to go inside the family array, choose the next object and display its friends