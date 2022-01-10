"use strict";

console.log("tamir");
console.dir(window);
console.dir(document);
console.dir(navigator);
var one = document.getElementById('one');
one.style.fontSize = '6rem';
one.innerText = 'text something!';
one.style.color = "red";
var theInput = document.getElementById('theInput');
theInput.addEventListener('keyup', handleInput);

function handleInput(ev) {
  console.dir(ev);
  var text = ev.target.value;
  one.innerText = text;
}