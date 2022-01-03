var btn1 = document.querySelector('#first');
var btn2 = document.querySelector('#second');
var btn3 = document.querySelector('#third');
var field = document.querySelector('h1');
var btns = document.querySelectorAll('.btn');
btn1.addEventListener('click', hello);
function hello() {
    field.textContent = 'Hello!';
}
field.addEventListener('click', function () {
    field.textContent = 'Change me!';
});
function goodBye() {
    field.textContent = 'Good Bye!';
}
function how() {
    field.textContent = 'how\'s it going?';
}
btns.forEach(function (button) { button.style.color = 'red'; });
