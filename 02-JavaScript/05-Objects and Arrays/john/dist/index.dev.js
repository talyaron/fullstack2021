"use strict";

var john = {
  firstname: "john",
  age: 23,
  sex: "male",
  city: "raanana",
  loveDogs: true
};
var prissou = {
  firstname: "priscilia",
  age: 23,
  sex: "female",
  city: "raanana",
  loveDogs: true
};
var papa = {
  firstname: "dan",
  age: 52,
  sex: "male",
  city: "netanya",
  loveDogs: false
};
var maman = {
  firstname: "laetitia",
  age: 45,
  sex: "female",
  city: "netanya",
  loveDogs: true
};
var chloe = {
  firstname: "chloe",
  age: 18,
  sex: "female",
  city: "netanya",
  loveDogs: true
};
var family = [john, prissou, maman, papa, chloe];

for (var i = 0; i < family.length; i++) {
  alert(family[i].firstname);
}

john.friends = ["david", "beri", "roey", "osher"];
prissou.friends = ["fanny", "elsa", "lara", "fiona"];
papa.friends = ["ygal", "richard", "charlie"];
maman.friends = ["stefan", "yonni", "elie", "karen"];
chloe.friends = ["linoy", "sarah", "lorna"];
var firstName = "";

for (var _i = 0; _i < family.length; _i++) {
  for (var j = 0; j < family[_i].friends.length; j++) {
    firstName = firstName + " " + family[_i].friends[j];
  }

  alert("".concat(family[_i].firstname, " has the following friends: ").concat(firstName));
  firstName = "";
}