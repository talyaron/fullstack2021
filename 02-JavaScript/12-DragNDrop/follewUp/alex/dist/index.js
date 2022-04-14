var willy = document.querySelector("#willy");
var box = document.querySelector("#box");
var pool = document.querySelector("#pool");
willy.ondragstart = handleDragStart;
willy.ondragend = handleDragEnd;
box.ondragstart = handleDragStart;
box.ondragend = handleDragEnd;
pool.ondrop = handleDrop;
pool.ondragover = handleDragOver;
var dragData = { offsetX: 0, offsetY: 0 };
function handleDragStart(ev) {
    dragData.offsetX = ev.offsetX;
    dragData.offsetY = ev.offsetY;
}
function handleDragEnd(ev) {
    var target = ev.target;
    target.style.top = ev.y - dragData.offsetY + "px";
    target.style.left = ev.x - dragData.offsetX + "px";
}
function handleDrop(ev) {
    console.log(ev);
}
function handleDragOver(ev) {
    console.log(ev);
}
