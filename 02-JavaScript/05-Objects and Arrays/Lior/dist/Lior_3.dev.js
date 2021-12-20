"use strict";

//Q1//
var Lior = {
  age: 28,
  Name: 'Lior',
  Proffestion: "Material engineer + Data analyst",
  DirthOfDate: '21/12/1992',
  Number_of_friends: 6
};
var Ilan = {
  age: 28,
  Name: 'Ilan',
  Proffestion: "Data analyst",
  DirthOfDate: '21/12/1992',
  Number_of_friends: 3
};
var Victoria = {
  age: 55,
  Name: 'Victoria',
  Proffestion: "Civil Engineer",
  DirthOfDate: '20/09/1965',
  Number_of_friends: 2
}; //Q2

array = [Lior.Name, Victoria.Name, Ilan.Name]; //Q3

for (i = 0; i < array.length; i++) {
  console.log(array[i]);
} //Q4


Lior2Friends = ["Barak", "Yefet", "Igor", "Eyal", "Or", "Shimon"];
IlanFriends = ["Simon", "Yefet", "Igor"];
VictoriaFriends = ["Natasha", "Yulia"];
all_friends = ["Barak", "Yefet", "Igor", "Eyal", "Or", "Shimon", "Simon", "Yefet", "Igor", "Natasha", "Yulia"]; //Q5 - I don't undetand why it's not running properly.

for (i = 0; i < array.length; i++) {
  for (j = 0; j < array[i].Number_of_friends; j++) {
    console.log("".concat(array[i].Name, " has the following \n            \n            freinds: ").concat(all_friends[j], ","));
  }
} //Q6


function family(Yage, YName, YProffestion, YDirthOfDate, YNumber_of_friends) {
  YName = {
    age: Yage,
    Name: "".concat(YName),
    Proffestion: "".concat(YProffestion),
    DirthOfDate: "".concat(YDirthOfDate),
    Number_of_friends: YNumber_of_friends
  };
  return YName;
}