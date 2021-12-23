"use strict";

var data = 0;
document.getElementById("root").innerText = data;

function decrement() {
  data = data - 1;
  document.getElementById("root").innerText = data;
}

function increment() {
  data = data + 1;
  document.getElementById("root").innerText = data;
} ///////////////////////////////////////////////////////////////////


var data = 0;
document.getElementById("num").innerText = data;

function decrement2() {
  data = data - 0.1;
  document.getElementById("num").innerText = data;
}

function increment2() {
  data = data + 0.1;
  document.getElementById("num").innerText = data;
}