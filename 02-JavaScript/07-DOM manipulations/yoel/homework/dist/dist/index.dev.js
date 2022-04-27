"use strict";

var numOne = document.getElementById('numOne');
var numTwo = document.getElementById('numTwo');
var numThree = document.getElementById('numThree');
var body = document.getSelection;
var sentence = document.getElementById('sentence');
numOne.addEventListener('mouseenter', function () {
  sentence.innerText = "1";
});
numTwo.addEventListener('mouseenter', function () {
  sentence.innerText = "2";
});
numThree.addEventListener('mouseenter', function () {
  sentence.innerText = "3";
}); // numOne.addEventListener('mouseenter')
// numOne.addEventListener('mouseenter')