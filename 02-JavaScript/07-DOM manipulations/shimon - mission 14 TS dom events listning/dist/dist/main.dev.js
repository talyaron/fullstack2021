"use strict";

var spiderman = document.getElementById('spider-man');
var xman = document.getElementById('x-men');
var batman = document.getElementById('batman');
var captain = document.getElementById('captain america');
var hulk = document.getElementById('hulk');
var text = document.getElementById("text");
spiderman.addEventListener('mouseenter', function () {
  text.innerHTML = 'spider-man';
});
xman.addEventListener('mouseenter', function () {
  text.innerHTML = 'x-men';
});
batman.addEventListener('mouseenter', function () {
  text.innerHTML = 'batman';
});
captain.addEventListener('mouseenter', function () {
  text.innerHTML = 'captain america';
});
hulk.addEventListener('mouseenter', function () {
  text.innerHTML = 'hulk';
});