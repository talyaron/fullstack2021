var right = document.getElementById('right');
var left = document.getElementById('lrft');
var up = document.getElementById('up');
var bottom = document.getElementById('bottom');
var emoji = document.getElementById('emoji');
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
    button.addEventListener('click', handleClick);
});
function handleClick(ev) {
    console.dir(ev);
    var id = ev.target.id;
    console.log("I was clicked by button with id " + id);
    if (id == 'left')
        emoji.style.left = "200px";
    else if (id == 'right')
        emoji.style.right = "200px";
    else if (id == 'up')
        emoji.style.top = "200px";
    else if (id == 'bottom')
        emoji.style.bottom = "200px";
}
/*
function handleMouseEnter(ev){
    console.log(ev)
}*/ 
