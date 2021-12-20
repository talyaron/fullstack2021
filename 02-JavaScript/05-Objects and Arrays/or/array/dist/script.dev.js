"use strict";

// 01 object
var livnat = {
  name: 'Livnat',
  lastName: 'Avramashvili',
  age: 22,
  connection: 'wife',
  friends: ['Avigail', 'Reshit']
};
var dad = {
  name: 'Shmuel',
  lastName: 'Avramashvili',
  age: 55,
  connection: 'dad',
  friends: ['Poli', 'Doron']
};
var mom = {
  name: 'Mazi',
  lastName: 'Avramashvili',
  age: 50,
  connection: 'mom',
  friends: ['Ayelet', 'Shoshi']
};
var efi = {
  name: 'Efi',
  lastName: 'Avramashvili',
  age: 30,
  connection: 'big brother',
  friends: ['Doron', 'Dan']
};
var inon = {
  name: 'Inon',
  lastName: 'Avramashvili',
  age: 28,
  connection: 'second brother',
  friends: ['Gantz', 'Yaakobi']
};
var refael = {
  name: 'Refael',
  lastName: 'Avramashvili',
  age: 24,
  connection: 'third brother',
  friends: ['Malachi', 'Matan']
}; // second family

var nirit = {
  name: 'Nirit',
  lastName: 'Petel',
  age: 34,
  connection: 'sister in law',
  friends: ['Sarah', 'Eden']
};
var yosef = {
  name: 'Yosef',
  lastName: 'Petel',
  age: 24,
  connection: 'brother in law',
  friends: ['Elia', 'Matan']
}; // 02/03 array

var Orsfamily = [livnat, dad, mom, efi, inon, refael];
var livnatsFamily = [nirit, yosef];

function familyGroup(family) {
  for (var i in family) {
    console.log(family[i].name);
  } // 05


  for (var _i in family) {
    console.log("Those are ".concat(family[_i].name, " ").concat(family[_i].lastName, "'s friends: ").concat(family[_i].friends));
  }
}

familyGroup(Orsfamily);
familyGroup(livnatsFamily);