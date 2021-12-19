"use strict";

var tanya = {
  name: "tanya",
  lname: "balukh",
  age: 54,
  duty: "mom",
  friends: ["simcha", "anat", "aviva", "moses"]
};
var eva = {
  name: "eva",
  lname: "balukh",
  age: 16,
  duty: "sister",
  friends: ["dana", "dolev", "alex", "george"]
};
var pasha = {
  name: 'pasha',
  lname: 'dubovyk',
  age: 35,
  duty: "brother",
  friends: ["shlomi", "saly", "yan", "kosta"]
};
var anatoliy = {
  name: "anatoliy",
  lname: "dubovyk",
  age: 54,
  duty: "father",
  friends: ["nina", "david", "shlomi", "joseph"]
};
var nadya = {
  name: "nadya",
  lname: "titarenko",
  age: 78,
  duty: "grandmom",
  friends: ["andrey", "tima", "rinat", "nicole"]
};
var vasily = {
  name: "vasily",
  lname: "titarenko",
  age: 79,
  duty: "grandad",
  friends: ["andrey", "tima", "yossi", "kevin"]
};
var family = [tanya, eva, pasha, anatoliy, nadya, vasily];

function familyfriends(family) {
  for (var i in family) {
    console.log("".concat(family[i].name, " has the following friends: ").concat(family[i].friends));
  }
}