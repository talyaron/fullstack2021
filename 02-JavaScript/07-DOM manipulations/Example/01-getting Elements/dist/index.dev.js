"use strict";

//by id
var target = document.getElementById('theTarget');
console.dir(target);
target.style.color = 'blue';
target.style.background = 'yellow';
target.style.fontSize = '2rem';
var boxes = document.querySelectorAll('.box');
console.dir(boxes);
boxes.forEach(function (elm) {
  console.dir(elm);
  elm.style.color = 'red';
});
var theParagraph = document.querySelector('#theParagraph');
theParagraph.style.transform = 'rotate(230deg)';
theParagraph.style.width = 'fit-content';