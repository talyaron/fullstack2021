const up = document.getElementById('up');
const down = document.getElementById('down');
const left = document.getElementById('left');
const right = document.getElementById('right');
const soldier = document.getElementById('soldier');

up.addEventListener('mouseup', pushUp);
// down.addEventListener('mouseup', pushDown);
// left.addEventListener('mouseup', pushLeft);
// right.addEventListener('mouseup', pushRight);


function pushUp(ev){
    console.dir(ev)
    console.dir(soldier)
soldier.X += 20;

}
