var buttons = document.querySelectorAll('.buttons');
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
    button.addEventListener('mouseenter', handleMouseEnter);
});
var move = document.getElementById('moves');
function handleClick(ev) {
    var id = ev.target.id;
    if (id == "left") {
        move.style.transform = 'translateX(10px)';
    }
    console.dir(ev);
    console.log("I was clicked by button with id " + id);
}
function handleMouseEnter(ev) {
    console.log(ev);
}
