//variables for input & storage
var textStorage = [];
var theInput = document.querySelector('.form');
var textDemo = document.querySelector('.demoText');
var textEvent = document.querySelectorAll('.input');
textEvent.forEach(function (elem) {
    elem.addEventListener('keyup', function (event) {
        textStorage = event.target.value;
        console.dir(event);
    });
});
// textEvent.addEventListener('keyup', handleText);
theInput.addEventListener('submit', handleInput);
function handleInput(ev) {
    console.dir(ev);
    textDemo.innerHTML = textStorage;
}
