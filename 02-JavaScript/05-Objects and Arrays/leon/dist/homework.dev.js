"use strict";

var leon = {
  name: "leon",
  lastName: "malul",
  age: 28,
  city: "ashdod"
};
var dad = {
  name: "yehiel",
  lastName: "malul",
  age: 58,
  city: "ashdod"
};
var mom = {
  name: "alis",
  lastName: "malul",
  age: 54,
  city: "ashdod"
};
var brother = {
  name: "shlomi",
  lastName: "malul",
  age: 25,
  city: "ashdod"
};
var myfamily = [leon, dad, mom, brother];
{
  for (var i = 0; i < myfamily.length; i++) {
    console.log(myfamily[i].name);
  }
}
leon.friends = ['moshiko', 'avi', 'shahar'];
dad.friends = ['joe', 'dan', 'avi'];
mom.friends = ['lin', 'jin', 'dalia'];
brother.friends = ['joe', 'moshe', 'din'];
var member = 0;

for (var _i = 0; _i < myfamily.length; _i++) {
  console.log(myfamily[_i].name + ' friends are ' + myfamily[_i].friends);
}

function myFamily(myFamilyMember) {
  myFamilyMember = {
    name: '$[]',
    lastName: '$[]',
    age: '$[]',
    city: '$[]'
  };
  return console.log(myFamilyMember);
}