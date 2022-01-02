// by Id Element
var title = document.getElementById('theTitle');
console.log(title);
title.style.color = '#b33939';
title.style.textAlign = 'center';
title.style.fontSize = '5em';
// By Class Element
var wrapper = document.querySelector('.theWrapper');
console.dir(wrapper);
wrapper.style.display = 'flex';
wrapper.style.width = '80%';
wrapper.style.height = '35vh';
wrapper.style.marginLeft = 'auto';
wrapper.style.marginRight = 'auto';
wrapper.style.borderRadius = '20px';
wrapper.style.gap = '3em';
wrapper.style.justifyContent = 'space-evenly';
wrapper.style.alignItems = 'center';
wrapper.style.border = '1px solid grey';
wrapper.style.background = 'coral';
var boxes = document.querySelectorAll('.box');
console.dir(boxes);
boxes.forEach(function (element) {
    console.dir(element);
    element.style.border = '1px solid grey';
    element.style.width = '20%';
    element.style.height = '90%';
    element.style.borderRadius = '20px';
    element.style.textAlign = 'center';
    element.style.fontSize = '2em';
});
var boxOne = document.querySelector('.one');
console.dir(boxOne);
boxOne.style.background = '#33d9b2';
boxOne.style.color = 'red';
setTimeout(function div1() { boxOne.style.background = 'white'; }, 1000);
setTimeout(function div1() { boxOne.style.background = '#33d9b2'; }, 2000);
var boxTwo = document.querySelector('.two');
console.dir(boxTwo);
boxTwo.style.background = '#34ace0';
setTimeout(function div2() { boxTwo.style.background = 'white'; }, 2000);
setTimeout(function div2() { boxTwo.style.background = '#34ace0'; }, 3000);
var boxThree = document.querySelector('.three');
console.dir(boxThree);
boxThree.style.background = '#aaa69d';
setTimeout(function div3() { boxThree.style.background = 'white'; }, 3000);
setTimeout(function div3() { boxThree.style.background = '#aaa69d'; }, 4000);
var boxFour = document.querySelector('.four');
console.dir(boxFour);
boxFour.style.background = '#82589F';
boxFour.style.color = 'white';
setTimeout(function div4() { boxFour.style.background = 'white'; boxFour.style.color = 'black'; }, 4000);
setTimeout(function div4() { boxFour.style.background = '#82589F'; boxFour.style.color = 'white'; }, 5000);
var GoodbyText = document.querySelector('p');
GoodbyText.style.textAlign = 'center';
GoodbyText.style.fontSize = '2em';
GoodbyText.style.color = '#3c6382';
// setTimeout
setTimeout(function background() { document.body.style.backgroundColor = "#ced6e0"; }, 3000);
setTimeout(function background() { document.body.style.backgroundColor = '#7bed9f'; }, 6000);
setTimeout(function goodbytext() { GoodbyText.style.color = 'black'; GoodbyText.style.fontSize = '4em'; }, 8000);
var timeOUT = setTimeout(goodby, 4000);
function goodby() {
    document.querySelector('p').innerHTML = 'See You Tonight';
    GoodbyText.style.color = '#eb2f06';
    GoodbyText.style.fontSize = '3em';
}
var tonight = setTimeout(Goodby, 6000);
function Goodby() {
    document.querySelector('p').innerHTML = 'Come Back After Tomorrow';
}
