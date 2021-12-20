"use strict";

var naama = {
  name: 'naama',
  lastName: 'foyer',
  isMy: 'mom',
  age: 51,
  occuption: 'teacher'
};
var tzvika = {
  name: 'tzvika',
  lastName: 'foyer',
  isMy: 'dad',
  age: 52,
  occuption: 'dba at intel'
};
var yedidia = {
  name: 'yedidya',
  lastName: 'foyer',
  isMy: 'brother',
  age: 26,
  occuption: 'student and working at an organiztion'
};
var orelRoni = {
  name: 'orel roni',
  lastName: 'foyer',
  isMy: 'sister in law',
  age: 23,
  occuption: 'student'
};
var maayan = {
  name: 'maayan',
  lastName: 'foyer',
  isMy: 'sister',
  occuption: 'student and interior design'
};
var shlomo = {
  name: 'shlomo',
  lastName: 'foyer',
  isMy: 'brother',
  age: 19,
  occuption: 'student'
};
var yonatan = {
  name: 'yonatan',
  lastName: 'foyer',
  isMy: 'brother',
  age: 16,
  occuption: 'student'
};
var roee = {
  name: 'roee',
  lastName: 'foyer',
  isMy: 'brother',
  age: 8,
  occuption: 'student'
};
var family = [naama, tzvika, yedidia, orelRoni, maayan, shlomo, yonatan, roee];

for (var i = 0; i < family.length; i++) {
  console.log(family[i].name);
}

naama.friends = ['sarah', ' sarah', ' sarah', ' or'];
tzvika.friends = ['yossi', ' nadav', ' eli', ' shlomi'];
yedidia.friends = ['maor', ' maor', ' ariel', ' avinoam'];
orelRoni.friends = ['esthar', ' miriam', ' netta', ' hadassah'];
maayan.friends = ['shirel', ' naama', ' tal', ' batzi'];
shlomo.friends = ['ori', ' matan', ' yosef', ' yedidia'];
yonatan.friends = ['ofek', ' misgav', ' danielle', ' yehuda'];
roee.friends = ['itzhak', ' maoz', ' dvir', ' yehuda'];

for (var _i = 0; _i < family.length; _i++) {
  console.log(family[_i].name + ' friends are ' + family[_i].friends);
}

function myFamily(myFamilyMember) {
  myFamilyMember = {
    mame: '$[]',
    lastName: '$[]',
    isMy: '$[]',
    age: '$[]',
    occuption: '$[]',
    friends: '$[]'
  };
  return myFamilyMember;
}