var circle1 = document.getElementById('circle');
console.dir(circle1);
circle1.style.borderRadius = '50%';
circle1.style.backgroundColor = 'red';
circle1.style.width = '50px';
circle1.style.height = '50px';
var plus = document.getElementById('text');
plus.style.padding = '37%';
var box = document.querySelectorAll('.box');
box.forEach(function (elm) {
    elm.style.width = '50px';
    elm.style.height = '30px';
    elm.style.border = 'thick solid green';
});
