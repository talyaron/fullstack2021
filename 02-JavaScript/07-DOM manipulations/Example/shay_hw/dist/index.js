//id element
var target = document.querySelector('#theTarget');
console.dir(target);
target.style.backgroundColor = 'gold';
target.style.color = 'turquoise';
target.style.fontSize = '5rem';
target.style.textAlign = 'center';
//class element
var boxes = document.querySelectorAll('.boxFirst');
console.dir(boxes);
boxes.forEach(function (elm) {
    console.dir(elm);
    elm.style.margin = ' 10px';
    elm.style.borderRadius = '5px';
    elm.style.background = 'purple';
    elm.style.textAlign = 'center';
    elm.style.color = 'turquoise';
    elm.style.fontSize = '5rem';
});
var boxeSec = document.querySelectorAll('.boxSecond');
console.dir(boxeSec);
boxeSec.forEach(function (secElem) {
    console.dir(secElem);
    secElem.style.fontSize = '20rem';
    secElem.style.background = 'blue';
    secElem.style.textAlign = 'center';
    secElem.style.color = 'turquoise';
    secElem.style.borderRadius = '5px';
    secElem.style.animation = 'color 5s 2';
});
//element with animation
var colorChange = document.querySelector('p');
colorChange.style.fontSize = '5rem';
colorChange.style.fontFamily = 'arial, sans-serif';
colorChange.style.color = 'turquoise';
colorChange.style.background = 'purple';
colorChange.style.textAlign = 'center';
colorChange.style.borderRadius = '15px';
setTimeout(function () { colorChange.style.color = 'purple'; }, 3000);
setTimeout(function () { colorChange.style.background = 'turquoise'; }, 3000);
