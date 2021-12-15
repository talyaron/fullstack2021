"use strict";

var counter = 0;
var resultHTML = document.getElementById('theResult');

function addOne() {
  counter++;
  resultHTML.innerText = counter;
}

function changeColor(ev) {
  document.body.style.background = ev.target.value;
}