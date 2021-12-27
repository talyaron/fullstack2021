//id
var contain = document.querySelector('#container');
contain.style.border = '3px solid blue';
// const contain = document.getElementById('container');
// contain.style.border = '3px solid blue';
//.qSelectors
var box1 = document.querySelector('.box');
box1.style.color = 'red';
box1.style.fontSize = '3rem';
var boxes = document.querySelectorAll('.box');
boxes.forEach(function (elm) {
    elm.style.backgroundColor = 'pink';
});
//p style & setTimeout
var pargraph = document.querySelector('p');
pargraph.style.fontWeight = 'bold';
pargraph.style.fontFamily = 'arial, sans-serif';
setTimeout(function () { pargraph.style.transform = 'rotateY(180deg)'; }, 3000);
