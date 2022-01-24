"use strict";

//1) create objects which describe your family (an object for each family member).
var andrew = {
  name: "Andrew",
  lastName: "Lishafay",
  age: 26
};
var andrey = {
  name: "Andrey",
  lastName: "Lishafay",
  age: 52
};
var margarita = {
  name: "Margarita",
  lastName: "Shilo",
  age: 52
};
var adam = {
  name: "Adam",
  lastName: "Lishafay",
  age: 13
}; //2) add the objects to an array called family (array which contains objects)

var family = [andrew, adam, andrey, margarita]; //3) loop through the array, and print the name of each member.

for (var i = 0; i < family.length; i++) {
  alert(family[i].name);
} //4) add to each object of members in your family, the list of his friends (array under the object)


andrew.friends = ["Guy", "Shirel", "Tomer", "Moshe"];
andrey.friends = ["Yevgeni", "Yuri", "Sharon", "Tal"];
margarita.friends = ["Rotem", "Edna", "Shiruklahat", "Eli"];
adam.friends = ["Dror", "Tamir", "Gir", "Hamorabi"]; //5) with a loop, print again the names of the family members, and all their friends. (for instance, "Mosh, had the following friends: David, Boaz, and Ruth")

var names = "";

for (var _i = 0; _i < family.length; _i++) {
  for (var j = 0; j < family[_i].friends.length; j++) {
    names = names + " " + family[_i].friends[j];
  }

  alert("".concat(family[_i].name, " has the following friends: ").concat(names));
  names = "";
} //6) set the previous parts into a function, so later, you can enter more families.


function tellFriends(person) {
  for (var _j = 0; _j < person.friends.length; _j++) {
    names = names + " " + person.friends[_j];
  }

  alert("".concat(person.name, " has the following friends: ").concat(names));
}