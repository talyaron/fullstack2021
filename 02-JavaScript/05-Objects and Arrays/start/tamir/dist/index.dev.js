"use strict";

var shoval = {
  name: 'shoval',
  lastName: 'dadon',
  age: 30,
  friends: ['mai', 'rot']
};
var aviel = {
  name: "aviel",
  lastName: 'dadon',
  age: 25,
  friends: ['avner', 'nisim']
};
var tamir = {
  name: "tamir",
  lastName: 'dadon',
  age: 24,
  friends: ['avi', 'nir']
};
var tair = {
  name: "tair",
  lastName: 'dadon',
  age: 26,
  friends: ['yael', 'carlos']
};
var family = [shoval, aviel, tamir, tair];

for (var info in family) {
  console.log(family[info]);
}

function tallmeabouthim(family) {
  if (family) {
    console.log("".concat(family.name, " ").concat(family.lastName, " ").concat(family.age, " and my friends are ").concat(family.friends));
  }
}

;
tallmeabouthim(aviel);