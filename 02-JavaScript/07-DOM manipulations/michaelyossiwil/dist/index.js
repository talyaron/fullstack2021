var up = document.getElementById('up');
var down = document.getElementById('down');
var left = document.getElementById('left');
var right = document.getElementById('right');
var soldier = document.getElementById('soldier');
up.addEventListener('mouseup', pushUp);
// down.addEventListener('mouseup', pushDown);
// left.addEventListener('mouseup', pushLeft);
// right.addEventListener('mouseup', pushRight);
function pushUp(ev) {
    console.dir(ev);
    console.dir(soldier);
    soldier.X += 20;
}
