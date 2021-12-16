"use strict";

//Think of your own function. The function should calculate something that interests you
//A function that calculate a bikes gearing max and min ratio.
function gearCalc(largetCog, smallestCog, chainring) {
  var r = [];
  r[0] = chainring / smallestCog;
  r[1] = chainring / largetCog;
  return r;
}

var l = window.prompt("please enter the number of teeth on the largest cog on your casset:") * 1;
var s = window.prompt("please enter the number of teeth on the smallest cog on your casset:") * 1;
var c = window.prompt("please enter the number of teeth on your chainring:") * 1;
var ratio = gearCalc(l, s, c);
alert("your max ration is: " + ratio[0] + " and your min ration is: " + ratio[1]);