"use strict";

var dad = {
  name: 'yossi',
  age: 64,
  job: 'carpenter',
  food: 'pasta',
  animal: 'cat',
  friends: ['noam ', 'leo ', 'yacov']
};
var mom = {
  name: 'yael',
  age: 62,
  job: 'teacher',
  food: 'pizza',
  animal: 'dog',
  friends: ['barb ', 'bill ', 'noa']
};
var child = {
  name: 'yaniv',
  age: 32,
  job: 'teacher',
  food: 'pizza',
  animal: 'rat',
  friends: ['shem ', 'lilli ', 'orna']
}; // const family = [dad,mom,child];
// for (let i=2; i>=0; i-- ){
//     console.log(family[i].name +' '+'has the following friends: '+family[i].friends+'.'); 
// ֿֿ}

function familyMembers(person) {
  console.log(person.name + ' ' + 'has the following friends: ' + person.friends + '.');
}

familyMembers(dad);
familyMembers(mom);
familyMembers(child); // let i=1;
// let sum;
// if (i>=0 ){
//  sum=i-1;
//  console.log(family[sum].name); 
// }