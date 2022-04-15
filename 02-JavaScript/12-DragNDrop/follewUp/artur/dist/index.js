var willy = document.querySelector("#willy");
var box = document.querySelector("#box");
var pool = document.querySelector("#pool");
willy.ondragstart = handlDragStart;
willy.ondragend = handleDragEnd;
box.ondragstart = handlDragStart;
box.ondragend = handleDragEnd;
pool.ondrop = handelDrop;
pool.ondragover = handelDragOver;
pool.ondragenter = handleDragEnter;
pool.ondragleave = handleDrageLeave;
var dragData = { offsetX: 0, offsetY: 0 };
function handlDragStart(ev) {
    ev.dataTransfer.dropEffect = "move";
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
function handleDragEnd(ev) {
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handelDrop(ev) {
    console.log(ev.type);
}
function handelDragOver(ev) {
    console.log(ev.type);
    ev.target.style.transform = 'scale(1.3)';
}
function handleDragEnter(ev) {
    ev.target.style.transform = 'scale(1.3)';
}
function handleDrageLeave(ev) {
    ev.target.style.transform = 'scale(1)';
}
