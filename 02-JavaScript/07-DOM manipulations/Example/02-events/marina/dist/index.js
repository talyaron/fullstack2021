var theFirstButton = document.getElementById('theFirstButton');
theFirstButton.addEventListener('click', runFn1);
function runFn1() {
    console.log('Im clicked');
}
var theSecondtButton = document.getElementById('theSecondtButton');
theSecondtButton.addEventListener('dblclick', function () { return console.log('I was clicked twise'); });
function handleEnter() {
    console.log('mouse on');
}
