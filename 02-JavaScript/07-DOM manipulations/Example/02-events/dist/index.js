//for only one button
var theFirstButton = document.getElementById('theFirstButton');
theFirstButton.addEventListener('click', runButton1);
theFirstButton.addEventListener('mouseenter', runMouseEnter);
theFirstButton.addEventListener('mouseout', runMouseOut);
theFirstButton.addEventListener('dblclick', function () {
    console.log('I was double clicked');
});
function runButton1() {
    console.log('clicked!!!!');
}
function runMouseEnter() {
    console.log('Mouse enterd');
}
function runMouseOut() {
    console.log('Mouse out');
}
function handleRoll() {
    console.log('the wheel rolled');
}
//for many
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
    button.addEventListener('mouseenter', handleMouseEnter);
});
function handleClick(ev) {
    console.dir(ev);
    var id = ev.target.id;
    console.log("I was clicked by button with id " + id);
}
function handleMouseEnter(ev) {
    console.log(ev);
}
